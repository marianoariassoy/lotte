import Card from './Card'

interface Data {
  id: number
  image: string
  title: string
  subtitle: string
  description: string
}

const List = ({ data }: { data: Data[] }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {data.map((item, index) => (
        <Card
          key={index}
          data={item}
        />
      ))}
    </div>
  )
}

export default List
