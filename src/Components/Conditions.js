import React from 'react';
import RenderWeatherIcon from './Icon';
import './Styles.css'
const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ? 
    <div class="info">
                   
                   <p><strong>{props.responseObj.name}</strong></p>
                   <img src={`http://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}.png`} />
                   <hr />
                   <p> It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}. </p>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;