interface List {
    readonly id: number;
    name: string;
    age?: number; // age属性可有可无
    [x: string]: any // 字符串索引签名
}

interface Result {
    data: List []
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
    })
}

let result = {
    data: [{
        id: 1, name: 'A',
    }, {
        id:2,name: 'B'
    }]
}

render(result)

// 直接传递对象字面量不可以通过编译
// render({
//     data: [{
//         id: 1, name: 'A', sex:'male'
//     }, {
//         id: 2, name: 'B'
//     }]
// })

// 解决办法有三：
// 1. 赋值给一个变量
// 2. 类型断言，意思就是指定某个对象字面量就是指定的类型
// 3. 使用字符串索引签名，见Result接口

// 类型断言例子
// 写法一，推荐写法一，可读性更好
render({
    data: [{
        id: 1, name: 'A', sex:'male'
    }, {
        id: 2, name: 'B'
    }]
} as Result)
// 写法二
render(<Result>{
    data: [{
        id: 1, name: 'A', sex: 'male'
    }, {
        id: 2, name: 'B'
    }]
})

// 数字索引的接口
interface StringArray {
    [index:number]:string
}

let chars:StringArray = ['A', 'B']

interface Names{
    [x: string]: string;
    [z:number]: string
}

let chars2: Names = {'123':'tome', 444:'fuck'}