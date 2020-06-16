import React from 'react';
import './header.styles.css';

const Header = ({heading}) =>{
   return(
    <div  className='header'>
    {heading}  
   </div>
   )
}
export default Header;