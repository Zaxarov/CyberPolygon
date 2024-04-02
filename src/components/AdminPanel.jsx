import { useState } from 'react';
import './styles/AdminPanel.css';
import team from '../data/team.json';
import runLine from '../data/runLine.json';
import TeamAdmin from './TeamAdmin';

function AdminPanel() {

    const [data, setData] = useState(team);
    const [textRunLine, settextRunLine] = useState(runLine)

    return (
        <div className="fullscreen">
            <div className="logoContainer">
                <img className="cyberpoligonLogo" src="/images/киберполигон.png" />
                <input className='inputContainerTeam'
                        placeholder='название новой команды'
                />
                <button className='addTeam'> 
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
            {team.sort((a, b) => a.point - b.point).reverse().map((e, id) => (<TeamAdmin id={e.id} pozition={id + 1} name={e.name} point={e.point}/>))
            
            }
            
            
        </div>
    )
}
export default AdminPanel;