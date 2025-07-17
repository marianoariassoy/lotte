import { useDataContext } from '../context/useDataContext'

const Lan = () => {
  const { lan, setLan } = useDataContext()

  return (
    <button
      className='underline-offset-2 border-r decoration-2 cursor-pointer border-white tracking-wide pr-2  hover:underline'
      onClick={() => setLan(lan === 'en' ? 'es' : 'en')}
    >
      {lan === 'en' ? 'Español' : 'English'}
    </button>
  )
}

export default Lan
