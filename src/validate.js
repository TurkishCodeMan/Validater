import { List } from "immutable-ext"
import { Fail, Success } from "./monoids/monoids"

function validate(spec, obj) {
    return List(Object.keys(spec)).foldMap(key => {
        return spec[key].run(key,obj[key])
    }, Success([obj]));
}

// const Validater = spec =>
// ({
//     add: v => Validater([...spec, v]),
//     run: (obj) => List(Object.keys(spec)).foldMap(key => {
//         console.log(spec)

//         return spec[key](obj[key]) ? Success([obj]) : Fail([`${key} bad`])
//     }, Success([obj]))

// })


export default validate;