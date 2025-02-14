"use client";
import Image from "next/image";

const ExperienceSection = () => {
        const experiences = [
                "۵ رپر ایرانی در یک شب!",
                "آتش‌بازی و نورپردازی حرفه‌ای.",
                "۷ ساعت موسیقی زنده با انرژی بالا.",
                "مراسم رقص هنرمندان با اجرای DJ معروف ایرانی.",
                "سرو مشروب، غذا و قلیان در فضای باز کنار ساحل.",
                "تجربه لاکچری VIP (شامل شامپاین، فرش قرمز و همراهی).",
        ];

        return (
                <section className="text-white py-12 px-4 mt-18 md:mt-24">
                        <div className="flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-1/2 text-right order-2 md:order-1 mt-10 md:mt-0">
                                        <h2 className="text-3xl font-bold mb-6 mr-2">تجربه‌ای بی‌نظیر:</h2>
                                        <ul className="space-y-5 text-lg">
                                                {experiences.map((item, index) => (
                                                        <li key={index} className="flex items-center gap-2">
                                                                <span className="text-purple-500 text-xl mr-2"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect y="7.07129" width="10" height="10" transform="rotate(-45 0 7.07129)" fill="#8133F1" />
                                                                </svg>
                                                                </span> {item}
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                                <div className="w-full md:w-[600px] order-1 md:order-2">
                                        <Image
                                                src="/home/experience.avif"
                                                alt="تجربه‌ای بی‌نظیر"
                                                width={600}
                                                height={400}
                                                className="w-full h-auto rounded-lg object-cover"
                                        />
                                </div>
                        </div>
                </section>
        );
};

export default ExperienceSection;
