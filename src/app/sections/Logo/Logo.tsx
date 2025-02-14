import Image from "next/image";
import Link from "next/link";

export default function Logo() {
        return (
                <Link href="/" className="flex items-center">
                        <Image src="/home/LOGO.svg" alt="Horizon Corporate" width={80} height={46} />
                </Link>
        );
}
