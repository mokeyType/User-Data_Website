import React, { useState } from 'react'
import { useEffect } from 'react'
import './Search_u.css'
import Data from '/src/components/data.jsx'
const Search_U = ({users,query,setQuery}) => {
  const[search,setSearch] = useState('');
  const [list,setlist] = useState(users);
  function check(a,b){
    a = a.name.toLowerCase();
    b = b.toLowerCase();
    console.log(a,b);
    for(let i = 0;i<b.length;i++){
       if(a[i]!==b[i]) return false;
    }
    return true;
  }
  function filter(arr,key){
  return arr.filter((item)=> check(item,key))
  }
  
  useEffect(() => {
    console.log(search);
    const result = filter(users,search);
    setlist(result);
  }, [search])
  
  return (
    <div className="main">
      <div className='search'>
      <div className="bar">
        <input type="text" name="" id="key" placeholder='Enter Primary key' value={search} onChange={(e)=> setSearch(e.target.value)} />
        <button className='search_btn'>Search</button>
      </div>
      </div>
      <div className="result">
         <div className="head flex h-[15%] text-[1.5rem] rounded-t-[20px] text-white  bg-[rgb(89,89,255)] border-[4px] border-black">
          <p className="w-1/4   flex justify-center items-center">S.NO</p>
          <p className="w-1/4   flex justify-center items-center">Name</p>
          <p className="w-1/4  flex justify-center items-center">Email</p>
          <p className="w-1/4 flex justify-center items-center">Age</p>
         </div>
         <div className="flex h-[85%] w-[100%] gap-[0.5rem] flex-col overflow-y-scroll ">
          {list.map((user, i) => (
         <Data key={i} user={user} index={i + 1} />
         ))}
         </div>
      </div>
    </div>
    
  )
}

export default Search_U
