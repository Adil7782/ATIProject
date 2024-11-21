import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const user = await currentUser()
const page = () => {
    return (
        <div className="root-body-height flex justify-center items-center">
            <div>
                {user?.emailAddresses[0].emailAddress ? 
                    
<div>
                    <p className='place-self-center'>Welcome {user?.firstName}</p>

                    <p>You logged email address: <span className="text-slate-600 italic underline hover:text-blue-600 cursor-pointer">{user?.emailAddresses[0].emailAddress}</span></p>

</div>                : 
                    <p>You are not logged in yet, please login the account and continue to dashboard!</p>
                }
            </div>
        </div>
    )
}

export default page