# Git常用命令

## 查看
1. git branch /-r/-vv/-a    
查看本地所有分支/只查看远程仓库的分支/查看本地分支和相关联的远程分支/查看本地和远程仓库的所有分支
2. git remote -v   
查看远程仓库的信息
3. git log   
显示当前分支的版本历史
4. git status  
显示有变更的文件
5. git diff  
显示暂存区和工作区的差异
6. git diff HEAD
显示工作区与当前分支最新commit之间的差异
7. git reflog   
显示当前分支的最近几次提交



## 操作

## 分支操作
1. git branch --set-upstream-to=origin/[branch-name]   
将当前本地分支和远程分支相关联(本地分支和远程分支都已经存在)
2. git push --set-upstream origin branch_name   
在远程创建一个与本地branch_name同名的分支并跟踪
3. git checkout --track origin/branch_name   
在本地创建一个与branch_name同名分支并跟踪远程分支
4. git branch -D [branch-name]   
删除本地分支（删除前不能处于要删除的分支）
5. git push origin --delete [branch-name]
删除远程分支（将一条空分支推送到远程 git push <远程主机名> <本地分支名> <远程分支名> ）
6. git branch [branch-name]  
新建一个分支，但依然停留在当前分支
7. git branch [branch-name]
新建一个分支，但依然停留在当前分支
8. git branch [branch] [commit]
新建一个分支，指向指定commit
9. git checkout -b [branch]  
新建一个分支，并切换到该分支
10. git branch [branch] [commit]  
新建一个分支，指向指定commit
11. git checkout -  
切换到上一个分支
12. git merge [branch]  
合并指定分支到当前分支
13. git cherry-pick [commit]
选择一个commit，合并进当前分支





## 提交操作
1. git commit --no-verify -m   
提交并忽略校验
2. git stash   
现在想要切换分支，但是还不想要提交之前的工作；所以储藏修改。将新的储藏推送到栈上
3. git stash list   
查看栈中储藏的内容
4. git stash pop  
还原并删除该条stash记录

## 撤销操作
1. git checkout .   
重置所有工作区的文件  
2. git reset .   
回退暂存区的文件（相当于回退到git add . 之前的状态）    
3. git reset --soft HEAD^    
撤销上次的本地提交（相当于回退到git commit 之前的状态，提交的文件回到暂存区） 
4. git reset --hard HEAD^/HEAD~1/commitId
重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致/回退到底前1个版本/指定版本


## Git提交规范
- feat：新功能（feature）  
- fix：修补 bug  
- docs：文档（documentation）  
- style： 格式（不影响代码运行的变动）  
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）  
- test：增加测试  
- chore：构建过程或辅助工具的变动  

# 参考文献
- [Git官网](https://git-scm.com/book/zh/v2)
- [阮一峰常用 Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
- [廖雪峰Git教程](https://www.liaoxuefeng.com/wiki/896043488029600/896067008724000)






