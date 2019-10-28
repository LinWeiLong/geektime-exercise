// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'
// str = 123

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number| string > = [1, 2, '3'] // 联合类型，数组能有number和string

// 元组，限定元素的个数和类型
let tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2] // 虽然插入了2，但是还是取不出来的，会报错

// 函数
let add = (x:number, y:number) => x + y
let compute: (x: number, y: number) => number

compute = (a,b) => a-b
// 对象
let obj: object = { x: 1, y: 2 }
// obj.x //这样会报错，因为obj没有声明内部数据的类型
let obj2: { x: number, y: number } = {x: 1, y:2}
obj2.x = 6

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()

// undefined and null
let ud:undefined = undefined
let nu: null = null

// any 任意类型
let aha: any = 1
aha = '666' // this works fine

// never 类型，永远不会返回的类型
