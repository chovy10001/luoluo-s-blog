---
title: obsidian配置图床
---
## 1. pigGo安装
[下载地址](https://github.com/Molunerfinn/PicGo/releases)
直接下载exe版本即可
## 2.gitee设置
安装好picgo后在picgo的插件设置搜索gitee然后选择安装gitee-uploader
![Pasted image 20230626232832.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306262344615.png)

然后到 gitee新建一个仓库用来做我们的图床
新建仓库的要点如下：
1. 输入一个仓库名称
2. 其次将仓库设为公开
3. 勾选使用Readme文件初始化这个仓库
起一个仓库的名字，记得要公开
## 3.创建私人令牌
点击头像进入设置然后点击私人令牌然后点击生成新令牌
![Pasted image 20230626233057.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306262345269.png)

## 4.在picgo中配置gitee图床
进入picgo后点击图床设置点击gitee，然后在repo中填入之前我们创建的用户名/仓库名，这里的用户名要与你的个人空间地址一致，例如我的个人空间地址是luoluo-up，所以这里就填写luoluo-up
**branch一般默认是master，token就写我们的私人令牌，path可以不写只要repo和token写了就行了**
![Pasted image 20230626233400.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306262345584.png)
点击设置server并设置监听端口为36677，不然Obsidian会上传失败
![Pasted image 20230626233513.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306262345112.png)

将时间戳重命名打开，否则同一张照片上传两次就会报错
![Pasted image 20230626233550.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306262345897.png)

## 5. Obsidian设置
安装Image auto Upload插件，我们开始配置插件
![image.png](https://gitee.com/luoluo-up/obsidian-src/raw/master/202306262338482.png)
**效果测试**
将图片复制粘贴到Obsidian文档内
我们打开新建的gitee库，就能看到我们复制黏贴的图片