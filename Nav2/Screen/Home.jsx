import React from 'react'
import {Text} from "react-native"
const Home = ({route}) => {
    const {name} = route.params
  return (
   <Text>Home Page made by {name}</Text>
  )
}

export default Home