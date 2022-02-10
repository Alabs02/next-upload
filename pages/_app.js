import 'bootstrap/dist/css/bootstrap.css'
import DefaultLayout from '../layouts/DefaultLayout'

import {useEffect} from "react";





function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
}, []);
  
  return (

    <DefaultLayout>
      <Component {...pageProps} />
     </DefaultLayout>

  )
  
}

export default MyApp
