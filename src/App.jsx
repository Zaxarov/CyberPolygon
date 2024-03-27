import { useState } from 'react'

import './App.css'

function App() {
  const [textRunLine, settextRunLine] = useState("Всем привет! Всем привет! Всем привет! Всем привет! Всем привет!")

  return (
    <>
     <div class="runLine">
        <marquee id="textRunLine" scrollamount="15">
            {textRunLine}
        </marquee>
    </div>
    <div class="logo">
        <img class="sibLogo" src="/images/сиб лого.png" />
        <div class="rectangle">
            <div class="smallRectangle">
                ЛИДЕРЫ 
            </div>
            <div class="leaders">
                <div class="leader">
                    <div class="circle" style={{backgroundColor: "#B0B7BA"}}>
                        3
                    </div>  
                    <div class="informLeaders leader3" style={{backgroundColor: "#95999A"}}>
                        <div class="informLeadersInside" style={{backgroundColor: "#B0B7BA"}}>
                            <div class="leadersInsidelogoContainer">
                                <img src="/images/Команда 1.webp" class="leadersInsidelogo"/>
                            </div>
                            <div class="leadersInsideName"></div>
                            <div class="leadersInsidePoint"></div>
                        </div>
                    </div>
                </div>
                <div class="leader">
                    <div class="circle" style={{backgroundColor: "#FBD300"}}>
                        1    
                    </div>  
                    <div class="informLeaders leader1" style={{backgroundColor: "#BB9F0A"}}>
                        <div class="informLeadersInside" style={{backgroundColor: "#FBD300"}} >
                            <div class="leadersInsidelogoContainer">
                                <img src="/images/Команда 1.webp" class="leadersInsidelogo"/>
                            </div>
                            <div class="leadersInsideName"></div>
                            <div class="leadersInsidePoint"></div>
                        </div>
                    </div>
                </div>
                <div class="leader">
                    <div class="circle" style={{backgroundColor: "#D37B14"}}>
                        2    
                    </div>  
                    <div class="informLeaders leader2" style={{backgroundColor: "#A9610D"}}>
                        <div class="informLeadersInside"  style={{backgroundColor: "#D37B14"}}>
                            <div class="leadersInsidelogoContainer">
                                <img src="/images/Команда 1.webp" class="leadersInsidelogo"/>
                            </div>
                            <div class="leadersInsideName"></div>
                            <div class="leadersInsidePoint"></div>
                        </div>
                            
                    </div>
                </div>
               
            </div>
        </div>
        <img class="nstuLogo" src="/images/нгту лого.png" />
    </div>
    
    </>
  )
}
export default App
