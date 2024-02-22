import React, {useState} from 'react';
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
    TextInput, ActivityIndicator, Alert
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Modal from "react-native-modal"
import {AntDesign, Feather,} from '@expo/vector-icons';
import Footer from "@/components/Footer";
import DropdownTransfer from "@/components/DropdownTransfer";
import {ALERT_TYPE, Dialog, Toast} from "react-native-alert-notification";


const TransferVisa = ({navigation}: any) => {

    const [inputValue, setInputValue] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [loading, setLoading] = React.useState(false)
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("")
    const [pin, setPin] = useState("")

    const handleChange = (text: string) => {
        // Allow only numbers
        const numericValue = text.replace(/[^0-9]/g, "");
        setInputValue(numericValue);
    };

    const handleSelectFrom = (value: string) => {
        setFrom(value);
    }

    const handleSelectTo = (value: string) => {
        setTo(value);
    }

    const handleSubmit = () => {
        if (inputValue === "" || from === "" || to === "") {
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Warning',
                textBody: 'All fields are required',
            })
        } else if (Number(inputValue) <= 1000000 && Number(inputValue) >= 50000) {
            setLoading(true)
            toggleModal()
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        } else {
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Warning',
                textBody: 'Input value terlalu kecil atau kurang dari saldo',
            })
        }
    }

    const handleSubmitPIN = () => {
        if (pin !== "907907") {
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'PIN Error',
                textBody: "Your PIN is wrong!"
            })
        } else {
            setLoading(true)
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Success Transfer',
                textBody: "Success transfer to " + to + "! Rp. " + new Intl.NumberFormat('id-ID').format(parseInt(inputValue))
            })
            setTimeout(() => {
                setLoading(false)
                navigation.navigate('(screens)/transfer')
            }, 2000)
        }
    }


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

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
                                          onPress={() => navigation.navigate("(screens)/transfer")}>
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
                            <Text style={styles.brand}>Transfer to Visa</Text>
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
                        <Text style={styles.title}>Transfer to Visa</Text>
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
                        Send Money
                    </Text>

                    <View style={{
                        width: "100%",
                        borderRadius: 12,
                        flex: 1,
                        gap: 10,
                        backgroundColor: "white",
                        padding: 10,
                    }}>
                        <View style={{
                            width: "100%",
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            borderBottomColor: "#15978F",
                            borderBottomWidth: 1,
                        }}>
                            <Text style={{
                                fontFamily: "GabaritoSemibold",
                                fontSize: 16,
                            }}>
                                From
                            </Text>
                            <DropdownTransfer variant={"from"} onSelectValue={handleSelectFrom}/>
                        </View>
                        <View>
                            <Text style={{
                                fontFamily: "GabaritoSemibold",
                                fontSize: 16,
                                marginTop: 10,
                                marginBottom: 10,
                            }}>
                                You Send
                            </Text>
                            <TextInput
                                onChangeText={handleChange}
                                value={inputValue}
                                placeholder="Ammount"
                                inputMode="numeric"
                                keyboardType={"number-pad"}
                                style={{
                                    borderWidth: 1,
                                    borderColor: "#15978F",
                                    paddingVertical: 6,
                                    paddingHorizontal: 16,
                                    marginBottom: 10,
                                    borderRadius: 5,
                                    backgroundColor: '#fffffc',
                                    opacity: 0.8,
                                    fontFamily: 'GabaritoMedium'
                                }}
                            />
                        </View>
                        <View style={{
                            width: "100%",
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            borderBottomColor: "#15978F",
                            borderBottomWidth: 1,
                        }}>
                            <Text style={{
                                fontFamily: "GabaritoSemibold",
                                fontSize: 16,
                            }}>
                                To
                            </Text>
                            <DropdownTransfer onSelectValue={handleSelectTo}/>
                        </View>
                        <View>
                            <Text style={{
                                fontFamily: "GabaritoSemibold",
                                fontSize: 16,
                                marginTop: 10,
                                marginBottom: 10,
                            }}>
                                Message
                            </Text>
                            <TextInput
                                onChangeText={(text) => setMessageInput(text)}
                                value={messageInput}
                                placeholder="Message"
                                style={{
                                    borderWidth: 1,
                                    borderColor: "#15978F",
                                    paddingVertical: 6,
                                    paddingHorizontal: 16,
                                    marginBottom: 10,
                                    borderRadius: 5,
                                    backgroundColor: '#fffffc',
                                    opacity: 0.8,
                                    fontFamily: 'GabaritoMedium'
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#15978F',
                                paddingVertical: 10,
                                borderRadius: 6,
                            }}
                            onPress={() => {
                                handleSubmit();
                            }}>
                            {loading ? (
                                <ActivityIndicator size="small" color="#ffffff"/>
                            ) : (
                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: 'GabaritoSemibold',
                                        fontSize: 18,
                                        textAlign: 'center',
                                    }}
                                >Submit</Text>
                            )}
                        </TouchableOpacity>
                        <Modal isVisible={isModalVisible} animationIn={"fadeIn"}>
                            <View style={{
                                backgroundColor: "white",
                                opacity: 0.9,
                                borderRadius: 8,
                                padding: 20,
                                width: "100%",
                                height: "80%",

                            }}>
                                <Text
                                    style={{
                                        padding: 12,
                                        backgroundColor: "#15978F",
                                        color: "white",
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 20,
                                        borderRadius: 6,
                                    }}>Transfer to {to}!</Text>
                                <View style={{
                                    flex: 1,
                                    marginTop: 20,
                                }}>
                                    <Text style={{
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 16,
                                        marginTop: 10,
                                    }}>
                                        From
                                    </Text>
                                    <Text style={{
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 20,
                                        marginBottom: 10,
                                    }}>
                                        {from}
                                    </Text>
                                    <Text style={{
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 16,
                                        marginTop: 10,
                                    }}>
                                        To
                                    </Text>
                                    <Text style={{
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 20,
                                        marginBottom: 10,
                                    }}>
                                        {to}
                                    </Text>

                                    <Text style={{
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 16,
                                        marginTop: 10,
                                    }}>
                                        Amount
                                    </Text>
                                    <Text style={{
                                        fontFamily: "GabaritoSemibold",
                                        fontSize: 20,
                                        marginBottom: 10,
                                    }}>
                                        Rp. {new Intl.NumberFormat('id-ID').format(parseInt(inputValue))}
                                    </Text>

                                    {messageInput !== "" && (
                                        <><Text style={{
                                            fontFamily: "GabaritoSemibold",
                                            fontSize: 16,
                                            marginTop: 10,
                                        }}>
                                            Message
                                        </Text><Text style={{
                                            fontFamily: "GabaritoSemibold",
                                            fontSize: 20,
                                            marginBottom: 10,
                                        }}>
                                            {messageInput}
                                        </Text></>
                                    )}

                                    <View>
                                        <Text style={{
                                            fontFamily: "GabaritoSemibold",
                                            fontSize: 16,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}>
                                            PIN
                                        </Text>
                                        <TextInput
                                            onChangeText={(text) => setPin(text)}
                                            value={pin}
                                            placeholder="PIN"
                                            keyboardType={"number-pad"}
                                            style={{
                                                borderWidth: 1,
                                                borderColor: "#15978F",
                                                paddingVertical: 6,
                                                paddingHorizontal: 16,
                                                marginBottom: 10,
                                                borderRadius: 5,
                                                backgroundColor: '#fffffc',
                                                opacity: 0.8,
                                                fontFamily: 'GabaritoMedium'
                                            }}
                                        />
                                    </View>
                                </View>

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                            padding: 12,
                                            backgroundColor: 'red',
                                            borderRadius: 6,
                                        }}
                                        onPress={toggleModal}>
                                        <Text style={{
                                            color: 'white',
                                            fontFamily: 'GabaritoSemibold',
                                            fontSize: 18,
                                            textAlign: 'center',
                                        }}>
                                            Cancel
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                            marginLeft: 10,
                                            padding: 12,
                                            backgroundColor: '#15978F',
                                            borderRadius: 6,
                                        }}
                                        onPress={toggleModal}>
                                        <Text style={{
                                            color: 'white',
                                            fontFamily: 'GabaritoSemibold',
                                            fontSize: 18,
                                            textAlign: 'center',
                                        }}
                                              onPress={() => {
                                                  handleSubmitPIN();
                                              }}>
                                            Send
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>

                </View>

                <Footer/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TransferVisa;

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