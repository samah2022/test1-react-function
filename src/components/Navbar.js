import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
return(
<div>
    <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/team'>Team</Link>
        </li>
        <li>
            <Link to='/social'>Social</Link>
        </li>
    </ul>
</div>
)}
export default Navbar;