import { React, useState, /*useEffect*/ } from "react"

export default function Forecast(props) {
    // hooks
    const [apiData, setApiData] = useState({});
    const [city, setCity] = useState();
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    // api key and url
    const apiKey = "51b91d99f95843f1d1cc5913483efaa0";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    const inputHandler = (event) => { // save city name while typing
        setCity(event.target.value);
    }

    const clickHandler = () => { // fetch weather data on btn clicking
        fetch(apiUrl)
        .then(res => res.json())
        .then(result => {
            setApiData(result)
        })
    }

    return (
        <div id="body-container" class="md:max-w-xl md:mx-auto grid grid-flow-rows gap-20 px-15 pb-80 pt-150 md:gap-20 md:px-20 md:pb-70 md:pt-120 text-center">
            <input
                id="input-email"
                class="transition px-20 py-10 duration-500 ease-in-out focus:outline-none focus:ring-4 md:focus:ring-2 focus:ring-white 
                focus:ring-opacity-30 md:text-p2-md text-primary font-medium rounded-full bg-black bg-opacity-30"
                type="text"
                id="city"
                value={ city }
                onChange={ inputHandler }
                placeholder="City"
            />
            <button class="text-p2-md p-10 font-medium bg-btn-primary text-white rounded-full" onClick={clickHandler}>Search</button>
            { 
                apiData.main ? (
                    <table class="bg-body text-p2-md text-white border-2 mt-10">
                        <thead>
                            <tr>
                                <th class="bg-body border-2 p-10 text-center">Location</th>
                                <th class="bg-body border-2 p-10 text-center"> Weather</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-body">
                                <td class="bg-body border-2 p-10 text-center">{ apiData.name }</td>
                                <td class="bg-body border-2 p-10 text-center">{ apiData.main.temp }&deg; C</td>
                            </tr>
                        </tbody>
                    </table>
                ) : ( 
                    <></> 
                ) 
            }
        </div>
    )
}