import Image from "next/image";
import React from "react";

export function Header() {
    return (
        <div className='flex 
        items-center 
        justify-start 
        flex-wrap 
        bg-orange-300 
        p-2 
        border-b-2 
        border-orange-500'>
            <div><Image src={'/assets/logotipo.png'} height={80} width={80} alt='Tio do Crepe' priority /></div>
            <div className="flex-grow font-bold text-center text-red-700 text-4xl font-irish">MENU</div>
        </div>

    )
}