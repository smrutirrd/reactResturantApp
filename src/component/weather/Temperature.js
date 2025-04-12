import React, { useEffect, useState,useCallback } from 'react'
import './style.css'
import Weathercard from './Weathercard';

const Temperature = () => {
    const [searchValue,setSearchValue]=useState("Pune");
    const [tempInfo,setTempInfo]=useState({});
    const getWeatherInfo = useCallback(async ()=>{
        try{

            let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&lat= 34.0901&lon=-118.4065&appid=e0f5c4bf6e1579e5eae212ba5d909ba5`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            const {temp,humidity,pressure}=data.main;
            const {main:weathermood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind
            const {country,sunset}=data.sys
            const mynewweatherInfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,

            }
            setTempInfo(mynewweatherInfo)

        }
        catch(error){
            console.log(error);

        }

    },[searchValue]);
    useEffect(() => {
        getWeatherInfo();
      }, [getWeatherInfo]);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input 
            type="search" 
            placeholder='search...' 
            autoFocus id='search' 
            className='searchTerm' 
            value={searchValue} 
            onChange={(e)=>setSearchValue(e.target.value)}>
            </input>
            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
     <Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Temperature
