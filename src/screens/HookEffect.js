import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function HookEffect() {
    const [myUserData, setMyUserData] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    const getUserData = async () => {
        try {
            const response = await fetch(
                "https://fakestoreapi.com/products"
            );
            const myData = await response.json();
            setMyUserData(myData);
            setIsLoaded(false);
            console.log(myData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <View style={{ alignItems: "center" }}>
            {isLoaded ? (<View style={styles.loader}><ActivityIndicator size="large" color="#0000ff" /></View>)
                : (
                    <View>
                        <Text style={styles.mainHeader}>List Of Students</Text>
                        <FlatList
                            data={myUserData}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.card}>
                                        <View style={styles.imgContainer}>
                                            <Image
                                                width={100}
                                                height={100}
                                                style={styles.imgStyle}
                                                resizeMode="cover"
                                                source={{ uri: item.image }}
                                            />
                                        </View>
                                        <View>
                                            <View style={styles.bioDataContainer}>
                                                <Text style={styles.bioData}>Bio-Data</Text>
                                                <Text style={styles.idNumber}>{item.id}</Text>
                                            </View>

                                            <View style={styles.mainContainer}>
                                                <Text style={styles.myName}>Title: {item.title}</Text>
                                                <Text style={styles.myName}>Price: {item.price}</Text>
                                                <Text style={styles.myName}>Category: {item.category}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            }}
                        />
                    </View>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    loader: {
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    mainContainer: {
        width: "100%",
        paddingTop: 50,
        backgroundColor: "#b696d7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    card: {
        width: 250,
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 5,
        marginVertical: 20,
        flexDirection: "column",
    },

    bioDataContainer: {
        width: "100%",
        backgroundColor: "#353535",
        display: "flex",
        justifyContent: "space-between",
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        fontFamily: "josefinSans_400Regular",
    },

    idNumber: {
        fontSize: 20,
        color: "rgba(255, 255, 255, 0.5)",
        fontFamily: "josefinSans_400Regular",
    },

    bioData: {
        fontSize: 30,
        color: "#fff",
        fontFamily: "josefinSans_400Regular",
    },

    mainHeader: {
        fontSize: 30,
        color: "black",
        fontFamily: "josefinSans_400Regular",
    },

    imgContainer: {
        padding: 10,
    },
});