import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router';



const useUser = () => {

    const [user , setUser] = useState(null);
    const router = useRouter()


    useEffect(() =>{
       const user = JSON.parse( localStorage.getItem('user'));
    
       if(!user){
           
            router.push('/login')
           return
       }

       setUser(user);


    },[]) 


    return user
}
 
export default useUser;