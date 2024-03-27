import { useState } from 'react'

import './App.css'
import PositionTeam from './components/PositionTeam'

function App() {
  const [textRunLine, settextRunLine] = useState("Всем привет! Всем привет! Всем привет! Всем привет! Всем привет!")
 

  const team = [
    {id: 1, name: "EG", point: 64},
    {id: 2, name: "EG", point: 73},
    {id: 3, name: "EG", point: 1},
    {id: 4, name: "EG", point: 2},
    {id: 5, name: "EG", point: 20},
    {id: 6, name: "EG", point: 23},
    {id: 7, name: "EG", point: 36},
    {id: 8, name: "EG", point: 89},
    {id: 9, name: "EG", point: 34},
    {id: 10, name: "EG", point: 23},
    {id: 11, name: "EG", point: 22},
    {id: 12, name: "NAVI", point: 224},
    {id: 13, name: "Team Spirit", point: 232},
    ]
    const leader = team.sort((a, b) => a.point - b.point).reverse().slice(0, 3)
    console.log(leader);
    
    
    console.log(leader);
    

  return (
    <> 
        <div className="runLine">
            <marquee id="textRunLine" scrollamount="15">
                {textRunLine}
            </marquee>
        </div>
        <div className="logo">
            <img className="sibLogo" src="/images/сиб лого.png" />
            <div className="rectangle">
                <div className="smallRectangle">
                    ЛИДЕРЫ 
                </div>
                <div className="leaders">
                    <div className="leader">
                        <div className="circle" style={{backgroundColor: "#B0B7BA"}}>
                            3
                        </div>  
                        <div className="informLeaders leader3" style={{backgroundColor: "#95999A"}}>
                            <div className="informLeadersInside" style={{backgroundColor: "#B0B7BA"}}>
                                <div className="leadersInsidelogoContainer">
                                    <img src="/images/Команда 1.webp" className="leadersInsidelogo"/>
                                </div>
                                <div className="leadersInsideName">
                                    {leader[2].name}
                                </div>
                                <div className="leadersInsidePoint">
                                    {leader[2].point} баллов
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leader">
                        <div className="circle" style={{backgroundColor: "#FBD300"}}>
                            1    
                        </div>  
                        <div className="informLeaders leader1" style={{backgroundColor: "#BB9F0A"}}>
                            <div className="informLeadersInside" style={{backgroundColor: "#FBD300"}} >
                                <div className="leadersInsidelogoContainer">
                                    <img src="/images/Команда 1.webp" className="leadersInsidelogo"/>
                                </div>
                                <div className="leadersInsideName1">
                                    {leader[0].name}
                                </div>
                                <div className="leadersInsidePoint1">
                                    {leader[0].point} баллов
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leader">
                        <div className="circle" style={{backgroundColor: "#D37B14"}}>
                            2    
                        </div>  
                        <div className="informLeaders leader2" style={{backgroundColor: "#A9610D"}}>
                            <div className="informLeadersInside"  style={{backgroundColor: "#D37B14"}}>
                                <div className="leadersInsidelogoContainer">
                                    <img src="/images/Команда 1.webp" className="leadersInsidelogo"/>
                                </div>
                                <div className="leadersInsideName">
                                    {leader[1].name}
                                </div>
                                <div className="leadersInsidePoint">
                                    {leader[1].point} баллов
                                </div>
                            </div>
                                
                        </div>
                    </div>
                
                </div>
            </div>
            <img className="nstuLogo" src="/images/нгту лого.png" />
        </div>
        <div className='containerTeam'>
            {team.sort((a, b) => a.point - b.point).reverse().slice(3, team.length).map((e, id) => (<PositionTeam id={e.id} pozition={id + 4} name={e.name} point={e.point}/>))}
        </div>
    </>
  )
}
export default App
