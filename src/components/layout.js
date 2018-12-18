import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

import Title, { SimpleTitle } from './title'

const H1 = styled.div`
  margin-bottom: rhythm(1.5);
  margin-top: 0;
`

const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  margin-bottom: ${rhythm(-1)};
`

const L = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  // color: #2E3441;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(20)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const header =
    location.pathname === rootPath ? (
      <H1>
        <L to={'/'}>
          <Title />
        </L>
      </H1>
    ) : (
      <H3>
        <L to={'/'}>
          <SimpleTitle />
        </L>
      </H3>
    )

  return (
    <Container>
      {header}
      {children}
    </Container>
  )
}

// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props
//     const rootPath = `${__PATH_PREFIX__}/`
//     let header

//     if (location.pathname === rootPath) {
//       header = (
//         <h1
//           style={{
//             ...scale(1.5),
//             marginBottom: rhythm(1.5),
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: 'none',
//               textDecoration: 'none',
//               color: '#2E3441',
//             }}
//             to={'/'}
//           >
//             <Title />
//           </Link>
//         </h1>
//       )
//     } else {
//       header = (
//         <h3
//           style={{
//             fontFamily: 'Montserrat, sans-serif',
//             marginTop: 0,
//             marginBottom: rhythm(-1),
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: 'none',
//               textDecoration: 'none',
//               color: 'inherit',
//             }}
//             to={'/'}
//           >
//             <SimpleTitle />
//           </Link>
//         </h3>
//       )
//     }
//     return (
//       <div
//         style={{
//           marginLeft: 'auto',
//           marginRight: 'auto',
//           maxWidth: rhythm(24),
//           padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//         }}
//       >
//         {header}
//         {children}
//       </div>
//     )
//   }
// }

export default Layout
