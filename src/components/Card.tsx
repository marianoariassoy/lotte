import Image from './Image'

interface Data {
  id: number
  image: string
  title: string
}

const Card = ({ data, setSelectedId }: { data: Data; setSelectedId: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <article className='aspect-[4/5] relative'>
      <button
        className='absolute top-0 left-0 w-full h-full z-10 cursor-pointer hover:backdrop-blur-sm transition-all'
        onClick={() => setSelectedId(data.id)}
      ></button>
      <Image
        src={data.image}
        alt={data.title}
      />
    </article>
  )
}

export default Card
