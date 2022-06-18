import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

export function Button({onPress}){

    return(
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                Adicionar
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#A370F7',
        padding:15,
        marginVertical: 10,
        borderRadius: 7,
        alignItems: 'center'
    },

    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
})