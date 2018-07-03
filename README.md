# webpack 基础教程讲解

## 基础介绍

1. entry  入口 webpack 读取起始`.js`,解析依赖，然后进行打包

2. output 输出 webpack 最终构建出来的静态文件，构建结果的文件名、路径等都是可以配置的

3. loader 可理解为转化器，把特定类型的文件，通过对应的loader 解析成项目需要的文件格式，可以说是打包的中间件

4. resolve 配置模块解析的配置 例如模块或文件加载的路径，还有文件的默认扩展名

5. plugins 完成一些特殊的构建任务，


### 将项目克隆到本地

```bash
# 定位到任意目录
$ cd **

# 克隆仓库到指定的文件夹
$ git clone https://github.com/ivanYF/webpack-basics.git [project-name] --depth 1

# 进入指定的文件夹
$ cd [project-name]
```

## 安装项目`CNPM`依赖

```bash
$ cnpm install
```

# 查看demo
```bash
$ npm run dev   http://localhost:8080/
```

