import useFetch from '../../hooks/useFetch'
import PulseLoader from 'react-spinners/PulseLoader'
import Image from '../../components/Image'

interface Data {
  id: number
  image: string
  title: string
  portrait: boolean
}

const Index = () => {
  const { data, loading } = useFetch<Data[]>(`/hero`)

  if (loading)
    return (
      <div className='w-full h-full flex items-center justify-center mt-10'>
        <PulseLoader />
      </div>
    )

  if (!data) return null

  return (
    <section className='px-2 lg:px-4 flex flex-col items-center gap-y-2 lg:gap-y-4 mb-2 lg:mb-4'>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${item.portrait ? 'lg:w-1/2' : 'w-full'} `}
        >
          <Image
            src={item.image}
            alt={item.title}
            key={index}
          />
        </div>
      ))}
    </section>
  )
}

export default Index
