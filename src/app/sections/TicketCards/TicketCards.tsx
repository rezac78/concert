"use client";
import React from "react";
import Link from "next/link";

const tickets = [
        {
                id: 1,
                title: "بلیت طلایی",
                price: "۳۰۰ دلار",
                benefits: ["صندلی‌های نزدیک به سن", "یک لیوان آبجو رایگان"],
        },
        {
                id: 2,
                title: "بلیت VIP",
                price: "۵۰۰ دلار",
                benefits: [
                        "صندلی‌های نزدیک به سن",
                        "ورود از فرش قرمز",
                        "همراهی با ۲ مدل روسی",
                        "شامپاین روی میز",
                        "گرفتن عکس و استوری",
                ],
        },
        {
                id: 3,
                title: "بلیت اقتصادی",
                price: "۱۵۰ دلار",
                benefits: [
                        "فضای ایستاده با امکان استفاده از تخت‌های دونفره کنار ساحل",
                        "قلیان و مشروب",
                ],
        },
];

const TicketCards = () => {
        return (
                <section id="buyTickets" className="py-20 flex justify-center gap-2" style={{
                        background: "radial-gradient(circle, rgba(54, 0, 131, 0.2) 0%, #131313 50%)",
                }}>
                        <div className="text-center">
                                <h2 className="text-3xl font-bold mb-14">خرید بلیط</h2>
                                <div className="flex flex-wrap justify-center gap-10 sm:">
                                        {tickets.map((ticket) => (
                                                <div
                                                        key={ticket.id}
                                                        className={`relative flex flex-col justify-between items-center text-[#B78AF7] 
                                                             hover:text-[#FFFFFF] bg-black border border-[#360083] hover:border-[#8133F1] p-4 md:p-8 w-[320px] md:w-[380px] h-[440px]  md:h-[490px] 
                                                             text-center transition-all duration-500 
                                                             `}
                                                        style={{
                                                                background: "radial-gradient(circle at top left, rgba(54, 0, 131, 0.6) 0%, #131313 30%)",
                                                        }}
                                                >
                                                        <h3 className="text-xl text-[24px] font-bold flex text-left w-full">{ticket.title}:</h3>
                                                        <div className="w-full text-[#FFFFFF]">
                                                                <span className="flex text-left w-full text-[16px] text-[#9E9E9E]">قیمت :</span>
                                                                <p className="text-5xl font-bold -my-5">{ticket.price}</p>
                                                        </div>
                                                        <ul className="text-gray-300 space-y-2 flex flex-col text-right w-full">
                                                                {ticket.benefits.map((benefit, i) => (
                                                                        <li key={i} className="text-sm">
                                                                                • {benefit}
                                                                        </li>
                                                                ))}
                                                        </ul>
                                                        <Link
                                                                href="#"
                                                                className="mt-6 bg-[#6200EE] w-full h-[46px] flex justify-center items-center text-white font-semibold"
                                                        >
                                                                خرید بلیط
                                                        </Link>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
};

export default TicketCards;
