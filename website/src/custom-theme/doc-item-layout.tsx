import React from "react";
import clsx from "clsx";
// import { useDoc } from "@docusaurus/theme-common/internal";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemContent from "@theme/DocItem/Content";
import {DocTOC} from "./doc-toc";

export const DocItemLayout = ({ children }) => {
    return (
        <>
            <div
                className={clsx(
                    "flex-1",
                    "flex flex-col",
                    "items-center justify-start",
                    "px-4 sm:px-0 py-4 sm:py-14",
                    "w-full",
                )}
            >
                <div className={clsx("max-w-screen-content w-full")}>
                    {/*<div className={clsx("flex flex-col", "mb-8")}>*/}
                    {/*    <DocBreadcrumbs />*/}
                    {/*</div>*/}
                    <div className={clsx("refine-prose")}>
                        <DocItemContent>{children}</DocItemContent>
                    </div>
                    <DocItemFooter />
                </div>
                <div className={clsx("max-w-screen-content", "w-full")}>
                    <DocItemPaginator />
                </div>
            </div>
        </>
    );
};
