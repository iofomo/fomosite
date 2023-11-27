import React from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import { useLocation } from "@docusaurus/router";
import {
    isActiveSidebarItem,
    // findFirstCategoryLink,
    // useDocSidebarItemsExpandedState,
    isSamePath,
} from "@docusaurus/theme-common/internal";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { DashIcon } from "./icons/dash";
import { ChevronDownIcon } from "./icons/chevron-down";
export const HEADER_HEIGHT = 67;

type Variant = "desktop" | "mobile";

type SidebarCategoryItem = {
    collapsible: boolean;
    collapsed: boolean;
    type: "category";
    href?: string;
    label: string;
    items: SidebarItem[];
    className?: string;
};

type SidebarLinkItem = {
    type: "link";
    label: string;
    href: string;
    docId: string;
    className?: string;
};

type SidebarHtmlItem = {
    type: "html";
    content: string;
};

type SidebarItem = SidebarCategoryItem | SidebarLinkItem | SidebarHtmlItem;

type SidebarType = {
    name: string;
    items: SidebarItem[];
};

const SidebarCategory = ({
    item,
    path,
    line,
    variant,
    onLinkClick,
    deferred,
}: {
    item: SidebarCategoryItem;
    path: string;
    line?: boolean;
    variant: Variant;
    onLinkClick?: () => void;
    deferred?: boolean;
}) => {
    const isHeader = item.className === "category-as-header";
    const isActive = isActiveSidebarItem(item, path);

    const isSame = isSamePath(item.href, path);

    const [collapsed, setCollapsed] = React.useState(!(isHeader || isActive));

    const [settled, setSettled] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setSettled(true);
        }, 210);
    }, [collapsed]);

    const toggle = () => {
        setCollapsed(!collapsed);
        setSettled(false);
    };

    const Comp = !isHeader && item.href && !isSame ? Link : "button";

    return (
        <div
            className={clsx(
                !line && "pl-0",
                line && "pl-5",
                line && "ml-[11px]",
                line && "border-l-2 border-l-gray-200 dark:border-l-gray-600",
            )}
        >
            <Comp
                type="button"
                onClick={isHeader ? () => 0 : toggle}
                isNavLink
                href={item.href}
                className={clsx(
                    isHeader && item.label !== "Getting Started" && "mt-6",
                    isHeader && "cursor-default",
                    "w-full",
                    "min-h-[40px]",
                    "border-0",
                    "appearance-none",
                    "focus:outline-none",
                    isActive && !isHeader
                        ? "dark:text-gray-0 text-gray-900"
                        : "text-gray-500 dark:text-gray-400",
                    isHeader ? "uppercase" : "",
                    "font-normal",
                    "flex items-center",
                    "py-2",
                    "pr-2",
                    isHeader
                        ? "text-xs leading-4 tracking-widest"
                        : "text-sm leading-6",
                    "relative",
                    !isHeader && "group",
                    "transition-colors duration-200 ease-in-out",
                    !isHeader && "hover:dark:text-gray-0 hover:text-gray-900",
                    !isHeader && "no-underline",
                )}
            >
                <div
                    className={clsx(
                        "absolute",
                        "opacity-0",
                        "rounded-lg",
                        "transition-opacity",
                        "duration-200 ease-in-out",
                        "top-0",
                        "group-hover:bg-gray-200/40 dark:group-hover:bg-gray-700/80",
                        {
                            "bg-gray-100/50 dark:bg-gray-700/50":
                                isActive && isSame,
                            "right-0": variant === "desktop",
                            "-right-2": variant === "mobile",
                            "w-[calc(280px-24px)]": variant === "desktop",
                            "w-[calc(480px-16px)]": variant === "mobile",
                        },
                        "h-full",
                    )}
                />
                {!isHeader && (
                    <ChevronDownIcon
                        className={clsx(
                            "opacity-70",
                            isActive
                                ? "dark:text-gray-0 text-gray-900"
                                : "text-gray-500 dark:text-gray-400",
                            "h-6 w-6",
                            "flex-shrink-0",
                            "z-[1]",
                            "transition-transform duration-200 ease-in-out",
                            {
                                "-rotate-90 transform": collapsed,
                            },
                        )}
                    />
                )}
                <span className="z-[1]">{item.label}</span>
                <div
                    className={clsx(
                        "absolute",
                        "rounded-lg",
                        "transition-opacity",
                        "duration-200 ease-in-out",
                        "top-0",
                        "group-hover:bg-gray-200/40 dark:group-hover:bg-gray-700/80",
                        {
                            "bg-gray-100/50 dark:bg-gray-700/50":
                                isActive && isSame,
                            "right-0": variant === "desktop",
                            "-right-2": variant === "mobile",
                            "w-[calc(280px-24px)]": variant === "desktop",
                            "w-[calc(480px-16px)]": variant === "mobile",
                        },
                        "h-full",
                    )}
                />
            </Comp>
            <div
                className={clsx(
                    collapsed && "max-h-0 opacity-0",
                    collapsed && "overflow-hidden",
                    !collapsed && "opacity-100",
                    !collapsed && !settled && "max-h-screen",
                    !collapsed && settled && "max-h-max",
                )}
            >
                {
                    // if category is collapsed, don't render items for performance reasons
                    (deferred ? !collapsed : true) &&
                        renderItems({
                            items: item?.items ?? [],
                            path: path,
                            line: !isHeader,
                            fromHeader: isHeader,
                            variant,
                            onLinkClick,
                            deferred,
                        })
                }
            </div>
        </div>
    );
};

const SidebarLink = ({
    item,
    path,
    dashed,
    line,
    variant,
    onClick,
}: {
    item: SidebarLinkItem;
    path: string;
    dashed?: boolean;
    line?: boolean;
    variant: Variant;
    onClick?: () => void;
}) => {
    const ref = React.useRef<HTMLAnchorElement>(null);
    const isActive = isActiveSidebarItem(item, path);
    const isSame = isSamePath(item.href, path);
    const isShiny = false;

    // React.useEffect(() => {
    //     if (isActive) {
    //         ref.current?.scrollIntoView({
    //             behavior: "smooth",
    //             block: "center",
    //         });
    //     }
    // }, [isActive]);

    return (
        <Link
            ref={ref}
            href={item.href}
            isNavLink
            onClick={onClick}
            className={clsx(
                "relative",
                "min-h-[40px]",
                isShiny &&
                    "bg-sidebar-item-shiny-light dark:bg-sidebar-item-shiny-dark rounded-xl",
                isShiny
                    ? "text-refine-blue dark:text-refine-cyan-alt"
                    : isActive
                    ? "dark:text-gray-0 text-gray-900"
                    : "text-gray-500 dark:text-gray-400",
                !isShiny && "hover:dark:text-gray-0 hover:text-gray-900",
                isShiny ? "px-4 py-3" : "p-2",
                "text-sm font-normal leading-6",
                "flex items-start justify-start",
                dashed && !line && "pl-0",
                line && !dashed && "pl-5",
                line && dashed && "pl-5",
                line && "ml-[11px]",
                line && "border-l-2 border-l-gray-200 dark:border-l-gray-600",
                "group",
                "transition-colors duration-200 ease-in-out",
                "no-underline",
                item.className,
            )}
        >
            {dashed && (
                <DashIcon className="z-[1] h-6 w-6 flex-shrink-0 opacity-70" />
            )}
            <div className={"flex items-center"}>
                <span className="z-[1] flex-shrink-0">{item.label}</span>
            </div>
            {(
                <div
                    className={clsx(
                        "absolute",
                        "rounded-lg",
                        "transition-opacity",
                        "duration-200 ease-in-out",
                        "group-hover:bg-gray-200/40 dark:group-hover:bg-gray-700/80",
                        {
                            "bg-gray-100/50 dark:bg-gray-700/50":
                                isActive && isSame,
                            "right-0": variant === "desktop",
                            "-right-2": variant === "mobile",
                            "w-[calc(280px-24px)]": variant === "desktop",
                            "w-[calc(480px-16px)]": variant === "mobile",
                        },
                        "top-0",
                        "h-full",
                    )}
                />
            )}
        </Link>
    );
};

const SidebarHtml = ({
    item,
    path,
    line,
    variant,
}: {
    item: SidebarHtmlItem;
    path: string;
    line?: boolean;
    variant: Variant;
}) => {
    return null;
};

type RenderItemConfig = {
    items: SidebarItem[];
    path: string;
    root?: boolean;
    line?: boolean;
    fromHeader?: boolean;
    variant: Variant;
    onLinkClick?: () => void;
    deferred?: boolean;
    level?: number;
};

const renderItems = ({
    items = [],
    path,
    root,
    line,
    fromHeader,
    variant,
    onLinkClick,
    deferred,
    level = 0,
}: RenderItemConfig) => {
    const hasCategory = items?.some((item) => item.type === "category");
    const isDashed = !root && hasCategory;

    return (
        items?.map((item, index) => {
            switch (item.type) {
                case "category":
                    return (
                        <SidebarCategory
                            key={index}
                            item={item}
                            path={path}
                            line={!!line}
                            variant={variant}
                            onLinkClick={onLinkClick}
                            deferred={deferred}
                        />
                    );
                case "html":
                    return (
                        <SidebarHtml
                            key={index}
                            item={item}
                            path={path}
                            line={!!line}
                            variant={variant}
                        />
                    );
                case "link":
                    return (
                        <SidebarLink
                            key={index}
                            item={item}
                            path={path}
                            dashed={isDashed}
                            line={!!line}
                            variant={variant}
                            onClick={onLinkClick}
                        />
                    );
                default:
                    return null;
            }
        }) ?? []
    );
};

export const DocSidebar = () => {
    const sidebar = useDocsSidebar() as SidebarType;
    const { pathname } = useLocation();

    return (
        <div
            className={clsx(
                "hidden lg:block",
                "sticky",
                "left-0",
                "overflow-auto",
                "w-full",
                "max-w-[280px]",
                // "scrollbar-slim",
            )}
            style={{
                top: `${HEADER_HEIGHT}px`,
                height: `calc(100vh - ${HEADER_HEIGHT}px)`,
            }}
        >
            <div
                className={clsx(
                    "pl-5",
                    "pr-3",
                    "py-12",
                    "border-r border-r-gray-200 dark:border-r-gray-700",
                )}
            >
                {renderItems({
                    items: sidebar?.items,
                    path: pathname,
                    root: true,
                    variant: "desktop",
                })}
            </div>
        </div>
    );
};

type UseSidebarItemsProps = {
    variant: Variant;
    onLinkClick?: () => void;
    deferred?: boolean;
};

export const useSidebarItems = ({
    variant,
    onLinkClick,
    deferred,
}: UseSidebarItemsProps) => {
    const sidebar = useDocsSidebar() as SidebarType;
    const { pathname } = useLocation();

    return {
        items: renderItems({
            items: sidebar?.items,
            path: pathname,
            root: true,
            variant,
            onLinkClick,
            deferred,
        }),
    };
};
