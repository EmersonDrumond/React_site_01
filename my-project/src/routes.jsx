import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Products from './pages/Products'

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/blog" element={ <Blog/>}/>
                <Route path="/products" element={ <Products/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes