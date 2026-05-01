
import patternRings from '../assets/pattern-rings.svg'

export default function Skills(){
    return(
        <section className='skills'>
            <div className="container">
                <hr/>
                <div className="skills__grid">
                    <div className="skills__item">
                        <h3 className='skill__title'>HTML</h3>
                        <p className='skill__experience'>4 Years Experience</p>
                    </div>
                    <div className="skills__item">
                        <h3 className='skill__title'>CSS</h3>
                        <p className='skill__experience'>4 Years Experience</p>
                    </div>
                    <div className="skills__item">
                        <h3 className='skill__title'>Javascript</h3>
                        <p className='skill__experience'>4 Years Experience</p>
                    </div>
                    <div className="skills__item">
                        <h3 className='skill__title'>Accessibility</h3>
                        <p className='skill__experience'>4 Years Experience</p>
                    </div>
                    <div className="skills__item">
                        <h3 className='skill__title'>React</h3>
                        <p className='skill__experience'>3 Years Experience</p>
                    </div>
                    <div className="skills__item">
                        <h3 className='skill__title'>Saas</h3>
                        <p className='skill__experience'>3 Years Experience</p>
                    </div>
                </div>
                <div className="skills__rings">
                    <img src={patternRings} className="skills__rings_img" />
                </div>
                <hr className='skills__hr_botom'/>
            </div>
        </section>
    )
}   