// import Logo from '../assets/images/herballogo.jpg'
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu'
import { useState } from 'react'

export default function Navbar() {

    let menudata = [
        { Name: 'New Arrivals', href: "/NewArrivals" },
        { Name: 'Sunglasses', href: "/Eyeglasses" },
        { Name: 'Eyeglasses', href: "/Eyeglasses" },
        { Name: 'About', href: "/About" }
    ]
    const [menu, setmenu] = useState(false)
    const [ismenuopen, setismenuopen] = useState(false)
    const handlechange = () => {
        setmenu(!menu)
    }
    return (
        <div>
            <nav className='bg-white flex drop-shadow-md text-2xl justify-between items-center py-3 px-5 '>
                {/* <Link to='/'>   <img className='h-[40px] w-[150px]' src={Logo} alt="logo" /></Link> */}
                <div className='text-[#333333] text-2xl font-semibold'>
                    <Link to="/">SPECS</Link>
                </div>
                <div>

                    <ul className='hidden md:flex gap-5 uppercase menuNav text-[#333333] text-[20px] font-semibold'>

                        {
                            menudata.map((value, key) =>
                            (
                                <li className='hover:text-[#26dd1c]' key={key}><Link to={value.href}>{value.Name}</Link></li>
                            ))
                        }
                    </ul>

                </div>

                <div className='flex gap-5'>

                    <DropDownMenu/>

                    <div onClick={() => setismenuopen(!ismenuopen)} className='gap-2'>

                        <div onClick={handlechange} className='md:hidden'>
                            {
                                menu ? (<i className="fa-solid fa-xmark"></i>) :
                                    (<i className="fa-solid fa-bars"></i>)

                            }
                        </div>
                    </div>
                </div>


                <div className={`absolute md:hidden top-[50px] left-0 w-full bg-white flex flex-col items-center gap-5
                    pb-5 font-semibold text-xl transform transition-transform ${ismenuopen ? "opacity-100" : "opacity-0"}`}>
                    {
                        menudata.map((value, key) =>
                        (
                            <div className='hover:text-[#26dd1c]' key={key}><Link to={value.href}>{value.Name}</Link></div>
                        ))
                    }
                </div>

            </nav>
        </div>
    )
}

