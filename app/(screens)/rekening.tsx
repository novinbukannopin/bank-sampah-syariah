import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Pressable, Touchable, Button, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Title from "@/components/Title";
import {AntDesign, Feather,} from '@expo/vector-icons';
import Footer from "@/components/Footer";

const transaction = [
    {
        jenis: "Jual Sampah",
        date: "22 Juli 2023",
        harga: "+ Rp. 10.000"
    },
    {
        jenis: "Jual Sampah",
        date: "12 Juni 2023",
        harga: "+ Rp. 13.000"
    }

]


const Rekening = ({navigation}: any) => {

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
                            source={require("../../assets/images/main_logo.png")}
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
                            <Text style={styles.brand}>Informasi Rekening</Text>
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
                        <Text style={styles.title}>Detail Informasi</Text>
                    </View>
                    <View style={{
                        width: "100%",
                        backgroundColor: 'white',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        padding: 16,
                        marginBottom: 10,
                    }}>
                        <Text style={{
                            fontFamily: "GabaritoSemibold",
                            fontSize: 20,
                            color: "#15978F",
                            marginBottom: 10,
                        }}>
                            Akun Rekening - IDR
                        </Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontFamily: "GabaritoMedium",
                                fontSize: 32,
                                color: "gray",
                                marginBottom: 2,
                            }}>
                                IDR {show ? "7.900.000" : "********"}
                            </Text>
                            <TouchableOpacity
                                onPress={() =>
                                    toggleShow()}>
                                {
                                    show ? <Feather name="eye" size={24} color="black"/> :
                                        <Feather name="eye-off" size={24} color="black"/>
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            display: 'flex',
                            width: "100%",
                            flexDirection: 'row',
                            gap: 10,
                            alignItems: "center",
                        }}>
                            <Text style={{
                                fontFamily: "GabaritoMedium",
                                fontSize: 20,
                                color: "gray",

                            }}>
                                Account No.
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "GabaritoBold",
                                    fontSize: 20,
                                    color: "darkgray",
                                }}>
                                997-127-000-000-000
                            </Text>
                        </View>
                    </View>

                    <Text style={{
                        fontFamily: "GabaritoSemibold",
                        textAlign: "left",
                        width: "100%",
                        marginLeft: 10,
                        color: "#15978F",
                        fontSize: 20,
                        marginBottom: 4,
                        padding: 10,
                    }}>
                        Aktivitas Terakhir
                    </Text>

                    <View style={{
                        width: "100%",
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 16,
                        flex: 1,
                        gap: 20,
                    }}>
                        {transaction.map((item, index) => (
                            <TouchableOpacity key={index} style={{
                                width: "100%",
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 10,
                            }}>
                                <Image source={require('../../assets/images/activity_trash.png')}
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
                                        <Text style={{
                                            fontFamily: "GabaritoMedium",
                                            color: "gray",
                                            fontSize: 14,
                                        }}>
                                            {item.date}
                                        </Text>
                                    </View>
                                    <Text style={{
                                        fontFamily: "GabaritoMedium",
                                        color: "green",
                                        fontSize: 16,
                                    }}>
                                        {item.harga}
                                    </Text>
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

export default Rekening;

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
        height: 45,
        objectFit: 'contain',
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