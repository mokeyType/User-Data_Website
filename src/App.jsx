import { useState } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Text from './components/Text'
import Person from './components/Person'
import Search_U from './components/Search_U'
import Add_U from './components/add_U'
import Data from '/src/components/data.jsx'
function App() {
  const [page, setPage] = useState('home');
  const [action, setAction] = useState(null);
  const [users,setUser] = useState([]);
  // const [up,setup] = useState([]);
  const [index,setin] = useState(1);
  const[query,setQuery] = useState('');
  useLayoutEffect(() => {
    console.log("Users updated:", users);
    console.log('new : ',users);
  }, [users])
  
  
  return (
    <> 
      <div className="app_container" >
         <Nav setPage={setPage} setAction={setAction}></Nav>
         <div className="page_w" >
         {page === 'home' && action === 'search' && <Search_U users={users} query={query} setQuery={setQuery}/>}
         {page === 'home' && action === 'add' && <Add_U list={users} setUser={setUser} />}
         {(action === null) && (
          <> 
            <div className="content">
              <Text currentPage={page} setAction={setAction} />
            </div>
            <div className="img">
              <Person currentPage={page} />
            </div>
          </>
          )}
         </div>
         <div className="footer text-gray-400 flex items-end font-sans justify-center">
          &copy All the Copy right are reserved by the magnus_X
         </div>
      </div>
    </>
  )
}

export default App
