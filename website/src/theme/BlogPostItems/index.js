import React from "react";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";

import BlogPostItem from "@theme/BlogPostItem";
import clsx from "clsx";

export default function BlogPostItems({
    items,
    tags,
    component: BlogPostItemComponent = BlogPostItem,
    isAuthorPage,
    isTagsPage,
}) {
    return (
        <div
            className={clsx(
                "px-4",
                "blog-md:px-7",
                "blog-2xl:px-0",
                !isAuthorPage &&
                    !isTagsPage &&
                    "blog-sm:pb-16 blog-md:pb-8 blog-2xl:pb-12 pb-10",
                !isAuthorPage && !isTagsPage && "blog-md:pt-16 blog-2xl:pt-20",
                (isAuthorPage || isTagsPage) && "py-8",
                "max-w-[512px]",
                "blog-md:max-w-screen-blog-md",
                "blog-2xl:max-w-screen-blog-md",
                "w-full",
                "mx-auto",
            )}
        >
            <div
                className={clsx(
                    "grid",
                    "grid-cols-1 blog-md:grid-cols-3",
                    "gap-4 blog-lg:gap-12",
                    "pt-6",
                    isAuthorPage ? "blog-md:pt-0" : "blog-md:pt-12",
                )}
            >
                {items.map(({ content: BlogPostContent }) => (
                    <BlogPostProvider
                        key={BlogPostContent.metadata.permalink}
                        content={BlogPostContent}
                    >
                        <BlogPostItemComponent>
                            <BlogPostContent />
                        </BlogPostItemComponent>
                    </BlogPostProvider>
                ))}
            </div>
        </div>
    );
}
