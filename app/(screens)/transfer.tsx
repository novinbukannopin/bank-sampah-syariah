import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Pressable, Touchable, Button, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Title from "@/components/Title";
import {AntDesign, Feather,} from '@expo/vector-icons';
import Footer from "@/components/Footer";

const transaction = [
    {
        jenis: "Visa",
        icon: require("../../assets/images/visa.png"),
        navigate: "(screens)/(transfer)/visa"
    },
    {
        jenis: "E-Wallet",
        icon: require("../../assets/images/e_wallete.png"),
        navigate: "(screens)/(transfer)/visa"
    },
    {
        jenis: "Bank",
        icon: require("../../assets/images/bank.png"),
        navigate: "(screens)/(transfer)/visa"
    }

]


const Transfer = ({navigation}: any) => {

    const [show, setShow] = React.useState(false)

    function toggleShow() {
        setShow(!show)
    }

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
                                          onPress={() => navigation.navigate("(screens)/homepage")}>
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
                        paddingVertical: 10,
                        marginBottom: 24
                    }}>
                        <View style={{
                            width: "100%",
                            display: 'flex',
                            alignItems: 'flex-start',
                        }}>
                            <View style={styles.imageTextContainer}>
                                <Text style={styles.imageText}>Bank Sampah Syariah</Text>
                                <Text style={styles.imageText}>UIN Sunan Ampel Surabaya</Text>
                            </View>
                            <Text style={styles.brand}>Transfer</Text>
                        </View>
                    </View>
                    <View style={{
                        width: "100%",
                        backgroundColor: '#15978F',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 8,
                        paddingVertical: 10,
                        marginBottom: 24,
                        borderRadius: 4,
                    }}>
                        <Text style={styles.title}>Transfer</Text>
                    </View>


                    <Text style={{
                        fontFamily: "GabaritoSemibold",
                        textAlign: "left",
                        width: "100%",
                        color: "#15978F",
                        fontSize: 20,
                        marginBottom: 4,
                        padding: 10,
                    }}>
                        Aksi Transfer
                    </Text>

                    <View style={{
                        width: "100%",
                        borderRadius: 12,
                        flex: 1,
                        gap: 10,
                    }}>
                        {transaction.map((item, index) => (
                            <TouchableOpacity key={index}
                                              onPress={() => navigation.navigate(item.navigate)}
                                              style={{
                                                  width: "100%",
                                                  display: 'flex',
                                                  flexDirection: 'row',
                                                  backgroundColor: "white",
                                                  padding: 24,
                                                  paddingVertical: 22,
                                                  gap: 16,
                                                  flex: 1,
                                                  borderRadius: 12,
                                              }}>
                                <Image source={item.icon}
                                       style={{
                                           height: 35,
                                           width: 35,
                                           objectFit: "contain",
                                       }}/>
                                <View style={{
                                    display: 'flex',
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <View>
                                        <Text style={{
                                            fontFamily: "GabaritoSemibold",
                                            fontSize: 18,
                                        }}>
                                            {item.jenis}
                                        </Text>

                                    </View>

                                </View>
                            </TouchableOpacity>
                        ))}

                    </View>

                </View>
                <View>
                    <Image source={require('../../assets/images/3r.png')}
                           style={{
                               marginBottom: 50,
                               width: "100%",
                               height: 200,
                               objectFit: "contain",
                           }}
                    />
                </View>
                <Footer/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Transfer;

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
        color: "white",
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
    },
    brand: {
        fontFamily: "GabaritoBold",
        fontSize: 32,
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