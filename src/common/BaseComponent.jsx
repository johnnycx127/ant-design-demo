class BaseComponent extends React.Component{
    constructor(props){
        super(props);
        this.ajaxs = [];
    }
    //fetch(url,data,fuc){
    //    //ajax
    //     let ajax = $.ajax();
    //    this.ajaxs.push(ajax);
    //}
    //componentUnmount(){
    //    for(let i = 0;i<this.ajaxs.length;i++){
    //        let a = this.ajaxs[i];
    //        a.abort();
    //    }
    //
    //}
}
export default BaseComponent;
