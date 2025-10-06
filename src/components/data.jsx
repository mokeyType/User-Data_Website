import React from 'react'

const data = ({user,index}) => {
 
 if(user.name!='' && user.age !='' && user.email!= ''){
   return (
    <div className="flex h-[15%] w-[98%] md:text-[1.5rem] text-[0.8rem] rounded-[20px] inset-shadow-[2px_2px_5px_rgba(0,0,0,0.5),-2px_-2px_3px_rgb(216,215,215)] bg-yellow-100 self-center">
          <p className="w-1/4 flex justify-center items-center">{index}</p>
          <p className="w-1/4 flex justify-center items-center primary_key">{user.name}</p>
          <p className="w-1/4 flex justify-center items-center">{user.email}</p>
          <p className="w-1/4 flex justify-center items-center">{user.age}</p>
    </div>
  )
}
else {
  return(
    <div></div>
  )
} 
}

export default data
