import List from '../../components/List'
import useFetch from '../../hooks/useFetch'
import PulseLoader from 'react-spinners/PulseLoader'
import { useDataContext } from '../../context/useDataContext'

interface Data {
  id: number
  title: string
  subtitle: string
  year: string
  image: string
}

const Index = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch<Data[]>(`/texts/${lan}`)

  if (loading)
    return (
      <div className='w-full h-full flex items-center justify-center mt-20'>
        <PulseLoader />
      </div>
    )

  if (!data) return null

  return (
    <section>
      <List data={data} />
    </section>
  )
}

export default Index
