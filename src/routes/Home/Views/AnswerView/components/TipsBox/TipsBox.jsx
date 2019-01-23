import React, { Component } from 'react';
import style from './TipsBox.scss';
import DarkBox from 'components/DarkBox'

import firework from './imgs/firework.png'
import bg from './imgs/bg.png'
    
export class TipsBox extends Component {
constructor(props) {
   super(props);
   this.state = {};
   this.refreshProps = this.refreshProps.bind(this);
   this.Close = this.Close.bind(this);
}
componentWillReceiveProps(nextprops) {
   this.refreshProps(nextprops);
}
componentDidMount() {
   this.refreshProps(this.props);
}
refreshProps(props) {}
Close(){
    this.props.onClose();
}
render() {
   return (
    <DarkBox >
        <div className={style.TipsBox}>
            
            <img src={firework} className={style.firework} alt=""/>
            <div className={style.TipsTitle}>
                <div className={[style.TitleValue,'childcenter'].join(' ')}>
                    回答错误
                </div>
            </div>
            <div className={[style.ResultBox,'childcenter childcolumn'].join(' ')}>
                <span>很抱歉，答错了</span>
                <span>强势漏题：本题答案A</span>
            </div>
            <div className={[style.NextButton,'childcenter'].join(' ')} onClick={this.Close}>
                再来一次
            </div>
        </div>
        <img src={bg} className={style.bgLight} alt=""/>
   </DarkBox>
   );
}
}
export default TipsBox;