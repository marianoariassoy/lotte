import { Link } from 'wouter'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='flex flex-col  max-w-8xl mx-auto py-2 md:py-4'>
      <Nav />

      <div className='px-2 mt-24 mb-2 lg:mt-26 lg:mb-14 md:px-8'>
        <Link href='/'>
          <img
            src='/assets/logo.svg'
            alt='logo'
            className='w-full'
          />
        </Link>
      </div>

      <div className='px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-4 text-sm'>
        <div className='flex flex-col'>
          <span>Landscape studio</span>
          <span>based on Cape Cod, EEUU - WW</span>
        </div>
        <div></div>
        <div className='flex flex-col'>
          <a href='mailto:studio.lotte.lotte@gmail.com'>
            <span className='hover:underline'>studio.lotte.lotte@gmail.com</span>
          </a>
          <a
            href='https://instagram.com/lottegarden'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            @lottegarden
          </a>
        </div>
        <div className='flex flex-col'>
          <span>Agustin Vrech</span>
          <span> 2025</span>
        </div>
      </div>
    </header>
  )
}

export default Header
