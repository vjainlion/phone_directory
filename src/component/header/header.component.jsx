import React from 'react';


const Header = () =>{

    const headerStyle = 
    {
        textAlign:"center",
        padding:20,
        background:"#000",
         color:"#fff",
          textTransform:"uppercase"
    };

   return(
    <div style={headerStyle} className='Header'>
    Phone Directory   
   </div>
   )
}
export default Header;