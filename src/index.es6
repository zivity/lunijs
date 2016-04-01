import { FlashFactory } from "./flash_factory"
import pym from "pym.js"

class Lunicorn {
  constructor(iframeCrosser) {
    this.iframeCrosser = iframeCrosser
  }

  sendMessage(messageType, message) {
    message = message || {} //pym doesn fire the callback if message is undefined
    this.iframeCrosser.sendMessage(messageType, JSON.stringify(message))
  }

  addHandler(messageType, cb) {
    this.iframeCrosser.onMessage(messageType, function(data) {
      cb(JSON.parse(data))
    })
  }

  addFlashHandler() {
    this.addHandler("flash", (data)=> {
      let kind;
      for (kind in data) {
        this.addFlash(kind, data[kind])
      }
    })
  }

  addFlash(kind, message) {
    this._flashFactory = this._flashFactory || new FlashFactory()
    return this._flashFactory.addFlash(kind, message)
  }

  static createIframe(parentDomID, iframeUrl) {
    const lunicorn = new this(new pym.Parent(parentDomID, iframeUrl, {}))
    lunicorn.addFlashHandler()
    return lunicorn
  }


  static consumeIframe(pymOpts = {}) {
    let child = new pym.Child(pymOpts)
    child.sendHeight()
    return new this(child)
  }
}

export { Lunicorn }
