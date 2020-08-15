export default class BrowserElement {
    constructor(selector){
        this.element = document.querySelector(selector)
    }

    text(text){
        this.element.innerHTML = text
    }

    show(){
        this.element.style.display = 'block'
    }
}