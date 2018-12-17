import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.baseFontSize = '20px'
// Wordpress2016.bodyColor = '#666666'
Wordpress2016.bodyColor = '#2E3441'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  a: {
    boxShadow: '0 1px 0 0 currentColor',
    // color: '#6CA37C',
    color: '#5b9663',
    // color: '#709775',
    textDecoration: 'none',
  },
  'a:hover,a:active': {
    boxShadow: 'none',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
