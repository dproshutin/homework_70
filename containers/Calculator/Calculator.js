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
                        style={styles.input}
                        // onChangeText={placeNameChangeHandler}
                        value={this.props.result}
                    />
                </View>
                <View style={styles.buttonsWrapper}>
                    <View style={styles.buttonsRow}>
                        <CalcButton
                            value="1"
                            backgroundColor="lightblue"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="2"
                            backgroundColor="lightblue"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="3"
                            backgroundColor="lightblue"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="+"
                            backgroundColor="lightgreen"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="&#60;"
                            backgroundColor="lightgreen"
                            clicked={() => this.props.removeSymbol()}
                        />
                    </View>
                    <View style={styles.buttonsRow}>
                        <CalcButton
                            value="4"
                            backgroundColor="lightblue"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="5"
                            backgroundColor="lightblue"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="6"
                            backgroundColor="lightblue"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="-"
                            backgroundColor="lightgreen"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="CE"
                            backgroundColor="lightgreen"
                            clicked={() => this.props.removeAll()}
                        />
                    </View>
                    <View style={styles.buttonsRow}>
                        <CalcButton
                            value="7"
                            backgroundColor="lightblue"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="8"
                            backgroundColor="lightblue"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="9"
                            backgroundColor="lightblue"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="*"
                            backgroundColor="lightgreen"
                            clicked={(value) => this.props.addSymbol(value)}
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
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="0"
                            backgroundColor="lightblue"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="&#8730;"
                            backgroundColor="lightgreen"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="/"
                            backgroundColor="lightgreen"
                            clicked={(value) => this.props.addSymbol(value)}
                        />
                        <CalcButton
                            value="="
                            backgroundColor="orange"
                            clicked={() => this.props.getResult("")}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        result: state.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSymbol: (value) => dispatch({type: "ADD", value}),
        getResult: (value) => dispatch({type: "RESULT", value}),
        removeSymbol: () => dispatch({type: "REMOVE"}),
        removeAll: () => dispatch({type: "REMOVE_ALL"})
    };
};

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
    input: {
        borderColor: "#000",
        borderWidth: 1,
        padding: 5,
        flex: 5,
        marginRight: 5
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

export default connect(mapStateToProps, mapDispatchToProps) (Calculator)