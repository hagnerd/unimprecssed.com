import React from 'react'
import styled from 'styled-components'
import { Trail, animated, config } from 'react-spring'
import { scale, rhythm } from '../utils/typography'

const H1 = styled.h1`
  ${scale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

function AnimatedText({ text }) {
  return (
    <Trail
      config={config.wobbly}
      items={text}
      keys={(_, index) => index}
      from={{
        transform: 'translate3d(0, -60px, 0)',
      }}
      to={{
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      {(item, index) => styles => (
        <animated.div key={index} style={styles}>
          <H1
            style={{
              color: '#5b9663',
            }}
          >
            {item}
          </H1>
        </animated.div>
      )}
    </Trail>
  )
}

function AnimatedTitle() {
  return (
    <div style={{ display: 'flex' }}>
      <H1>Unimpre</H1>
      <AnimatedText text={['c', 's', 's']} />
      <H1>ed</H1>
    </div>
  )
}

function SimpleTitle() {
  return (
    <h3
      style={{
        fontFamily: 'Montserrat, sans-serif',
        marginTop: 0,
        marginBottom: rhythm(-1),
      }}
    >
      Unimpre<span style={{ color: '#5b9663' }}>css</span>ed
    </h3>
  )
}

export { AnimatedTitle, SimpleTitle }

export default AnimatedTitle
