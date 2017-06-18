# ubuntu 

## 菜单显示到底部

 gsettings set com.canonical.Unity.Launcher launcher-position Bottom

## sublime 3


1. sudo add-apt-repository ppa:webupd8team/sublime-text-3
2. sudo apt update
3. sudo apt-get install sublime-text-installer

4. 中文输入法支持

- git clone https://github.com/lyfeyaj/sublime-text-imfix.git
- cd ~/sublime-text-imfix
- sudo cp ./lib/libsublime-imfix.so /opt/sublime_text/
- sudo cp ./src/subl /usr/bin/

- home下新建sublime文件，没后缀名，内容如下
```
#!/bin/bash
LD_PRELOAD=/opt/sublime_text/libsublime-imfix.so subl
```

5. 启动sublime
```
bash ~/sublime
```

6. 安装package

- ctrl+`

```
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```

7. 安装插件

- SideBarEnhancements
- Babel
- React ES6 Snippets
- Emmet
- JSFormat

## Nodejs 更新最后版本

- npm install -g n
- n latest

## npm 更新版本

- npm update -g npm 

## chrome

- sudo wget http://www.linuxidc.com/files/repo/google-chrome.list -P /etc/apt/sources.list.d/

出现已连接

- wget -q -O - https://dl.google.com/linux/linux_signing_key.pub  | sudo apt-key add -

出现ok

- sudo apt-get update

- sudo apt-get install google-chrome-beta

可以使用apt-cache命令搜索包


- /usr/bin/google-chrome

运行chrome

- 锁定到启动栏

## smartgit

- sudo add-apt-repository ppa:eugenesan/ppa
- sudo apt-get update
- sudo apt-get install smartgithg