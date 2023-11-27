import React from "react";
import clsx from "clsx";
import {
    HtmlClassNameProvider,
    ThemeClassNames,
} from "@docusaurus/theme-common";
import {
    DocsSidebarProvider,
    useDocRouteMetadata,
} from "@docusaurus/theme-common/internal";
import DocPageLayout from "@theme/DocPage/Layout";
import NotFound from "@theme/NotFound";

export default function DocPage(props) {
    const { versionMetadata } = props;

    const currentDocRouteMetadata = useDocRouteMetadata(props);

    if (!currentDocRouteMetadata) {
        return <NotFound />;
    }

    const fallbackSidebarName = Object.keys(versionMetadata.docsSidebars)[0];
    const fallbackSidebarItems =
        versionMetadata.docsSidebars[fallbackSidebarName];

    const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;

    return (
        <>
            <HtmlClassNameProvider
                className={clsx(
                    ThemeClassNames.wrapper.docsPages,
                    ThemeClassNames.page.docsDocPage,
                    props.versionMetadata.className,
                )}
            >
                <DocsSidebarProvider
                    name={
                        sidebarName ?? fallbackSidebarName
                        // isTutorial
                        //     ? sidebarName ?? fallbackSidebarName
                        //     : sidebarName
                    }
                    items={
                        sidebarItems ?? fallbackSidebarItems
                        // isTutorial
                        //     ? sidebarItems ?? fallbackSidebarItems
                        //     : sidebarItems
                    }
                >
                    <DocPageLayout>{docElement}</DocPageLayout>
                </DocsSidebarProvider>
            </HtmlClassNameProvider>
        </>
    );
}
