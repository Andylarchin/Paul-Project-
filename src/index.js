import React from 'react';
import ReactDom from 'react-dom';
import Data from './data.json';
import Card from '../src/userCard/user';
import './index.css';

let App = () => 
  (
    <div>
      <h1>Our Team</h1>
      <p className = 'team_text'>Our team provides something something something something</p>
      <div className = 'container'>
      {Data.map(data => 
         <Card key = {data.index} {...data} names = {data.nameList.map(data => data.name)} />
      )}
      </div>
    </div>
  )


ReactDom.render(<App/>,document.getElementById('root'));