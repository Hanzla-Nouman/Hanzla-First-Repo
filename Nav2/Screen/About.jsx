import React from 'react'
import {Button, Text} from "react-native"
import { useNavigation } from '@react-navigation/native'
const About = () => {
    const navigation = useNavigation()
  return (<>
   <Text>About Page</Text>
   <Button title='Navigate' onPress={()=>navigation.navigate("Home",{
    name:"Hanzla Nouman"
   })}/>
   <Button title='Drawer' onPress={()=>navigation.toggleDrawer()}/>
   <Button title='Contact' onPress={()=>navigation.jumpTo("Contact")}/>

   </>
  )
}

export default About