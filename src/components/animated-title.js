import React from 'react'
import { Trail, animated, config } from 'react-spring'

import { Comp } from './layout'

function AnimatedTitle({ text }) {
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
          <Comp
            styles={{
              color: '#5b9663',
            }}
          >
            {item}
          </Comp>
        </animated.div>
      )}
    </Trail>
  )
}

export default AnimatedTitle
