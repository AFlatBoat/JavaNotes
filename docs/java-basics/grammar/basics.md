---
title: 基础知识
author: gzj
date: '2022-10-19'
---

## IDE搭建

### 简介

java编程语言的集成开发环境

### 常用插件

- lombok：自动生成Get/Set等方法。
- Alibaba Java Coding Guidelines：编码规范扫描，有助于我们进行代码排错、提高编码效率、以及提升项目整体的运行速度，已提供插件包/Idea/Plugins/p3c-idea-2.1.0.zip。
- Free Mybatis plugin：生成mapper xml文件，快速从代码跳转到mapper及从mapper返回代码，mybatis自动补全及语法错误提示等等。
- Easy JavaDoc：注释插件，能帮助java开发者自动生成javadoc文档注释。
- Vue.js：vue插件，可动态识别vue代码，实现自动提示，点击跳转等功能，可从vue跳转到对应请求的java-controller。

## 面向对象

### 封装

- 高内聚，低耦合
- 隐藏对象内部复杂性，暴露简单接口提供服务
- 权限：private < 缺省 < protected < public

### 继承

- 一个新类可以从现有的类中派生，派生类从基类继承方法和实例变量

- 只允许单继承

- 所有类的父类或是间接父类都是java.lang.Object

- 子父类初始化顺序

  父类静态变量 -> 父类静态代码块 -> 子类静态变量 -> 子类静态代码块 -> 父类非静态变量 -> 父类构造函数 -> 子类非静态变量 -> 子类构造函数

- instanceof 运算符：判断关键字左边的对象是否关键字右边的类或其子类
- super关键字和this关键字
- 重写：具有相同的方法名、参数列表以及返回值类型

### 多态

- 不同类的对象在调用同一个方法是所呈现出来的多种不同行为
- 子类继承父类，重写方法，父类的引用指向子类对象
- 向上转型（自动），向下转型（强制）

## 数据类型

### 基本类型

#### 整型

- byte：1字节
- short：2字节
- int：4字节
- long：8字节

#### 浮点型

- float：4字节
- double：8字节

#### 字符型

- char：2字节

#### 布尔型 

- boolean

### 引用类型

- 接口（interface）
- 类（class）
- 数组（[]）

## 语法

[基础语法](https://blog.csdn.net/lhyandlwl/article/details/116598825)

## 关键字

[关键字](https://zhuanlan.zhihu.com/p/437264434)


## Java 各个版本的特性

[java各版本特性](https://blog.csdn.net/smallspot/article/details/105540222?spm=1001.2101.3001.6650.4&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-4-105540222-blog-120437852.t5_landing_title_tags_v2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-4-105540222-blog-120437852.t5_landing_title_tags_v2&utm_relevant_index=8)