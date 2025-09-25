"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiArrowRightDoubleFill } from "react-icons/ri";

type Breadcrumb = {
    label: string;
    href: string;
};

type BannerProps = {
    title: string;
    bgImage: string;
    breadcrumbs?: Breadcrumb[];
}


const Breadcrumbs: React.FC<BannerProps> = ({ title, bgImage }) => {

    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);

    const breadcrumbs: Breadcrumb[] = [];

    if (pathname.includes("/product/")) {
        // Insert "Products" before the last segment
        if (pathSegments.length > 1) {
            breadcrumbs.push({ href: "/products", label: "Products" });
            const lastSegment = pathSegments[pathSegments.length - 1];
            breadcrumbs.push({
                href: pathname,
                label: decodeURIComponent(lastSegment.replace(/-/g, " ")),
            });
        }
    } else if (pathname.includes("/blog/")) {
        // Insert "Blog" before the last segment
        if (pathSegments.length > 1) {
            breadcrumbs.push({ href: "/blog", label: "Blog" });
            const lastSegment = pathSegments[pathSegments.length - 1];
            breadcrumbs.push({
                href: pathname,
                label: decodeURIComponent(lastSegment.replace(/-/g, " ")),
            });
        }
    } else if (pathSegments.length > 0) {
        // Default: only add the last segment
        const lastSegment = pathSegments[pathSegments.length - 1];
        breadcrumbs.push({
            href: pathname,
            label: decodeURIComponent(lastSegment.replace(/-/g, " ")),
        });
    }

    const backgroundStyle = bgImage
        ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }
        : { backgroundColor: "#212088" };

    return (
        <div className="text-white text-center bg-cover bg-center relative breadcrumbs-section" style={backgroundStyle}>
            <h1 className={`text-center mb-2 text-2xl md:text-3xl lg:text-4xl font-semibold capitalize ${!bgImage ? 'text-white' : ''}`}>{title}</h1>
            <nav className="text-sm " aria-label="breadcrumbs">
                <ol className="flex flex-row flex-wrap items-center justify-center gap-2 text-lg">
                    <li>
                        <Link className={`hover:underline text-white ${!bgImage ? 'text-white' : ''}`} href="/">
                            Home
                        </Link>
                    </li>
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={crumb.href}>
                            <span className="">
                                <RiArrowRightDoubleFill size={20} color={`text-white ${!bgImage} ? "text-white" : ''`} />
                            </span>
                            <li className="flex items-center" key={crumb.href}>

                                {index === breadcrumbs.length - 1 ? (
                                    <span className={`hover:underline capitalize text-white ${!bgImage ? 'text-white' : ''}`}>
                                        {crumb.label}
                                    </span>
                                ) : (
                                    <Link href={crumb.href} className={`hover:underline capitalize text-white ${!bgImage ? 'text-white' : ''}`}>
                                        {crumb.label}
                                    </Link>
                                )}
                            </li>
                        </React.Fragment>
                    ))}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumbs