# Git常用命令

## 查看
1. git branch /-r/-vv/-a  查看本地所有分支/只查看远程仓库的分支/查看本地分支和相关联的远程分支/查看本地和远程仓库的所有分支
2. git remote -v 查看远程仓库的信息
3. git log 查看提交记录
4. git reflog 查看命令历史


## 操作

## 创建分支
1. git checkout -b test (origin/test) 本地建分支并切换到该分支（拉取远程分支并同时创建对应的本地分支）
2. git branch --set-upstream-to=origin/test 将当前本地分支和远程分支相关联(本地分支和远程分支都已经存在)
3. git push --set-upstream origin branch_name 在远程创建一个与本地branch_name同名的分支并跟踪
4. git checkout --track origin/branch_name 在本地创建一个与branch_name同名分支并跟踪远程分支

## 删除分支
1. git branch -D test 删除本地分支（删除前不能处于要删除的分支）
2. git push origin test 删除远程分支（将一条空分支推送到远程 git push <远程主机名> <本地分支名> <远程分支名> ）

## 提交操作
1. git commit --no-verify -m "忽略校验"
2. git stash 现在想要切换分支，但是还不想要提交之前的工作；所以储藏修改。将新的储藏推送到栈上
3. git stash list 查看要查看储藏的内容
4. git stash pop 还原并删除该条stash记录
5. git reset --hard HEAD^ 回退到上个版本 git reset --hard HEAD~3/commitId 回退到底前3个版本/指定版本


## Git提交规范
feat：新功能（feature）  
fix：修补 bug  
docs：文档（documentation）  
style： 格式（不影响代码运行的变动）  
refactor：重构（即不是新增功能，也不是修改bug的代码变动）  
test：增加测试  
chore：构建过程或辅助工具的变动  

# 参考文献
- [Git官网](https://git-scm.com/book/zh/v2)
- [阮一峰常用 Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
- [廖雪峰Git教程](https://www.liaoxuefeng.com/wiki/896043488029600/896067008724000)






