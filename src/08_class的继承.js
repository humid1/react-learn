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
    
}
const c1 = new Chinese('小名',12);
console.log(c1);
c1.say();

// 这是子类 Am
class Am extends Person{
    
}
const a1 = new Am('jack',11);
console.log(a1);
a1.say();