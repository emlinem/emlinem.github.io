import '../styles.css';
import './hero.css';
import EmilyHero from '../assets/EmilyHero.png';
import Typography from '../components/Typography';


const Hero = () => {
    return (
        <section className="hero">
            <div className="content">
                <div className='herocontent'>
                <Typography type="hero" color="secondary">
                    creative designer & developer.
                </Typography>
                <Typography type="p" color="primary">
                    Hi I'm Emily Nilsson, a passionate Front-end Developer & UI/UX Designer based in Stockholm.
                </Typography>
                <a href="#projects" className="cta-btn">SEE MY WORKS →</a>
                </div>
            </div>
            <div className="hero-image">
                <img src={EmilyHero} alt="Emily Image" />
            </div>
        </section>
    );
}

export default Hero;
