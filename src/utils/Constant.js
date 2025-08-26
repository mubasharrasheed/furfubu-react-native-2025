import { Dimensions, Platform, StatusBar } from 'react-native';

// Screen Dimensions
const { width, height } = Dimensions.get('window');

// Status Bar
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

// Layout
const Layout = {
  windowWidth: width,
  windowHeight: height,
  statusBarHeight: STATUSBAR_HEIGHT,
  isSmallDevice: width < 375,
};

// Font Sizes
const FontSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Font Weights (React Native supports only specific weights)
const FontWeights = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

// Spacing
const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

// Border Radius
const Radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Z-index values
const ZIndex = {
  low: 1,
  medium: 10,
  high: 100,
  overlay: 999,
};

// Export all
export default {
  Layout,
  FontSizes,
  FontWeights,
  Spacing,
  Radius,
  ZIndex,
};
