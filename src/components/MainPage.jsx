import { useState, useEffect } from "react";
import "./styles/MainPage.css";
import PositionTeam from "./PositionTeam";

function MainPage() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("teamData"))
  );
  const [textRunLine, setTextRunLine] = useState(
    JSON.parse(localStorage.getItem("runLine"))
  );

  const filteredData = data.filter((team) => team.point > 0);

  const leader =
    filteredData.length > 0
      ? filteredData.sort((a, b) => b.point - a.point).slice(0, 3)
      : [];

  useEffect(() => {
    setInterval(() => {
      setData(JSON.parse(localStorage.getItem("teamData")));
      setTextRunLine(JSON.parse(localStorage.getItem("runLine")));
    }, 500);
  }, []);

  return (
    <>
      <div className="runLine">
        {textRunLine && (
          <marquee id="textRunLine" scrollamount={textRunLine[0].speed}>
            {textRunLine[0].text}
          </marquee>
        )}
      </div>
      <div className="logo">
        <img className="sibLogo" src="/images/сиб лого.png" />
        <div className="rectangle">
          <div className="smallRectangle">ЛИДЕРЫ</div>
          <div className="leaders">
            {leader.length > 2 && (
              <div className="leader">
                <div className="circle" style={{ backgroundColor: "#B0B7BA" }}>
                  3
                </div>
                <div
                  className="informLeaders leader3"
                  style={{ backgroundColor: "#95999A" }}
                >
                  <div
                    className="informLeadersInside"
                    style={{ backgroundColor: "#B0B7BA" }}
                  >
                    <div className="leadersInsidelogoContainer">
                      <img
                        src={leader[2].image ? `Server/${leader[2].image}` : "/images/avatar.jpg"} 
                        className="leadersInsidelogo"
                      />
                    </div>
                    <div className="leadersInsideName">{leader[2].name}</div>
                    <div className="leadersInsidePoint">
                      {`${leader[2].point} баллов`}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {leader.length > 0 && (
              <div className="leader">
                <div className="circle" style={{ backgroundColor: "#FBD300" }}>
                  1
                </div>
                <div
                  className="informLeaders leader1"
                  style={{ backgroundColor: "#BB9F0A" }}
                >
                  <div
                    className="informLeadersInside"
                    style={{ backgroundColor: "#FBD300" }}
                  >
                    <div className="leadersInsidelogoContainer">
                      <img
                        src={leader[0].image ? `Server/${leader[0].image}` : "/images/avatar.jpg"} 
                        className="leadersInsidelogo"
                      />
                    </div>
                    <div className="leadersInsideName1">{leader[0].name}</div>
                    <div className="leadersInsidePoint1">
                      {`${leader[0].point} баллов`}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {leader.length > 1 && (
              <div className="leader">
                <div className="circle" style={{ backgroundColor: "#D37B14" }}>
                  2
                </div>
                <div
                  className="informLeaders leader2"
                  style={{ backgroundColor: "#A9610D" }}
                >
                  <div
                    className="informLeadersInside"
                    style={{ backgroundColor: "#D37B14" }}
                  >
                    <div className="leadersInsidelogoContainer">
                      <img
                        src={leader[1].image ? `Server/${leader[1].image}` : "/images/avatar.jpg"} 
                        className="leadersInsidelogo"
                      />
                    </div>
                    <div className="leadersInsideName">{leader[1].name}</div>
                    <div className="leadersInsidePoint">
                      {`${leader[1].point} баллов`}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <img className="nstuLogo" src="/images/нгту лого.png" />
      </div>
      <div className="containerTeam">
      {data && data.length > 0 && (() => {
        // Фильтруем команды, которые имеют очки больше 0
        const teamsWithPoints = data.filter(team => team.point > 0);
        
        // Если есть хотя бы одна команда с очками, возвращаем нужное количество команд
        if (teamsWithPoints.length > 0) {
            // Ограничиваем slice количеством команд с очками, если их больше 3
            const numTeamsToShow = Math.min(teamsWithPoints.length, 3);
            const slicedTeams = data.sort((a, b) => a.point - b.point).reverse().slice(numTeamsToShow);
            return slicedTeams.map((team, id) => (
                <PositionTeam
                    id={team.id}
                    pozition={teamsWithPoints.length === 0 ? id + 1 : id + numTeamsToShow + 1}
                    name={team.name}
                    point={team.point}
                    img={team.image}
                />
            ));
        } else {
            return data.map((team, id) => (
                <PositionTeam
                    id={team.id}
                    pozition={teamsWithPoints.length === 0 ? id + 1 : id + numTeamsToShow}
                    name={team.name}
                    point={team.point}
                    img={team.image}
                />
            ));
        }
    })()}
      </div>
    </>
  );
}
export default MainPage;
