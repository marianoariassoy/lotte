interface Data {
  id: number
  title: string
  subtitle: string
  year: string
}

const Card = ({ data, setSelectedId }: { data: Data; setSelectedId: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <article className='aspect-[4/5] relative flex items-center justify-center border-black border-r border-t bg-primary'>
      <button
        className='text-center px-8 lg:px-20 hover:underline cursor-pointer'
        onClick={() => setSelectedId(data.id)}
      >
        <h1 className='text-xl lg:text-2xl italic mb-2 leading-5 lg:leading-6'>{data.title}</h1>
        <h2 className='text-sm'>{data.subtitle}</h2>
        <p className='text-xs'>{data.year}</p>
      </button>
      <div className='absolute left-0 h-1/2 z-20 top-1/2 -translate-y-1/2 w-12 px-2 lg:px-4 flex flex-col justify-between'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          className='fill-current h-2 w-2 lg:h-4 lg:w-4'
        >
          <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z' />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          className='fill-current h-2 w-2 lg:h-4 lg:w-4'
        >
          <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z' />
        </svg>
      </div>
    </article>
  )
}

export default Card
