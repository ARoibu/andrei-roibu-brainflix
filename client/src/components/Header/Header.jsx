import logo from '../../assets/images/Logo/Logo-brainflix.svg'
import './Header.scss'
import {Link} from 'react-router-dom'

function header() {
    return (
        <header className='header'>
            <Link to='/'>
            <img className='header__logo' src={logo} alt="BrainFlix Logo" /> 
            </Link>
            <input placeholder='Search' className='header__search' type='text'/>
            <Link to={'/uploads'} className='header__button'>UPLOAD</Link>
            <div className='header__mohan'></div>
        </header>
    );
}

export default header