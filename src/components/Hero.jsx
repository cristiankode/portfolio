import HeroImage from "./HeroImage";
import patternRings from '../assets/pattern-rings.svg'
import patternCircle from '../assets/pattern-circle.svg'
export default function Hero(){
    return(
        <section className='hero'>
            <div className="container hero-wrapper">
                <HeroImage />
                <div className="rings">
                    <img src={patternRings} className="rings-img" />
                </div>
                <div className="hero-circle">
                    <img src={patternCircle} className="circle-img" />
                </div>    
                <div className="container">
                    <div className="hero-content-text">
                        <h1 className="heading-xl">Nice to<br className="br-tablet" /> meet you!
                        <br className="br-mobile" />
                        I'm <span className="accent">Adam Keyes.</span>
                    </h1>
                    <p className="text-body"> Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love. </p>

                    <div className="hero__content-btn">
                        <button className="btn-link">Contact me</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}