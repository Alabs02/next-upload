import Input from "../components/Input";
import { useState } from 'react'
import login from './../services/Login';
import { useRouter } from 'next/router';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()

    const handleSubmit =  async (e) =>{
        e.preventDefault();

        const response =  await login({email,password})
        const message = await response.json()


        if (!response.ok) {
            
            setError(message)
            return
        }

        localStorage.setItem("user", JSON.stringify(message.user));
        router.push('/')

    }


    return ( 
        <>
            <div className="row w-100 d-flex justify-content-center mt-5">

                
                <div className="col-5 ">
                    
                    { error &&  <div className="text-danger">
                                {error}
                        </div>}
                    <form action="" onSubmit={handleSubmit}>
                        <Input title={'Email Address'} type={'email'}   placeholder={'enter email address'} value={email} onChange={e => setEmail(e.target.value)}  />
                        <Input title={'Password'} type={'password'}  placeholder={'enter password'} value={password} onChange={e => setPassword(e.target.value)} />

                        <button className="btn btn-primary w-100" type="submit">Button</button>

                    </form>
                </div>
            </div>
        </>
     );
}
 
export default Login;