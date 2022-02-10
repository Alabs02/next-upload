
import useUser from './../hooks/User';

const Header = () => {
    const user = useUser();
    return ( 
        <>
           <div className="row justify-content-end" >
            <nav className="navbar  bg-light">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
            </nav>

            <div className="col-2">

                {
                    user && (
                    <button type="button" className="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModal">
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