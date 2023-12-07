# 负责人篇

[☞ Github ☜](https://www.github.com/iofomo/wing)　　[☞ Gitee ☜](https://www.gitee.com/iofomo/wing)

### 说明

负责人通常维护整个团队的开发环境，因此负责项目或产品的开发环境搭建，让团队成员或者新人可以快速便捷的进行开发。

-   快速同步代码
-   快速编译打包
-   便捷文档管理
-   一致的开发环境（成员之前，服务端编译）
-   公共资源共享

### 配置

>这里以项目`demo`为例。

#### 创建代码库

1、创建代码索引库：`demo/manifest.git`。

2、创建项目文档库：`demo/doc.git`。

3、创建项目编译库：`demo/build.git`。

#### 配置代码索引

代码索引库通常存放代码库的索引配置信息，可以配置多个代码组，通过此配置可以将通用的资源重新映射，本地统一重新命名，而成员无需再关心云端`git`仓库状态；后续更新后成员只需执行`wing sync`即可同步。

而其中最重要的即是`admin.xml`。

```xml
<?xml version='1.0' encoding='UTF-8'?>
<manifest>
    <remote name="origin" fetch=".."/>

    <!-- branch -->
    <default revision="master" remote="origin" sync-j="4"/>

    <!-- Document -->
    <project path="doc" name="demo/doc.git" />

    <!-- Platform: always with master -->
    <project path="platform/doc" name="platform/doc.git" revision="master" />
    <!-- Android resource: always with master -->
    <project path="platform/resource" name="android/resource.git" revision="master" >
        <copyfile dest="default.gradle" src="gradle/default.gradle"/>
    </project>

    <!-- iOS -->
    <project path="ios/client" name="demo/ios/client.git" />

    <!-- Android -->
    <project path="android/client" name="demo/ios/client.git" />

    <!-- Server service -->
    <project path="server/web" name="demo/server/web.git" />
    <project path="server/service" name="demo/server/service.git" />

    <!-- PC -->
    <project path="pc/tools" name="demo/tools.git" />

    <!-- Test -->
    <project path="test/testTools" name="demo/testTools.git" />

    <!-- build -->
    <project path="build" name="demo/build">
        <!--<copyfile dest="build.py" src="build.py"/>-->
    </project>

</manifest>
```

我们还可以根据不同成员的角色配置子索引，如：`ios.xml`

```xml
<?xml version='1.0' encoding='UTF-8'?>
<manifest>
    <remote name="origin" fetch=".."/>

    <!-- branch -->
    <default revision="master" remote="origin" sync-j="4"/>

    <!-- Document -->
    <project path="doc" name="demo/doc.git" />

    <!-- Platform: always with master -->
    <project path="platform/doc" name="platform/doc.git" revision="master" />

    <!-- iOS -->
    <project path="ios/client" name="demo/ios/client.git" />

    <!-- build -->
    <project path="build" name="demo/build">
        <!--<copyfile dest="build.py" src="build.py"/>-->
    </project>

</manifest>
```

如：`android.xml`

```xml
<?xml version='1.0' encoding='UTF-8'?>
<manifest>
    <remote name="origin" fetch=".."/>

    <!-- branch -->
    <default revision="master" remote="origin" sync-j="4"/>

    <!-- Document -->
    <project path="doc" name="demo/doc.git" />

    <!-- Platform: always with master -->
    <project path="platform/doc" name="platform/doc.git" revision="master" />
    <!-- Android resource: always with master -->
    <project path="platform/resource" name="android/resource.git" revision="master" >
        <copyfile dest="default.gradle" src="gradle/default.gradle"/>
    </project>

    <!-- Android -->
    <project path="android/client" name="demo/ios/client.git" />

    <!-- build -->
    <project path="build" name="demo/build">
        <!--<copyfile dest="build.py" src="build.py"/>-->
    </project>

</manifest>
```

### 开发指南

开发指南通常为项目或产品立项后，成员参与此开发需要阅读的开发手册。

1、新人开发指南：

对于新人，需要提供公司通用的开发手册，这里由于不同组织开发环境不同，因此无法统一，但目的都是让新人快速配置好开发环境。

2、本项目开发指南：

围绕当前产品或项目的开发环境配置，参考[【项目开发指南】](./readme-developer)
