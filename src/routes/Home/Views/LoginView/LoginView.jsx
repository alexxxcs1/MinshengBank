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
import {api} from 'common/app'
  
let cutdownTimer;
export class LoginView extends Component {
constructor(props) {
  super(props);
  this.state = {
    RuleShow:false,
    cutdownTime:60,
    formdata:{
        tel:'',
        code:'',
        uid:'',
    }
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.HandleRule = this.HandleRule.bind(this);
     this.StartQuestion = this.StartQuestion.bind(this);
     this.InputValueHandle = this.InputValueHandle.bind(this);
     this.onInputBlur = this.onInputBlur.bind(this);
     this.SendCode = this.SendCode.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  
}
componentWillUnmount(){
    clearInterval(cutdownTimer);
}
HandleRule(boolean){
    this.state.RuleShow = boolean;
    this.setState(this.state);
}
onInputBlur() {
    var scrollTop =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  }
SendCode(){
    this.state.cutdownTime = 59;
    this.setState(this.state);
    clearInterval(cutdownTimer);
    if (this.state.formdata.tel) {
        api.SendCode(this.state.formdata.tel).then(res=>{
            if (res.code == 200) {
                cutdownTimer = setInterval(() => {
                    this.state.cutdownTime -= 1;
                    this.setState(this.state);
                    if (this.state.cutdownTime<=0) {
                        this.state.cutdownTime = 60;
                        this.setState(this.state);
                        clearInterval(cutdownTimer);
                    };
                }, 1000);
            }else{
                this.state.cutdownTime = 60;
                this.setState(this.state);
                clearInterval(cutdownTimer);
                alert(res.msg);
            }
        },err=>{

        })
    }else{
        this.state.cutdownTime = 60;
        this.setState(this.state);
        clearInterval(cutdownTimer);
        alert('手机号码不可为空！')
    }
}
StartQuestion(){
    if (this.state.formdata.tel&&this.state.formdata.code&&this.state.formdata.uid) {
        api.UserLogin(this.state.formdata.tel,this.state.formdata.code,this.state.formdata.uid).then(res=>{
            console.log(res);
            if (res.code == 200) {
                this.context.HandleRoute(1);
            }else{
                alert(res.msg)
            }
        },err=>{
            console.log(err);
            
        })
    }else{
        alert('请填写完整的信息！');
    }
    
}
InputValueHandle(type,e){
    this.state.formdata[type] = e.target.value;
    this.setState(this.state);
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
                            <div className={[style.InputGroup].join(' ')}>
                                <div className={[style.InputBox,'childcenter'].join(' ')}>
                                    <input onBlur={this.onInputBlur} onChange={this.InputValueHandle.bind(this,'tel')} type="tel" type="number" placeholder='请输入手机号' value={this.state.formdata.tel}/>
                                </div>
                                <div className={[style.PhoneCode,'childcenter'].join(' ')}>
                                    <div className={[style.CodeInput,'childcenter'].join(' ')}><input onBlur={this.onInputBlur} onChange={this.InputValueHandle.bind(this,'code')}  type="tel" type="number" placeholder='请输验证码' value={this.state.formdata.code}/></div>
                                    <div className={[style.CodeButton,this.state.cutdownTime==60?'':style.Sended,'childcenter'].join(' ')} onClick={this.state.cutdownTime == 60?this.SendCode:()=>{}}>{this.state.cutdownTime==60?'获取验证码':this.state.cutdownTime + 's'}</div>
                                </div>
                                <div className={[style.InputBox,'childcenter'].join(' ')}>
                                    <input onBlur={this.onInputBlur} onChange={this.InputValueHandle.bind(this,'uid')}  type="text" placeholder='请输入身份证号' value={this.state.formdata.uid}/>
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