
import './App.css'
import ContentPage from './pages/ContentPage'
import MainPage from './pages/MainPage'
import { Route, Routes } from 'react-router'
import ReviewPage from './pages/ReviewPage'
import BrandPage from './pages/BrandPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CustomerServicePage from './pages/CustomerServicePage'
import Intro from './components/Intro/Intro'
import WriteReviewPage from './pages/WriteReviewPage'
import DetailContent from './components/Detail/DetailContent'
import Reservation from './components/Reservation/Reservation'
import PostPage from './pages/PostPage'
import { logout } from './modules/user'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { SlideProvider } from './context/SlideContext'



function App(props) {
  const {logout} = props;  
  const dispatch = useDispatch();
  window.addEventListener('beforeunload', () => {
    dispatch(logout());
  });

  return (
    <SlideProvider>
    <Routes>
      <Route path='/' element={<Intro/>}/>
      <Route path='/main' element={<MainPage/>}/>
      <Route path='/content' element={<ContentPage/>}/>
      <Route path='/review' element={<ReviewPage/>}/>
      <Route path='/brand' element={<BrandPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/customer' element={<CustomerServicePage/>}/>
      <Route path='/writeReview' element={<WriteReviewPage/>}/>
      <Route path='/detail/:id' element={<DetailContent/>}/>
      <Route path='/reservation/:id' element={<Reservation/>}/>
      <Route path='/:username' element={<ReviewPage/>}/>
      <Route path='/:username/:postId' element={<PostPage/>}/>
    </Routes>
    </SlideProvider>
  )
}

export default connect((state) => ({user: state.user.user}), {logout})(App)

