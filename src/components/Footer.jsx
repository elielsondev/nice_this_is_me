import React from 'react';
import data from '../APIFAKE';

function Footer({ language }) {
  return (
    <footer>
        <h5>{data[language].footer}</h5>
    </footer>
  )
}

export default Footer