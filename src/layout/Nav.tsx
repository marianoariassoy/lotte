import { Link, useLocation } from 'wouter'
import { menu } from '../lib/data'

const Nav = () => {
  const [location] = useLocation()

  return (
    <nav className='p-2 flex justify-between items-center md:p-4 flex-wrap gap-x-1'>
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
  )
}

export default Nav
