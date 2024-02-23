import React from 'react'
import Link from 'next/link';


const Header = () => {
  
  return (
    <div className='Navbar'>
        <div className='logo'>
        Stockwikipedia
        </div>
      <ul className='Nav-ul'>
        <li> <Link href="/">
            Home
          </Link></li>
     <li>
     <Link href="/News">
            News Update
          </Link>
     </li> 
      </ul>

    </div>
  )
}

export default Header