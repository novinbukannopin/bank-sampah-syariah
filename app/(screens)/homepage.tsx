import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Pressable, Touchable, Button, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Title from "@/components/Title";
import {AntDesign} from '@expo/vector-icons';
import Footer from "@/components/Footer";

const Feature = [
    {
        icon: require("../../assets/images/information.png"),
        title: "Sampahku",
        navigate: "sampahku"
    },
    {
        icon: require("../../assets/images/calculator.png"),
        title: "Informasi Rekening",
        navigate: "rekening"
    },
    {
        icon: require("../../assets/images/transfer.png"),
        title: "Transfer",
        navigate: "transfer"
    },
    {
        icon: require("../../assets/images/gold.png"),
        title: "Green Gold",
        navigate: "greengold"
    },
    {
        icon: require("../../assets/images/grocery.png"),
        title: "Green Showwaste",
        navigate: "showwaste"
    },
    {
        icon: require("../../assets/images/health.png"),
        title: "Green Health",
        navigate: "health"
    },
    {
        icon: require("../../assets/images/qr.png"),
        title: "QRIS",
        navigate: "qris"
    }, {
        icon: require("../../assets/images/strategic.png"),
        title: "Pojok Sampah",
        navigate: "pojoksampah"
    }
]

const Homepage = ({navigation}: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={{
                    display: 'flex',
                    flex: 1,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        display: 'flex',
                        width: "100%",
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <TouchableOpacity style={{
                            marginBottom: 10,
                        }}
                                          onPress={() => navigation.navigate("index")}>
                            <AntDesign name="back" size={24} color="black"/>
                        </TouchableOpacity>
                        <Image
                            source={{uri: 'https://placehold.jp/50x150.png'}}
                            style={styles.image}
                        />
                    </View>

                    <View style={{
                        width: "100%",
                        display: 'flex',
                        alignItems: 'center',
                        padding: 10,
                        marginBottom: 24
                    }}>
                        <Title/>
                    </View>
                    <View style={{
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 8,
                        marginBottom: 24
                    }}>
                        <Text style={styles.title}>Selamat datang</Text>
                        <Text style={styles.title}>Di BSS Mobile Apps</Text>
                    </View>
                    <View style={{
                        padding: 10,
                        paddingTop: 24,
                        width: "100%",
                        display: 'flex',
                        flex: 1,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: "white",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                    }}>
                        <View style={{
                            width: "100%",
                            display: 'flex',
                            flex: 1,
                            gap: 10,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {Feature.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 108,
                                        height: 100,
                                        gap: 10,
                                        padding: 4,
                                        backgroundColor: "#15978F",
                                        borderRadius: 10,
                                        marginBottom: 10,
                                    }}
                                                      onPress={() => navigation.navigate(`(screens)/${item.navigate}`)}
                                    >
                                        <Image
                                            source={
                                                item.icon
                                            }
                                            style={{
                                                width: 50,
                                                height: 50,
                                            }}
                                        />
                                        <View style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <Text style={{
                                                color: "white",
                                                fontFamily: "GabaritoSemibold",
                                            }}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                </View>
                {/*<View style={styles.footer}>*/}
                {/*    <Text style={styles.footerText}>#ayobuangsampahdiBSS</Text>*/}
                {/*</View>*/}
                <Footer/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Homepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    backgroundImageContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        top: 400,
        left: 190,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    logoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 100,
    },
    logo: {
        width: 66,
        height: 58,
    },
    title: {
        fontSize: 18,
        fontFamily: "GabaritoSemibold"
    },
    subtitle: {
        fontSize: 12,
        fontFamily: "GabaritoMedium",
        textAlign: "right"
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 28,
    },
    image: {
        width: 150,
        height: 50,
        borderRadius: 4,
        marginBottom: 18,
    },
    imageTextContainer: {
        marginBottom: 4,
    },
    imageText: {
        fontFamily: "GabaritoSemibold",
        textAlign: "center",
    },
    brand: {
        fontFamily: "GabaritoBold",
        fontSize: 24,
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 70,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'green',
        alignItems: 'center',
        paddingVertical: 10,
    },
    footerText: {
        fontFamily: 'GabaritoMedium',
        fontSize: 16,
        color: 'white',
    },
});