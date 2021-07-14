import { Fail,Success,Validation } from "../monoids/monoids";

export const isPresent=Validation((key,x)=>
    !!x
    ? Success(x) 
    : Fail([`${key} needs to be present`])
)