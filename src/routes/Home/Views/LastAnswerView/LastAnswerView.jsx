import React, { Component } from 'react';
import style from './LastAnswerView.scss';
import PropTypes from "prop-types";
import botground from 'assets/botground.png'
import topground from 'assets/topground.png'
import coin from 'assets/coin.png'
import pointborder from 'assets/pointborder.png'

import maintitle from 'assets/maintitle.png'
import formbot from './imgs/formbot.png'
import reader from './imgs/reader.png'

import TipsBox from './components/TipsBox'    
import SuccessBox from './components/SuccessBox'    

export class LastAnswerView extends Component {
constructor(props) {
   super(props);
   this.state = {
    TipsBoxShow:false,
    SuccessBoxShow:false,
    userAnswer:null,
   };
   this.refreshProps = this.refreshProps.bind(this);
   this.SelectOption = this.SelectOption.bind(this);
   this.NextQuestion = this.NextQuestion.bind(this);
   this.TipsBoxHandle = this.TipsBoxHandle.bind(this);
   this.SuccessBoxHandle = this.SuccessBoxHandle.bind(this);
}
componentWillReceiveProps(nextprops) {
   this.refreshProps(nextprops);
}
componentDidMount() {
   this.refreshProps(this.props);
}
refreshProps(props) {}
SelectOption(option){
    this.state.userAnswer = option;
    this.setState(this.state);
}
NextQuestion(){
    if (this.state.userAnswer == 'A') {
        this.SuccessBoxHandle(true);
        this.setState(this.state);
        
    }else{
        this.TipsBoxHandle(true);
        this.setState(this.state);
    }
}
TipsBoxHandle(boolean){
    this.state.TipsBoxShow = boolean;
    this.setState(this.state); 
}
SuccessBoxHandle(boolean){
    this.state.SuccessBoxShow = boolean;
    if (!this.state.SuccessBoxShow) {
        window.location.href = 'https://m1.cmbc.com.cn:8008/CMBC_MMServer/app/market/wap/wapDownload01.jsp';
    }
    this.setState(this.state); 
}
render() {
   return (
   <div className={[style.ViewBox,'childcenter childcolumn'].join(' ')}>
        {this.state.TipsBoxShow?<TipsBox onClose={this.TipsBoxHandle.bind(this,false)}/>:''}
        {this.state.SuccessBoxShow?<SuccessBox onClose={this.SuccessBoxHandle.bind(this,false)}/>:''}
        <div className={style.TopGround}>
            <img src={topground} alt=""/>
        </div>

        <div className={[style.DetialBox,'childcenter childcolumn'].join(' ')}>
            <div className={style.MainTitle}>
                <img src={maintitle} alt=""/>
            </div>
            <div className={[style.ReaderBox,'childcenter childcontentend'].join(' ')}>
                <img src={reader} className={style.reader} alt=""/>
            </div>
            <div className={style.AnswerOutBox}>
                <div className={style.AnswerBox}>
                    <div className={[style.AnswerContent,'childcenter'].join(' ')}>
                        <div className={style.AnswerDetial} style={{'--childbkg':'url('+pointborder+')'}}>
                            <div className={style.QuestionIndexBox}>
                                题目：2/2
                            </div>
                            <div className={[style.QuestionTitleBox,'childcenter'].join(' ')}>
                                薪盈宝快速赎回几日到帐
                            </div>
                            <div className={style.OptionGroup}>
                                <div onClick={this.SelectOption.bind(this,'A')} className={[style.OptionButton,this.state.userAnswer == 'A'? style.Selected:'','childcenter'].join(' ')}>A、当日</div>
                                <div onClick={this.SelectOption.bind(this,'B')} className={[style.OptionButton,this.state.userAnswer == 'B'? style.Selected:'','childcenter'].join(' ')}>B、次日</div>
                                <div onClick={this.SelectOption.bind(this,'C')} className={[style.OptionButton,this.state.userAnswer == 'C'? style.Selected:'','childcenter'].join(' ')}>C、第三日 </div>
                            </div>
                            <div className={[style.SubmitButton,'childcenter'].join(' ')} onClick={this.NextQuestion}>选好了，提交</div>
                        </div>
                    </div>
                    <div className={style.AnswerBot}>
                        <img src={coin} className={style.BotCoin} alt=""/>
                        <img src={formbot} className={style.botpng} alt=""/>
                    </div>
                </div>
            </div>
        </div>
       
        <div className={style.BotGround}>
            <img src={botground} alt=""/>
        </div>
   </div>
   );
}
}
LastAnswerView.contextTypes = {
    HandleRoute: PropTypes.func
  };
export default LastAnswerView;