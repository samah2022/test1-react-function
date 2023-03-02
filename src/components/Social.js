import React from 'react';
import SocialItem from './SocialItem'
//array.map(); => pour SocialItem

function Social(){
    return(
        <ul className='list-group'>
            <SocialItem
            p={{
                media:"facebook",
                id:"facebook",
                img:"https://picsum.photos/200",
            }}
            />
            <SocialItem 
            p={{
                media:"instagram", 
                id:"instagram",
                img:"https://picsum.photos/200",
            }}

            />
            <SocialItem 
                p= {{
                    media:"youtube", 
                    id:"instagram", 
                    img:"https://picsum.photos/200"
                }}
            />
        </ul>
    );
}
export default Social;