// import the default export and the named export `useState` from the 'react' library
import React, { useState } from "react";

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
  const [color, setColor] = useState()

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p style={{fontFamily: "impact", fontSize: "3em", margiTop: "1em"}}>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
      <footer>
        <p>Author: Andres R. Bucheli</p>
        <p>BUCHELI WEB DEVELOPMENT ©</p>
        <p><a href="mailto:radio_seattle@hotmail.com">radio_seattle@hotmail.com</a></p>
      </footer>
    </div>
  );
}
