import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';
import DeleteUser from './pages/DeleteUser';
import ViewAllUser from './pages/ViewAllUser';
import ViewUser from './pages/ViewUser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Tela Inicial',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#C0C0C0',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name="Criar"
          component={CreateUser}
          options={{
            title: 'Criar Usuário',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#C0C0C0',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name="Deletar"
          component={DeleteUser}
          options={{
            title: 'Deletar Usuário',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#C0C0C0',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name="Atualizar"
          component={UpdateUser}
          options={{
            title: 'Atualizar Usuário',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#C0C0C0',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name="VisualizarTodos"
          component={ViewAllUser}
          options={{
            title: 'Visualizar Todos os Usuários',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#C0C0C0',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name="Visualizar"
          component={ViewUser}
          options={{
            title: 'Visualizar Usuário',
            headerStyle: {
              backgroundColor: '#000000'
            },
            headerTintColor: '#C0C0C0',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default App;