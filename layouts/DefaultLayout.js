
import Footer from '../components/Footer';
import Header from './../components/Header';

const DefaultLayout = ({children}) => {


    return ( 
        <>
        <Header />

        <main className='container'> 
            {children}
        </main>

        <Footer />



        </>
     );
}
 
export default DefaultLayout;