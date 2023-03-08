import React from 'react';
import TeamMember from './TeamMember';
import membersInfo from './MemberInfo';

function Team(){
  
    const members= membersInfo.map( member=> <TeamMember 
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