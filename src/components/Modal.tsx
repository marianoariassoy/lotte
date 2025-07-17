import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import PulseLoader from 'react-spinners/PulseLoader'
import Galery from './Galery'
import { useDataContext } from '../context/useDataContext'

type DetailData = {
  id: number
  year?: number
  subtitle: string
  title: string
  text: string
  type: number
}

const Modal = ({
  setSelectedId,
  selectedId
}: {
  setSelectedId: React.Dispatch<React.SetStateAction<number>>
  selectedId: number
}) => {
  const { lan } = useDataContext()

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

  const { data, loading } = useFetch<DetailData>(`/details/${selectedId}/${lan}`)

  if (!data) return null

  return (
    <div
      className='fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 overflow-y-auto cursor-pointer'
      onClick={() => setSelectedId(0)}
    >
      <div
        className='absolute w-full lg:w-1/2 max-w-3xl bg-primary p-2 lg:p-4 border-black border-r flex flex-col gap-y-4 min-h-full cursor-auto transition-all'
        id='aside'
      >
        {loading ? (
          <div className='w-full h-full flex items-center justify-center'>
            <PulseLoader />
          </div>
        ) : (
          <>
            <div className='flex flex-col gap-y-4'>
              {data.type === 1 && (
                <>
                  <div className='flex gap-x-8'>
                    <h1 className='text-2xl lg:text-3xl'>{data.year}</h1>
                    <h1 className='text-2xl lg:text-3xl'>{data.subtitle}</h1>
                  </div>
                  <h2 className='underline'>{data.title}</h2>
                </>
              )}
              {data.type === 2 && (
                <>
                  <h1 className='text-2xl lg:text-3xl'>Plant we use</h1>
                  <h2 className='underline'>{data.title}</h2>
                </>
              )}
              {data.type === 3 && (
                <>
                  <h1 className='text-2xl lg:text-3xl w-2/3'>{data.title}</h1>
                  {data.subtitle && (
                    <h2 className='underline'>
                      {data.subtitle}, {data.year}
                    </h2>
                  )}
                </>
              )}
              {data.type === 4 && (
                <>
                  <h1 className='text-2xl lg:text-3xl'>{data.title}</h1>
                  {data.subtitle && <h2 className='underline'>{data.subtitle}</h2>}
                </>
              )}
              {data.type === 5 && (
                <>
                  <h1 className='text-2xl lg:text-3xl'>{data.title}</h1>
                  {data.subtitle && <h2 className='underline'>{data.subtitle}</h2>}
                </>
              )}

              <button
                className='text-2xl absolute right-3 cursor-pointer'
                onClick={() => setSelectedId(0)}
              >
                X
              </button>
            </div>
            <p className='mb-4 whitespace-break-spaces'>{data.text}</p>
            <Galery id_item={data.id} />
          </>
        )}
      </div>
    </div>
  )
}

export default Modal
