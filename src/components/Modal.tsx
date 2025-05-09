import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import PulseLoader from 'react-spinners/PulseLoader'
import Galery from './Galery'

type DetailData = {
  id: number
  year?: number
  subtitle: string
  title: string
  text: string
}

const Modal = ({
  setSelectedId,
  selectedId
}: {
  setSelectedId: React.Dispatch<React.SetStateAction<number>>
  selectedId: number
}) => {
  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name='theme-color']")

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#ebebeb')
    } else {
      const newMeta = document.createElement('meta')
      newMeta.name = 'theme-color'
      newMeta.content = '#ebebeb'
      document.head.appendChild(newMeta)
    }

    return () => {
      metaThemeColor.setAttribute('content', '#FFFFFF')
    }
  }, [])

  const { data, loading } = useFetch<DetailData>(`/details/${selectedId}`)

  if (!data) return null

  return (
    <div
      className='fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 overflow-y-auto cursor-pointer'
      onClick={() => setSelectedId(0)}
    >
      <div className='w-full lg:w-1/2 max-w-3xl bg-primary p-2 lg:p-4 border-black border-r flex flex-col gap-y-4 min-h-full cursor-auto'>
        {loading ? (
          <div className='w-full h-full flex items-center justify-center'>
            <PulseLoader />
          </div>
        ) : (
          <>
            <div className='flex gap-2 items-start justify-between'>
              <div className='flex gap-x-8'>
                {data.year && <h1 className='text-2xl lg:text-3xl'>{data.year}</h1>}
                <h1 className='text-2xl lg:text-3xl'>{data.subtitle}</h1>
              </div>
              <button
                className='text-2xl lg:hidden'
                onClick={() => setSelectedId(0)}
              >
                X
              </button>
            </div>
            <h2 className='underline'>{data.title}</h2>
            <p className='mb-4'>{data.text}</p>
            <Galery id_item={data.id} />
          </>
        )}
      </div>
    </div>
  )
}

export default Modal
