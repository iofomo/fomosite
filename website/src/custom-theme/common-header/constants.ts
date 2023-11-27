export type NavbarPopoverItemType = {
    isPopover: true;
    label: string;
    items: {
        label: string;
        description: string;
        link: string;
    }[];
};

export type NavbarItemType = {
    isPopover?: false;
    label: string;
    href?: string;
};

export type MenuItemType = NavbarPopoverItemType | NavbarItemType;

export const MENU_ITEMS: MenuItemType[] = [
    {
        isPopover: true,
        label: "桌面端",
        items: [
            {
                label: "Wing",
                description: "轻量快捷的团队开发协作工具",
                link: "/docs/desktop/wing/Introduce/",
            },
            {
                label: "Cabin",
                description: "桌面端虚拟化沙箱",
                link: "/docs/desktop/cabin/Introduce/",
            },
            {
                label: "Tinyui",
                description: "极简桌面端跨平台应用框架",
                link: "/docs/desktop/tinyui/Introduce/",
            },
            {
                label: "MobTools",
                description: "移动设备操作工具",
                link: "/docs/desktop/mobtools/Introduce/",
            },
        ],
    },
    {
        isPopover: true,
        label: "移动端",
        items: [
            {
                label: "Binderceptor",
                description: "Android平台Binder通信拦截框架",
                link: "/docs/mobile/binderceptor/Introduce/",
            },
            {
                label: "Konker",
                description: "Android平台下应用多开框架",
                link: "/docs/mobile/konker/Introduce/",
            },
            {
                label: "Packer",
                description: "Android和iOS平台应用重打包工具",
                link: "/docs/mobile/packer/Introduce/",
            },
        ],
    },
    {
        isPopover: true,
        label: "服务",
        items: [
            {
                label: "Publishing APP",
                description: "移动端应用分发服务",
                link: "/docs/services/publishing/Introduce/",
            },
            {
                label: "Get UDID",
                description: "iOS设备序列号获取服务",
                link: "/docs/services/udid/Introduce/",
            },
            {
                label: "TestBot",
                description: "应用自动化测试服务",
                link: "/docs/services/testbot/Introduce/",
            },
        ],
    },
    {
        isPopover: false,
        label: "博客",
        href: "/blog",
    },
];
