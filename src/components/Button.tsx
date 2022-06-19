import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({title, ...rest} : ButtonProps){

    return(
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
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