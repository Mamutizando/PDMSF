import React, { useState } from 'react'; 
import {
    View,
    SafeAreaView,
    Text,
    Alert,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native'; 

import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: "UserDatabase.db" });

const DeleteUser = ({ navigation }) => {

    let [userId, setUserId] = useState('');

    function deletar_usuario(){
        console.log(userId);

        db.transaction((tx) => {
            tx.executeSql (
                'DELETE FROM table_user WHERE user_id = ?',
                [userId],
                (tx, results) => {
                    console.log(results.rowsAffected);
                    if(results.rowsAffected > 0) {
                        Alert.alert(
                            'Sucesso',
                            'Contato deletado com sucesso',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('HomeScreen')
                                }
                            ],
                            { cancelable: false }
                        )
                    } else {
                        alert('Erro ao deletar')
                    } 
                }          
            )
        })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'White' }}>
                <View style={{flex: 1}}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-between'}}>
                            <MyTextInput 
                                placeholder="Procure um ID"
                                onChangeText={(userId) => setUserId(userId)}
                                keyboardType="numeric"
                                style={{ padding: 10 }}
                            />
                            <MyButton 
                                title="Procurar"
                                onClick={deletar_usuario}
                            />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default DeleteUser;