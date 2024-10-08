import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/constants'

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='logo' width='130' height={29} />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map(({ href, label }) => {
            return (
              <li key={label}>
                <a
                  href={href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className='cursor-pointer max-lg:block hidden'>
          <img
            src={hamburger}
            alt='hamburger menu icon'
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
