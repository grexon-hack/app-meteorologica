import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  
  
  const [city, setCity] = useState(null);

  function handlerChange(e) {
    setCity(city => city = e.target.value)
    
  }
 
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      e.target.firstChild.value = '';
    }}>
      <input
        className="inputext"
        onChange={(e) => handlerChange(e)}
        type="text"
        placeholder="Ciudad..."
      />
      <input className="boton" type="submit" value="Agregar" />
    </form>
  );
}
