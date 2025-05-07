import List from '../../components/List'
import useFetch from '../../hooks/useFetch'
import SyncLoader from 'react-spinners/SyncLoader'

interface Data {
  id: number
  image: string
  title: string
}

const Index = () => {
  const { data, loading } = useFetch<Data[]>(`/plants`)

  if (loading)
    return (
      <div className='w-full h-full flex items-center justify-center mt-20'>
        <SyncLoader />
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
