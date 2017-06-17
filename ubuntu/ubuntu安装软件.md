# ubuntu 安装软件

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