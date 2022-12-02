import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function Background({children}) {
  return (
    <View>
      <ImageBackground source={require("./assets/8002e14ac875218063ea50069c1e19ff.jpg")} style={{height:'100%'}} />
      <View style={{position:"absolute"}} >
        {children}
      </View>
    </View>
  );
}