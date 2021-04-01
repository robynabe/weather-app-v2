// Main //
import sunImg from "../images/sun.png";
import { makeDate } from "../utilities/date";
import Hourly from "./Hourly";
import Forecast from "./Forecast";
import Conversion from "./Conversion";

const Main = () => {
    
    return (
        <div className="main-wrapper">
            
            <form>
                <input
                    type="text"
                    placeholder="Search for a city..."
                    autoComplete="off"
                    autoFocus="on"
                    className="search-bar"
                />
                <input type="submit" value="search" className="btn-submit"/>
            </form>

            <section className="current-container">
                <p>{makeDate()}</p>
                <h1>Current Location</h1>
                <img src={sunImg} alt="Sun icon" width="80"/>
                <Conversion/>
            </section>

            <section className="hourly-container">
                <Hourly/>
            </section>

            <section className="forecast-container">
                <Forecast/>
            </section>

        </div>
    );
}
export default Main;