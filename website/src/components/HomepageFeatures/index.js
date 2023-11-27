import React from 'react';
import { animated } from 'react-spring';
import Translate from '@docusaurus/Translate';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './features.module.scss';

function GotoLink({Url, UrlGitee, UrlGithub}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px'}}>
            <a href={Url} style={{ alignSelf: 'center', color: 'deepskyblue' }}>更多 >>></a>
            <div style={{ display: 'flex', justifyContent: 'space-between', width:'70px'}}>
                <a href={UrlGithub} style={{ width:'28px', height:'28px' }} target="_blank">
                    <img src="/img/github-blue.svg"/>
                </a>
                <a href={UrlGitee} style={{ width:'28px', height:'28px' }} target="_blank">
                    <img src="/img/gitee-blue.svg" />
                </a>
            </div>
        </div>
    );
}

function DashboardItem1() {
    return (
        <div className={styles.feat}>
            <div className={styles.left}>
                <section>
                    <h2>
                        <Translate id="features.component.userFlexible.title">Wing</Translate>
                    </h2>
                    <div>
                        <p>Wing 是一款轻量快捷的团队开发协作工具。</p>
                        <p>　</p>
                        <p>▪　支持Windows/MacOS/Linux平台</p>
                        <p>▪　支持代码同步和本地映射</p>
                        <p>▪　扩展了针对工作空间的git命令</p>
                        <p>▪　增加了更多常用开发工具，覆盖开发环境、代码检查、模板创建、开发调试、应用发布环节</p>

                        <GotoLink Url="docs/desktop/wing/Introduce"
                                  UrlGitee="https://www.gitee.com/iofomo/wing"
                                  UrlGithub="https://www.github.com/iofomo/wing"
                        />
                    </div>
                </section>
            </div>

            <div className={styles.right}>
                <LazyLoadImage
                    src="/img/topic-wing.png"
                    alt="iofomo-wing"
                />
            </div>
        </div>
    );
}

function DashboardItem2() {
    return (
        <animated.div className={styles.feat} >
            <div className={styles.right2}>
                <LazyLoadImage
                    src="/img/topic-binderceptor.png"
                    alt="iofomo-binderceptor"
                />
            </div>
            <div className={styles.left2}>
                <section>
                    <h2>
                        <Translate id="features.component.userFlexible.title">Binderceptor</Translate>
                    </h2>
                    <div>
                        <p>Binderceptor 是一个Android平台Binder通信拦截器。</p>
                        <p>　</p>
                        <p>▪　支持Android 6.x~14.x系统版本</p>
                        <p>▪　支持所有Binder机制拦截</p>
                        <p>▪　支持通信日志打印</p>
                        <p>▪　支持通信特征数据过滤</p>
                        <p>▪　支持通信协议拦截/修改/伪装</p>

                        <GotoLink Url="docs/mobile/binderceptor/Introduce"
                                  UrlGitee="https://www.gitee.com/iofomo/binderceptor"
                                  UrlGithub="https://www.github.com/iofomo/binderceptor"
                        />
                    </div>
                </section>
            </div>
        </animated.div>
    );
}

function DashboardItem3() {
    return (
        <div className={styles.feat} >
            <div className={styles.left}>
                <section>
                    <h2>
                        <Translate id="features.component.pluginised.title">Tinyui</Translate>
                    </h2>
                    <div>
                        <p>Tinyui 是一个极简的跨平台桌面客户端开发框架。</p>
                        <p>　</p>
                        <p>▪　支持Windows/MacOS/Linux平台</p>
                        <p>▪　支持欢迎页说明</p>
                        <p>▪　支持多语言资源加载</p>
                        <p>▪　支持界面输入内容记忆功能</p>
                        <p>▪　支持子功能按需发布（插件化加载）</p>
                        <p>▪　支持一键编译发布（打包）</p>
                        <p>▪　支持执行过程控制台输出和日志记录</p>

                        <GotoLink Url="docs/desktop/tinyui/Introduce"
                                  UrlGitee="https://www.gitee.com/iofomo/tinyui"
                                  UrlGithub="https://www.github.com/iofomo/tinyui"
                        />
                    </div>
                </section>
            </div>

            <div className={styles.right}>
                <LazyLoadImage
                    src="/img/topic-tinyui.png"
                    alt="iofomo-tinyui"
                />
            </div>
        </div>
    );
}

function DashboardItem4() {
    return (
        <animated.div className={styles.feat} >
            <div className={styles.right2}>
                <LazyLoadImage
                    src="/img/topic-packer.png"
                    alt="iofomo-packer"
                />
            </div>
            <div className={styles.left2}>
                <section>
                    <h2>
                        <Translate id="features.component.userFlexible.title">Packer</Translate>
                    </h2>
                    <div>
                        <p>Packer 是移动端应用二次打包工具。</p>
                        <p>　</p>
                        <p>▪　支持Android/iOS平台安装包</p>
                        <p>▪　支持入口替换和插件加载</p>
                        <p>▪　支持应用重签</p>

                        <GotoLink Url="docs/mobile/packer/Introduce"
                                  UrlGitee="https://www.gitee.com/iofomo/packer"
                                  UrlGithub="https://www.github.com/iofomo/packer"
                        />
                    </div>
                </section>
            </div>
        </animated.div>
    );
}

export default function HomepageFeatures() {
    return (
        <div className={styles.features}>
            <div className={styles.container}>
                <DashboardItem1/>
                <DashboardItem2/>
                <DashboardItem3/>
                <DashboardItem4/>
            </div>
        </div>
    );
}
