import React, { Component } from 'react'
import style from './LoginView.scss'
import botground from './imgs/botground.png'
import maintitle from './imgs/maintitle.png'
import topground from './imgs/topground.png'
import formbot from './imgs/formbot.png'
import pointborder from './imgs/pointborder.png'
import formtips from './imgs/formtips.png'
import coin from './imgs/coin.png'
  
export class LoginView extends Component {
constructor(props) {
  super(props);
  this.state = {};
     this.refreshProps = this.refreshProps.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  
}
render() {
  return (
    <div className={[style.ViewBox,'childcenter childcolumn'].join(' ')}>
        <div className={style.TopGround}>
            <img src={topground} alt=""/>
        </div>
        
        <div className={[style.DetialBox,'childcenter childcolumn'].join(' ')}>
        
            <div className={style.MainTitle}>
                <img src={maintitle} alt=""/>
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
                            <div className={[style.FormButton,'childcenter'].join(' ')}>开始答题</div>
                        </div>
                    </div>
                    <div className={style.FormBot}>
                        <img src={coin} className={style.BotCoin} alt=""/>
                        <img src={formbot} className={style.botpng} alt=""/>
                        <div className={[style.RuleText,'childcenter childcolumn childcontentstart'].join(' ')}>
                            <span>查看活动规则</span>
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
export default LoginView