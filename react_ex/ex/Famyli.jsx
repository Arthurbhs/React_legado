import React from 'react'
import { ReactChildren } from './Utils/ReactUtils'

export default props => (
    <div>
        <h2>Familia {props.lastName}</h2>
        {ReactChildren(props.children, props)}
    </div>
)