import React from 'react'
import LottieView from 'lottie-react-native'

const Animation = () => {
  return (
    <LottieView
        source={require('./animation/clockBlack.json')}
        autoPlay loop
        style={{
          height: 100,
          width: 100,
        }}
        speed={0.1}
      />
  )
}

export default Animation