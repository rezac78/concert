import Link from "next/link";

interface MenuItemProps {
        title: string;
        href: string;
}

export default function MenuItem({ title, href }: MenuItemProps) {
        return (
                <div className="flex items-center">
                        <Link href={href} className="font-bold text-[18px] leading-[25.2px] tracking-normal text-right">
                                {title}
                        </Link>
                </div>
        );
}
