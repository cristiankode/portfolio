import thumbnailPortfolio from '../assets/projects/thumbnail-project-1-large.webp';
import thumbnailProject2 from '../assets/projects/thumbnail-project-2-large.webp';
import thumbnailProject3 from '../assets/projects/thumbnail-project-3-large.webp';
import thumbnailProject4 from '../assets/projects/thumbnail-project-4-large.webp';
import thumbnailProject5 from '../assets/projects/thumbnail-project-5-large.webp';
import thumbnailProject6 from '../assets/projects/thumbnail-project-6-large.webp';
export default function Projects() {
  return (
    <section className="container projects">
        <div className="projects__header">
            <h1>Projects</h1>
            <a href="#" className="projects__contact">CONTACT ME</a>
        </div>
        <div className="projects__grid">
            <div className="project-card">
                <div className="project-card__image-container">
                    <img src={thumbnailPortfolio} alt="Design Portfolio" className="project-card__image"/>
                    <div className="project-card__overlay">
                        <a href="#" className="btn-overlay">VIEW PROJECT</a>
                        <a href="#" className="btn-overlay">VIEW CODE</a>
                    </div>
                </div>
                <h3 className="project-card__title">DESIGN PORTFOLIO</h3>

                <div className="project-card__tech">
                    <span>HTML</span>
                    <span>CSS</span>
                </div>
                <div className="project-card__actions">
                    <a href="#" className="btn-overlay">VIEW PROJECT</a>
                    <a href="#" className="btn-overlay">VIEW CODE</a>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card__image-container">
                    <img src={thumbnailProject2} alt="Design Portfolio" className="project-card__image"/>
                    <div className="project-card__overlay">
                        <a href="#" className="btn-overlay">VIEW PROJECT</a>
                        <a href="#" className="btn-overlay">VIEW CODE</a>
                    </div>
                </div>
                <h3 className="project-card__title">E-LEARNING LANDING PAGE</h3>

                <div className="project-card__tech">
                    <span>HTML</span>
                    <span>CSS</span>
                </div>
                <div className="project-card__actions">
                    <a href="#" className="btn-overlay">VIEW PROJECT</a>
                    <a href="#" className="btn-overlay">VIEW CODE</a>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card__image-container">
                    <img src={thumbnailProject3} alt="Design Portfolio" className="project-card__image"/>
                    <div className="project-card__overlay">
                        <a href="#" className="btn-overlay">VIEW PROJECT</a>
                        <a href="#" className="btn-overlay">VIEW CODE</a>
                    </div>
                </div>
                <h3 className="project-card__title">TODO WEB APP</h3>

                <div className="project-card__tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                </div>
                <div className="project-card__actions">
                    <a href="#" className="btn-overlay">VIEW PROJECT</a>
                    <a href="#" className="btn-overlay">VIEW CODE</a>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card__image-container">
                    <img src={thumbnailProject4} alt="Design Portfolio" className="project-card__image"/>
                    <div className="project-card__overlay">
                        <a href="#" className="btn-overlay">VIEW PROJECT</a>
                        <a href="#" className="btn-overlay">VIEW CODE</a>
                    </div>
                </div>
                <h3 className="project-card__title">ENTERTAINMENT WEB APP</h3>

                <div className="project-card__tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                </div>
                <div className="project-card__actions">
                    <a href="#" className="btn-overlay">VIEW PROJECT</a>
                    <a href="#" className="btn-overlay">VIEW CODE</a>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card__image-container">
                    <img src={thumbnailProject5} alt="Design Portfolio" className="project-card__image"/>
                    <div className="project-card__overlay">
                        <a href="#" className="btn-overlay">VIEW PROJECT</a>
                        <a href="#" className="btn-overlay">VIEW CODE</a>
                    </div>
                </div>
                <h3 className="project-card__title">MEMORY GAME</h3>

                <div className="project-card__tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                </div>
                <div className="project-card__actions">
                    <a href="#" className="btn-overlay">VIEW PROJECT</a>
                    <a href="#" className="btn-overlay">VIEW CODE</a>
                </div>
            </div>
                        <div className="project-card">
                <div className="project-card__image-container">
                    <img src={thumbnailProject6} alt="Design Portfolio" className="project-card__image"/>
                    <div className="project-card__overlay">
                        <a href="#" className="btn-overlay">VIEW PROJECT</a>
                        <a href="#" className="btn-overlay">VIEW CODE</a>
                    </div>
                </div>
                <h3 className="project-card__title">ART GALLERY SHOWCASE</h3>

                <div className="project-card__tech">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                </div>
                <div className="project-card__actions">
                    <a href="#" className="btn-overlay">VIEW PROJECT</a>
                    <a href="#" className="btn-overlay">VIEW CODE</a>
                </div>
            </div>
        </div>
    </section>
)
}