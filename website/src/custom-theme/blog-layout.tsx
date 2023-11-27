import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { BannerSidebar } from "../components/banner/banner-sidebar";
import LayoutProvider from "@theme/Layout/Provider";
import {CommonHeader} from "./common-header";

export const CustomBlogLayout = (props: any) => {
    const { children, toc, ...layoutProps } = props;
    const shouldShowBanner = false;
    // console.log(toc)
    // console.log(layoutProps)

    // const tracker = useScrollTracker();

    return (
        // <CommonLayout {...layoutProps}>
        <LayoutProvider>
            {/* If there's TOC, then we can say that this is a blog post page. */}
            {/* Then we can pass `trackProgress` prop to the header. */}
            <CommonHeader hasSticky={true} trackProgress={!!toc} />
            <div
                className={clsx(
                    "flex",
                    "justify-center",
                    "mx-auto",
                    "max-w-screen-blog-max",
                    "w-full",
                )}
            >
                <div
                    className={clsx(
                        "relative",
                        "w-[264px]",
                        "pl-4",
                        "py-10 blog-sm:py-12 blog-md:py-16",
                        "hidden xl:block",
                        "opacity-0",
                        "transition-opacity duration-300 ease-in-out",
                    )}
                >
                    <div
                        className={clsx(
                            "sticky",
                            "w-[264px]",
                            "z-[1]",
                            "top-32",
                            "left-0",
                        )}
                    >
                        <BannerSidebar shouldShowBanner={shouldShowBanner} />
                    </div>
                </div>
                <div
                    className={clsx(
                        "refine-prose",
                        "flex-1",
                        "min-w-0",
                        "xl:px-8",
                    )}
                >
                    {children}
                </div>
                {toc && (
                    <div
                        className={clsx(
                            "w-[280px]",
                            "hidden blog-md:block",
                            "flex-shrink-0",
                        )}
                    >
                        {toc}
                    </div>
                )}
            </div>
            {/*<CommonFooter />*/}
        </LayoutProvider>
        // </Layout>
    );
};
