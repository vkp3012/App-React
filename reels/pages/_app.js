import '../styles/globals.css'
import './signup/signup.css'
import './login/login.css'
import '../components/Feed.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AuthWrapper from '../context/auth';

function MyApp({ Component, pageProps }) {
  return(
    <AuthWrapper> 
      <Component {...pageProps} />
    </AuthWrapper>
  )
}

export default MyApp
