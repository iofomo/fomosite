import React, { useEffect, useState } from "react";
import clsx from "clsx";
import LayoutProvider from "@theme/Layout/Provider";
import {CommonHeader} from "./common-header";
import Footer from '@theme/Footer';

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
            <Footer />
        </LayoutProvider>
        // </Layout>
    );
};
