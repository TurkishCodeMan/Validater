export const Success = x =>
({
    isFail: false,
    x,
    fold: (f, g) => g(x),
    concat: other =>
        other.isFail ? other : Success(x)
})

export const Fail = x =>
({
    isFail: true,
    x,
    fold: (f, g) => f(x),
    concat: other =>
        other.isFail ? Fail(x.concat(other.x)) : Fail(x)
})

export const Validation = run =>
({
    run,
    concat: other =>
        Validation((key, x) => run(key, x).concat(other.run(key, x)))
})

export const Or = v =>
({
    v,
    concat: other =>
        Or(other.isFail ? v : v.concat(other.v))

})