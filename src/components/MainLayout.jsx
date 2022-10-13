import React from 'react'
import ComplainForm from './ComplainForm'

const userTypes = ['Guest', 'Customers', 'Agent', 'Booth']

const MainLayout = () => {

  return (
    <div className='px-4 py-2'>
      <div>
        {userTypes.map((user) => (
          <button
            key={user}
            className="float text-md py-2 px-6 rounded-md ml-4 text-[#FF8832] font-semibold bg-white drop-shadow-md"
          >
            <div className='flex justify-between'>
              <svg className='mr-2 mt-0.5' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z" fill="#FA8832"/>
              </svg>
              <span>{user}</span>
            </div>
          </button>
        ))}
      </div>

      <div className='mb-[20vh]'>
        <ComplainForm />
      </div>
    </div>
  )
}

export default MainLayout