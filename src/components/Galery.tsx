import Image from './Image'
import useFetch from '../hooks/useFetch'
import SyncLoader from 'react-spinners/SyncLoader'

type DetailData = {
  id: number
  image: string
}

const Galery = ({ id_item }: { id_item: number }) => {
  const { data, loading } = useFetch<DetailData[]>(`/images/${id_item}`)

  if (loading)
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <SyncLoader />
      </div>
    )

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
