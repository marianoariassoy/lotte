import { useState, useEffect } from 'react'
import Card from './CardText'
import Modal from './ModalText'

interface Data {
  id: number
  title: string
  subtitle: string
  year: string
}

const List = ({ data }: { data: Data[] }) => {
  const [selectedId, setSelectedId] = useState(0)

  useEffect(() => {
    setSelectedId(0)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [data])

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {data.map((item, index) => (
          <Card
            key={index}
            data={item}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>

      {selectedId && (
        <Modal
          setSelectedId={setSelectedId}
          selectedId={selectedId}
        />
      )}
    </div>
  )
}

export default List
