# asf-mainpage-2.0

### 运行前安装
```
yarn install
```

### 实时调试
```
yarn serve
```

### 打包
```
yarn build
```

### 代码检测
```
yarn lint
```

## Commit时备注
* 增加从未有过的**功能**，即新增**功能性**提交：`<feat>: +提交说明`
* 不改变**功能**，即新增**非功能性**提交： `<refactor>: +提交说明`
* 优化之前的代码，即更新**功能性**提交： `<update>: +提交说明`
* 提交说明可以使用**中文**

## 变量命名规范
优先遵循eslint+babel自带规范,若无提示,默认使用驼峰命名法(camelCase)

## GIT提交规范
提交前会自动启动Git Hook调用husky + `yarn lint`,若检测到有任何语法错误或typo会阻止提交。