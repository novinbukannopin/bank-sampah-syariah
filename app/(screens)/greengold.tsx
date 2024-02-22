import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Pressable,
    Touchable,
    Button,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
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


const Greengold = ({navigation}: any) => {

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
                            <Text style={styles.brand}>Green Gold</Text>
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
                        <Text style={styles.title}>Green Gold</Text>
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
                            fontFamily: "GabaritoMedium",
                            fontSize: 20,
                            color: "#15978F",
                            marginBottom: 10,
                        }}>
                            Green-Gold relevan dengan menabung emas modal sampah. fitur ini berisi penjelasan terkait
                            Green-Gold sendiri, disusul dengan informasi harga emas serta icon klaim saldo ke emas yang
                            digunakan pada saat nasabah yang telah memiliki saldo cukup berniat menukarkan atau membeli
                            emas. Ketika nasabah mengklik klaim tersebut, maka notifikasi akan diterima pihak BSS
                            sehingga dengan jangka waktu yang telah ditentukan nasabah akan menerima emas yang
                            diinginkan.
                        </Text>


                        <View style={{
                            width: "100%",
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 10,
                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#15978F',
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    borderRadius: 6,
                                    flex: 1,
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: 'GabaritoSemibold',
                                        fontSize: 18,
                                        textAlign: 'center',
                                    }}
                                >Top up Emas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'salmon',
                                    paddingVertical: 10,
                                    borderRadius: 6,
                                    paddingHorizontal: 20,
                                    flex: 1
                                }}
                                onPress={() => navigation.navigate("(screens)/homepage")}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: 'GabaritoSemibold',
                                        fontSize: 18,
                                        textAlign: 'center',
                                    }}
                                >Kembali</Text>
                            </TouchableOpacity>
                        </View>

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

export default Greengold;

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