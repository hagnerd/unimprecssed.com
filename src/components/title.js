import React from 'react'
import styled from 'styled-components'
import { Trail, animated, config } from 'react-spring'
import { scale, rhythm } from '../utils/typography'

const H1 = styled.h1`
  ${scale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
  @media (max-width: 700px) {
    ${scale(0.75)};
  }
`

const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  margin-bottom: ${rhythm(-1)};
`

const Hl = styled.span`
  color: #5b9663;
`

const Flex = styled.div`
  display: flex;
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
    <Flex>
      <H1>Unimpre</H1>
      <AnimatedText text={['c', 's', 's']} />
      <H1>ed</H1>
    </Flex>
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
