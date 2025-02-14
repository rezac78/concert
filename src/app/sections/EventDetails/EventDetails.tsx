"use client";
import Image from "next/image";

const EventDetails = () => {
        const details = [
                {
                        id: 1,
                        title: "تاریخ",
                        description: "۱۳ فروردین ۱۴۰۴",
                        icon: "/icons/calendar.svg",
                },
                {
                        id: 2,
                        title: "زمان",
                        description: "۷ شب تا ۳ صبح",
                        icon: "/icons/time.svg",
                },
                {
                        id: 3,
                        title: "مکان",
                        description: "ساحل جمیرا، روبروی هتل W دبی",
                        icon: "/icons/location.svg",
                },
        ];

        return (
                <section id="concert" className="py-16 px-4 w-full pt-20" style={{
                        background: "radial-gradient(circle, rgba(54, 0, 131, 0.2) 0%, #131313 50%)",
                }}>
                        <div className="container mx-auto text-center">
                                <h2 className="text-3xl font-bold mb-14">جزئیات رویداد</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {details.map((item) => (
                                                <div
                                                        key={item.id}
                                                        className="flex gap-2 items-center bg-black border border-[#360083] p-4 text-center w-full md:w-auto"
                                                >
                                                        <div className="bg-[#360083] p-2 rounded-md">
                                                                <Image src={item.icon} alt={item.title} width={40} height={40} />
                                                        </div>
                                                        <div className="text-right flex flex-col gap-y-2">
                                                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                                                <p className="text-gray-300">{item.description}</p>
                                                        </div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
};

export default EventDetails;
