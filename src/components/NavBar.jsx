import { Link } from 'react-router-dom'
import MenuImg from '../assets/icons/menu-wider.png'
import { useState } from 'react'

const NavBar = () => {

  const [visible, setVisible] = useState(false)
  return (
    <header className='sticky top-0 w-full page-frame z-50'>
      <nav className='flex justify-between items-center'>
        <img src={MenuImg} alt="" onClick={() => setVisible(true)} />
        <Link to={'/'}><span className='text-3xl'>IMovie</span></Link>
      </nav>

      <div className={`absolute top-0 left-0 backdrop:blur-3xl ${visible? 'w-full h-screen':'w-0 h-0'}`}></div>
    </header>
  )
}

export default NavBar
