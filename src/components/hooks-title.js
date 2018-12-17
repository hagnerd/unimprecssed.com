import React from 'react'
import styled from 'styled-components'
import { useTrail, animated, config } from 'react-spring/hooks'
import { scale, rhythm } from '../utils/typography'

const H1 = styled.h1`
  ${scale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

const Highlight = styled.h1`
  ${H1};
  color: #5b9663;
`

const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  margin-bottom: ${rhythm(-1)};
`

const Hl = styled.span`
  color: #5b9663;
`

function AnimatedText({ text }) {
  const trail = useTrail(text.length, () => ({
    config: config.wobbly,
    transform: 'translate3d(0,0,0)',
    from: { transform: 'translate3d(0,-60px,0)' },
  }))

  return trail.map((styles, index) => (
    <animated.div key={index} style={styles}>
      <Highlight>{item}</Highlight>
    </animated.div>
  ))
}

function AnimatedTitle() {
  return (
    <div style={{ display: 'flex' }}>
      <H1>Unimpre</H1>
      <AnimatedText text="css" />
      <H1>ed</H1>
    </div>
  )
}

function SimpleTitle() {
  return (
    <H3>
      Unimpre<Hl>css</Hl>ed
    </H3>
  )
}

export { AnimatedTitle, SimpleTitle }

export default AnimatedTitle
