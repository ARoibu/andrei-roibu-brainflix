import logo from '../../assets/images/Logo/Logo-brainflix.svg'
import './Header.scss'

function header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt="BrainFlix Logo" /> 
            <input placeholder='Search' className='header__search' type='text'/>
            <button className='header__button'>UPLOAD</button>
            <div className='header__mohan'></div>
        </header>
    );
}

export default header