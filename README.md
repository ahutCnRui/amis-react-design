# 开始创建React应用程序

这个项目是由[Create React App](https://github.com/facebook/create-react-app)引导的。

## 可用脚本&高级用法

本节已移动到这里:[Create React Apps手册](https://github.com/ahutCnRui/project-readme-file/blob/main/src/react-app-create.readme.md)

# 工程结构说明 
.
├── config  ---：npm ejec 生成的配置目录config，包含jest，webpack配置  
│   ├── jest  ---：npm ejec 生成的配置目录，jest配置  
│   └── webpack  ---：	npm ejec 生成的配置目录，webpack 配置  
│       └── persistentCache  ---：npm ejec 生成的配置目录，持久缓存 配置  
├── public  ---：create-react-app 初始化生成的 公共文件目录  
├── scripts	  ---：npm ejec 生成的配置目录 脚本，可进行自定义修改  
└── src  ---：	create-react-app 初始化生成的 源文件目录  
      ├── common  ---：开发公共包      
      │   ├── components  ---：公共组件包  
      │   ├── hooks  ---：公共组件hooks 函数钩子  
      │   └── utils  ---：工具包（时间、签名...）  
      ├── home  ---：首页  
      ├── pages  ---：页面开发  
      ├── router  ---：路由  
      │   └── module-one  ---：路由分包  
      └── widget  ---：业务组件  
          ├── UserInfo  ---：组件分包  
