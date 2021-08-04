import PhysicItem   from '../src/PhysicItem.js'

export default function (describe, it, expect, beforeEach, jest){

    let item 

    const advanceFrames = (nFrames)=>{
        while(nFrames--){
            item.next()
        }
    }
    beforeEach(()=>{
        item = new PhysicItem()
        
    })
    describe('Uniform Movement', ()=>{
        it('moves to the right', ()=>{
            item.move({vx:10})
            advanceFrames(7)
            expect(item.left()).toBe(70)
        })
        it('moves to the left', ()=>{
            item.move({vx:-10})
            advanceFrames(7)
            expect(item.left()).toBe(-70)
        })
        it('moves up', ()=>{
            item.move({vy:10})
            advanceFrames(7)
            expect(item.top()).toBe(70)
        })
        it('moves down', ()=>{
            item.move({vy:-10})
            advanceFrames(7)
            expect(item.top()).toBe(-70)
        })
        it('moves diagonally', ()=>{
            item.move({vx:5, vy:10})
            advanceFrames(7)
            expect(item.top()).toBe(70)
            expect(item.left()).toBe(35)
        })
    })

    describe('Accelerated movement from static', ()=>{
        it('accelerates to the right', ()=>{
            item.move({ax:10})
            advanceFrames(7)
            expect(item.left()).toBe(245)
        })
        it('accelerates to the left', ()=>{
            item.move({ax:-10})
            advanceFrames(7)
            expect(item.left()).toBe(-245)
        })
        it('accelerates up', ()=>{
            item.move({ay:10})
            advanceFrames(7)
            expect(item.top()).toBe(245)
        })
        it('accelerates down', ()=>{
            item.move({ay:-10})
            advanceFrames(7)
            expect(item.top()).toBe(-245)
        })
        it('accelerates diagonally', ()=>{
            item.move({ax:5, ay:10})
            advanceFrames(7)
            expect(item.top()).toBe(245)
            expect(item.left()).toBe(122.5)
        })
    })

    describe('Accelerated movement with initial velocity', ()=>{
        it('accelerates to the right', ()=>{
            item.move({vx:2})
            advanceFrames(2)
            item.move({ax:10})
            advanceFrames(7)
            expect(item.left()).toBe(263)
        })
        
    })

    describe('Deceleration', ()=>{
        it('accelerates to the right', ()=>{
            item.move({vx:50})
            advanceFrames(2)
            item.move({ax:-10})
            advanceFrames(7)
            expect(item.left()).toBe(205)
        })
    })
}


