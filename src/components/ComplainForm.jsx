import React from 'react'

const complainInputs = [
  {
    id: 'charges',
    label: 'Charges',
    type: 'text',
  },
  {
    id: 'deduction',
    label: 'Deduction',
    type: 'text',
  },
  {
    id: 'parcel-damaged',
    label: 'Parcel Damaged',
    type: 'text',
  },
  {
    id: 'others',
    label: 'Others',
    type: 'text',
  },
]


const requiredFormInputs = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
  },
  {
    id: 'email-mobile-number',
    label: 'Email/Mobile Number',
    type: 'text',
  },
]

const contacts = [
  {
    heading: "Call Us",
    p: "Call us 8 a.m. - 7 p.m.  ",
    value: "+234 76875897"
  },
  {
    heading: "Chat with us",
    p: "Anytime, We will respond during business hours",
    value: "+234 76875897"
  },
  {
    heading: "Mail Us",
    p: "Anytime, We will respond during business hours",
    value: "nawee@gmail.com"
  },
]

const ComplainForm = ({ user }) => {
  return (
    <div className='my-4 px-4 py-2'>

      <form className=' w-full'>
        <div className="gap-9 md:grid md:grid-cols-2">
        {/* COMPLAIN FORM INPUTS */}
          <div>
            <div className='my-5'>
              <h3 className='text-2xl text-[#424242] font-semibold'>Lodge a Complain</h3>
              <p className='mt-1 text-lg text-[#424242]'>Guest can lodge a complain by selecting the possible issues below.</p>
            </div>
            {
              complainInputs.map((input) => (
                <div key={input.id} className='mb-[10px]'>
                  <label className='hidden' htmlFor={input.id}>{ input.label }</label>
                  <input
                    className="
                      py-2 px-4 text-lg w-full hover:bg-[#fa88321a] rounded-[10px] border border-[#fa883275]
                      drop-shadow-[-2px_2px_12px_rgba(250,136,50,0.1)] placeholder:ml-2
                    "
                    type={input.type}
                    name={input.id}
                    id={input.id}
                    placeholder={input.label}
                  />
                </div>
              ))
            }
          </div>

          {
            !user && user !== 'guest' && 
            (
              <div>
            {/* REQUIRED INFOMATION FORM INPUT */}
            <div>
              <div className='my-5'>
                <h3 className='text-2xl text-[#424242] font-semibold'>Required Information</h3>
              </div>
              {
                requiredFormInputs.map((input) => (
                  <div key={input.id} className='mb-[10px]'>
                    <label className='hidden' htmlFor={input.id}>{ input.label }</label>
                    <input
                      className="
                        py-2 px-4 text-lg w-full hover:bg-[#fa88321a] rounded-[10px] border border-[#fa883275]
                        drop-shadow-[-2px_2px_12px_rgba(250,136,50,0.1)] placeholder:ml-2
                      "
                      type={input.type}
                      name={input.id}
                      id={input.id}
                      placeholder={input.label}
                    />
                  </div>
                ))
              }
            </div>

            {/* ADDITIONAL MESSAGE FORM INPUT */}
            <div>
              <div className='my-5'>
                <h3 className='text-2xl text-[#424242] font-semibold'>Additional Information</h3>
              </div>
                <div className='mb-[10px]'>
                  <label className='hidden' htmlFor='additional-msg'>You can type upto 100 words</label>
                  <textarea
                    className="
                      py-2 px-4 text-lg w-full hover:bg-[#fa88321a] rounded-[10px] border border-[#fa883275]
                      drop-shadow-[-2px_2px_12px_rgba(250,136,50,0.1)]
                    "
                    maxLength='100'
                    name='additional-msg'
                    id='additional-msg'
                    placeholder="You can type upto 100 words"
                  />
                </div>
            </div>
              </div>
            )
          }
        </div>

        <div className='my-5'>
          <h3 className='text-2xl text-[#424242] font-semibold'>Choose</h3>
          
          <div className="contacts mt-5 grid grid-cols-3 gap-4">
            {contacts.map((contact, idx) => (
              <div key={idx} className="col-span-1 text-center p-2 bg-white rounded-lg">
                <h6 className='text-lg font-semibold'>{contact.heading}</h6>
                <p className='text-[#424242] text-xs'>{contact.p}</p>
                <p className='text-[#FF8832] mt-2'>{ contact.value }</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* SUBMIT and BACK Button */}
        <div className='mt-[80px]'>
          <div className="flex justify-center align-middle">
            <button
              type='submit'
              className="block ml-2 text-2xl py-1 px-6 mr-6
                bg-[#FA8832] rounded uppercase hover:bg-[#fa8932bc] text-white
              "
            >
              Submit
            </button>

            <button
              type='submit'
              className="block ml-2 text-2xl py-1 px-6 text-[#FA8832] bg-white
              rounded-lg uppercase drop-shadow-[0_4px_10px_rgba(250,136,50,0.1)]
              hover:drop-shadow-[0_4px_10px_rgba(250,136,50,0.2)]
              "
            >
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ComplainForm