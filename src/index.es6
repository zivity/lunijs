import pym from "pym.js"

class Lunicorn {
  constructor(parentDomID, iframeUrl) {
    this.parentDomID = parentDomID
    this.iframeUrl = iframeUrl
    this.iframeCrosser = this.createIframeCrosser()
  }

  createIframeCrosser(){
    return new pym.Parent(this.parentDomID, this.iframeUrl, {})
  }

  sendMessage(messageType, message){
    this.iframeCrosser.sendMessage(messageType, JSON.stringify(message))
  }

  addHandler(messageType, cb) {
    this.iframeCrosser.onMessage(messageType, function(data){
      cb(JSON.parse(data))
    })
  }
}

Lunicorn.Consumer = pym.Child

export { Lunicorn }
