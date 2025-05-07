import { useEffect, useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

interface Props {
  src: string
  alt: string
}

const ImageComponent = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='w-full h-full flex items-center justify-center py-12'>
      <PulseLoader />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className='fade-in h-full w-full object-cover object-center'
    />
  )
}

export default ImageComponent
