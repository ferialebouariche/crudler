import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RenderCount = ({ backgroundColor = 'dodgerblue', fontColor = 'white' }) => {
  // Initialisation of a ref to keep track of render count
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <View>
      <Text style={[styles.count, { backgroundColor, color: fontColor }]}>
        Number of renders: {renderCount.current}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  count: {
    padding: 5,
    fontSize: 16,
  },
});

export default RenderCount;
