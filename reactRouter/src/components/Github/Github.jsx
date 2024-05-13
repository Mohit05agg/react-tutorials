import React from 'react'
import { useEffect , useState} from 'react'

export default function Github() {

    const [data, setData] = useState([])

    //api call kakb hoga jab mera component load hoga jaise jab hamar a load hota hia useEffect hook kaam aata hai\
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response =>response.json()) // string mai data aata hai to usko JSon mai change karne ke liye 
        .then(data =>{ // data fetch karenge
            console.log(data);  // console karake check kar liya
            setData( data)  // usko setData ke Throug stor kara liya
        }) // datat Ui mai dikhn hai to UseState use hoga
    })
  return (
    <div className='text-center m-4 bg-gray-600 text-white'>Github folowers:{data.followers} </div>
  )  // data.followers-- matlab api read karke samaj ke varibaleinject karke uske through followers ke number get kar liye 
}
