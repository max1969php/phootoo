import { useEffect, useState } from 'react'

export function Customers () {
    const[customers,setCustomers]=useState([])
    // Fetch content from protected route
    useEffect(() => {

      // Simple POST request with a JSON body using fetch
      const fetchData = async () => {
        const res = await fetch("http://127.0.0.1:3000/customers/2")
        .then(response => {return response.json();})
        .then(data => {
          console.log(data)
          setCustomers(data)
        })
      }
      fetchData()
    }, [])

    
    const returnCustomers = () => {    
        //console.log('slicets',sliceStart)   
        return customers.map((customer,index) => { 
          //console.log(file)
          return (
                <option key={index} value={customer['id']}>{customer['denominazione']}</option>
              
          )
        });
      }
    return (
        <>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select name="customerSelected" id="customerSelected"
            placeholder='Scegli..'
            >
                <option value=""></option>
                {returnCustomers()}
            </select>
        </>
    )
}