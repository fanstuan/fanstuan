# fanstuan
目录结构参考`vue-cli`
## WIP
- [ ] download 远程git包
    - [ ] 编写命令行，接收参数等
    - [ ] 添加代码提交校验
- [ ] cli生成模板文件
## 前置条件
node v13之前的版本需要单独设置开启`ECMAScript Modules`支持
## 为子包添加依赖包
例如:
```
// 添加commander到@fanstuan/cli
lerna add commander --scope=@fanstuan/cli
```
## 问题
### 为子包添加依赖报错?
可能是因为当前npm远程库不对导致，切换到npm自带的远程库或者`taobao`
### 为什么不使用`ts-node`开发
因为ts-node不支持esm