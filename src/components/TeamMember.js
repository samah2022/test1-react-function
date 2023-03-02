import React from 'react';

function TeamMember(props){
    return(
        <div className='col-md-4 col-sm-6 border'>
            <h2>TeamMember</h2>
            <div className='card'>
                <div className='card-header'><img style={{maxWidth:"100%"}} src={props.img} alt={props.name}/></div>
                <div className='card-body'>
                    <h3>{props.name}</h3>
                    <h5>{props.position}</h5>
                    <div>{props.mail}</div>
                    <div>{props.phone}</div>
                    <div>{props.website}</div>
                </div>
            </div>
        </div>
    )
}
export default TeamMember;