import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import styles from './Shared.style';

class Home extends PureComponent {
  render() {
    const { input, button } = styles;

    return (
      <View style={styles.container}>
        <Input
          containerStyle={input.containerStyle}
          inputStyle={input.inputStyle}
          label='Owner'
          placeholder="Github's owner"
        />
        <Input
          containerStyle={input.containerStyle}
          inputStyle={input.inputStyle}
          label='Repo'
          placeholder="Github's repository name"
        />
        <Button
          title='SUBMIT'
          icon={{
            color: 'white',
            name:'paper-plane',
            size: 15,
            type: 'font-awesome'
          }}
          buttonStyle={button.containerStyle}
        />
      </View>
    );
  }
}

export default Home;
