import React from "react";
import { 
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";

export function SkillCard({skill}){

    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
            activeOpacity={0.5}
        >
            <Text style={styles.textSkill}>
              {skill}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonSkill:{
        backgroundColor: '#1F1E25',
        padding:15,
        marginBottom: 10,
        borderRadius: 50,
        alignItems: 'center'
    },
    
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }
})