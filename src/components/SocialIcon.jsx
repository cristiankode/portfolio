const SocialIcon = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={icon} alt={`Visitar perfil de ${label}`} />
  </a>
)

export default SocialIcon

//use component SocialIcon
/*<SocialIcon href="https://github.com/..." icon={iconGithub} label="GitHub" />*/