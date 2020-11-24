class Subject {
  // 被观察者 学生
  constructor(name) {
    this.state = "开心的";
    this.observers = []; // 存储所有的观察者
  }
  // 收集所有的观察者
  attach(o) {
    // Subject. prototype. attch
    this.observers.push(o);
  }
  // 更新被观察者 状态的方法
  setState(newState) {
    this.state = newState; // 更新状态
    // this 指被观察者 学生
    this.observers.forEach((o) => o.update(this)); // 通知观察者 更新它们的状态
  }
}

class Observer {
  // 观察者 父母和老师
  constructor(name) {
    this.name = name;
  }
  update(student) {
    console.log(
      "当前" + this.name + "被通知了",
      "当前学生的状态是" + student.state
    );
  }
}

let student = new Subject("学生");

let parent = new Observer("父母");
let teacher = new Observer("老师");

// 被观察者存储观察者的前提，需要先接纳观察者
student.attach(parent);
student.attach(teacher);
student.setState("被欺负了");

class Subject1 {
  constructor(name) {
    this.state = "开心的";
    this.observers = [];
  }

  attach(o) {
    this.observers.push(o);
  }

  setState(newState) {
    this.state = newState;
    this.observers.forEach((o) => o.update(this));
  }
}

class Observer1 {
  constructor(name) {
    this.name = name;
  }
  update(student) {
    console.log(
      "当前" + this.name + " 被通知了",
      "当前学生的状态是" + student.state
    );
  }
}

let student1 = new Subject('学生')
let parent1 = new Observer1('父母')
let teacher1 = new Observer1('老师')
student1.attach(parent1)
student1.attach(teacher1)
student1.setState('😭111')