import React, { Component } from 'react';
import style from './SuccessBox.scss';
import DarkBox from 'components/DarkBox'

import firework from './imgs/firework.png'
import bg from './imgs/bg.png'
    
export class SuccessBox extends Component {
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
        <div className={style.SuccessBox}>
            
            <img src={firework} className={style.firework} alt=""/>
            <div className={style.TipsTitle}>
                <div className={[style.TitleValue,'childcenter'].join(' ')}>
                    回答成功
                </div>
            </div>
            <div className={[style.ResultBox,'childcenter childcolumn'].join(' ')}>
                <span>恭喜你，答对了</span>
                <span>点击下方购买按钮，领取奖品吧！</span>
            </div>
            <div className={[style.NextButton,'childcenter'].join(' ')} onClick={this.Close}>
                立即购买
            </div>
        </div>
        <img src={bg} className={style.bgLight} alt=""/>
   </DarkBox>
   );
}
}
export default SuccessBox;