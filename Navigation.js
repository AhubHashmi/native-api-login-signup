import * as React from 'react';

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Login} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;