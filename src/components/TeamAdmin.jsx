import React, { useState, useEffect, useRef } from "react";
import "./styles/AdminPanel.css";
import AvatarEditor from "react-avatar-editor";

function TeamAdmin({
  id,
  name,
  point,
  pozition,
  ChangePoints,
  DeleteTeam,
  ChangeAvatar,
}) {
  const [inputValue, setInputValue] = useState("");
  const [showDeleteTeam, setShowDeleteTeam] = useState(false);
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [avatar, setAvatar] = useState(false);
  const [avatarTeam, setAvatarTeam] = useState(false);

  const handleDeleteTeam = () => {
    setShowDeleteTeam(true);
  };

  const handleConfirmDelete = () => {
    DeleteTeam(id);
    setShowDeleteTeam(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteTeam(false);
  };

  const handleAddPoint = () => {
    ChangePoints(id, point + Number(inputValue));
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event, inputId) => {
    if (event.key === "Enter") {
      if (inputId === "addPoint") {
        handleAddPoint();
      }
    }
  };

  const handleButtonClick = () => {
    setAvatar(true);
  };

  const handleAvatarExit = () => {
    setAvatar(false);
  };

  const handleAvatarBack = () => {
    setAvatarTeam(false);
    setAvatar(true);
  };

  const handleAvatarTeamExit = () => {
    setAvatarTeam(false);
  };

  const handleImageUpload = (event) => {
    setAvatarTeam(true);
    setAvatar(false);
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleAvatarConfirm = () => {
    ChangeAvatar(id, image);
  };

  return (
    <div className="ContainerTeam">
      <div className="Team">
        <p className="NumberTeam">{pozition}</p>
        <img src="/images/Команда 1.webp" className="TeamLogo" />
        <div className="NameTeam">{name}</div>
        <div className="TeamPoint">{point}</div>
        <div className="plus">+</div>
        <input
          type="number"
          className="addPoint"
          placeholder="Значение"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={(event) => handleKeyPress(event, "addPoint")}
        />
        <button className="Add" onClick={handleAddPoint}>
          добавить
        </button>
        <img
          src="/images/удаление.svg"
          className="DeleteTeam"
          onClick={handleDeleteTeam}
        />
        {showDeleteTeam && (
          <div className="confirmationOverlay">
            <div className="confirmationUpLine">Удаление команды</div>
            <div className="confirmationDialog">
              <p>Вы точно хотите удалить команду?</p>
              <div className="Button">
                <button className="ConfirmDelete" onClick={handleConfirmDelete}>
                  Подтвердить
                </button>
                <button className="CancelDelete" onClick={handleCancelDelete}>
                  Отмена
                </button>
              </div>
              <div className="confirmationDownLine" />
            </div>
          </div>
        )}
        <img
          src="/images/добавление.svg"
          className="AddTeamLogo"
          onClick={handleButtonClick}
        />
        {avatar && (
          <div className="confirmationOverlay">
            <div className="confirmationUpLineAddAvatar">
              <div>Загрузка новой фотографии</div>
              <div>
                <button className="avatarExit" on onClick={handleAvatarExit}>
                  X
                </button>
              </div>
            </div>
            <div className="confirmationDialog">
              <p>Вы можете загрузить изображение в формате JPG,GIF или PNG</p>
              <label className="customFileUpload">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                Выбрать файл
              </label>
              <div className="confirmationDownLine">
                Если у вас возникают проблемы с загрузкой, попробуйте выбрать
                фото меньшего размера
              </div>
            </div>
          </div>
        )}
        {avatarTeam && (
          <div className="confirmationOverlay">
            <div className="confirmationUpLineAvatar">
              Выбор миниатюры
              <button className="avatarExit" on onClick={handleAvatarTeamExit}>
                X
              </button>
            </div>
            <div className="confirmationDialogAvatar">
              <p>Выберите область для показа миниатюры фотографии</p>
              <AvatarEditor
                className="AvatarEditor"
                image={image}
                width={250}
                height={250}
                border={50}
                borderRadius={125}
                scale={scale}
              />
              <div className="ScaleConteiner">
                <input
                  className="Scale"
                  type="range"
                  min="1"
                  max="2"
                  step="0.01"
                  value={scale}
                  onChange={(event) => setScale(parseFloat(event.target.value))}
                />
              </div>
              <div className="ButtonAvatar">
                <button className="ConfirmAvatar" onClick={handleAvatarConfirm}>
                  Сохранить
                </button>
                <button className="CancelAvatar" onClick={handleAvatarBack}>
                  Назад
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamAdmin;
