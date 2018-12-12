import React from 'react';
import { Text, View } from 'react-native';
import { compose } from 'redux';
import fetch from 'fetch-hoc';

import styles from '../Shared.style';
import withHeader from '../../HOCs/withHeader';

const CommitList = () => (
  <View style={styles.container}>
    <Text>Placeholder for second screen</Text>
  </View>
);

export default compose(
  fetch('https://api.github.com/repos/react-native-training/react-native-elements/commits'),
  withHeader({ title: 'Commits' })
)(CommitList);
