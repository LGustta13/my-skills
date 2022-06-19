import React from "react";
import { 
    StyleSheet,
    TouchableOpacity,
    Text,
    TouchableOpacityProps
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({skill, ...rest} : SkillCardProps){

    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
            activeOpacity={0.5}
            {...rest}
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