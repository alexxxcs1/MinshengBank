import React, { Component } from 'react';
import style from './AnswerView.scss';
import PropTypes from "prop-types";
import botground from 'assets/botground.png'
import topground from 'assets/topground.png'
import coin from 'assets/coin.png'
import pointborder from 'assets/pointborder.png'

import maintitle from 'assets/maintitle.png'
import formbot from './imgs/formbot.png'
import reader from './imgs/reader.png'

import TipsBox from './components/TipsBox'    

export class AnswerView extends Component {
constructor(props) {
   super(props);
   this.state = {
    TipsBoxShow:false,
    userAnswer:null,
   };
   this.refreshProps = this.refreshProps.bind(this);
   this.SelectOption = this.SelectOption.bind(this);
   this.NextQuestion = this.NextQuestion.bind(this);
   this.TipsBoxHandle = this.TipsBoxHandle.bind(this);
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
        this.context.HandleRoute(2);
    }else{
        this.TipsBoxHandle(true);
        this.setState(this.state);
    }
}
TipsBoxHandle(boolean){
    this.state.TipsBoxShow = boolean;
    this.setState(this.state); 
}
render() {
   return (
   <div className={[style.ViewBox,'childcenter childcolumn'].join(' ')}>
        {this.state.TipsBoxShow?<TipsBox onClose={this.TipsBoxHandle.bind(this,false)}/>:''}
        <div className={style.TopGround}>
            <img src={topground} alt=""/>
        </div>

        <div className={[style.DetialBox,'childcenter childcolumn'].join(' ')}>
            <div className={[style.TitleCoinBox,'childcenter'].join(' ')}>
                <img src={coin} className={style.TitleCoin} alt=""/>
            </div>
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
                                题目：1/2
                            </div>
                            <div className={[style.QuestionTitleBox,'childcenter'].join(' ')}>
                                货币基金的特点是什么？
                            </div>
                            <div className={style.OptionGroup}>
                                <div onClick={this.SelectOption.bind(this,'A')} className={[style.OptionButton,this.state.userAnswer == 'A'? style.Selected:'','childcenter'].join(' ')}>A、收益稳定</div>
                                <div onClick={this.SelectOption.bind(this,'B')} className={[style.OptionButton,this.state.userAnswer == 'B'? style.Selected:'','childcenter'].join(' ')}>B、收益波动较大</div>
                                <div onClick={this.SelectOption.bind(this,'C')} className={[style.OptionButton,this.state.userAnswer == 'C'? style.Selected:'','childcenter'].join(' ')}>C、收益较低 </div>
                            </div>
                            <div className={[style.SubmitButton,'childcenter'].join(' ')} onClick={this.NextQuestion}>选好了，下一题 </div>
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
AnswerView.contextTypes = {
    HandleRoute: PropTypes.func
  };
export default AnswerView;