import React, { Component } from 'react';
import style from './SuccessBox.scss';
import DarkBox from 'components/DarkBox'

import firework from './imgs/firework.png'
import bg from './imgs/bg.png'
import longimage from 'assets/longimage.jpg'
import buttonline from 'assets/buttonline.png'
import returnback from 'assets/returnback.png'

    
export class SuccessBox extends Component {
constructor(props) {
   super(props);
   this.state = {};
   this.refreshProps = this.refreshProps.bind(this);
   this.Close = this.Close.bind(this);
   this.HandleTips = this.HandleTips.bind(this);
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
HandleTips(boolean){
    this.state.TipsShow = boolean;
    this.setState(this.state);
}
render() {
   return (
    <DarkBox >
        {this.state.TipsShow?<div className={style.LongImageTips}>
            <div className={style.ScrollBox}>
                <div className={[style.CloseTipsButton,'childcenter'].join(' ')} onClick={this.HandleTips.bind(this,false)}>
                    <img src={returnback} alt=""/>
                </div>
                <img src={longimage} className={style.tipsimgs} alt=""/>
                <div className={[style.Button,'childcenter'].join(' ')} onClick={this.Close}>
                    <div className={style.ButtonLine}>
                        <img src={buttonline} alt=""/>
                    </div>
                    立即购买
                </div>
            </div>
        </div>:''}
        <div className={style.SuccessBox}>
            <img src={firework} className={style.firework} alt=""/>
            <div className={style.TipsTitle}>
                <div className={[style.TitleValue,'childcenter'].join(' ')}>
                    回答成功
                </div>
            </div>
            <div className={[style.ResultBox,'childcenter childcolumn'].join(' ')}>
                <span>恭喜你，答对了</span>
                <span>赶快来领取奖品吧！</span>
            </div>
            <div className={[style.NextButton,'childcenter'].join(' ')} onClick={this.HandleTips.bind(this,true)}>
                下一步
            </div>
        </div>
        <img src={bg} className={style.bgLight} alt=""/>
   </DarkBox>
   );
}
}
export default SuccessBox;