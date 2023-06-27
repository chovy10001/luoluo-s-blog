---
title: vercel部署
tag:
	- Vercel
---
## 1.在vercel上导入你的github项目
```
url: https://vercel.com/new
title: "New Project – Vercel"
host: vercel.com
image: https://assets.vercel.com/image/upload/front/vercel/twitter-card.png
```

![image.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306272117729.png)
接着选择一个你要部署的仓库
![image.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306272118413.png)
选择并导入
![image.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306272119317.png)
![image.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306272120742.png)
部署成功会显示这个![image.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306272121745.png)
## 2.Vercel配置域名
配置域名以便能够在国内访问
在上一个页面点击Domains(域名)进入,接着点击Edit(编辑)进入
![image.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306272123189.png)


在这里输入你购买的域名,可以在阿里云或者腾讯云等其他地方购买,修改完了之后点击save(保存)即可
## 3.阿里云域名配置
![image.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306272126440.png)
配置好了大概过个半小时或者一小时就可以用你购买的域名访问你的网站了
## 4.网站评论部署
部署网站评论的话我用的是waline，详情看文档

```
url: https://waline.js.org/
title: "Waline"
host: waline.js.org
favicon: /favicon.ico
```
可以在原域名下配置二级域名，域名配置项如下
![image.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306272132007.png)
