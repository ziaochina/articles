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

## wine

- sudo add-apt-repository ppa:wine/wine-builds
- sudo apt-get update
- sudo apt-get install wine-staging
- 配置

/opt/wine-staging/bin/wineboot

- 打开 wine设置窗口

/opt/wine-staging/bin/winecfg

每次命令前都要使用/opt/wine-staging/bin/wine abc.exe

- 路径转换：/opt/wine-staging/bin/winepath --unix 'c:\Windows'

- 杀死wineserver:/opt/wine-staging/bin/wineserver -k

- sudo apt install winetricks

卸载：
sudo apt-get install ppa-purge
sudo ppa-purge ppa:wine/wine-builds

## virtualbox
- sudo apt-get remove virtualbox virtualbox-4.* virtualbox-5.0
- sudo sh -c "echo 'deb http://download.virtualbox.org/virtualbox/debian '$(lsb_release -cs)' contrib non-free' > /etc/apt/sources.list.d/virtualbox.list"
- wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
- wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc -O- | sudo apt-key add -
- sudo apt-get update
- sudo apt-get install virtualbox-5.1
- 设备/安装增强功能
- 下载extension package 安装
http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html#extpack


## 更改挂载

- df -h（查看分区情况及数据盘名称）
- mkdir /data（如果没有data目录就创建，否则此步跳过）
- umount /home（卸载硬盘已挂载的home目录）
- mount /dev/sdb1 /data （挂载到data目录）
- 编辑 /etc/fstab （编辑fstab文件修改或添加，使重启后可以自动挂载）
　　/dev/sdb1 /home/zlj/data ext4 auto 0 0


## mysql

### 安装
- sudo apt-get install mysql-server
- apt install mysql-client 
- apt install libmysqlclient-dev 

### 查询是否安装成功
- sudo netstat -tap | grep mysql 
- etstat -tap | grep mysql

tcp6        0       0       [::]:mysql    [::]:*    LISTEN    7510/mysqld 

### 开启远程访问mysql

- 编辑mysql配置文件，注释掉“bind-address = 127.0.0.1”
```
vi /etc/mysql/mysql.conf.d/mysqld.cnf  
#bind-address = 127.0.0.1
```

- 进入mysql root账户

- mysql -u root -p123456 
在mysql环境中输入grant all on . to username@’%’ identified by ‘password’;
或者grant all on . to username@’%’ identified by ‘password’ with grand option;

root@ubuntu:~# grant all on *.* to china@'%' identified by '123456'; 

- 刷新flush privileges;然后重启mysql，通过/etc/init.d/mysql restart命令

root@ubuntu:~# flush privileges; 
root@ubuntu:~# /etc/init.d/mysql restart 


## mysql-workbench

sudo apt-get install mysql-workbench