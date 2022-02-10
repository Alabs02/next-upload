
import useUser from './../hooks/User';
import { useRouter } from 'next/router';

const Header = () => {
    const user = useUser();
    const router = useRouter()
    return ( 
        <>
           <div className="row justify-content-end" >
            <nav className="navbar  bg-light">
                    <span className="navbar-brand mb-0 h1">Navbar</span>


                    {
                        user ?

                        <>
                            <span className="navbar-text">
                                {user.name}
                            </span>
                            <button className="btn btn-primary" onClick={() => {
                                localStorage.removeItem('user');
                                window.location.reload();
                            }}>Logout</button>
                        </>
                        : <>
                            <button className="btn btn-primary" onClick={() => {
                                router.push('/login')
                            }
                            }>Login</button>
                           </>
                    }
            </nav>

            <div className="col-2">

                {
                    user && (
                        
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          Create
                        </button>
                    
                    )


                }
                

           </div>

           </div>


            
        </>
     );
}
 
export default Header;