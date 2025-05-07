import List from '../../components/ListTexts'
import useFetch from '../../hooks/useFetch'
import PulseLoader from 'react-spinners/PulseLoader'

interface Data {
  id: number
  title: string
  subtitle: string
  year: string
}

const Index = () => {
  const { data, loading } = useFetch<Data[]>(`/texts`)

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
