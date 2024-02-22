import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const dataFrom = [
    {label: 'Indonesia (IDR)', value: '123123'},
    {label: 'United States (USD)', value: '234234'},
];

const dataTo = [
    {label: 'Novin Ardian Y', value: '907907'},
    {label: 'Uinsa', value: '999999'},
]

const DropdownTransfer = ({variant, onSelectValue}: any) => {
    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);

    const handleChangeValue = (item: any) => {
        setValue(item.value);
        onSelectValue(item.value);
        setIsFocus(false);
    }

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={variant === 'from' ? dataFrom : dataTo}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Account' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={handleChangeValue}
            />
        </View>
    );
};

export default DropdownTransfer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#15978F',
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 10,
    },
    dropdown: {
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        fontFamily: 'GabaritoSemibold',
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontFamily: 'GabaritoSemibold',
        fontSize: 20,
    },
    selectedTextStyle: {
        marginTop: 10,
        fontFamily: 'GabaritoSemibold',
        fontSize: 20,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});