LRU 缓存 最近最少使用原则
Least Recently Used
操作系统 

node fs 硬盘，内存
内存精贵
硬盘 用不完

内存 是代码的运行空间 有限 2
存放变量 2 个
3个？

1 put（1）
2 put（2）
3 放不下 1 2
[]内存 length 2
  原则：最近最少使用

1 put(1,1)
2 put(2,1)
3 get(1)
4 put(3,3)  2丢掉
5 get(2) 拿不到
6 put(4,4) 4  3  1 丢掉
7 get(1)  拿不到
8 get(3) 3
9 get(4) 4

- cache LRUCache
  get
  set

- 对象字面量有利于get set 方法的实现，
- 最近最少使用，JSON 搞不定
  数组可以，[0] [length - 1]
  在一头进行操作
  一半的工作交给数组，一半的工作交给对象字面量，
  让他们成为LRUCache的两个属性 

- get set arr obj 组织在一个LRUCache 
  indexof pop unshift splice
