import Copyright from '../Copyright';
import Sociais from '../Sociais';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='sociais'>
                <Sociais />
                <Copyright />
            </div>

        </footer>
    );
}

export default Footer;