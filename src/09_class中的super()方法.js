// 这是父类，理解成 原型对象
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 实例方法
    say() {
        console.log('hello')
    }
}

// 这是子类 Chinese
// 在 class 类中，使用 extends 关键字，实现子类继承 父类
// 语法：class 子类 extends 父类
class Chinese extends Person{
    constructor(name,age,idCard) {
        super(name, age);
        this.idCard = idCard;
    }
}
const c1 = new Chinese('小名',12, '4561378945613246');
console.log(c1);
c1.say();

// 这是子类 Am
class Am extends Person{
    constructor(name, age) {
        // 1.如果一个子类，通过 extends 关键字继承了父类，那子类的 constructor 构造函数中，必须先调用 super()
        // 2.super() 是一个函数，是代表父类的构造器，代表父类构造器的引用
        // 3.
        super(name, age);
    }
}
const a1 = new Am('jack',11);
console.log(a1);
a1.say();