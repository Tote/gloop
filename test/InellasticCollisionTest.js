import PhysicItem   from '../src/PhysicItem.js'

export default function (describe, it, expect, beforeEach, jest){
    
    let movingItem, staticItem

    const advanceFrames = (nFrames)=>{
        while(nFrames--){
            movingItem.next()
            staticItem.next()
        }
    }

    beforeEach(()=>{
       movingItem = new PhysicItem()
       movingItem.size({w:50,h:50})
       movingItem.moveTo({x:0, y:1000})

       staticItem = new PhysicItem()
       staticItem.size({w:50,h:50})
       staticItem.moveTo({x:300, y:1000})
    })
    describe('Collisions', ()=>{
        describe('Inellastic Collisions in X', ()=> {
            it('doesnt move after collision', ()=>{
                movingItem.move({vx:25})
                advanceFrames(11)
                

                movingItem.inellasticCollision(staticItem)
                const previousLocation = movingItem.left()
                advanceFrames(1)
                const currentLocation = movingItem.left()
                expect(currentLocation).toEqual(previousLocation)
            })
            it('snaps to the left border of the static object', ()=>{
                movingItem.move({vx:25})
                advanceFrames(11)
                

                movingItem.inellasticCollision(staticItem)
                expect(movingItem.right()).toEqual(staticItem.left())
            })
            it('snaps to the right border of the static object', ()=>{
                movingItem.moveTo({x: 600})
                movingItem.move({vx:-25})
                advanceFrames(11)
                
                movingItem.inellasticCollision(staticItem)
                expect(movingItem.left()).toEqual(staticItem.right())
            })
        })
        describe('Inellastic Collisions in Y', ()=> {
            it('doesnt move after collision', ()=>{
                movingItem.moveTo({x:0, y:0})
                staticItem.moveTo({x:0, y:300})
                movingItem.move({vy:25})
                advanceFrames(10)
                
                const previousLocation = movingItem.top()
                movingItem.inellasticCollision(staticItem)
                advanceFrames(1)
                const currentLocation = movingItem.top()
                expect(currentLocation).toEqual(previousLocation)
            })
            it('snaps to the top border of the static object', ()=>{
                movingItem.moveTo({x:0, y:0})
                staticItem.moveTo({x:0, y:300})
                movingItem.move({vy:25})
                advanceFrames(11)
                
                movingItem.inellasticCollision(staticItem)
                expect(movingItem.bottom()).toEqual(staticItem.top())
            })
            it('snaps to the bottom border of the static object', ()=>{
                movingItem.moveTo({x:0, y:300})
                staticItem.moveTo({x:0, y:0})
                movingItem.move({vy:-25})
                advanceFrames(11)
                
                movingItem.inellasticCollision(staticItem)
                expect(movingItem.top()).toEqual(staticItem.bottom())
            })
        })
    })
}

 
