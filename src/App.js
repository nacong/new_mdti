/* eslint-disable */
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Jumbotron,Card } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand>MDTI</Navbar.Brand>
      </Navbar>
      <Route exact path="/">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>title</p>
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-4">
              <p>title</p>
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-4">
              <p>title</p>
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-4">
              <p>title</p>
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-4">
              <p>title</p>
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
          </div>
        </div>
      </Route>
      <Route path="/detail">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://codingapple1.github.io/shop/shoes1.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Route>
    </div>
  );
}

export default App;
