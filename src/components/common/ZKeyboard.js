import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

const ZKeyboard = ({
  children,
  contentContainerStyle,
  style,
  showsVerticalScrollIndicator = false,
  keyboardShouldPersistTaps = 'handled',
  bounces = false,
  bottomPadding = 100,
}) => {
  return (
    <KeyboardAvoidingView
      style={[styles.flex, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      enabled={true}
    >
      <ScrollView
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        bounces={bounces}
        alwaysBounceVertical={false}
        nestedScrollEnabled={true}
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
        removeClippedSubviews={false}
      >
        {children}
        <View style={{ height: bottomPadding }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default ZKeyboard;
