import {theme} from './theme'

const Hero = () => {
  return (
    <>
        <h2 style={{color: theme.white, transform: 'translateY(150px)', position: 'absolute'}}>Welcome to the Smith House...</h2>
        <img style={{width: '100vw'}} src="/images/Smith-House-Flower.jpg" />
    </>
  )
}

export default Hero;
