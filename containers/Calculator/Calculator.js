import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import CalcButton from "../../components/CalcButton/CalcButton";

class Calculator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: "row", marginBottom: 10}}>
                    <TextInput
                        // style={styles.input}
                        // onChangeText={placeNameChangeHandler}
                        // value={placeName}
                    />
                </View>
                <View style={styles.buttonsWrapper}>
                    <View style={styles.buttonsRow}>
                        <CalcButton
                            value="1"
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="2"
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="3"
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="+"
                            backgroundColor="lightgreen"
                        />
                        <CalcButton
                            value="&#60;"
                            backgroundColor="lightgreen"
                        />
                    </View>
                    <View style={styles.buttonsRow}>
                        <CalcButton
                            value="4"
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="5"
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="6"
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="-"
                            backgroundColor="lightgreen"
                        />
                        <CalcButton
                            value="M+"
                            backgroundColor="lightgreen"
                        />
                    </View>
                    <View style={styles.buttonsRow}>
                        <CalcButton
                            value="7"
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="8"
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="9"
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="*"
                            backgroundColor="lightgreen"
                        />
                        <CalcButton
                            value="M-"
                            backgroundColor="lightgreen"
                        />
                    </View>
                    <View style={styles.buttonsRow}>
                        <CalcButton
                            value="."
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="0"
                            backgroundColor="lightblue"
                        />
                        <CalcButton
                            value="%"
                            backgroundColor="lightgreen"
                        />
                        <CalcButton
                            value="/"
                            backgroundColor="lightgreen"
                        />
                        <CalcButton
                            value="="
                            backgroundColor="orange"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    buttonsWrapper: {
        // display: 'flex',
        flex: 1
        // flexDirection: 'row'
    },
    buttonsRow: {
        // display: 'flex',
        flexDirection: 'row',
        flex: 1
    }
});

export default connect()(Calculator)