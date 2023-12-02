import Link from "@docusaurus/Link";
import clsx from "clsx";
import React, { useState } from "react";

import { Menu } from "./common-header/menu";
import {CommonThemeToggle} from "./common-theme-toggle";
import {LandingGiteeStarButton} from "./landing-gitee-star-button";
import {LandingGithubStarButton} from "./landing-github-star-button";
import SearchBar from '@theme/NavbarItem/SearchNavbarItem';

type Props = {
    hasSticky?: boolean;
    trackProgress?: boolean;
};

export const CommonHeader = ({ trackProgress }: Props) => {
    return (
        <>
            <header className={clsx("sticky", "top-0", "z-10")}>
                <div
                    className={clsx(
                        "absolute",
                        "top-0 left-0 right-0",
                        "backdrop-blur-[6px]",
                        "landing-md:backdrop-blur-[12px]",
                        "z-[-1]",
                        "bg-gray-0 dark:bg-gray-900",
                        "bg-opacity-80 dark:bg-opacity-80",
                        "pointer-events-none",
                        "transition-colors",
                        "duration-150",
                        "ease-in-out",
                    )}
                    style={{
                        top: "-10px",
                        bottom: "-60px",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0, transparent calc(0% + 10px), black calc(0% + 10px), black calc(100% - 60px), transparent calc(100% - 60px))",
                        maskImage:
                            "linear-gradient(to bottom, transparent 0, transparent calc(0% + 10px), black calc(0% + 10px), black calc(100% - 60px), transparent calc(100% - 60px))",
                    }}
                />
                <div
                    className={clsx(
                        "relative",
                        "z-[1]",
                        "p-4",
                        "landing-sm:px-8",
                        "landing-md:py-5",
                    )}
                >
                    <div
                        className={clsx(
                            "mx-auto",
                            "flex",
                            "items-center",
                            "justify-between",
                            "max-w-[896px]",
                            "landing-lg:max-w-[1200px]",
                        )}
                    >
                        <div
                            className={clsx(
                                "w-[70px]",
                                "landing-lg:w-[70px]",
                            )}
                        >
                            <Link to="/">
                                <img src="/img/logo-dark.png" className="text-gray-900 dark:text-gray-0" />
                            </Link>
                        </div>
                        <div style={{ width: '40px', height: '100%' }}></div>
                        <div
                            className={clsx(
                                "hidden landing-md:flex",
                                "flex-1",
                                "items-center",
                                "gap-8",
                            )}
                        >
                            <Menu />
                        </div>
                        <div
                            className={clsx(
                                "hidden landing-md:flex",
                                "items-center",
                                "justify-end",
                                "gap-4",
                                "w-[130px]",
                                "landing-lg:w-[200px]",
                            )}
                        >
                            <SearchBar />
                            <div className="separator" aria-hidden></div>
                            <LandingGithubStarButton />
                            <LandingGiteeStarButton />
                            <CommonThemeToggle />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
