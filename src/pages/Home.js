import React, { Fragment } from 'react';
import {View, Text} from 'react-native';

// EXPORTAÇÃO POR DEFAULT OU SEM DEFAULT
export function Home(){
    
    const nome = "Gustavo";

    // ESTILIZAÇÃO INLINE, RETURN COMO COMPONENTE JSX, PASSANDO PROPRIEDADES AOS COMPONENTES
    return(
    <Fragment>
      <View style={{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
      }}>   
        <Text>
          Olá Mundo!
        </Text>
        <Text>
          Meu nome é {nome}
        </Text>
      </View>
    </Fragment>
  )
}