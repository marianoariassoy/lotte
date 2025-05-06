import Image from './Image'

const Modal = ({
  setSelectedId,
  selectedId
}: {
  setSelectedId: React.Dispatch<React.SetStateAction<number>>
  selectedId: number
}) => {
  if (!selectedId) return null
  const images = [
    'https://images.unsplash.com/photo-1558293842-c0fd3db86157?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1601654253194-260e0b6984f9?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1544727219-d2ff78f0f148?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661963333824-fd020faec5fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]

  if (!selectedId) return null
  return (
    <div
      className='fixed fade-in top-0 left-0 w-full h-full backdrop-blur-sm z-50 overflow-y-auto cursor-pointer'
      onClick={() => setSelectedId(0)}
    >
      <div className='w-full lg:w-1/2 max-w-3xl bg-primary p-2 lg:p-4 border-black border-r flex flex-col gap-y-4 min-h-full cursor-auto'>
        <div className='flex gap-2 items-center justify-between'>
          <h1 className='text-2xl lg:text-3xl'>2024 Garden 01</h1>
          <button
            className='text-2xl lg:hidden'
            onClick={() => setSelectedId(0)}
          >
            X
          </button>
        </div>

        <h2 className='underline'>Gardening for Lou and Alfred</h2>
        <p className='mb-4'>
          Plants we used: Lorem Ipsu; Lorem Ipsu; Lorem Ipsu; Lorem Ipsu; Lorem Ipsu Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
          aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
          consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
          blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.is nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
        <div className='flex flex-col gap-y-2'>
          {images.map((image, index) => (
            <div className='min-h-32'>
              <Image
                key={index}
                src={image}
                alt='image'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modal
