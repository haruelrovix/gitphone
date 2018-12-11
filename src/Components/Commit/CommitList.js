import React from 'react';
import { Text, View } from 'react-native';

import styles from '../Shared.style';
import withHeader from '../../HOCs/withHeader';

const CommitList = () => (
  <View style={styles.container}>
    <Text>Placeholder for second screen</Text>
  </View>
);

export default withHeader({ title: 'Commits' })(CommitList);
