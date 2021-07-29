import Gloop from '../src/Gloop.js'

export default function (describe, it, expect, beforeEach, jest){
    let gloop
    let graphics
    
    beforeEach(()=>{
        graphics = {clear(){}}
        gloop = new Gloop(graphics)
    })
    describe('Engine', ()=>{
        it('Creates a game', ()=>{
            expect(gloop).toBeInstanceOf(Gloop)
        })
        
        it('Runs a rule', ()=>{
            const fakeRule = {
                when: jest.fn(),
                then: jest.fn(),
            }
        
            gloop.rule(fakeRule)
            gloop.run()
            
            expect(fakeRule.when).toHaveBeenCalled()
        })

        it('Executes a rule when true', ()=>{
            const fakeRule = {
                when: jest.fn( () => true ),
                then: jest.fn(),
            }
        
            gloop.rule(fakeRule)
            gloop.run()
            
            expect(fakeRule.then).toHaveBeenCalled()
        })

        it('Excludes a rule when false', ()=>{
            const fakeRule = {
                when: jest.fn( () => false ),
                then: jest.fn(),
            }
        
            gloop.rule(fakeRule)
            gloop.run()
            
            expect(fakeRule.then).not.toHaveBeenCalled()
        })

        it('Draws items', ()=>{
            const fakeItem = {draw: jest.fn(), next(){}}
        
            gloop.item(fakeItem)
            gloop.run()
            
            expect(fakeItem.draw).toHaveBeenCalled()
        })

        it('Advances the frame of the item', ()=>{
            const fakeItem = {draw(){}, next:jest.fn()}
        
            gloop.item(fakeItem)
            gloop.run()
            
            expect(fakeItem.next).toHaveBeenCalled()
        })
        
    })    
}

