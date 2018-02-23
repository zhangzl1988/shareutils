# shareutils

 
前端通用工具库  

> 优点：提高前端业务代码开发效率，增强代码复用性

前端开发过程中，会经常用到`判断浏览器类型`、`格式化各种日期`、`获取url参数`、`queryString转对象`、`防抖函数`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。欢迎为本项目提交pr。

## 安装使用

1. 直接下载`dist`目录下的[shareutils.min.js](https://github.com/zhangzl1988/shareutils/blob/master/dist/shareutils.min.js)使用，支持UMD通用模块规范  
2. 使用npm安装

### 浏览器:
``` html
  <script src="shareutils.min.js"></script>
  <script>
      var OS = shareutils.getOS()
  </script>
```

### npm:
``` bash
$ npm install --save-dev shareutils
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const shareutils = require('shareutils')
const OS = shareutils.getOS()
```

**推荐使用方法**  

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('shareutils/<方法名>')
const getOS = require('shareutils/getOS')
const OS = getOS()
```
## API文档

### Array  
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等 

### Class
#### &emsp;&emsp;[addClass][addClass]&emsp;&emsp;为元素添加class  
#### &emsp;&emsp;[hasClass][hasClass]&emsp;&emsp;判断元素是否有某个class  
#### &emsp;&emsp;[removeClass][removeClass]&emsp;&emsp;为元素移除class  

### Cookie 
#### &emsp;&emsp;[getCookie][getCookie]&emsp;&emsp;根据name读取Cookie  
#### &emsp;&emsp;[removeCookie][removeCookie]&emsp;&emsp;根据name删除Cookie
#### &emsp;&emsp;[setCookie][setCookie]&emsp;&emsp;添加Cookie 

### Device  
#### &emsp;&emsp;[getExplore][getExplore]&emsp;&emsp;获取浏览器类型和版本号  
#### &emsp;&emsp;[getOS][getOS]&emsp;&emsp;获取操作系统类型

### Dom  
#### &emsp;&emsp;[getScrollTop][getScrollTop]&emsp;&emsp;获取滚动条距顶部的距离
#### &emsp;&emsp;[offset][offset]&emsp;&emsp;获取一个元素的距离文档(document)的位置，类似jQ中的offset()
#### &emsp;&emsp;[scrollTo][scrollTo]&emsp;&emsp;在${duration}时间内，滚动条平滑滚动到${to}指定位置
#### &emsp;&emsp;[setScrollTop][setScrollTop]&emsp;&emsp;设置滚动条距顶部的距离
#### &emsp;&emsp;[windowResize][windowResize]&emsp;&emsp;H5软键盘缩回、弹起回调

### Function  
#### &emsp;&emsp;[debounce][debounce]&emsp;&emsp;函数防抖   
#### &emsp;&emsp;[throttle][throttle]&emsp;&emsp;函数节流   

### Keycode  
#### &emsp;&emsp;[getKeyName][getKeyName]&emsp;&emsp;根据keycode获得键名 

### Object  
#### &emsp;&emsp;[deepClone][deepClone]&emsp;&emsp;深拷贝，支持常见类型
#### &emsp;&emsp;[isEmptyObject][isEmptyObject]&emsp;&emsp;判断Object是否为空

### Random  
#### &emsp;&emsp;[randomColor][randomColor] &emsp;&emsp;随机生成颜色
#### &emsp;&emsp;[randomNum][randomNum]&emsp;&emsp;生成指定范围随机数 

### Regexp  
#### &emsp;&emsp;[isEmail][isEmail]&emsp;&emsp;判断是否为邮箱地址 
#### &emsp;&emsp;[isIdCard][isIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum][isPhoneNum]&emsp;&emsp;判断是否为手机号  
#### &emsp;&emsp;[isUrl][isUrl]&emsp;&emsp;判断是否为URL地址

### String  
#### &emsp;&emsp;[digitUppercase][digitUppercase]&emsp;&emsp;现金额转大写

### Support  
#### &emsp;&emsp;[isSupportWebP][isSupportWebP]&emsp;&emsp;判断浏览器是否支持webP格式图片
#### 

### Time  
#### &emsp;&emsp;[formatPassTime][formatPassTime]&emsp;&emsp;格式化${startTime}距现在的已过时间
#### &emsp;&emsp;[formatRemainTime][formatRemainTime]&emsp;&emsp;格式化现在距${endTime}的剩余时间
#### &emsp;&emsp;[isSameDay][isSameDay]&emsp;&emsp;判断是否为同一天

### Url
#### &emsp;&emsp;[parseQueryString][parseQueryString]&emsp;&emsp;url参数转对象
#### &emsp;&emsp;[stringfyQueryString][stringfyQueryString]&emsp;&emsp;对象序列化

[arrayEqual]:https://github.com/zhangzl1988/shareutils/blob/master/src/array/arrayEqual.js

[addClass]:https://github.com/zhangzl1988/shareutils/blob/master/src/class/addClass.js
[hasClass]:https://github.com/zhangzl1988/shareutils/blob/master/src/class/hasClass.js
[removeClass]:https://github.com/zhangzl1988/shareutils/blob/master/src/class/removeClass.js

[getCookie]:https://github.com/zhangzl1988/shareutils/blob/master/src/cookie/getCookie.js
[removeCookie]:https://github.com/zhangzl1988/shareutils/blob/master/src/cookie/removeCookie.js
[setCookie]:https://github.com/zhangzl1988/shareutils/blob/master/src/cookie/setCookie.js

[getExplore]:https://github.com/zhangzl1988/shareutils/blob/master/src/device/getExplore.js
[getOS]:https://github.com/zhangzl1988/shareutils/blob/master/src/device/getOS.js

[getScrollTop]:https://github.com/zhangzl1988/shareutils/blob/master/src/dom/getScrollTop.js
[offset]:https://github.com/zhangzl1988/shareutils/blob/master/src/dom/offset.js
[scrollTo]:https://github.com/zhangzl1988/shareutils/blob/master/src/dom/scrollTo.js
[setScrollTop]:https://github.com/zhangzl1988/shareutils/blob/master/src/dom/setScrollTop.js
[windowResize]:https://github.com/zhangzl1988/shareutils/blob/master/src/dom/windowResize.js

[debounce]:https://github.com/zhangzl1988/shareutils/blob/master/src/function/debounce.js
[throttle]:https://github.com/zhangzl1988/shareutils/blob/master/src/function/throttle.js

[getKeyName]:https://github.com/zhangzl1988/shareutils/blob/master/src/keycode/getKeyName.js

[deepClone]:https://github.com/zhangzl1988/shareutils/blob/master/src/object/deepClone.js
[isEmptyObject]:https://github.com/zhangzl1988/shareutils/blob/master/src/object/isEmptyObject.js

[randomColor]:https://github.com/zhangzl1988/shareutils/blob/master/src/random/randomColor.js
[randomNum]:https://github.com/zhangzl1988/shareutils/blob/master/src/random/randomNum.js

[isEmail]:https://github.com/zhangzl1988/shareutils/blob/master/src/regexp/isEmail.js
[isIdCard]:https://github.com/zhangzl1988/shareutils/blob/master/src/regexp/isIdCard.js
[isPhoneNum]:https://github.com/zhangzl1988/shareutils/blob/master/src/regexp/isPhoneNum.js
[isUrl]:https://github.com/zhangzl1988/shareutils/blob/master/src/regexp/isUrl.js

[digitUppercase]:https://github.com/zhangzl1988/shareutils/blob/master/src/string/digitUppercase.js

[isSupportWebP]:https://github.com/zhangzl1988/shareutils/blob/master/src/support/isSupportWebP.js

[formatPassTime]:https://github.com/zhangzl1988/shareutils/blob/master/src/time/formatPassTime.js
[formatRemainTime]:https://github.com/zhangzl1988/shareutils/blob/master/src/time/formatRemainTime.js
[isSameDay]:https://github.com/zhangzl1988/shareutils/blob/master/src/time/isSameDay.js

[parseQueryString]:https://github.com/zhangzl1988/shareutils/blob/master/src/url/parseQueryString.js
[stringfyQueryString]:https://github.com/zhangzl1988/shareutils/blob/master/src/url/stringfyQueryString.js
