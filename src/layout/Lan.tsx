import { useDataContext } from '../context/useDataContext'

const Lan = () => {
  const { lan, setLan } = useDataContext()

  return (
    <button
      className='underline-offset-2 cursor-pointer  tracking-wide pr-2 hover:underline'
      onClick={() => setLan(lan === 'en' ? 'es' : 'en')}
    >
      {lan === 'en' ? 'Español' : 'English'}
    </button>
  )
}

export default Lan
