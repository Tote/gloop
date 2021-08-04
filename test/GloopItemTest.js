import Gloop        from '../src/Gloop.js'
import GloopItem    from '../src/GloopItem.js'

export default function (describe, it, expect, beforeEach, jest){
    
    let gloopItem
    
    beforeEach(()=>{
        gloopItem = new GloopItem()
    })
    describe('Gloop Item', ()=>{
        it('can be created', ()=>{
            expect(gloopItem).toBeInstanceOf(GloopItem)
        })

        it('can be positioned horizontally', ()=>{
            gloopItem.moveTo({x:100})
            expect(gloopItem.left()).toBe(100)
        })

        it('can be positioned vertically', ()=>{
            gloopItem.moveTo({y:100})
            expect(gloopItem.top()).toBe(100)
        })

        it('can be resized horizontally', ()=>{
            expect(gloopItem.right()).toBe(0)
            gloopItem.size({w:100})
            expect(gloopItem.right()).toBe(100)
        })

        it('can be resized vertically', ()=>{
            expect(gloopItem.bottom()).toBe(0)
            gloopItem.size({h:100})
            expect(gloopItem.bottom()).toBe(100)
        })
        it('has a center', ()=>{
            gloopItem.moveTo({x:150,y:200})
            gloopItem.size({w:80,h:100})
            expect(gloopItem.centerX()).toBe(190)
            expect(gloopItem.centerY()).toBe(250)
        })
    })    
}

