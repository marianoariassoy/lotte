import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { menu } from '../lib/data'
import Modal from '../components/Modal'

const Nav = () => {
  const [location] = useLocation()
  const [selectedId, setSelectedId] = useState(0)

  return (
    <div className='fixed top-0 left-0 w-full z-40 p-2 md:p-4 text-sm'>
      <Link
        href='/'
        className='md:hidden'
      >
        lotte gardens
      </Link>

      <nav className='w-full flex justify-between items-center flex-wrap gap-x-1'>
        <Link
          href='/'
          className='hidden md:block hover:underline'
        >
          lotte gardens
        </Link>

        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className={`${location === item.url ? 'underline' : 'hover:underline'}`}
          >
            {item.title}
          </Link>
        ))}

        <button
          className='hover:underline cursor-pointer'
          onClick={() => setSelectedId(308)}
        >
          About
        </button>
      </nav>

      {selectedId ? (
        <Modal
          setSelectedId={setSelectedId}
          selectedId={selectedId}
        />
      ) : null}
    </div>
  )
}

export default Nav
