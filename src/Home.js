import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';
import HookEffect from './screens/HookEffect';

const Home = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 3.5, marginVertical: 100 }}>
                <Text style={{ color: 'yellow', fontSize: 64 }}>Let's start</Text>
                <Text style={{ color: 'yellow', fontSize: 64, marginBottom: 40 }}>Coding</Text>
                <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
                {/* <Btn bgColor='yellow' textColor='black' btnLabel="Login2" Press={() => props.navigation.navigate("Login2")} />
                <Btn bgColor='black' textColor='white' btnLabel="Login3" Press={() => props.navigation.navigate("Login3")} />
                <Btn bgColor='red' textColor='white' btnLabel="Login4" Press={() => props.navigation.navigate("Login4")} /> */}
                <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
                <Btn bgColor='black' textColor='gold' btnLabel="API's" Press={() => props.navigation.navigate("HookEffect")} />
            </View>
        </Background>
        // <View>
        //     <HookEffect/>
        // </View>
    );
}

const styles = StyleSheet.create({})

export default Home;