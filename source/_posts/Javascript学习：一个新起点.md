---
title: Javascript学习：一个新起点
date: 2024-01-22 23:31:11
tags: JS学习
---

今天过的是真的开心啊，
不仅与之前的好朋友聊了聊，还学习了我一直都想要学习的东西，那就是前端制作网站。
想起之前玩趣站 (www.youquhome.com) 的时候，那个时候真的是见了不少新奇的网站设计
有在夜空中放烟花的，有像云朵的时钟，还有各种H5小游戏。
那时候其实就已经有点心思想学H5、CSS以及JS了，
嘿嘿，还是之前上外网经历给我的加成，甚至那时候我已经接触过几个JS命令了。
<!--more-->

![嘿嘿](/img/Chathappy.jpg)

你要是一路看到这里肯定说：“于，你咋变心这么快，前几天不还好好学着算法的吗?"。
要怪也怪我的博客，要怪也怪我，今天的轨迹也是十分离谱（哈哈哈）。

今天看着自己这几天写过的博客，还有总体的博客页面突发奇想。
“我是不是也能像kmjj那样自己对于主题进行二次加工？”
于是上网上找hexo主题的开发教程，需要node.js基础，找到了教程。
然后跳到了自己之前几天在搞的Windows中的LinuxWSL系统
想在里面安个浏览器，之后就能一直在Terminal环境下js编程了，而且界面也挺干净的
安了半天实在是没搞定，能安上，但是打不开。
最后听人家官方说：“我们还不支持软件安装，只能运行命令行下的软件”
**果断放弃，害，浪费时间！**

因为nodejs使用的是JS文件编程，之前用的Sublime Text不能编译运行，
我又去网上找资料配置好了错误百出的VsCode。
最终在终端上成功运行了自己的第一条JS指令。

```Javascript
console.log("Hello World!");
```

呼，到这一步，已经是上午的12点了，
不过接触到一个新世界，我的热情还没有退下。
于是继续在 (www.liaoxuefeng.com) 上学NodeJS。
直到有些概念感觉迷迷糊糊，才知道它需要一些JS的基础。
在下午充好电之后，我开始了JS的探索。

在这其间，还发生了一件给我动力的事情。
无意刷手机的时候注意到了平板上的一个app
也是我比较怀旧吧，这个app的动态壁纸还挺有说法的，
模拟雨的效果真的是我见过的最顶的了。

![必应搜雨纸或Rainpaper可能能搜到](/img/Rainpaper.jpg)

效果如下：

![绝美！](/img/Raining.jpg)

这的雨滴的大小与降水概率以及雾度还有后面的图片都是可以改的。
就真的很干净很好看，于是我想找到这个app的源码，
借着自己现在知道的编程知识，想实现一下这个效果。
但是也可叹啊，这个软件已经很久了，它的github源码已经被删的干干净净了。
我能找到的就只有一个提供这个雨滴效果的网站。
因为它的效果是用WebGL渲染的，我们的任务又回到了JS上。

于是今晚又一通学就搞到了现在，做出了一个HTML文件。
它的源码就在下面了！

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MY First HTML Page</title>
</head>
<body>

<script>
document.write("<h1>Moniwarmth</h1>");
document.write("<p>And his little cute icon!:)</p>");
function clickfunction()
{
    x = document.getElementById("Greetings");
    if(x == null)
      document.write("Oops! We don't find the expected text!");
    else 
    {
      alert("Hahaha, any problems?");
      x.innerHTML = "Hello Js World!!";
    }
}
function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("sit"))
    {
        element.src="girl.jpg";
    }
    else
    {
        element.src="girlsit.gif";
    }
}
</script>

<p id = "Greetings">
  Hello, this is the first step of my webplaying.
  Hope that I can stick to it!!
</p>

<img id="myimage" onclick="changeImage()" src="girl.jpg" width="180" height="180">

<button_type = "button" onclick = "clickfunction()">点我!(本来在HTML中可以点图片出现一张动态图, 这里被覆盖了 ToT)</button_type>

<img id="gifgirl" src = "girlsit.gif" width = "180" height = "180">

<p>嘿嘿, 这是我的第一个HTML文件,Javascript学习的第一步!! </p>
</body>
</html>
```

嘿嘿，就一个小网页，还是有点复杂的吧，不过做出来当即就能传到网站上，挺有成就感的呢！

今天做的事情真的很让我找到了热爱的感觉。--一直学习，直到电脑没电，充电之后继续学。
今天当即就做出了一个HTML小页面，你可能也注意到了在左边的小栏里有一个“创作”。
那里我还暂时不知道要放什么，于是先写了点欢迎语，放了两张小图片。
这个页面的内容就是我制作的HTML文件。

算法的学习还是不会轻易放弃的，JS的学习也不会结束，一切都自热爱与感动而起！
**继续奋斗，终会把路越走越宽！**


