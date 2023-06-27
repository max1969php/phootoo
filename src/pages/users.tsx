import { useEffect, useState } from 'react'

export function Users () {
    const[users,setUsers]=useState([])
    // Fetch content from protected route
    useEffect(() => {

      // Simple POST request with a JSON body using fetch
      const fetchData = async () => {
        const res = await fetch("http://127.0.0.1:3000/users")
        .then(response => {return response.json();})
        .then(data => {
          console.log(data)
          setUsers(data)
        })
      }
      fetchData()
    }, [])

    
    const returnUsers = () => {    
        //console.log('slicets',sliceStart)   
        return users.map((user,index) => { 
          //console.log(file)
          return (
                <option key={index} value={user['id']}>{user['nome']}</option>
              
          )
        });
      }
    return (
        <>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select name="userSelected" id="userSelected"
            >
                <option value="">Scegli</option>
                {returnUsers()}
            </select>
        </>
    )
}