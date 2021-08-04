import PhysicItem   from '../src/PhysicItem.js'

export default function (describe, it, expect, beforeEach, jest){
    
    const EXTERIOR_START    = 0
    const ADJACENT_START    = 30
    const OVERLAPS_START    = 40
    const MIDDLE_CENTER     = 90
    const OVERLAPS_END      = 140
    const ADJACENT_END      = 150
    const EXTERIOR_END      = 170
    
    let item1, testItem

    beforeEach(()=>{
       item1 = new PhysicItem()
       item1.size({w:100,h:100})
       item1.moveTo({x:50, y:50})

       testItem = new PhysicItem()
       testItem.size({w:20,h:20})
    })
    describe('Collisions', ()=>{
        it('collides from the inside', ()=>{
            testItem.moveTo({x:MIDDLE_CENTER, y:MIDDLE_CENTER})
            expect(item1.collidesWith(testItem)).toBe(true)
        })
        // TOP LEFT -------------------------------------
        it("doesn't collide from top-left-exterior", ()=>{
            testItem.moveTo({x:EXTERIOR_START, y:EXTERIOR_START})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("doesn't collide from top-left-adjacent", ()=>{
            testItem.moveTo({x:ADJACENT_START, y:ADJACENT_START})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("collides from top-left-overlap", ()=>{
            testItem.moveTo({x:OVERLAPS_START, y:OVERLAPS_START})
            expect(item1.collidesWith(testItem)).toBe(true)
        })
        // TOP CENTER -------------------------------------
        it("doesn't collide from top-center-exterior", ()=>{
            testItem.moveTo({x:MIDDLE_CENTER, y:EXTERIOR_START})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("doesn't collide from top-center-adjacent", ()=>{
            testItem.moveTo({x:MIDDLE_CENTER, y:ADJACENT_START})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("collides from top-center-overlap", ()=>{
            testItem.moveTo({x:MIDDLE_CENTER, y:OVERLAPS_START})
            expect(item1.collidesWith(testItem)).toBe(true)
        })
        // TOP RIGHT -------------------------------------
        it("doesn't collide from top-right-exterior", ()=>{
            testItem.moveTo({x:EXTERIOR_END, y:EXTERIOR_START})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("doesn't collide from top-right-adjacent", ()=>{
            testItem.moveTo({x:ADJACENT_END, y:ADJACENT_START})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("collides from top-right-overlap", ()=>{
            testItem.moveTo({x:OVERLAPS_END, y:OVERLAPS_START})
            expect(item1.collidesWith(testItem)).toBe(true)
        })
        // MIDDLE LEFT -------------------------------------
        it("doesn't collide from middle-left-exterior", ()=>{
            testItem.moveTo({x:EXTERIOR_START, y:MIDDLE_CENTER})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("doesn't collide from middle-left-adjacent", ()=>{
            testItem.moveTo({x:ADJACENT_START, y:MIDDLE_CENTER})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("collides from middle-left-overlap", ()=>{
            testItem.moveTo({x:OVERLAPS_START, y:MIDDLE_CENTER})
            expect(item1.collidesWith(testItem)).toBe(true)
        })
        // MIDDLE RIGHT -------------------------------------
        it("doesn't collide from middle-right-exterior", ()=>{
            testItem.moveTo({x:EXTERIOR_END, y:MIDDLE_CENTER})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("doesn't collide from middle-right-adjacent", ()=>{
            testItem.moveTo({x:ADJACENT_END, y:MIDDLE_CENTER})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("collides from middle-right-overlap", ()=>{
            testItem.moveTo({x:OVERLAPS_END, y:MIDDLE_CENTER})
            expect(item1.collidesWith(testItem)).toBe(true)
        })
        // BOTTOM LEFT -------------------------------------
        it("doesn't collide from bottom-left-exterior", ()=>{
            testItem.moveTo({x:EXTERIOR_START, y:EXTERIOR_END})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("doesn't collide from bottom-left-adjacent", ()=>{
            testItem.moveTo({x:ADJACENT_START, y:ADJACENT_END})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("collides from bottom-left-overlap", ()=>{
            testItem.moveTo({x:OVERLAPS_START, y:OVERLAPS_END})
            expect(item1.collidesWith(testItem)).toBe(true)
        })
        // BOTTOM CENTER -------------------------------------
        it("doesn't collide from bottom-center-exterior", ()=>{
            testItem.moveTo({x:MIDDLE_CENTER, y:EXTERIOR_END})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("doesn't collide from bottom-center-adjacent", ()=>{
            testItem.moveTo({x:MIDDLE_CENTER, y:ADJACENT_END})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("collides from bottom-center-overlap", ()=>{
            testItem.moveTo({x:MIDDLE_CENTER, y:OVERLAPS_END})
            expect(item1.collidesWith(testItem)).toBe(true)
        })
        // BOTTOM RIGHT -------------------------------------
        it("doesn't collide from bottom-right-exterior", ()=>{
            testItem.moveTo({x:EXTERIOR_END, y:EXTERIOR_END})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("doesn't collide from bottom-right-adjacent", ()=>{
            testItem.moveTo({x:ADJACENT_END, y:ADJACENT_END})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("collides from bottom-right-overlap", ()=>{
            testItem.moveTo({x:OVERLAPS_END, y:OVERLAPS_END})
            expect(item1.collidesWith(testItem)).toBe(true)
        })
        // BOTTOM RIGHT -------------------------------------
        it("doesn't collide from bottom-right-exterior", ()=>{
            testItem.moveTo({x:EXTERIOR_END, y:EXTERIOR_END})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("doesn't collide from bottom-right-adjacent", ()=>{
            testItem.moveTo({x:ADJACENT_END, y:ADJACENT_END})
            expect(item1.collidesWith(testItem)).toBe(false)
        })
        it("collides from bottom-right-overlap", ()=>{
            testItem.moveTo({x:OVERLAPS_END, y:OVERLAPS_END})
            expect(item1.collidesWith(testItem)).toBe(true)
        })

    })    
}


