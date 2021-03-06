import React, { Component } from 'react'
import style from './ShareBox.scss'
import {api} from 'common/app'
import share from 'assets/share.jpg'
  
export class ShareBox extends Component {
constructor(props) {
  super(props);
  this.state = {};
     this.refreshProps = this.refreshProps.bind(this);
     this.setShare = this.setShare.bind(this);

}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
  this.setShare();
}
refreshProps(props) {
  
}
setShare(){
    var share_url = window.location.href;
    var share_img ="http://h5.rup-china.com/ChinaMinShengBank/public/html/static/media/"+share.split('/')[3];

    var share_title = "答题有惊喜，好礼等着您！";
    var share_content = "答题有礼，有机会领取10元话费。名额有限，先到先得！";
    api.getShare(window.location.href).then(
      response => {
        window.wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: response.data.appid, // 必填，公众号的唯一标识
          timestamp: response.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: response.data.noncestr, // 必填，生成签名的随机串
          signature: response.data.signature, // 必填，签名，见附录1
          jsApiList: [
            "chooseImage",
            "onMenuShareTimeline",
            "onMenuShareAppMessage",
            "previewImage",
            "uploadImage",
            "checkJsApi",
            "onMenuShareTimeline",
            "onMenuShareAppMessage",
            "hideMenuItems",
            "startRecord",
            "stopRecord",
            "onVoiceRecordEnd",
            "playVoice",
            "pauseVoice",
            "onVoicePlayEnd",
            "uploadVoice",
            "downloadVoice"
          ]
        });
        window.wx.ready(function() {
          window.wx.onMenuShareAppMessage({
            title: share_title, // 分享标题
            desc: share_content, // 分享描述
            link: share_url, // 分享链接
            imgUrl: share_img, // 分享图标
            type: "link", // 分享类型,music、video或link，不填默认为link
            dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          });

          window.wx.onMenuShareTimeline({
            title: share_title, // 分享标题
            desc: share_content, // 分享描述
            link: share_url, // 分享链接
            imgUrl: share_img, // 分享图标
            type: "link", // 分享类型,music、video或link，不填默认为link
            dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          });
        });
        window.wx.error(function(res) {});
      },
      err => {}
    );
}
render() {
  return (
    <div style={{display:'none'}}>
    
    </div>
   )
   }
}
export default ShareBox