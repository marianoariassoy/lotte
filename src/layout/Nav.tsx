import { Link, useLocation } from 'wouter'
import { menu } from '../lib/data'

const Nav = () => {
  const [location] = useLocation()

  return (
    <div className='fixed top-0 left-0 w-full backdrop-blur-sm z-40 p-2 md:p-4 text-sm'>
      <span className='md:hidden'>lotte gardens</span>

      <nav className='w-full flex justify-between items-center flex-wrap gap-x-1'>
        <span className='hidden md:block'>lotte gardens</span>

        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className={`${location === item.url ? 'underline' : 'hover:underline'}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Nav
