// 数字枚举
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// 当试图修改枚举成员，会报错，提示只读属性不能修改
// Role.Reporter = 'Good'
console.log(Role, Role.Reporter)

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉失败了'
}

console.log(Message, Message.Success)


// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}
console.log(Answer, Answer[0], Answer.Y)

// 枚举成员
enum Char {
    // const 常量枚举，3种情况, 编译阶段就会得出结果
    a, // 没有初始值
    b = Char.a, // 常量的引用
    c = 1 + 3, // 常量表达式
    // computed 计算枚举成员，非常量表达式，会保留到执行阶段才会得出结果
    d = Math.random(),
    e = '123'.length,
    f  = 6// 计算枚举成员后面就算是常量枚举也要赋予初始值，没有的话会报错
}

// 常量枚举
// 在编译之后会被移除
// 课程里面说作用在于当我们不需要一个对象但是需要一个对象的值的时候可以使用。
// 我个人理解是说有一些常量需要在某个代码块里面经常被使用但是又需要统一管理，那么可以使用常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}

// 枚举类型
// 在某些情况下，枚举和枚举成员都可以作为一种单独的类型存在？
enum E { a, b } // 枚举成员没有任何初始值
enum F { a = 0, b = 1 } // 枚举成员都是数字枚举
enum G {a = 'apple', b= 'banana'} // 所有成员都是字符串枚举

// E是对e这个变量的类型描述（约束）
let e: E = 3 // 可以赋值超出枚举类型
let f: F = 3
console.log(e, E)
// e===f  两种不同的枚举类型，不能进行比较


// 枚举成员类型数据， E.a 是对e1这个变量的类型描述（约束）
let e1: E.a =1
let e2: E.b
// e1 === e2 同一枚举类型的不同枚举成员类型也不能比较
let e3: E.a = 2
e1 === e3

// let g0:G = '123' 会报错，应该是只能赋值G里面的字符串给G类型的值了
let g1: G = G.b // 只能赋值G里面的值给属于G类型的变量，就算字符串一样也不能另外赋值
let g2: G.a = G.a