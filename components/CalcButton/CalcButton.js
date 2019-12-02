import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const CalcButton = props => {
    return (
        <TouchableOpacity
            style={[styles.container, {backgroundColor: props.backgroundColor}]}
            onPress={() => props.clicked(props.value)}
        >
            <Text style={styles.buttonText}>
                {props.value}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 1,
        padding: 20,
        borderRadius: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#fff",
        fontSize: 38
    }
});

export default CalcButton;