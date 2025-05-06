import Image from './Image'

interface Data {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
}

const Card = ({ data }: { data: Data }) => {
  return (
    <article className='aspect-[4/5] relative'>
      <div className='absolute top-0 left-0 w-full h-full z-10 cursor-pointer hover:backdrop-blur-sm transition-all'></div>
      <Image
        src={data.image}
        alt={data.title}
      />
    </article>
  )
}

export default Card
