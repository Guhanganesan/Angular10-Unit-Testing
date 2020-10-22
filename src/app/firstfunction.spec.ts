import {addition} from './firstfunction';

describe('Add two number', ()=>
{
    it('Testing addition of two numbers', ()=>{
        expect(addition(10,20)).toBe(30);
    });
});
