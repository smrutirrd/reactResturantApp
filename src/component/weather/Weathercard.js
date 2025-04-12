import React, { useEffect, useState } from 'react'

const Weathercard = ({tempInfo}) => {
    const [weatherState,setWeatherState]=useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
        }=tempInfo
        useEffect(()=>{
            if(weathermood){
                switch(weathermood){
                    case "Clouds":
                        setWeatherState("wi-day-cloudy");
                        break;
                    case "Haze":
                        setWeatherState("wi-fog");
                        break;
                    case "Clear":
                        setWeatherState("wi-day-sunny");
                        break;
                    default:
                        setWeatherState("wi-day-sunny");
                       break;

                }
            }

        })
        let sec=sunset;
        let date=new Date(sec*1000);
        let timestr=`${date.getHours()}:${date.getMinutes()}`
  return (
    <>
       <article className='widget'>
        <div className='weatherIcon'>
        <i className={`wi ${weatherState}`}></i>
        </div>
        <div className='weatherInfo'>
        <div className='temparature'>
        <span>{temp}</span>
        </div>
        <div className='description'>
        <div className='weathercondition'>{weathermood}</div>
        <div className='place'>{name},{country}</div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>
        </div>
       
        {/* our 4 divided column section */}
        <div className='extra-temp'>
        <div className='temp-info-minmax'>
        <div className='two-sided-section'>
            <p className='wi wi-sunset'></p>
            <p className='extra-info-leftside'>{timestr} <br/>sunset</p>
        </div>
        <div className='two-sided-section'>
            <p className='wi wi-rain'></p>
            <p className='extra-info-leftside'>{humidity} <br/>humidity</p>
        </div>
        </div>
        <div className='weather-extra-info'>
        <div className='two-sided-section'>
            <p className='wi wi-barometer'></p>
            <p className='extra-info-leftside'>{pressure} <br/>pressure</p>
        </div>
        <div className='two-sided-section'>
            <p className='wi wi-strong-wind'></p>
            <p className='extra-info-leftside'>{speed} <br/>speed</p>
        </div>
        </div>
        </div>

      </article>
    </>
  )
}

export default Weathercard




