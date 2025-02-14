"use client";
export const menuItems = [
        { id: 1, title: "خرید بلیط", href: "#buyTickets" },
        { id: 2, title: "هنرمندان", href: "#Artists" },
        { id: 3, title: "جزییات کنسرت", href: "#concert" }
];

import { useState } from "react";
import Link from "next/link";
import MenuItem from "../../sections/MenuItem/menuItem";
import Logo from "../../sections/Logo/Logo";
export default function Header() {
        const [isOpen, setIsOpen] = useState(false);

        return (
                <header className="bg-black text-white fixed w-full top-0 left-0 z-50">
                        <div className="container mx-auto flex items-center justify-between p-4">
                                <nav className="hidden md:flex gap-10">
                                        <Logo />
                                        {menuItems.map((item) => (
                                                <MenuItem key={item.id} {...item} />
                                        ))}
                                </nav>
                                <Link
                                        href="#"
                                        className="hidden md:block bg-[#6200EE] px-4 py-2 rounded-lg text-white font-semibold  transition"
                                >
                                        خرید بلیط کنسرت
                                </Link>
                                <button className="md:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" /></svg>
                                </button>
                        </div>
                        {isOpen && (
                                <div className="md:hidden bg-gray-900 text-white p-4 flex flex-col items-center gap-4">
                                        {menuItems.map((item) => (
                                                <MenuItem key={item.id} {...item} />
                                        ))}
                                        <Link
                                                href="/buy-ticket"
                                                className="bg-[#6200EE] px-4 py-2 rounded-lg text-white text-[14px] hover:bg-purple-700 transition"
                                        >
                                                خرید بلیط کنسرت
                                        </Link>
                                </div>
                        )}
                </header>
        );
}
