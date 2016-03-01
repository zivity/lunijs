import pym from "pym.js"

class Lunicorn {
  constructor(iframeCrosser) {
    this.iframeCrosser = iframeCrosser
  }

  sendMessage(messageType, message){
    message = message || {} //pym doesn fire the callback if message is undefined
    this.iframeCrosser.sendMessage(messageType, JSON.stringify(message))
  }

  addHandler(messageType, cb) {
    this.iframeCrosser.onMessage(messageType, function(data){
      cb(JSON.parse(data))
    })
  }

  static createIframe(parentDomID, iframeUrl) {
    return new Lunicorn(new pym.Parent(parentDomID, iframeUrl, {}))
  }

  static consumeIframe(pollingInterval=2000) {
    let child = new pym.Child({polling: pollingInterval})
    child.sendHeight()
    return new Lunicorn(child)
  }
}

export { Lunicorn }
