// 第八讲 接口2：函数类型的接口
// 函数类型是对一个函数的输入输出做约定的意思吗？


// 用变量定义函数类型， eg:
let add2: (x: number, y: number) => number

// 用接口表示函数类型
interface Add3 {
    (x: number, y:number) : number // 冒号后面表示函数的返回值类型
}

// 用类型别名表示函数类型
type Add4 = (x: number, y: number) => number


let addFun1: Add3 = (a, b) => a + b
let addFun2: Add4 = (a, b) => a - b

interface Lib {
    (): void;
    version: string;
    doSomething(): void
}

// 初始写法，实现一个Lib接口的实例
// let lib: Lib = (() => { }) as Lib // 使用类型断言
// lib.version = '1.0.0' // 暴露了一个全局的变量 lib
// lib.doSomething = () => { }

// 将上面的写法封装成一个方法
function getLib() {
    let lib: Lib = (() => { }) as Lib // 使用类型断言
    lib.version = '1.0.0' // 暴露了一个全局的变量 lib
    lib.doSomething = () => { }
    return lib
}

let lib1 = getLib()
lib1.doSomething()
let lib2 = getLib()
lib2.doSomething()
