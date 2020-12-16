import React from 'react';
 
import MyImage from '../../image/bullet.png';
 
const bullets = ({ title }) => (
  <div>
    <span>{title}</span>
    <img src={MyImage} alt="torchlight in the sky" />
  </div>
);
 
export default bullets;