import Carrousel from '../../components/carrousel/Carrousel';
import Navbar from '../../components/navbar/Navbar';
import './Hero.css'

function Hero() {
    return (
        <div className='container-hero'>
            <Navbar />
            <Carrousel />

        </div>
    );
}

export default Hero;