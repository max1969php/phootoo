import { createContext, useEffect, useState } from 'react';
// Simple POST request with a JSON body using fetch


function UsersProvider(){

    const[users,setUsers]=useState<any>([])
        useEffect(() => { 

             async function fetchData(){
              const res = await fetch("http://127.0.0.1:3000/users")
              .then(response => {return response.json();})
              .then(data => {
                console.log(data)
                setUsers(data)
              })
            }
            fetchData()
          }, [])
    console.log(users)
    return<UserContext.Provider value={users}></UserContext.Provider>
}
console.log(UsersProvider)
let a=UsersProvider
console.log(a)
export const UserContext = createContext(UsersProvider);
//export const UserContext = createContext([{'id':1,'nome':'max'},{'id':2,'nome':'gio'}])


