import List from '../../components/ListTexts'

const index = () => {
  const data = [
    {
      id: 1,
      title: 'A Natural History of North American Trees',
      subtitle: 'Donald Culross Peattie',
      year: '1950'
    },
    {
      id: 2,
      title: 'The Botany of Desire: A Plants-Eye View of the World',
      subtitle: 'Michael Pollan',
      year: '2001'
    },
    {
      id: 3,
      title: 'A Natural History of North American Trees',
      subtitle: 'Donald Culross Peattie',
      year: '1950'
    },
    {
      id: 4,
      title: 'A Natural History of North American Trees',
      subtitle: 'Donald Culross Peattie',
      year: '1950'
    }
  ]

  return (
    <section>
      <List data={data} />
    </section>
  )
}

export default index
