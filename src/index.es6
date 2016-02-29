import pym from "pym.js"

class Lunicorn {
  constructor(iframeCrosser) {
    this.iframeCrosser = iframeCrosser
  }

  sendMessage(messageType, message){
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

  static consumeIframe(pollingInterval=100) {
    return new Lunicorn(new pym.Child({polling: pollingInterval}))
  }
}

export { Lunicorn }
