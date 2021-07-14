import Validate from "../validate";
import { isEmail } from "../validators/isEmail";
import { isPresent } from "../validators/isPresent";

describe("Validation",()=>{
    test("Validation Test",()=>{
        const validation={name:isPresent,email:isPresent.concat(isEmail)};
        const obj={name:'huseyin',email:'huseyinhotmail.com'}
        const result=Validate(validation,obj);
        console.log(result)
        expect(result.x[0]).toBe('email needs to be present')
    })
})