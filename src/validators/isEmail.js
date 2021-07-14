import { Fail,Success,Validation } from "../monoids/monoids";

export const isEmail = Validation((key, x) =>
    /@/.test(x)
        ? Success(x)
        : Fail([`${key} needs to be present`])
)