import { Platform, StyleSheet, Text, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from './scale';

export const toastConfig = {
  success: ({ text1, text2, ...rest }) => (
    <View style={[styles.container, styles.successContainer]}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{text1}</Text>
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    </View>
  ),
  error: ({ text1, text2, ...rest }) => (
    <View style={[styles.container, styles.errorContainer]}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{text1}</Text>
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    </View>
  ),
  info: ({ text1, text2, ...rest }) => (
    <View style={[styles.container, styles.infoContainer]}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{text1}</Text>
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(55),
    // paddingVertical: moderateScale(10),
    width: '90%',
    borderRadius: moderateScale(12),
    marginHorizontal: moderateScale(20),
    marginTop: Platform.OS == 'ios' ? moderateScale(30) : moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  successContainer: {
    backgroundColor: '#fff',
    borderLeftWidth: 8,
    borderLeftColor: '#2E7D32',
  },
  errorContainer: {
    backgroundColor: '#fff',
    borderLeftWidth: 8,
    borderLeftColor: '#B71C1C',
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderLeftWidth: 4,
    borderLeftColor: '#1565C0',
  },
  iconContainer: {
    width: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(15),
  },
  title: {
    color: '#000',
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginBottom: moderateScale(4),
  },
  message: {
    color: '#000',
    fontSize: moderateScale(10),
    opacity: 0.9,
  },
});
