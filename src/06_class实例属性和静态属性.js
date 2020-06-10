/**
 * class 的基本使用 【静态属性】【实例属性】
 */
// --------------------- 传统面向对象的方式 ------------------------
function Person(name, age) {
    // 实例属性
    this.name = name;
    this.age = age;
}

// info 属性，直接挂载给构造函数，所以他是【静态属性】
Person.info = 'aaa';

var person = new Person('姓名',18);

// 通过 new 出来的实例，访问到的属性，叫做 【实例属性】
console.log(person.name);
console.log(person.age);

// 【静态属性】 通过 构造函数，直接访问到的属性，叫做静态属性
console.log(Person.info);

// ------------------- 使用 class 面向对象的方式 --------------------------

// 动物类
class Animal {
    // 这是类的构造器
    // 每一个类中，都有一个构造器,如果未定义构造器，默认会一个空的构造器 constructor() {}
    // 构造器的作用，就是每当 new 这个类的时候，必然会先执行
    constructor(name, age) {
        // 实例属性
        this.name = name;
        this.age = age;
    }

    // 在 class 内部修饰的属性，就是静态属性
    static info = 'eeee';
}

const a1 = new Animal('大华',11);
// 通过 new 出来的实例，访问到的属性，叫做 【实例属性】
console.log(a1.name);
console.log(a1.age);
// info 为 Animal 的静态属性
console.log(Animal.info);