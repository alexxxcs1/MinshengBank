import qs from 'qs';
const AskPost = (ajaxinstance) => {
    const customer = {}
    customer.UserLogin = (tel,num,credit) => {
        return ajaxinstance.post('Index/check',qs.stringify({
            tel,num,credit
        }));
      }
    customer.SendCode = (tel) => {
        return ajaxinstance.post('Index/send',qs.stringify({
            tel
        }));
      }
    customer.isLogin = () => {
        return ajaxinstance.post('Index/isCheckLogin');
    }  
    return customer
  }
  
  export default AskPost