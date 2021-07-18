import logo from '../../assets/images/Logo/Logo-brainflix.svg'

function header() {
    return (
        <header>
            <img src={logo} alt="BrainFlix Logo" />
            <br/>
            <input type='text'/>
            <br/>
            <button>+ Upload</button>
            <div></div>
        </header>
    );
}

export default header