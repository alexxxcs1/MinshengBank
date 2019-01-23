import React, { Component } from 'react'
import style from './Home.scss'
import LoginView from './Views/LoginView'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount()
  {
  }
  render() {
    return (
      <div className={style.Box}>
        <LoginView />
      </div>
    )
  }
}

export default Home
