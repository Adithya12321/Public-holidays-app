import { useState } from 'react'

export const About = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div className='fixed top-2 right-2 border rounded-full w-6 text-center'>
        <button onClick={() => setShowModal(!showModal)} className='hover:drop-shadow-[0_0_4px_rgba(250,250,250,1)]'><strong>i</strong></button>
        {
            showModal && (
                <div className='flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-9/10 aspect-square  backdrop-blur-lg'>
                    <div className='relative rounded-2xl border aspect-square h-1/2 p-10'> 
                        <button className='absolute top-2 right-4  border rounded px-2 hover:drop-shadow-[0_0_4px_rgba(250,250,250,1)]' onClick={() => setShowModal(!showModal)}>x</button>
                        <h1 className='text-center font-semibold mb-4'>About</h1>
                        <p className='mb-2'>
                        This Public Holidays app was built as part of the <a href="https://reactpractice.dev/exercise/build-a-public-holidays-app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">React Practice</a> challenges.
                        </p>
                        <p className='mb-2'>
                        The app allows you to select a country and view its public holidays for the year 2025, using data from the Open Holidays API. It demonstrates the use of React hooks, API integration, and dynamic UI updates.
                        </p>
                        <p className='text-xs text-gray-400 mt-4 text-center'>
                        &copy; {new Date().getFullYear()} Adithya Venkatesh Pithani
                        </p>
                    </div>
                </div>
            )
        }
    </div>
  )
}
