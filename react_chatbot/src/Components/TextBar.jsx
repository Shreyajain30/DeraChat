import React,{Component,createRef} from "react";
import './TextBar.css'
export default  class TextBar extends Component{
    constructor(props){
        super(props);
        this.input=createRef();
    }
    sendMessage(){
        if(this.input.current.value!=='')
        this.props.onSend && this.props.onSend( this.input.current.value);
        this.input.current.value='';
    }
    sendMessageIfEnter(e){
        if(e.keyCode===13){
            this.sendMessage();
        }
    }
    render(){
        const sendMessage=this.sendMessage.bind(this);
        const sendMessageIfEnter=this.sendMessageIfEnter.bind(this);
        return(
            <div className="textBar">
                <input className="textBar-input" placeholder={this.props.msg?"Type...":""} type="text" ref={this.input} onKeyDown={sendMessageIfEnter}/>
                <button className="textBar-send" onClick={sendMessage}>{this.props.button} </button>
            </div>
        );
    }
}