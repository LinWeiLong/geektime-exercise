// class 12 类与接口的关系
//
interface Human {
  name: string
  eat(): void
}

/*
 * 1. 类需要实现接口所有的成员属性
 * 2. 接口只能约束类的公有成员（给类属性加上private会报错），也不能约束构造函数
 */
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string // 加上private会报错
  eat() {
    console.log('asian eat')
  }
}

// 接口的继承
interface Man extends Human {
  run(): void
}

interface Child extends Human {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: 'Tom',
  run() {},
  cry() {},
  eat() {}
}

// 接口也可继承类
class Auto {
  state = 1
}

interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state = 1
}
/*
接口和类的关系需要更深入地去了解一下，课程中提到
1. 接口可以相互继承，以实现接口的复用
2. 类之间也可以相互继承，以实现方法和属性的复用
3. 接口可以通过类来实现，接口只能约束类的公有成员
4. 接口可以抽离出类的成员，包括公有私有和受保护成员
 */

/* 个人理解：
interface实际上就是一切东西的一个描述和约束，interface可以用于：对象 / 函数 / 索引 / 类 / 混合。
interface具备可继承性，因为作为一个描述互相被继承是很合理的，
同时interface还可以从class继承东西，其实也很好理解，直接理解为copy了class对其内部成员的描述就行了。比如我不知道一个class是什么interface来的，但是符合我的需要，我直接从这个class继承掉它的成员就行了。 */
