# fanstuan

目录结构参考`vue-cli`

## WIP

- [x] download 远程 git 包
  - [ ] 编写命令行，接收参数等
  - [x] 添加代码提交校验
- [ ] cli 生成模板文件

## 前置条件

node v13 之前的版本需要单独设置开启`ECMAScript Modules`支持

## 为子包添加依赖包

例如:

```
// 添加commander到@fanstuan/cli
lerna add commander --scope=@fanstuan/cli
```

## 下载 packages 包

`fetch-pkg`

## 问题

### 为子包添加依赖报错?

可能是因为当前 npm 远程库不对导致，切换到 npm 自带的远程库或者`taobao`

### 为什么不使用`ts-node`开发

因为 ts-node 不支持 esm
