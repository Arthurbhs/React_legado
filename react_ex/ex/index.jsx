import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './ClassComponent'
import Component from './Component'
import { Primeiro, Segundo } from './Component1'
import Family from './Family'
import Famyli from './Famyli'
import Field from './Fild'
import Member from './member'



ReactDOM.render(
<div> 
<Component/>
<Primeiro value="O show"/>
<Segundo values="A começar"/>
<br />
<div><h1>Componentes filhos</h1>
<Family familyName="Silva"/>
<br />
<Famyli lastName='Souza'>
    <Member name='Guilherme'/>
    <Member name='Julio'/>
</Famyli>

</div>
<br />
<div>
    <h1>Componentes de classe</h1>
    <ClassComponent label='Contador' initialValue={1}/>
    <br />
    <Field initialValue='Teste'/>
</div>
</div>, 

document.getElementById('app'))