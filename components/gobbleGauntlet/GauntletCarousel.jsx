"use client";

import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"

export default function GauntletCarousel({slides}){

    let [current, setCurrent] = useState(0);

    let previousSlide = ()=>{
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    }

    let nextSlide = ()=>{
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }

    return(
        <>
            <section id="gauntletCarousel" className="overflow-hidden relative">
                <div className={`flex transition ease-out duration-40`} style={{
                    transform: `translateX(-${current * 100}%)`
                }}>
                    {slides.map((s) => (
                    <img key={s} src={s} />
                    ))}
                </div>

                <div className="absolute top-0 h-full w-full justify-between item-center flex text-white px-3 text-3xl">
                    <button onClick={previousSlide}>
                        <BsFillArrowLeftCircleFill/>
                    </button>
                    <button onClick={nextSlide}>
                        <BsFillArrowRightCircleFill/>
                    </button>
                </div>

                 <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                    {slides.map((s, i) => {
                    return (
                        <div
                        onClick={() => {
                            setCurrent(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-5 h-5 cursor-pointer  ${
                            i == current ? "bg-white" : "bg-gray-500"
                        }`}
                        ></div>
                    );
                    })}
                </div>
            </section>
        </>
    );
}