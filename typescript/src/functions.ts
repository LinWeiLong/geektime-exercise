// 第九讲 函数相关知识点梳理

// 函数的定义，4种方法
function add1(x: number, y: number) {
  return x + y
}
// 通过变量定义函数类型，然后在下一步实现其内部
let addFuns2: (x: number, y: number) => number
addFuns2 = (x, y) => x + y - 1
// 类型别名
type add3 = (x: number, y: number) => number
// 接口
interface add4 {
  (x: number, y: number): number
}

// 函数的实参需要跟形参一样，多了一个3是不行的
// add1(1, 2, 3)

// 声明了可选参数，以 参数名? 的形式，
// 可选参数必须添加在所有参数的最后面
function add5(x: number, y: number, z?: string) {
  return y ? x + y : x
}
add5(5, 1)

// 可以给参数赋予默认值
// 在必选参数前，默认参数不能省略，不想填要给undefined
function add6(x: number, y = 0, z: number, q = 1) {
  console.log(x, y, z, q)
  return x + y + z + q
}
console.log(add6(1, 1, 3))

// 剩余参数，写法
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
console.log('add7(1,2,3,4,5)', add7(1, 2, 3, 4, 5))

// 函数重载，实际上只写any那条也可以，但是有其意义
// 函数重载的意义在于用前面两条声明在使用的时候进行约束，规范函数的一个使用情况
function add8(...rest: number[]): number
function add8(...rest: string[]): number
function add8(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  } else if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}

console.log('add8 with number', add8(1, 2, 3))
console.log('add8 with string', add8('tom', ',ary', 'lilei'))
