import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Pressable, Touchable, Button, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Title from "@/components/Title";
import {AntDesign} from '@expo/vector-icons';
import Footer from "@/components/Footer";

const transaction = [
    {
        datetime: "11/12/2023",
        jenis: "Plastik",
        berat: "1.2 KG",
        harga: "Rp. 10.000"
    },
//     buatkan 2 data transaction lagi dengan data yang berbeda
    {
        datetime: "14/12/2023",
        jenis: "Kertas",
        berat: "0.1 KG",
        harga: "Rp. 1.000"
    },
    {
        datetime: "09/12/2023",
        jenis: "Botol",
        berat: "0.5 KG",
        harga: "Rp. 5.000"
    }
]


const Sampahku = ({navigation}: any) => {
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
                            <Text style={styles.brand}>Sampahku</Text>
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
                        <Text style={styles.title}>Detail Transaksi Sampah</Text>
                    </View>
                    <View style={{
                        width: "100%",
                        flex: 1,
                        gap: 10,
                        backgroundColor: 'white',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    }}>
                        <View style={{
                            width: "100%",
                            height: 60,
                            borderRadius: 4,
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: "nowrap",
                            gap: 10,
                            padding: 10,
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            backgroundColor: '#15978F',
                        }}>
                            <View style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                                backgroundColor: 'white',
                                borderRadius: 4
                            }}>
                                <Text style={{
                                    fontFamily: "GabaritoSemibold",
                                    fontSize: 12,
                                }}>Datetime</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                                backgroundColor: 'white',
                                borderRadius: 4
                            }}>
                                <Text style={{
                                    fontFamily: "GabaritoSemibold",
                                    fontSize: 12,
                                }}>Jenis</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                                backgroundColor: 'white',
                                borderRadius: 4
                            }}>
                                <Text style={{
                                    fontFamily: "GabaritoSemibold",
                                    fontSize: 12,
                                }}>Berat</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                                backgroundColor: 'white',
                                borderRadius: 4
                            }}>
                                <Text style={{
                                    fontFamily: "GabaritoSemibold",
                                    fontSize: 12,
                                }}>Total Harga</Text>
                            </View>
                        </View>


                        {transaction.map((item, index) => (

                            <View style={{
                                width: "100%",
                                height: 60,
                                borderRadius: 4,
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: "nowrap",
                                gap: 10,
                                padding: 10,
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                backgroundColor: '#fff4ec',
                            }}>
                                <View style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 10,
                                    borderRadius: 4,
                                    backgroundColor: 'white',
                                }}>
                                    <Text style={{
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 12,
                                    }}>{item.datetime}</Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 10,
                                    backgroundColor: 'white',
                                    borderRadius: 4
                                }}>
                                    <Text style={{
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 12,
                                    }}>{item.jenis}</Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 10,
                                    backgroundColor: 'white',
                                    borderRadius: 4
                                }}>
                                    <Text style={{
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 12,
                                    }}>{item.berat}</Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 10,
                                    backgroundColor: 'white',
                                    borderRadius: 4
                                }}>
                                    <Text style={{
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 12,
                                    }}>{item.harga}</Text>
                                </View>
                            </View>
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

export default Sampahku;

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