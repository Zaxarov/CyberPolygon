import React, { useState, useEffect } from 'react';
import './styles/AdminPanel.css';


function TeamAdmin({id, name, point, pozition, ChangePoints, DeleteTeam}) {

    const [inputValue, setInputValue] = useState('');

    const handleAddPoint = () => {
        ChangePoints(id, point + Number(inputValue));
        setInputValue(''); 
       
    };

    const handleDeleteTeam = () => {
        DeleteTeam(id);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event, inputId) => {
        if (event.key === 'Enter') {
          if (inputId === 'addPoint') {
            handleAddPoint();
          } 
        }
    };


    return(
        <div className='ContainerTeam'>
            <div className='Team'>
                <p className='NumberTeam'>
                    {pozition}
                </p>
                <img src='/images/Команда 1.webp' className='TeamLogo'/>
                <div className="NameTeam">
                    {name}
                </div>
                <div className='TeamPoint'>
                    {point}
                </div>
                <div className='plus'>
                    +
                </div>
                <input type="number" 
                       className='addPoint'
                       placeholder='Значение'
                       value={inputValue}
                       onChange={handleInputChange}
                       onKeyPress={(event) => handleKeyPress(event, 'addPoint')}
                />
                <button className='Add' onClick={handleAddPoint}>
                    добавить
                </button>
                <img src="/images/удаление.svg" className='DeleteTeam' onClick={handleDeleteTeam}/>
                <img src="/images/добавление.svg" className='AddTeamLogo'/>
            </div>
        </div>
    )
}

export default TeamAdmin;