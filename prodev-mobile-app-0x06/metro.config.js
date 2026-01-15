const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname, {
  // Enable CSS support
  isCSSEnabled: true,
});

module.exports = withNativeWind(config, {
  // Enable input for NativeWind v4
  input: './styles/global.css',
  // Enable projectRoot
  projectRoot: __dirname,
});