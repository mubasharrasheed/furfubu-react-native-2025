const Fonts = {
  Bold: 'Poppins-Bold',
  Medium: 'Poppins-Medium',
  ExtraBold: 'Poppins-ExtraBold',
  ExtraLight: 'Poppins-ExtraLight',
  Regular: 'Poppins-Regular',
  SemiBold: 'Poppins-SemiBold',
  Light: 'Poppins-Light',
  Black: 'Poppins-Black',
  Thin: 'Poppins-Thin',
  Italic: 'Poppins-Italic',
  BoldItalic: 'Poppins-BoldItalic',
  MediumItalic: 'Poppins-MediumItalic',
  SemiBoldItalic: 'Poppins-SemiBoldItalic',
  LightItalic: 'Poppins-LightItalic',
  ExtraLightItalic: 'Poppins-ExtraLightItalic',
  ExtraBoldItalic: 'Poppins-ExtraBoldItalic',
  BlackItalic: 'Poppins-BlackItalic',
  ThinItalic: 'Poppins-ThinItalic',
};

export default Fonts;

export const validateEmail = email => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!regex.test(email)) return 'Enter a valid email';
  return '';
};

export const validatePassword = password => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return '';
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return 'Confirm Password is required';
  if (password !== confirmPassword) return 'Passwords do not match';
  return '';
};

export const validateName = name => {
  if (!name) return 'Name is required';
  if (name.length < 2) return 'Name must be at least 2 characters';
  return '';
};
