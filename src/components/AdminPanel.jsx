import { useState, useEffect } from "react";
import "./styles/AdminPanel.css";
import TeamAdmin from "./TeamAdmin";

function AdminPanel() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("teamData"))
  );
  const [runLine, setRunLine] = useState(false);
  const [textRunLine, setTextRunLine] = useState(
    JSON.parse(localStorage.getItem("runLine"))
  );
  const [ChangetextRunLine, setChangetextRunLine] = useState(
    textRunLine[0].text
  );
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollAmount, setScrollAmount] = useState(textRunLine[0].speed);

  console.log(ChangetextRunLine);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const ChangePoints = (teamId, point) => {
    const newData = data.map((e) => (e.id === teamId ? { ...e, point } : e));
    setData(newData);

    localStorage.removeItem("teamData");
    localStorage.setItem("teamData", JSON.stringify(newData));
  };

  const ChangeAvatar = (teamId, image) => {
    const newData = data.map((e) => (e.id === teamId ? { ...e, image } : e));
    setData(newData);

    localStorage.removeItem("teamData");
    localStorage.setItem("teamData", JSON.stringify(newData));
  };

  const DeleteTeam = (teamId) => {
    const newData = data.filter((e) => e.id !== teamId);
    setData(newData);

    localStorage.removeItem("teamData");
    localStorage.setItem("teamData", JSON.stringify(newData));
  };

  const handleAddTeam = () => {
    const teamData = JSON.parse(localStorage.getItem("teamData")) || [];
    const newTeam = {
      id: teamData.length + 1,
      name: inputValue,
      point: 0,
      image: "",
    };
    teamData.push(newTeam);
    setData(teamData);
    setInputValue("");
    localStorage.removeItem("teamData");
    localStorage.setItem("teamData", JSON.stringify(teamData));
  };

  const handleInputChangeRunLine = (event) => {
    setChangetextRunLine(event.target.value);
  };

  const handleKeyPress = (event, inputId) => {
    if (event.key === "Enter") {
      if (inputId === "addTeam") {
        handleAddTeam();
      }
    }
  };

  const handleChangeRunLine = () => {
    setRunLine(true);
    console.log(ChangetextRunLine);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTeams =
    data &&
    data.filter((data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleCancelRunLine = () => {
    setRunLine(false);
  };

  const handleConfirmRunLine = () => {
    const newRunLine = {
      text: ChangetextRunLine,
      speed: scrollAmount,
    };
    const runLineData = [newRunLine];

    setRunLine(false);
    setTextRunLine(runLineData);
    localStorage.removeItem("runLine");
    localStorage.setItem("runLine", JSON.stringify(runLineData));
  };

  const handleSpeedChange = () => {
    setScrollAmount(event.target.value);
  };

  return (
    <div className="fullscreen">
      <div className="logoContainer">
        <img className="cyberpoligonLogo" src="/images/киберполигон.png" />
        <input
          className="inputContainerTeam"
          placeholder="название новой команды"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={(event) => handleKeyPress(event, "addTeam")}
        />
        <button className="addTeam" onClick={handleAddTeam}>
          добавить команду
        </button>
        <div className="line" />
        <div className="IninputContainerSearhTeamAndLogo">
          <img src="/images/поиск.svg" className="Searchteam" />
          <input
            className="inputContainerSearhTeam"
            placeholder="Поиск команд"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="Container">
        <p className="TeamTitle">СПИСОК КОМАНД</p>
        <button className="runLineAdmin" onClick={handleChangeRunLine}>
          редактировать бегущую строку
        </button>
      </div>
      {runLine && (
        <div className="confirmationOverlay">
          <div className="confirmationUpRunLine">Редактор</div>
          <div className="confirmationRunDialog">
            <div className="runLineTextAdminConteiner">
              <marquee id="runLineTextAdmin" scrollamount={scrollAmount}>
                {ChangetextRunLine}
              </marquee>
            </div>
            <p className="sped">скорость</p>
            <select
              className="Speed"
              value={scrollAmount}
              onChange={handleSpeedChange}
            >
              <option value="10">1x</option>
              <option value="20">2x</option>
              <option value="30">3x</option>
            </select>
            <input
              className="inpitRunLine"
              type="text"
              value={ChangetextRunLine}
              onChange={handleInputChangeRunLine}
            />

            <div className="ButtonRun">
              <button className="ConfirmRunSave" onClick={handleConfirmRunLine}>
                Сохранить изменения
              </button>
              <button className="CancelRun" onClick={handleCancelRunLine}>
                Назад
              </button>
            </div>
          </div>
        </div>
      )}
      {filteredTeams &&
        filteredTeams.length > 0 &&
        filteredTeams
          .sort((a, b) => b.point - a.point)
          .map((e, id) => (
            <TeamAdmin
              id={e.id}
              pozition={id + 1}
              name={e.name}
              point={e.point}
              ChangePoints={ChangePoints}
              DeleteTeam={DeleteTeam}
              ChangeAvatar={ChangeAvatar}
              images={e.image}
            />
          ))}
    </div>
  );
}
export default AdminPanel;
