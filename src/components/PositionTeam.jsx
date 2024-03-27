import { useState } from 'react'
import './styles/PositionTeam.css'

function PositionTeam({id, pozition, name, point}) {

    
    
    
    
    return (
        <div className='wraper'>
            <div className="container">
                <div className='position'>
                    {pozition}
                </div>
                <div className='logoContainer'>
                    <img src="/../images/Команда 1.webp" className='logoTeam'/>
                </div>
                <div className='name'>
                    {name}
                </div>
            </div>
            <div className='point'>
                    {point} баллов
            </div>
                


        </div>
    )

}
export default PositionTeam