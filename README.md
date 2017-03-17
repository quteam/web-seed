# 网页自动化

基于 webpack2、vue2的自动化工具，后端使用 express

## 安装

```bash
npm install
```

## 说明


开发模式
```bash
npm run dev
```
生成生产环境文件
```bash
npm run build
```

## package.json 说明

```javascript
{
  "name": "base",
  "description": "base",
  "version": "1.0.0",
  "author": "Haovei <haovei@qq.com>",
  "private": true,
  "scripts": {
  //    ...
  },
  //webpack 全局变量
  "webpackDefine": {
    "VERSION": "'v1.0.0'"
  },
  //开发模式 ['base','vue']， 默认为 base，
  "buildRule": "base",
  //开发端口
  "devPort": 8080,
  "cdnUrl": ""
}
```