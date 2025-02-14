"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const ArtistsSection = () => {
        const artists = [
                {
                        id: 1,
                        name: "یاس",
                        description: "یکی از محبوب‌ترین خوانندگان رپ فارسی با متن‌های اجتماعی.",
                        imageSmall: "/home/artlist/1.avif",
                        imageBig: "/home/artlist/5.avif",
                },
                {
                        id: 2,
                        name: "تتلو",
                        description: "خواننده‌ای با سبک خاص که موسیقی او پر از احساسات متفاوت است.",
                        imageSmall: "/home/artlist/2.avif",
                        imageBig: "/home/artlist/5.avif",
                },
                {
                        id: 3,
                        name: "جیدال",
                        description: "با سبک خاص و جذاب خود، یکی از چهره‌های مطرح رپ فارسی است.",
                        imageSmall: "/home/artlist/3.avif",
                        imageBig: "/home/artlist/5.avif",
                },
                {
                        id: 4,
                        name: "شایع",
                        description: "با صدای گیرا و متن‌های عمیق، یکی از ستاره‌های رپ فارسی است.",
                        imageSmall: "/home/artlist/4.avif",
                        imageBig: "/home/artlist/5.avif",
                },
        ];

        const [selectedArtist, setSelectedArtist] = useState(artists[0]);
        useEffect(() => {
                const interval = setInterval(() => {
                        setSelectedArtist((prevArtist) => {
                                const currentIndex = artists.findIndex((artist) => artist.id === prevArtist.id);
                                const nextIndex = (currentIndex + 1) % artists.length;
                                return artists[nextIndex];
                        });
                }, 4000);

                return () => clearInterval(interval);
        }, []);

        return (
                <div id="Artists">
                        <section>
                                <h2 className="text-4xl font-bold text-center md:text-right mt-20 mb-10">معرفی هنرمندان:</h2>
                                <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto">
                                        <div className="w-full md:w-2/3 flex justify-center mb-5 md:mb-0">
                                                <Image
                                                        src={selectedArtist.imageBig}
                                                        alt={selectedArtist.name}
                                                        width={753}
                                                        height={640}
                                                        className="w-full h-[400px] md:h-[640px] transition-all duration-500"
                                                />
                                        </div>
                                        <div className="w-full md:w-1/3">
                                                <Swiper slidesPerView={"auto"} spaceBetween={18} direction="vertical" className="!px-3">
                                                        {artists.map((artist) => (
                                                                <SwiperSlide
                                                                        key={artist.id}
                                                                        className={`!flex cursor-pointer items-center transition-all duration-300 ${selectedArtist.id === artist.id && "border-2 border-[#4600A9]"}`}
                                                                        onClick={() => setSelectedArtist(artist)}
                                                                >
                                                                        <Image
                                                                                src={artist.imageSmall}
                                                                                alt={artist.name}
                                                                                width={250}
                                                                                height={98}
                                                                                className="w-full h-[140px] object-cover"
                                                                        />
                                                                </SwiperSlide>
                                                        ))}
                                                </Swiper>
                                        </div>
                                </div>
                                <div className="flex flex-wrap md:flex-nowrap items-center  justify-between py-10 bg-white/10 backdrop-blur-[15px] w-[97%] mx-auto p-6 mt-10 border-y border-l">
                                        <div className="text-center md:text-right w-full space-y-5">
                                                <h3 className="text-2xl font-semibold">{selectedArtist.name}:</h3>
                                                <p className="text-2xl">{selectedArtist.description}</p>
                                        </div>
                                        <Link
                                                href="#buyTickets"
                                                className="bg-[#6200EE] mx-auto mt-5 md:mt-0 flex justify-center items-center text-xl w-[200px] h-[56px] rounded-[16px] transition"
                                        >
                                                خرید بلیط کنسرت
                                        </Link>
                                </div>

                        </section>
                </div>
        );
};
export default ArtistsSection;
