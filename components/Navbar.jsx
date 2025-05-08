import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";

const robotoFont = Roboto_Condensed({
    weight: '400',
    subsets: ['latin'],
});



export default function NavBar()
{
    return (
        <>
            <div className="w-full bg-blue-500 flex justify-between items-center rounded-sm">
                <Link href="/" className={`text-lg p-4 font-serif ${robotoFont.className}`}>James Lynch</Link>
            </div>
        </>
    );
}