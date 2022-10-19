module.exports = {
  title: '笔记',
  description: 'Java相关技术笔记',
  // base: '/', 
  theme: 'reco',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  locales: { // 设置语言
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: false // 代码块显示行号
  },

  themeConfig: {
    subSidebar: 'auto', // 开启目录结构
    nav:[ // 导航栏配置
      {
        text: 'Java',
        items: [
          {text: '基础', link: '/java-basics/'},
          {text: '并发编程', link: '/concurrent/'},
          {text: '开发框架', link: '/framework/'}
        ]
      },
      {
        text: '数据结构与算法',
        items: [
          {text: '数据结构', link: '/data-structure/'},
          {text: '算法', link: '/algorithm/'}
        ]
      },
      {
        text: '设计模式',
        link: '/design-patterns/'
      }    
    ],
    sidebar: { // 侧边栏配置
      '/java-basics/': [ 
        { 
          title: '语言基础',
          path: '/java-basics/grammar/',
          collapsable: true, 
          children: [
            { title: '基础', path: '/java-basics/grammar/basics' },
            { title: '泛型', path: '/java-basics/grammar/genericity' },
            { title: '注解', path: '/java-basics/grammar/annotation' },
            { title: '异常', path: '/java-basics/grammar/exception' },
            { title: '反射', path: '/java-basics/grammar/reflection' },
            { title: 'SPI', path: '/java-basics/grammar/spi' }
          ]
        },
        { 
          title: "集合", 
          path: "/java-basics/collection/",
          collapsable: true, 
          children: [
            { title: 'Collection', path: '/java-basics/collection/collection'},
            { title: 'Map', path: '/java-basics/collection/map'}
          ]
        },
        { 
          title: "Java IO", 
          path: "/java-basics/java-io/",
          collapsable: true, 
          children: [
            { title: 'NIO', path: '/java-basics/java-io/nio' },
            { title: 'BIO', path: '/java-basics/java-io/bio' },
            { title: 'AIO', path: '/java-basics/java-io/aio' }
          ]
        },
        { 
          title: "JVM", 
          path: "/java-basics/jvm/",
          collapsable: true, 
          children: [
            { title: '基础', path: '/java-basics/jvm/basic' },
            { title: '进阶', path: '/java-basics/jvm/advance' },
            { title: '工具', path: '/java-basics/jvm/tools' }
          ]
        }
      ],
      '/concurrent/': [
        {
          title: '并发编程',
          path: '/concurrent/',
          collapsable: true, 
          children: [
            { title: '内存模型', path: '/concurrent/memory-model' },
            { title: '基础', path: '/concurrent/basic' },
            { title: '锁', path: '/concurrent/lock' },
            { title: '线程池', path: '/concurrent/thread-pool' },
            { title: '并发包（J.U.C）', path: '/concurrent/juc' },
            { title: '其他', path: '/concurrent/other' }
          ]
        }
      ], 
      '/framework/': [
        {
          title: '开发框架',
          path: '/framework/',
          collapsable: true, 
          children: [
            { title: 'Spring', path: '/framework/spring' },
            { title: 'Spring MVC', path: '/framework/springMVC' },
            { title: 'MyBatis', path: '/framework/myBatis' },
            { title: 'Spring Boot', path: '/framework/springBoot' },
            { title: 'Spring Cloud', path: '/framework/springCloud' },
            { title: 'Spring Data', path: '/framework/springData' },
            { title: 'Spring Security', path: '/framework/springSecurity' }
          ]
        } 
      ],
      '/design-patterns/': [
        {
          title: '设计模式',
          path: '/design-patterns/',
          collapsable: true, 
          children: [
            { title: '创建型模式', path: '/design-patterns/creat' },
            { title: '结构型模式', path: '/design-patterns/structure' },
            { title: '行为型模式', path: '/design-patterns/behavior' }
          ]
        }
      ],
      '/data-structure/': [
        {
          title: '数据结构',
          path: '/data-structure/',
          collapsable: true, 
          children: [

          ]
        }
      ],
      '/algorithm/': [
        {
          title: '算法',
          path: '/algorithm/',
          collapsable: true, 
          children: [

          ]
        }
      ]
    }
  }
}
