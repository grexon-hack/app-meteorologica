import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapa.css';
import Hora from '../hora/Hora.jsx';
import apiKey from '../tokens/token.jsx'



mapboxgl.accessToken = apiKey.accesToken;

export default function Mapa(city) {

    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(city.props.longitud);
    const [lat, setLat] = useState(city.props.latitud);
    const [zoom, setZoom] = useState(5);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
    });
    

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div className='mapas'>
            <div className="sidebar">
            Longitud: {lng} | Latitud: {lat} 
            <br /> 
            Zoom: {zoom} | Hora: <Hora props = {city}/>
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}