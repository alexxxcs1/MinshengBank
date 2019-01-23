import React, { Component } from 'react'
import style from './LoginView.scss'
import PropTypes from "prop-types";
import botground from 'assets/botground.png'
import maintitle from 'assets/maintitle.png'
import formbot from 'assets/formbot.png'
import topground from 'assets/topground.png'
import coin from 'assets/coin.png'
import pointborder from 'assets/pointborder.png'

import formtips from './imgs/formtips.png'

import male from './imgs/male.png'
import female from './imgs/female.png'

import RuleComponent from './components/RuleComponent'
  
export class LoginView extends Component {
constructor(props) {
  super(props);
  this.state = {
    RuleShow:false,
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.HandleRule = this.HandleRule.bind(this);
     this.StartQuestion = this.StartQuestion.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  
}
HandleRule(boolean){
    this.state.RuleShow = boolean;
    this.setState(this.state);
}
StartQuestion(){
    this.context.HandleRoute(1);
}
render() {
  return (
    <div className={[style.ViewBox,'childcenter childcolumn'].join(' ')}>
        {this.state.RuleShow?<RuleComponent onClose={this.HandleRule.bind(this,false)}/>:''}
        <div className={style.TopGround}>
            <img src={topground} alt=""/>
        </div>
        
        <div className={[style.DetialBox,'childcenter childcolumn'].join(' ')}>
        
            <div className={style.MainTitle}>
                <img src={maintitle} alt=""/>
            </div>
            <div className={[style.MaleAndFemale,'childcenter'].join(' ')}>
                <div className={[style.HalfGroup,'childcenter childcontentstart'].join(' ')}>
                    <img src={female} className={style.female} alt=""/>
                </div>
                <div className={[style.HalfGroup,'childcenter childcontentend'].join(' ')}>
                    <img src={male} className={style.male} alt=""/>
                </div>
            </div>
            <div className={style.FormOutBox}>
                <div className={style.FormBox}>
                    <div className={[style.FormContent,'childcenter'].join(' ')}>
                        <div className={[style.FormDetial,'childcenter childcolumn childcontentstart'].join(' ')} style={{'--childbkg':'url('+pointborder+')'}}>
                            <div className={style.FormCoin}>
                                <img src={coin} alt=""/>
                            </div>
                            <div className={style.FormTips}>
                                <img src={formtips} alt=""/>
                            </div>
                            <div className={style.InputGroup}>
                                <div className={[style.InputBox,'childcenter'].join(' ')}>
                                    <input type="text" placeholder='请输入手机号'/>
                                </div>
                                <div className={[style.PhoneCode,'childcenter'].join(' ')}>
                                    <div className={[style.CodeInput,'childcenter'].join(' ')}><input type="text" placeholder='请输验证码'/></div>
                                    <div className={[style.CodeButton,'childcenter'].join(' ')}>获取验证码</div>
                                </div>
                                <div className={[style.InputBox,'childcenter'].join(' ')}>
                                    <input type="text" placeholder='请输入身份证号'/>
                                </div>
                            </div>
                            <div className={[style.FormButton,'childcenter'].join(' ')} onClick={this.StartQuestion}>开始答题</div>
                        </div>
                    </div>
                    <div className={style.FormBot}>
                        <img src={coin} className={style.BotCoin} alt=""/>
                        <img src={formbot} className={style.botpng} alt=""/>
                        <div className={[style.RuleText,'childcenter childcolumn childcontentstart'].join(' ')}>
                            <span onClick={this.HandleRule.bind(this,true)}>查看活动规则</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={style.BotGround}>
            <img src={botground} alt=""/>
        </div>
    </div>
   )
   }
}
LoginView.contextTypes = {
    HandleRoute: PropTypes.func
  };
export default LoginView