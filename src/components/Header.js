import React from 'react';

function Header(){
    const client="Designer";
    const style=  {
        color:"#000",
        fontSize: "20px"
    }
    const title={
        designer:"design",
        programmer:"programming"
    }
    const info={
        name:"samah"
    }
    return(
        
        <div className='navbar bg-dark rounded'>
            hello {info.name}<br></br>
            {client==="Designer"?title.designer:title.programmer}
        <h1 className='bg-dark text-white'>External style</h1>
        <h1 style={style}>Test internal style</h1>
        </div>
    );
}
export default Header;