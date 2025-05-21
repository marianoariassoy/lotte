import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import Card from './Card'
import CardText from './CardText'
import Modal from './Modal'

interface Data {
  id: number
  image: string
  title: string
  type?: number
  subtitle?: string
  year?: string
}

const List = ({ data }: { data: Data[] }) => {
  const [selectedId, setSelectedId] = useState(0)
  const [location] = useLocation()

  useEffect(() => {
    setSelectedId(0)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [data])

  return (
    <>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${
          location === '/texts'
            ? '[&>article]:border-black [&>article]:border-r [&>article:nth-child(2n)]:border-r-0 lg:[&>article:nth-child(4n)]:border-r-0'
            : ''
        }`}
      >
        {data.map(
          (item, index) =>
            (item.type === 1 && (
              <Card
                key={index}
                data={item}
                setSelectedId={setSelectedId}
              />
            )) ||
            (item.type === 2 && (
              <Card
                key={index}
                data={item}
                setSelectedId={setSelectedId}
              />
            )) ||
            (item.type === 3 && (
              <CardText
                key={index}
                data={item}
                setSelectedId={setSelectedId}
              />
            )) ||
            (item.type === 4 &&
              (item.title === 'Diary' ? (
                <CardText
                  key={index}
                  data={item}
                  setSelectedId={setSelectedId}
                />
              ) : (
                <Card
                  key={index}
                  data={item}
                  setSelectedId={setSelectedId}
                />
              )))
        )}
      </div>

      {selectedId ? (
        <Modal
          setSelectedId={setSelectedId}
          selectedId={selectedId}
        />
      ) : null}
    </>
  )
}

export default List
