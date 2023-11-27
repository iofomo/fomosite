import React from "react";
import Layout from "@theme/Layout";
import { DocPageLayout as CustomDocPageLayout } from "@site/src/custom-theme/doc-page-layout";

export default function DocPageLayout({ children }) {
    return (
        <Layout>
            <CustomDocPageLayout>{children}</CustomDocPageLayout>
        </Layout>
    );
}
