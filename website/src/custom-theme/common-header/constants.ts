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
                description: "操作移动设备工具集",
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
                label: "Packit",
                description: "Android和iOS平台应用包二次开发框架",
                link: "/docs/mobile/packit/Introduce/",
            },
        ],
    },
    {
        isPopover: true,
        label: "服务",
        items: [
            {
              label: "Glacier",
              description: "基于公有云和ARM虚拟化技术实现一机多开",
              link: "/docs/services/glacier/Introduce/",
            },
            {
                label: "Publishing APP",
                description: "移动平台应用分发服务",
                link: "/docs/services/publishing/Introduce/",
            },
            {
                label: "Get UDID",
                description: "iOS设备序列号获取服务",
                link: "/docs/services/udid/Introduce/",
            },
        ],
    },
    {
        isPopover: false,
        label: "博客",
        href: "/blog",
    },
];
