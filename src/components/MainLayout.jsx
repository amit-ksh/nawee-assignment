import React from 'react'
import { Link, useParams } from 'react-router-dom';
import ComplainForm from './ComplainForm'

const userTypes = ['guest', 'customers', 'agent', 'booth']

const MainLayout = () => {
  const params = useParams();

  return (
    <div className='px-4 py-2'>
      <div className='flex'>
        {userTypes.map((user) => (
          <Link
            to={user}
            key={user}
            className={`
              block text-md py-2 px-6 rounded-md ml-4 text-[#FF8832] 
              font-semibold bg-white drop-shadow-md
              ${params.user === user && "bg-[#FF8832] text-[#fff]"}
            `}
          >
            <div className='flex justify-between'>
              <svg
                className="mr-2 mt-0.5"
                width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
              >
                <path className={`${params.user === user && "fill-[white]"}`} d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z" fill="#FA8832"/>
              </svg>
              <span className="capitalize">{user}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className='mb-[20vh]'>
        <ComplainForm user={params.user} />
      </div>
    </div>
  )
}

export default MainLayout