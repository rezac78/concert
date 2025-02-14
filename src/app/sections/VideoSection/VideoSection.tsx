export default function VideoSection() {
        return (
                <div className="relative w-full h-[800px] flex items-center justify-center text-center text-white md:mt-20">
                        <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                poster="/home/homeBanner.avif"
                        >
                                <source src="/home/video.mp4" type="video/mp4" />
                                مرورگر شما از ویدیو پشتیبانی نمی‌کند.
                        </video>
                        <div className="relative top-[200px] md:top-[300px] z-10 p-2 md:p-4 bg-black/10 w-full">
                                <h1 className="font-bold text-[28px] md:text-[46px] text-center">
                                        شب بزرگ ایرانی‌ها ، تجربه‌ای فراتر از تصور!
                                </h1>
                                <p className="mt-6 text-md md:text-3xl">
                                        کنار هم‌نشینی ۵ رپر ایرانی، مراسم رقص، DJ، شام، قلیان و آتش‌بازی در بهترین ساحل دبی                                </p>
                        </div>
                </div>
        );
}
