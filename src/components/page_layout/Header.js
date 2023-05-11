import SearchBar from "../search/SearchBar"
import logo from '../../assets/logo.png'
import Navbar from "./Navbar"
import { Link } from 'react-router-dom'


const Header = () => {
    return(
        <div className="grid grid-flow-col p-4 shadow-lg bg-yellow-400  sticky top-0 z-10 px-8 xl:px-20" >
            <Link to='/' className="col-span-4 flex align-middle  " >
                <img className="relative top-1 h-[3.5rem] w-20 rounded-md" src={logo} alt="site logo thumbnail"/>
                <h3 className="text-4xl px-2  relative top-1 font-abc bg-gradient-to-r bg-clip-text text-transparent from-red-500 to-green-500 " >Food Bazar</h3>
            </Link>
            <div className="col-span-5  "></div>
            <div className="col-span-3  " >
                <Navbar />
            </div>
        </div>
    )
}

export default Header