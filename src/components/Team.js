import React from 'react';
import TeamMember from './TeamMember';

function Team(){
    const info=[
        {
            id:1,
            name:"Mariam",
            img:"https://picsum.photos/200",
            position:"bardo",
            mail:"mariam@symdrik.com",
            phone:"12 200 200",
            website:"www.mariam.com"
        },
        {
            id:2,
            name:"Melek",
            img:"https://picsum.photos/200",
            position:"bardo",
            mail:"Melek@symdrik.com",
            phone:"12 200 200"
        },
        {
            id:3,
            name:"Samah",
            img:"https://picsum.photos/200",
            position:"Ariana",
            mail:"mariam@symdrik.com",
            phone:"12 200 200",
            website:"www.samah.com"
        }
    ]
    const members= info.map( member=> <TeamMember 
                                        key={member.id}
                                        name={member.name}
                                        img={member.img}
                                        position={member.position}
                                        mail={member.mail}
                                        phone={member.phone}
                                        website={member.website}
                                    />          
    );
    return(
        <div className='row'>
            <h1>Team</h1>
            {members} 
        </div>
    )
}
export default Team