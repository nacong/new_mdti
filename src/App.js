/* eslint-disable */
import { Row,Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';
import artData from './data.js';
import { Card, Icon, Image } from 'semantic-ui-react';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [art, artChange] = useState(artData);

  return (
    <div className="App">
      <div className="head">
        <h1>MDTI</h1>
      </div>
      <Route exact path="/">

        <div className="container">
          <div className="name">
            <span id="name-1">'디자이너'<span id="name-2">님의 작품</span></span>
          </div>
          <div className="row">
            {
              art.map((a,i)=>{
                return(
                  <ArtCard art={art[i]}/>
                )
              }) 
            }
          </div>
        </div>
      </Route>
    </div>
  );
}

function ArtCard(props) {
  return (
    <div className="col-md-4" key={props.art.id}>
      <div className="card">
        <h4 className="card-subj">{ props.art.title }</h4>
        <img className="card-img-bottom" src={ props.art.image }></img>
      </div>
    </div>
  )
}

export default App;
