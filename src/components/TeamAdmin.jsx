import { useState } from 'react';
import './styles/AdminPanel.css';


function TeamAdmin({id, name, point, pozition}) {

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
                    <input className='addPoint'
                           placeholder='Значение'>
                        
                    </input>
                    <button className='Add'>
                        добавить
                    </button>
                    <img src="/images/удаление.svg" className='DeleteTeam'/>
                    <img src="/images/добавление.svg" className='AddTeamLogo'/>

                </div>

        </div>
    )



}

export default TeamAdmin;