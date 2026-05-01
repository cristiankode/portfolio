import imgProfileDesktop from '../assets/image-profile-desktop.webp'
import imgProfileTablet from '../assets/image-profile-tablet.webp'
import imgProfileMobile from '../assets/image-profile-mobile.webp'

export default function HeroImage(){
    return(
        <div className="hero-image">
            <picture>
                {/* 💻 DESKTOP */}
                <source
                media="(min-width: 1024px)"
                srcSet={imgProfileDesktop}
                />

                {/* 📲 TABLET */}
                <source
                media="(min-width: 768px)"
                srcSet={imgProfileTablet}
                />

                {/* 📱 MOBILE (default) */}
                <img
                src={imgProfileMobile}
                alt="Profile"
                className="hero-img"
                />
            </picture>
        </div>
    )
}