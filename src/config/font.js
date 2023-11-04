import { Dimensions } from 'react-native';

// Define a function to calculate responsive font size
const responsiveFontSize = (fontSize) => {
  const { width, height } = Dimensions.get('window');
  const scaleFactor = Math.min(width, height) / 375; // Adjust 375 to your base design width
  const responsiveFontSize = fontSize * scaleFactor;
  return responsiveFontSize;
};

export default responsiveFontSize;