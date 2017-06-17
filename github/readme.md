# github

## 生成SSH密钥

> ssh-keygen -t rsa -C "your_email@example.com" //本地生成密钥，选择默认路径，密码为空

一路回车

最后得到了两个文件：id_rsa和id_rsa.pub

如果已经存在用现有的文件替换c:\users\...\.ssh下的文件
ubuntu: /home/zlj/.ssh/

> ssh -T git@github.com

Hi *** You've successfully authenticated, but GitHub does not provide shell access. 说明你连接成功了


## github 配置ssh

Settings/SSH and GPG Keys/New SSH Key

key值将上一步生成的id_rsa.pub的内容复制黏贴

## git config 

> git config --global user.name "John Doe"

> git config --global user.email johndoe@example.com 

如果只要对当前目录有效去掉--global参数


## git clone 

复制自己的项目，use ssh
> git clone git@github.com:ziaochina/articles.git

## 提交

> git add .

> git commit -m  "更新内容说明"

> git push -u origin master

## 检出分支

> git checkout master
