import React from 'react'
import ReactDOM from 'react-dom/client'
import Properties from "./2-Properties/Properties.jsx";
import Fonts from "./2-Properties/1-Fonts/Fonts.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Properties>
      <Fonts/>
    </Properties>
  </React.StrictMode>,
)
