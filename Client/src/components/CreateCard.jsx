import React from 'react'
import sunglass from "../assets/images/sunglass.png"
import sunglasss2 from "../assets/images/sunglasss2.png"
import screenglasses from "../assets/images/screenglasses.png"
import contact from "../assets/images/contact.png"
import powersunglass from "../assets/images/powersunglass.png"
import power from "../assets/images/zero power.png"

export default function CreateCard() {
    const card = [
        { img: sunglass, data: "Eyeglasses" },
        { img: sunglasss2, data: "Sunglasses" },
        { img: screenglasses, data: "Screenglasses" },
        { img: contact, data: "Contact lenses" },
        { img: powersunglass, data: "Power sunglasses" },
        { img: power, data: "Zero power Glasses" },
        
    ]
    return (
        <div className=' flex-col flex-wrap'>
            <div className=' flex flex-wrap bg-gray-300 gap-2 h-[200px] p-4'>
                {
                    card.map((value, key) => (
                        <div className=' h-[170px] border-black w-[240px] rounded-md bg-slate-50 p-2' key={key}>
                            <div className='flex h-[130px] bg-white w-[205px] '>
                                <img src={value.img} alt="" />

                            </div>
                            <div className='pb-2 items-center flex justify-center'>{value.data}</div>
                        </div>
                    ))

                }
            </div>

        </div>
    )
}

