<p align="center">
  <a href="https://nextjs-view-counter-hephaest.vercel.app/api/counter">
    <img height="300px" src="https://user-images.githubusercontent.com/37981444/122640887-6355bd00-d134-11eb-981a-042d82f1b00d.png">
  </a>
</p>

<h1 align="center">访问量统计</h1>

<div align="center">

[English]((README.md)) | 中文

基于 Firebase 数据库和 Next.js 框架的 GitHub Profile 的访问量统计图标.

[![CI status][github-action-image]][github-action-url] [![david deps][david-image]][david-url] [![david devDeps][david-dev-image]][david-dev-url]

[github-action-image]: https://img.shields.io/github/workflow/status/Hephaest/nextjs-view-counter/View%20Counter%20CI/main
[github-action-url]: https://github.com/Hephaest/nextjs-view-counter/actions?query=View%20Counter%20CI
[david-image]: https://img.shields.io/david/Hephaest/nextjs-view-counter?style=flat-square
[david-dev-url]: https://david-dm.org/Hephaest/nextjs-view-counter?type=dev
[david-dev-image]: https://img.shields.io/david/dev/Hephaest/nextjs-view-counter?style=flat-square
[david-url]: https://david-dm.org/Hephaest/nextjs-view-counter

</div>

# 操作指南

## 第一步: Fork

Fork 当前项目.

## 第二步: 配置 Firebase

注册您个人的 [Firebase](https://firebase.google.com/) 账户:

- 点击 **开始** 并 **添加项目**.
- 创建实时数据库并选择 **测试模式**.
- 数据库的结构应如下图所示:

<p align="center">
  <img width="600px" src="https://user-images.githubusercontent.com/37981444/122641337-33f47f80-d137-11eb-803a-ebe3b876ec83.png">
</p>

- 请将规则都改成 `true`:

<p align="center">
  <img width="600px" src="https://user-images.githubusercontent.com/37981444/122645133-67410980-d14b-11eb-97ee-40cc1b8062ac.png">
</p>

## 第三步: 部署在 Vercel

- 用您的 Github 账号登入到 Vercel.
- 选择刚才 fork 的项目.
- 找到 **设置**, 添加 **环境变量**, **名称** 输入为 `FIRE_BASE_URL` 并输入第二步中创建的 Firebase 数据库链接:

<p align="center">
  <img width="600px" src="https://user-images.githubusercontent.com/37981444/122641573-cd706100-d138-11eb-8041-bcd4b1648d6d.png">
</p>

- 最后, 您可以选择最新推上去的 commit 并重新部署, 不出所料的话一切都会顺利.

<p align="center">
  <img width="400px" src="https://user-images.githubusercontent.com/37981444/122641740-b1b98a80-d139-11eb-8653-bc1e54fe5d96.png">
</p>

## 第四步: 更新 Github Profile

只需在 `README.md` 中插入下方的代码:

```
![](https://{您自己的 vercel 域名}/api/counter)
```

## 参考项目

现在 GitHub 有很多优秀的访问量统计的开源项目，我挑选其中两个我最喜欢的项目供大家学习参考:

- [Tool from antonkomarev](https://github.com/antonkomarev/github-profile-views-counter) - 这是我过去几个月最长使用的项目，但是最近可能用户增多了，延时很高遂弃.
- [Tool from Ryan Lanciaux](https://dev.to/ryanlanciaux/quick-github-profile-visit-counter-14en) - 极客 UI, 如果想自己部署在 Glitch 上的话要注意服务器会进入睡眠的问题.

## 共享

欢迎任何 issue 和 PR!