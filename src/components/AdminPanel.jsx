import { useState, useEffect } from 'react';
import './styles/AdminPanel.css';
import runLine from '../data/runLine.json';
import TeamAdmin from './TeamAdmin';

function AdminPanel() {

    const [data, setData] = useState(JSON.parse(localStorage.getItem('teamData')));
    const [textRunLine, settextRunLine] = useState(runLine)
    const [inputValue, setInputValue] = useState('');

    const ChangePoints = (teamId, point) => {
        const newData = data.map(e => e.id === teamId ? {...e, point} : {...e, point: e.point})
        setData(newData);

        localStorage.removeItem('teamData');
        localStorage.setItem('teamData', JSON.stringify(newData));
    
    }

    const DeleteTeam = (teamId) => {
        const newData = data.filter(e => e.id !== teamId);
        setData(newData);

        localStorage.removeItem('teamData');
        localStorage.setItem('teamData', JSON.stringify(newData));
    }

    const handleAddTeam = () => {
        const teamData = JSON.parse(localStorage.getItem('teamData')) || []; 
        const newTeam = {
            id: teamData.length + 1, 
            name: inputValue,
            point: 0 
        };
        teamData.push(newTeam); 
        setData(teamData);
        setInputValue('');
        localStorage.removeItem('teamData');
        localStorage.setItem('teamData', JSON.stringify(teamData));
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event, inputId) => {
        if (event.key === 'Enter') {
          if (inputId === 'addTeam') {
            handleAddTeam(); // Вызываем функцию добавления команды для первого инпута
          } 
        }
    };

    return (
        <div className="fullscreen">
            <div className="logoContainer">
                <img className="cyberpoligonLogo" src="/images/киберполигон.png" />
                <input className='inputContainerTeam'
                        placeholder='название новой команды'
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={(event) => handleKeyPress(event, 'addTeam')}
                />
                <button className='addTeam' onClick={handleAddTeam}> 
                    добавить команду
                </button>
                <div className='line'/>
                <div className='IninputContainerSearhTeamAndLogo'>
                    <img src="/images/поиск.svg" className='Searchteam'/>
                    <input className='inputContainerSearhTeam'
                            placeholder="Поиск команд"
                    />
                </div>
            </div>
            <div className='Container'>
                <p className='TeamTitle'>
                    СПИСОК КОМАНД
                </p>
                <button className='runLineAdmin'>
                    редактировать бегущую строку
                </button>
            </div>
            {data && data.length > 0 && data.sort((a, b) => b.point - a.point).map((e, id) => (<TeamAdmin id={e.id} pozition={id + 1} name={e.name} point={e.point} ChangePoints={ChangePoints} DeleteTeam={DeleteTeam}/>))}
            
            
        </div>
    )
}
export default AdminPanel;