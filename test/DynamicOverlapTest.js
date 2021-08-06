import PhysicItem   from '../src/PhysicItem.js'

export default function (describe, it, expect, beforeEach, jest){
    
    let item1, item2

    const advanceFrames = (nFrames)=>{
        while(nFrames--){
            item1.next()
            item2.next()
        }
    }

    beforeEach(()=>{
       item1 = new PhysicItem()
       item1.size({w:50,h:50})
       item1.moveTo({x:0, y:1000})

       item2 = new PhysicItem()
       item2.size({w:50,h:50})
       item2.moveTo({x:300, y:1000})
    })
    describe('Overlapping: Dynamic to Static ', ()=>{
        it('overlaps with only velocity', ()=>{
            item1.move({vx:25})
            advanceFrames(10)
            expect(item1.collidesWith(item2)).toBe(false)
            advanceFrames(1)
            expect(item1.collidesWith(item2)).toBe(true)
        })

        it('overlaps with only acceleration', ()=>{
            item1.move({ax:10})
            advanceFrames(7)
            expect(item1.collidesWith(item2)).toBe(false)
            advanceFrames(1)
            expect(item1.collidesWith(item2)).toBe(true)
        })
      
        it('collides with  acceleration AND velocity', ()=>{
            item1.move({ax:5, vx: 10})
            advanceFrames(8)
            expect(item1.collidesWith(item2)).toBe(false)
            advanceFrames(1)
            expect(item1.collidesWith(item2)).toBe(true)
        })
        it('stops overlapping after encounter', ()=>{
            item1.move({ax:5, vx: 10})
            advanceFrames(9)
            expect(item1.collidesWith(item2)).toBe(true)
            advanceFrames(1)
            expect(item1.collidesWith(item2)).toBe(false)
        })
    })

    describe('Overlapping: Dynamic to Dynamic ', ()=>{
        it('collides with only velocity', ()=>{
            item1.move({vx:20})
            item2.move({vx:-20})
            advanceFrames(6)
            expect(item1.collidesWith(item2)).toBe(false)
            advanceFrames(1)
            expect(item1.collidesWith(item2)).toBe(true)
            advanceFrames(1)
            expect(item1.collidesWith(item2)).toBe(true)
            advanceFrames(1)
            expect(item1.collidesWith(item2)).toBe(false)
        })

        it('collides projectiles in the air', ()=>{
            item1.move({vx:33, vy:40, ay:-10})
            item2.move({vx:-55, vy:50, ay:-10})
            advanceFrames(2)
            expect(item1.collidesWith(item2)).toBe(false)
            advanceFrames(1)
            expect(item1.collidesWith(item2)).toBe(true)
            advanceFrames(1)
            expect(item1.collidesWith(item2)).toBe(false)
        })
    })
}

 
