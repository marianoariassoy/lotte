import List from '../../components/List'
import useFetch from '../../hooks/useFetch'
import PulseLoader from 'react-spinners/PulseLoader'
import { useDataContext } from '../../context/useDataContext'

interface Data {
  id: number
  image: string
  title: string
}

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch<Data[]>(`/home/${lan}`)

  if (loading)
    return (
      <div className='w-full h-full flex items-center justify-center mt-10'>
        <PulseLoader />
      </div>
    )

  if (!data) return null

  return (
    <section className='mt-16 lg:mt-6'>
      <List data={data} />
    </section>
  )
}

export default Index
