import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronDown, LogOut, Settings, Zap } from 'lucide-react';

const Navbar = ({user={}, onLogout}) => {

  const menuref = useRef(null);
  const [menuOpen , setMenuOpen] = useState(false);

    const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleLogout = () => {
    setMenuOpen(false);
    onLogout();
  }
  return (
    <header className='sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm font-sans'>
        <div className='flex items-center justify-between px-4 py-3 md:px-6 max-w-7xl mx-auto'>
            {/* Logo or brand name can go here */}
            <div className='flex items-center gap-2 cursor-pointer group'
            onClick={()=>navigate('/')}>
                {/* Logo can be added here */}
                <div className='relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 shadow-lg group-hover:shadow-purple-300/50 group-hover:scale-105 transition-all duration-300'>
                <Zap className='w-6 h-6 text-white' />
                <div className='absolute -bottom-1 -middle-1 w-3 h-3 bg-white rounded-full shadow-md animate-ping' />
                </div>
                {/* Brand name or logo text can go here */}
                <span className='text-2xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-wide'>TaskFlow</span>
            </div>
            {/* Right side navigation links */}
            <div className='flex items-center gap-4 '>
              <button className='p-2 text-gray-600 hover:text-purple-500 transition-colors duration-300 hover:bg-purple-50 rounded-full'
              onClick={()=> navigate('/profile')}>
                <Settings className='w-5 h-5' />
              </button>
              {/* user dropdown menu added here */}
              <div ref={menuref} className='relative'>
                <button onClick={handleMenuToggle} className='flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer hover:bg-purple-50 transition-colors duration-300 border border-transparent hover:border-purple-200'>
                  <div className='relative'>
                    {user.avatar ? (
                      <img src={user.avatar} alt="User Avatar" className='w-9 h-9 rounded-full shadow-sm'/>
                    ) : (
                      <div className='w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 font-semibold shadow-md'>
                        {user.name?.[0]?.toUpperCase() || 'U'} 
                      </div>
                    )}

                    <div className='absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse'></div>
                  </div>

                  <div className='text-left hidden md:block'>
                    <p className='text-sm font-medium text-gray-800'>{user.name}</p>
                    <p className='text-xs text-gray-500 font-normal'>{user.email}</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${menuOpen ? 'rotate-180':''}`}/>
                </button>

                {menuOpen && (
                  <ul className='absolute top-14 right-0 w-56 bg-white shadow-xl rounded-2xl border border-purple-100 z-50 overflow-hidden animate-fadeIn'>
                    <li className='p-2'>
                      <button onClick={()=>{
                        setMenuOpen(false);
                        navigate('/profile')
                      }} className='w-full px-4 py-2.5 text-left hover:bg-purple-50 text-sm text-gray-700 transition-colors flex items-center gap-2 group' role='menuitem'>
                        <Settings className='w-4 h-4 text-gray-700'/>
                        Profile Setting
                        </button>
                    </li>

                    <li className='p-2'>
                      <button onClick={handleLogout} className='flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-red-50 text-red-600'>
                        <LogOut className='w-4 h-4'/>
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
