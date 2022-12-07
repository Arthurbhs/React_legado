import React from 'react'
import ReactDOM from 'react-dom'
import Component from './Component'
import { Primeiro, Segundo } from './Component1'



ReactDOM.render(
<div> 
<Component/>
<Primeiro value="O show"/>
<Segundo values="A começar"/>
</div>, 
document.getElementById('app'))