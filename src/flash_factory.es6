class FlashFactory {
  constructor(containerId="lunicorn_flash"){
    this.container = this.createContainer(containerId)
  }

  addFlash(kind, message, flashTimeoutMS=7000) {
    const flash = new FlashMessage(kind, message)
    this.container.appendChild(flash.el)
    flash.scrollTo()
    setTimeout(flash.remove.bind(flash), flashTimeoutMS)
    return flash
  }

  createContainer(containerId){
    const container = document.createElement("div")
    container.id = containerId
    document.body.insertBefore(container, document.body.childNodes[0])
    return container
  }
}

class FlashMessage{
  constructor(kind, text) {
    this.el = this.createElement(kind)
    this.message = this.sanitizeMessage(text)
    this.el.appendChild(this.message)
  }

  sanitizeMessage(text){
    return document.createTextNode(text)
  }

  createElement(kind){
    const element = document.createElement("div")
    element.className = kind
    return element
  }

  scrollTo(){
    window.scrollTo(0, 0)
  }

  remove() {
    this.el.remove()
  }
}

export { FlashFactory }
