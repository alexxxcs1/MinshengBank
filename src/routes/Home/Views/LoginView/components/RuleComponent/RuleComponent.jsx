import React, { Component } from 'react';
import style from './RuleComponent.scss';
import DarkBox from 'components/DarkBox'
    
export class RuleComponent extends Component {
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
        <div className={style.RuleComponent}>
            <div className={[style.RuleTitle,'childcenter'].join(' ')}>
                活动规则
            </div>
            <div className={style.RuleDetial}>
                <p>1.活动时间：即日起到2019年3月31日。</p>
                <p>2.客户参与活动，并在活动期间下载注册民生银行手机APP，完成活动流程，就有机会获得福利话费。</p>
                <p>3.南方基金将于活动结束后10个工作日以内，发放到客户在民生银行手机银行登录过的电话号码中，每个手机号最多可获得一次中奖机会，同时每位客户有且只有1次中奖机会。</p>
                <p>4.如果发现客户恶意作弊，民生银行及南方基金有权利取消其获奖资格。</p>
                <p>5. 南方基金和民生银行有权在法律法规允许的范围内对本活动进行解释。</p>
            </div>
        </div>
        <div className={style.CloseButton} onClick={this.Close}></div>
       </DarkBox>
   );
}
}
export default RuleComponent;