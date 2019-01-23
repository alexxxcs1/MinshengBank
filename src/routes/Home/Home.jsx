import React, { Component } from 'react'
import style from './Home.scss'
import PropTypes from "prop-types";
import LoginView from './Views/LoginView'
import AnswerView from './Views/AnswerView'
import LastAnswerView from './Views/LastAnswerView'
import logo from 'assets/logo.png'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stageStatus:0,
    };
    this.customRouter = this.customRouter.bind(this);
    this.HandleRoute = this.HandleRoute.bind(this);
  }
  componentDidMount()
  {
  }
  getChildContext() {
    return {
      HandleRoute: this.HandleRoute
    };
  }
  customRouter(){
    switch (this.state.stageStatus) {
      default:
      case 0:
        return <LoginView />
      case 1:
        return <AnswerView />
      case 2:
        return <LastAnswerView />
    }
  }
  HandleRoute(route){
    this.state.stageStatus = route;
    this.setState(this.state);
  }
  render() {
    return (
      <div className={style.Box}>
        <img src={logo} className={style.logo} alt=""/>
        {this.customRouter()}
      </div>
    )
  }
}
Home.childContextTypes = {
  HandleRoute: PropTypes.func
};
export default Home
