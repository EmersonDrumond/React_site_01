import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header className="p-3 max-w-8xl mx-auto md:flex md:justify-between md:items-end md:pt-5 md:px-9">
            <div>
                <Link to="/"><p className="text-3xl font-bold">W.T</p></Link>
            </div>
            <ul className="flex flex-col space-y-4 mt-8 md:flex-row md:items-center md:space-x-5 md:mt-0">
                <Link className="md:mt-4 font-semibold" to="/">Home</Link>
                <Link className="font-semibold" to="/blog">Blog</Link>
                <Link className="font-semibold" to="/products">Produtos</Link>
            </ul>
        </header>
    )
}

export default Header