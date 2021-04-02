// Main //
import Hourly from "./Hourly";
import Forecast from "./Forecast";
import Current from "./Current";

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
                <Current/>
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