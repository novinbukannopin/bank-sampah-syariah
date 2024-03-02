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


const Greenshowwaste = ({navigation}: any) => {

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
                            <Text style={styles.brand}>Green Show Waste</Text>
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
                        <Text style={styles.title}>Green Show Wastes</Text>
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
                            Belanja ke Uinsa Mart modal sampah.. Masyarakat nasabah BSS dapat melakukan pembelian
                            kebutuhan primer atau sekunder ke Uinsa Mart dengan cara menunjukkan kartu tanda nasabah
                            BSS. Karena terintegrasi dengan aplikasi mobile, maka proses pembayaran dapat dilakukan
                            melalui saldo yang dimiliki dengan metode pembayaran cashless. Selain itu metode pembayaran
                            cash juga dapat dilakukan ketika saldo nasabah telah ditarik ke nomor rekening masing-masing
                            nasabah.
                        </Text>


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

export default Greenshowwaste;

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