export default function FestivalSection() {
        return (
                <div
                        className="relative w-full h-[450px] flex items-center justify-center text-center text-white bg-cover bg-center mt-1.5 px-4"
                        style={{ backgroundImage: "url('/home/FestivalSection.avif')" }}
                >
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="relative z-10 bg-white/10 backdrop-blur-[22px] px-6 py-10 w-[1200px]">
                                <h2 className="flex justify-center items-center gap-3 sm:gap-6 text-sm sm:text-xl md:text-2xl font-bold mb-8">
                                        <div className="w-20 md:w-40 h-[1px] bg-white"></div>
                                        <div className="">معرفی فستیوال:</div>
                                        <div className="w-20 md:w-40 h-[1px] bg-white"></div>
                                </h2>
                                <p className="text-[16px] md:text-[20px]">
                                        شب بزرگ ایرانی‌ها، جشنی بی‌نظیر و فراموش‌نشدنی در کنار ساحل جمیرا دبی!                                 </p>
                                <p className="mt-2 text-[16px] md:text-[20px]">
                                        برای اولین بار شاهد کنار هم‌نشینی ۵ رپر ایرانی باشید و شبی پر از هیجان، نور، صدا و موسیقی را تجربه کنید.                                 </p>
                                <p className="mt-2 text-[16px] md:text-[20px]">
                                        این فستیوال با حضور بهترین DJ ایرانی، مراسم رقص هنرمندان، سرو غذا، مشروب و قلیان، شما را به دنیایی از لذت و شادی دعوت می‌کند.
                                </p>
                        </div>
                </div>
        );
}
