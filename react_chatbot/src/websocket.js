const host=process.env.MODE_ENV==='production'?window.location.host:'localhost:8080';
export let send;
let onMessageCallback;
//initialize websocket connection to the server
export const startWebsocketConnection=()=>{
  const ws=new window.WebSocket("ws://"+host+"/chat")||{};
  ws.onopen=()=>{
    console.log("Opened websocket connection")
  }
  ws.onclose=(e)=>{
    console.log("Closed websocket connection",e.code,e.reason);
  }
  ws.onmessage=(e)=>{
    console.log(e.data);
    onMessageCallback && onMessageCallback(e.data);
  }
  //bind for specific instance
  send=ws.send.bind(ws)
}
export const registerOnMessageCallback=(fn)=>{
onMessageCallback=fn;
}