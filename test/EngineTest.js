import Gloop from '../src/Gloop.js'

export default function (describe, it, expect, beforeEach){
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
        
        it('Adds a rule', ()=>{
            const fakeRule = {
                when: jest.fn(),
                then: jest.fn(),
            }
        
            gloop.rule(fakeRule)
            gloop.run()
            
            expect(fakeRule.when).toHaveBeenCalled()
        })
        
    })    
}

