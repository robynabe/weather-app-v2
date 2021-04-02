import { makeDate } from "../utilities/date";
import sunImg from "../images/sun.png";
import Conversion from './Conversion';

const Current = () => {
    /* if user allows location then 
    navigator.geolocation.getCurrentPosition(success[, error[, [options]])
    else use DEFAULT_CITY */ 
    
    return (
        <div className="current-wrapper">
            <p>{makeDate()}</p>
                <h1>Hawaii</h1>
                <img src={sunImg} alt="Sun icon" width="80"/>
                <h2>25°C</h2>
                <p>Weather Description</p>
                <ul>
                    <li>Wind Speed:</li>
                    <li>Humidity:</li>
                    <li>Real Feel:</li>
                </ul>

                <Conversion/>
        </div>
    );
}
export default Current;