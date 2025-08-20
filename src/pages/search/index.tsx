import { useState, useEffect } from 'react'
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
  const [dataFiltered, setDataFiltered] = useState<Data[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!data) return
    if (search) {
      const result = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
      setDataFiltered(result)
    } else {
      setDataFiltered(data)
    }
  }, [search, data])

  if (loading)
    return (
      <div className='w-full h-full flex items-center justify-center mt-20'>
        <PulseLoader />
      </div>
    )

  if (!data) return null

  return (
    <section>
      <div
        className={`absolute top-14 left-0 w-full z-50 pt-2 px-2 text-sm bg-white border-t border-gray-200 shadow-lg`}
      >
        <input
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Buscar'
          className='w-full p-2 pb-4 focus:outline-none'
        />
      </div>
      <List data={dataFiltered} />
    </section>
  )
}

export default Index
