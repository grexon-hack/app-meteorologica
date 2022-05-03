import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards';
import { Route , Switch} from 'react-router-dom';
import About from './components/About.jsx'
import Ciudad from './components/Ciudad.jsx'
import Bienvenida from './components/bienvenida/bienvenida';
import apiKey from './components/tokens/token.jsx';
import PageError from './components/error404/Error';

export default function App() {

  const [cities, setCities] = useState([]);

  const token = apiKey.keyApi;
  
  
  

  function onSearch(ciudad) {


    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${token}&units=metric`)
    .then(res => res.json())
    .then(resp => {
      
      if(resp.main !== undefined) {
        const ciudad = {
          min: Math.round(resp.main.temp_min),
          max: Math.round(resp.main.temp_max),
          img: resp.weather[0].icon,
          id: resp.id,
          wind: resp.wind.speed,
          temp: resp.main.temp,
          name: resp.name,
          weather: resp.weather[0].main,
          clouds: resp.clouds.all,
          latitud: resp.coord.lat,
          longitud: resp.coord.lon,
          timeZone: resp.timezone
        };
        const encontrada = cities.find(city => city.id === ciudad.id);
        if(encontrada) alert('esa ciudad ya se encuentra en el escritorio')
        else setCities(city => [...city, ciudad]);
      }else {
        alert("Ciudad no encontrada");
      }
    });
    
  }
  
  
  function onClose(id) {
    setCities(cities => cities.filter(c => c.id !== id))
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      
      <Route path="/app-meteorologica/" render={() => <Nav onSearch = {onSearch}/>}/>
      
      <Switch>
      {cities.length === 0? 
      <Route 
      exact
      path="/app-meteorologica/"
      render={() =><Bienvenida/>} 
      />:
      <Route 
        exact
        path="/app-meteorologica/"
        render={() =><Cards cities = {cities} onClose = {onClose}/>} 
      />}
      <Route exact path="/app-meteorologica/about"  component={About}/>
      <Route
      exact
      path="/app-meteorologica/ciudad/:ciudadId"
      render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
      <Route 
        path="*"
        component={PageError}
      />
      
      </Switch>
    </div>
  );
}
