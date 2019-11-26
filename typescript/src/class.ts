class Dog {
  constructor(name: string) {
    this.name = name
  }
  public name: string // 属性需要在构造函数内赋值，
  //   name?: string // 要么改成可选属性
  run() {}
}

// 属性是实例属性，不是原型属性，要实例化之后才有name
console.log(Dog.prototype)

let dog = new Dog('mini')
console.log(dog) // 这个时候就有name了

// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }
  color: string
}

// 类的修饰符
// public 什么都可以访问
// protected 受保护成员：只能在类或者子类中访问，不能在实例中访问。protected 的构造函数不能被实例化只能被继承
// private 私有成员：只能在当前"类"(实例不行)的构造函数或者方法中调用
// readonly 只读成员：不能被更改，一定要被初始化(构造函数时获取赋值或者类内部声明)
// static 静态成员：只能通过类名调用，不能通过实例调用，可以被继承
class Cat {
  constructor(name: string, gender: boolean) {
    this.name = name
    this.gender = gender
    this.saygender()
  }
  readonly age: number = 1 // 实例才能读
  public name: string // 谁都能读
  protected gender: boolean // 自己和继承的实例能读
  static food: string = 'fish' // 类才能读
  public saygender() {
    // public 的方法可以调private的属性
    console.log(this.gender ? 'male' : 'female')
  }
}

let cat1 = new Cat('喵酱', true)
console.log('cat1', cat1, Cat.food)

class Posscat extends Cat {
  constructor(name: string, gender: boolean) {
    super(name, gender)
    this.gender
    this.saygender()
  }
}
let cat2 = new Posscat('黑咪', true)
console.log('cat2', cat2, Posscat)
