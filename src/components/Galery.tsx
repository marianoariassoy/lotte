import Image from './Image'
import useFetch from '../hooks/useFetch'

type DetailData = {
  id: number
  image: string
}

const Galery = ({ id_item }: { id_item: number }) => {
  const { data, loading } = useFetch<DetailData[]>(`/images/${id_item}`)

  if (loading) return null

  if (!data) return null

  return (
    <div className='flex flex-col gap-y-2'>
      {data.map(item => (
        <div
          className='min-h-32'
          key={item.id}
        >
          <Image
            src={item.image}
            alt='image'
          />
        </div>
      ))}
    </div>
  )
}

export default Galery
