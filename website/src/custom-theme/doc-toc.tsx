import React from "react";
import clsx from "clsx";
import { useDoc } from "@docusaurus/theme-common/internal";
// import { useDocTOCwithTutorial } from "../components/tutorial-toc/index";
import { useLocation } from "@docusaurus/router";

export const TOCItem = ({
    id,
    value,
    level,
    activeId,
    onIdChange,
}: {
    id: string;
    value: string;
    level: number;
    activeId: string;
    onIdChange?: (id: string) => void;
}) => {
    React.useEffect(() => {
        const targetElement = document.getElementById(id);

        if (targetElement) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const hash = `#${id}`;
                            if (hash !== window.location.hash) {
                                onIdChange(id);
                                if (typeof window !== "undefined") {
                                    window.history.replaceState(
                                        undefined,
                                        undefined,
                                        hash,
                                    );
                                }
                            }
                        }
                    });
                },
                {
                    rootMargin: "0px 0px -80% 0px",
                },
            );

            observer.observe(targetElement);

            return () => {
                observer.unobserve(targetElement);
            };
        }
    }, [id]);

    return (
        <a
            href={`#${id}`}
            className={clsx(
                "refine-toc-item",
                level === 2 && "pl-3",
                level === 3 && "pl-7",
                level === 4 && "pl-11",
                "py-2 pr-3",
                "hover:bg-gray-200/40 dark:hover:bg-gray-700/80",
                activeId === id &&
                    `dark:text-gray-0 text-gray-900 hover:text-gray-900 
                    bg-gray-100/50 dark:bg-gray-700/50
                    `,
                activeId !== id &&
                    `dark:hover:text-gray-0 text-gray-500 hover:text-gray-900 dark:text-gray-500
                      bg-opacity-0 dark:bg-opacity-0
                    `,
                "hover:!text-gray-900 dark:hover:!text-gray-0",
                "rounded-lg",
                "transition-colors duration-200 ease-in-out",
                "block",
                "text-sm",
                "leading-6",
                "no-underline hover:no-underline",
            )}
            dangerouslySetInnerHTML={{
                __html: value,
            }}
        />
    );
};

export const DocTOC = () => {
    // const docTOC = useDocTOCwithTutorial();
    const { toc, hasTOC, activeId, setActiveId } = useTOC();

    return (
        <div
            className={clsx(
                "hidden xl:block",
                "sticky right-0 top-[67px]",
                "max-w-[280px]",
                "overflow-auto",
                "h-[calc(100vh-67px)]",
                "scrollbar-hidden",
                "pl-3",
                "pr-3",
                "py-12",
                "border-l border-l-gray-100 dark:border-l-gray-700",
                !hasTOC && "invisible",
            )}
        >
            <ul>
                {toc.map((item) => {
                    return (
                        <li key={item.id}>
                            <TOCItem
                                id={item.id}
                                value={item.value}
                                activeId={activeId}
                                level={item.level}
                                onIdChange={(id) => {
                                    setActiveId(id);
                                }}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export const useTOC = () => {
    const { hash } = useLocation();

    const baseActiveId = `${hash}`.replace("#", "");

    const [activeId, setActiveId] = React.useState<string | undefined>(
        baseActiveId,
    );

    React.useEffect(() => {
        setActiveId(baseActiveId);
    }, [baseActiveId]);

    // const docTOC = useDocTOCwithTutorial();
    const { toc } = useDoc();

    const hasTOC = toc?.length > 0;

    return {
        toc,
        activeId,
        setActiveId,
        hasTOC,
    };
};
