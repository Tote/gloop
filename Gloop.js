import GameCanvas from "./GameCanvas.js"
import Graphics from "./Graphics.js"

export default class Gloop{
    constructor(graphics){
		this.rules = []
		this.items = []
		this.looper = fn => window.requestAnimationFrame(fn)
		this.graphics = graphics
	}

	run(timestamp){
		this.graphics.clear()

		this.items.forEach( item => {
			item.next(timestamp)
		})
		this.rules
			.filter(  rule => rule.when() ) 
			.forEach( rule => rule.then() )

		this.items.forEach( item => {
			item.draw(this.graphics)
		})
		
		this.looper( this.run.bind(this) )
	}

	rule( rule ){
		this.rules.push(rule)
	}
	
	item( item ){
		this.items.push(item)
	}
}

Gloop.createGame = size => {
	const canvas    = new GameCanvas(size)
	const graphics  = new Graphics(canvas)
	const loop      = new Gloop(graphics)

	return loop
}