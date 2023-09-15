import './Sociais.css';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Sociais = () => {
    return (
        <div>
            <a href='https://github.com/HigorChagas' target='_blank' rel="noreferrer">
                <FaGithub className='item-sociais' />
            </a>
            <a href='https://www.instagram.com/higornchagas' target='_blank' rel="noreferrer">
                <FaInstagram className='item-sociais' />
            </a>
            <a href='https://www.youtube.com/channel/UCex4A1UILwWHTq6-typL-iQ' target='_blank' rel="noreferrer">
                <FaYoutube className='item-sociais' />
            </a>
        </div>
        

    )
}

export default Sociais;