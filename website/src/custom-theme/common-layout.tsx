import React, { useEffect } from "react";
import LayoutProvider from "@theme/Layout/Provider";
import clsx from "clsx";

declare global {
    interface Window {
        Intercom: any;
    }
}

export const CommonLayout = (props: any) => {
    const { children, title, description } = props;

    return (
        <LayoutProvider>
            <div
                className={clsx(
                    "main-wrapper",
                    "min-h-[100dvh]",
                    "flex flex-col",
                    "dark:bg-gray-900 bg-gray-0",
                    "transition-colors",
                    "duration-150",
                    "ease-in-out",
                )}
            >
            </div>
        </LayoutProvider>
    );
};
