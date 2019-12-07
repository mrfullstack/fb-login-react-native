import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

export default class Login extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        let { accessToken } = data
                                        console.log(accessToken.toString())

                                        const responseInfoCallback = (error, result) => {
                                            if (error) {
                                                console.log(error)
                                                alert('Error fetching data: ' + error.toString());
                                            } else {
                                                console.log(result)
                                                alert('Success fetching data: ' + result.toString());
                                            }
                                        }

                                        const infoRequest = new GraphRequest(
                                            '/me',
                                            {
                                                accessToken: accessToken,
                                                parameters: {
                                                    fields: {
                                                        string: 'email,name,first_name,middle_name,last_name'
                                                    }
                                                }
                                            },
                                            responseInfoCallback
                                        )
                                        //START GRAPH
                                        new GraphRequestManager().addRequest(infoRequest).start()

                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")} />
            </View>
        );
    }
};