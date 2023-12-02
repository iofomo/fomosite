# 成员篇

### 说明

此文档目的是让团队成员快速进行开发环境配置，前提条件为已安装和配置`wing`。这里以项目`demo`为例。

### 初始化

#### 创建工作空间

添加工作空间对应的代码`git`库服务地址，如：

```shell
# 云端索引模式
# wing -space add {space name} {git host} {manifest}
# such as:
$ wing -space add demo git@github.com/iofomo demo/manifest.git
```

#### 获取代码

```shell
$ mkdir demo
$ cd demo

# wing init {space name} {branch/tag} {manifest file}
# Team leader such as:
$ wing init demo master admin.xml

# Android developer such as:
$ wing init demo master android.xml

# iOS developer such as:
$ wing init demo master ios.xml
```

#### 同步代码

```shell
$ wing sync
```

