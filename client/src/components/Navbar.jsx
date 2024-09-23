import React from 'react'


function Navbar() {
let menudata =[
  {Name:'New Arrivals' , href:"/NewArrivals"},
  {Name:'Sunglasses' , href:"/Sunglasses"},
  {Name:'Eyeglasses' , href:"/Eyeglasses"},
  {Name:'About' , href:"/About"}
]
  

  return (
    <div >
      <nav className='bg-white flex drop-shadow-md text-2xl justify-between items-center py-3 px-5'>
        <div>Logo</div>
        <div>
          
        <ul className='flex gap-5 uppercase menuNav text-[#333333] '>

          {
            menudata.map((value)=>
              (
                
               <li  className='hover:text-blue-300' > <a href={value.href}>{value.Name}</a></li>
                
                
              ))
            }
            </ul>
          
        </div>

        <div className='flex gap-5'>
        <i class="fa-solid fa-magnifying-glass text-[#333333]"></i>
        <i class="fa-solid fa-bag-shopping text-[#333333]"></i>
        <i class="fa-solid fa-user text-[#333333]"></i>
        </div>

      </nav>
    </div>
    )
}

export default Navbar