import {addition} from './firstfunction';

/* xdescribe() => excluded the test cases */
describe('Angular Unit Testing', ()=>
{
    it('Testing addition of two numbers', ()=>{
        expect(addition(10,20)).toBe(30);
    });

    it('Test string data',()=>{
        let name = "Guhan Ganesan";
        expect(name).toBe("Guhan Ganesan");
        expect(name).not.toBe("Guhan G");
    });

    it('Test string data',()=>{
        let name = "Guhan Ganesan";
        expect(name).toEqual("Guhan Ganesan");
        expect(name).not.toEqual("Ganesan Guhan");
    });
    
    it('Test Regular expression',()=>{
        let message = "He is 30 years old";
        expect(message).toMatch(/\d+/);
        expect(message).toMatch('is');
    });
    
    it('Test array of data',()=>{
        let data = [1,2,3,4];
        expect(data).toEqual([1,2,3,4])
        expect(data).toContain(3);
    });
    
    it('Test array of data',()=>{
        let a = {
            x:10
        };
        let b = {
            x:10
        };
        expect(a).toEqual(b);
    });
    
    
    
});

