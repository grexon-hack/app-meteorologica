
import './Ciudad.css';
import Mapa from './MapSide/mapa.jsx';





export default function Ciudad({city}) {

   let classimage = 'ciudad';

   if(city.temp > 18) {
       classimage = 'ciudad soleado';
   }else if(city.temp > 15){
    classimage = 'ciudad nublado';
   }else if(city.temp > 10) {
    classimage = 'ciudad tormenta';
   }else {
    classimage = 'ciudad nieve';

   }

    
    return (
            <div className={classimage}>
                <div className="container">
                
                    <div className="info">
                        <h1 className='titulo'>{city.name}</h1>
                        <div>
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                        
                    
                    <div className='imagen'>
                        <img className="imgCiudad" src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="imagen del tiempo" />
                    </div>
                    </div>
                    <div className='mapclima'>
                
                        < Mapa props = {city}/>
                    </div>
                        
                </div>
        
            </div>
    )
}