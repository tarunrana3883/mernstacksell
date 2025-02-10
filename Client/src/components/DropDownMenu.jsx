import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
const DropDowndiv = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const DropDownMenu = [
        { logo: <CgProfile />, name: 'My Profile', link: "/Myprofile" },
        { logo: <IoSettingsSharp />, name: 'Edit Profile', link: "/Editprofile" },
        { logo: <RiLoginCircleFill />, name: 'Log In', link: "/Login" },
        { logo: <RiLogoutCircleFill />, name: 'Registration', link: "/Signin" }
    ];

    return (
        <div className="relative inline-block text-left">
            <div>
                <i
                    onClick={toggleDropdown}
                    className="fa-solid fa-user text-gray-400 text-2xl cursor-pointer"
                />
            </div>

            {isOpen && (
                <div className="absolute right-0 ml-[200px] z-10 mt-4 w-[200px] rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" aria-orientation="vertical" aria-labelledby="options-div">
                        <table>
                            <tbody>
                                {DropDownMenu.map((value, key) => (
                                    <tr key={key} className="hover:bg-gray-200 hover:scale-105 duration-300 hover:rounded-md">
                                        <td className="text-md text-slate-400 pl-5">{value.logo}</td>
                                        <td>
                                            <Link to={value.link} className="block px-4 py-2 text-sm text-gray-700">
                                                {value.name}
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDowndiv;
