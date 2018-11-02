import React, { Component } from 'react';
import './styles/Main.scss';


export default class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      extendCard: false,
      
    }
  }

  toggleFullCard = () => {
    this.setState({
      extendCard: !this.state.fullCard,
    });