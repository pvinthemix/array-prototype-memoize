import React, { Component } from 'react';
import './styles/Main.scss';


export default class Bookmark extends Component {
  constructor(props) {
    super();
    this.state = {
      prototypeData: []
  }


  componentDidMount() {
    fetch('')
      .then(response => response.json())
      .then(prototypeData => {
        this.setState({
          prototypeData: 
        })
      })
      .catch(error => console.log(error))
  }