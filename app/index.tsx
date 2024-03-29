import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Alert,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Formik} from "formik";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import Title from "@/components/Title";
import {ALERT_TYPE, AlertNotificationRoot, Dialog} from "react-native-alert-notification";


interface FormValues {
    email: string;
    password: string;
}

type RootStackParamList = {
    "(screens)/homepage": undefined;
};

type AuthFormNavigationProp = NativeStackNavigationProp<RootStackParamList, '(screens)/homepage'>;

interface AuthFormProps {
    navigation: AuthFormNavigationProp;
}

// buatkan object data login untuk semua user
const authDataLogin =
    [
    {
        email: 'novin@nityasa.dev',
        password: 'novinnovin'
    },
    {
        email: 'admin@bss.id',
        password: 'adminbss'
    }
    ]

const Auth = ({navigation}: AuthFormProps) => {

    const [loading, setLoading] = React.useState(false)

    return (
        <AlertNotificationRoot>

            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.backgroundImageContainer}>
                        <Image
                            source={require('../assets/images/trash-hero.png')}
                            style={styles.backgroundImage}
                        />
                    </View>
                    <View style={styles.content}>
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.logo}
                                source={require('../assets/images/uinsa.png')}
                            />
                            <View>
                                <Text style={styles.title}>Bank Sampah Syariah</Text>
                                <Text style={styles.subtitle}>UIN Sunan Ampel Surabaya</Text>
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/main_logo.png')}
                                style={styles.image}
                            />
                            <Title/>
                        </View>
                        <View style={styles.formContainer}>
                            <View>
                                <Formik
                                    initialValues={{email: '', password: ''}}
                                    onSubmit={(values: FormValues) => {
                                        setLoading(true)
                                        setTimeout(() => {
                                            console.log(values);
                                            setLoading(false)
                                            // buatkan if else untuk validasi email dan password dari mapping an data object authDataLogin untuk semua user

                                            if(values.email === authDataLogin[0].email && values.password === authDataLogin[0].password){
                                                values.email = '';
                                                values.password = '';

                                                navigation.navigate('(screens)/homepage');
                                            }
                                            else if(values.email === authDataLogin[1].email && values.password === authDataLogin[1].password){
                                                values.email = '';
                                                values.password = '';
                                                navigation.navigate('(screens)/homepage');
                                            }
                                            else {
                                                Dialog.show({
                                                    type: ALERT_TYPE.DANGER,
                                                    title: 'Incorrect',
                                                    textBody: 'Email or password is incorrect',
                                                    button: 'close',
                                                })
                                            }
                                        }, 2000)
                                    }}
                                    validate={(values: FormValues) => {
                                        const errors: Partial<FormValues> = {};

                                        // Validasi email
                                        if (!values.email) {
                                            errors.email = 'Email is required';
                                        } else if (
                                            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                                                values.email
                                            )
                                        ) {
                                            errors.email = 'Invalid email address';
                                        }

                                        // Validasi password
                                        if (!values.password) {
                                            errors.password = 'Password is required';
                                        } else if (values.password.length < 8) {
                                            errors.password = 'Password must be at least 8 characters';
                                        }

                                        return errors;
                                    }}
                                >
                                    {({
                                          handleChange,
                                          handleBlur,
                                          handleSubmit,
                                          values,
                                          errors,
                                      }) => (
                                        <View style={{
                                            padding: 10
                                        }}>
                                            <View style={{
                                                marginBottom: 8
                                            }}>
                                                <Text style={{
                                                    fontSize: 18,
                                                    fontFamily: 'GabaritoSemibold',
                                                    marginBottom: 14,
                                                }}>
                                                    Email
                                                </Text>
                                                <TextInput
                                                    onChangeText={handleChange('email')}
                                                    onBlur={handleBlur('email')}
                                                    value={values.email}
                                                    placeholder="Email"

                                                    style={{
                                                        borderWidth: 1,
                                                        borderColor: "#15978F",
                                                        paddingVertical: 4,
                                                        paddingHorizontal: 16,
                                                        marginBottom: 10,
                                                        borderRadius: 5,
                                                        backgroundColor: '#fffffc',
                                                        opacity: 0.8,
                                                        fontFamily: 'GabaritoMedium'
                                                    }}
                                                />
                                                {errors.email &&
                                                    <Text style={{
                                                        color: 'red',
                                                        fontFamily: 'GabaritoMedium'
                                                    }}>{errors.email}</Text>}
                                            </View>

                                            <View style={{
                                                marginBottom: 20
                                            }}>
                                                <Text style={{
                                                    fontSize: 18,
                                                    fontFamily: 'GabaritoSemibold',
                                                    marginBottom: 14,
                                                }}>
                                                    Password
                                                </Text>
                                                <TextInput
                                                    onChangeText={handleChange('password')}
                                                    onBlur={handleBlur('password')}
                                                    value={values.password}
                                                    placeholder="Password"

                                                    style={{
                                                        borderWidth: 1,
                                                        borderColor: "#15978F",
                                                        paddingVertical: 4,
                                                        paddingHorizontal: 16,
                                                        marginBottom: 10,
                                                        borderRadius: 5,
                                                        backgroundColor: '#fffffc',
                                                        opacity: 0.8,
                                                        fontFamily: 'GabaritoMedium'
                                                    }}
                                                />
                                                {errors.password &&
                                                    <Text style={{
                                                        color: 'red',
                                                        fontFamily: 'GabaritoMedium'
                                                    }}>{errors.password}</Text>}
                                            </View>

                                            <TouchableOpacity
                                                style={{
                                                    backgroundColor: '#15978F',
                                                    paddingVertical: 10,
                                                    borderRadius: 6,
                                                }}
                                                onPress={() => handleSubmit()}>
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
                                        </View>
                                    )}
                                </Formik>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>#ayobuangsampahdiBSS</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </AlertNotificationRoot>
    );
};

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
        paddingHorizontal: 10,

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
        width: 250,
        height: 150,
        borderRadius: 12,
        marginBottom: 18,
        objectFit: 'contain',
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
        width: '100%',
        backgroundColor: '#15978F',
        alignItems: 'center',
        paddingVertical: 10,
    },
    footerText: {
        fontFamily: 'GabaritoMedium',
        fontSize: 16,
        color: 'white',
    },
});

export default Auth;
