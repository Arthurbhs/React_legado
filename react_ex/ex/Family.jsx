import React from 'react'
import Member from './member'


export default props => (
    <div>
        <h2> Familia {props.familyName}</h2>
        <Member name='João' lastName={props.familyName}/>
        <Member name='Maria' lastName={props.familyName}/>
        <Member name='Jose' lastName={props.familyName}/>
        <Member name='Marta' lastName={props.familyName}/>
    </div>
)