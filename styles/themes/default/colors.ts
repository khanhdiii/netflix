const themeColors = {
  // Primary
  green1: '#53CA5E',
  green2: '#45A84E',
  green3: '#6ED077',
  green4: '#93DE9A',

  // Secondary
  blue1: '#3424FF',
  blue2: '#3821DF',
  blue3: '#5547FF',
  blue4: '#695EFF',

  // Tertiary
  yelow1: '#FFD006',
  yelow2: '#FFD72E',
  yelow3: '#FFDF58',
  yelow4: '#FFE57C',

  // Text
  text1: '#141414',
  text2: '#8c8c8c',
  text3: '#fff',
  text4: '#53CA5E',
  text5: '#7EAB55',

  //Background
  background1: '#f5f5f5',
  background2: '#F8F7FA',
  background3: '#FFFFFF',
  background4: '#F9F6FB',

  // Functional Color
  link: '#2f54eb',
  success: '#52c41a',
  warning: '#faad14',
  error: '#FF3E40',

  // Notification
  red1: '#F8183E',
  red2: '#FCA3B2',

  //Gradient
  gradient1: '#53CA5E',
  gradient2: '#53CA5E',
  gradient3: '#53CA5E',
  gradient4: '#53CA5E',

  //Base
  gray: '#98979780',
  grayDark: '#5A5C63',
  grayLight: '#D9D9D9',
  grayBorder: '#C0C0C0',

  //Neutral Color
  title: '#141414',
  primaryText: '#141414',
  secondaryText: '#8c8c8c',
  disable: '#bfbfbf',
  border: '#d9d9d9',
  devider: '#f0f0f0',
  background: '#f5f5f5',
  tableHeader: '#fafafa',
  white: '#ffffff',
  black: '#000000',
};

const colors = {
  // color main
  primaryColor: themeColors.green1,
  secondaryColor: themeColors.white,
  tertiaryColor: themeColors.yelow2,
  textColor: themeColors.primaryText,
  textColorGray: themeColors.secondaryText,
  textColorWhite: themeColors.white,
  textSecondaryColor: themeColors.secondaryText,
  textBoldColor: themeColors.primaryText,
  backgroundColor: themeColors.background,
  backgroundColorWhite: themeColors.white,
  shadowColor: themeColors.green4,
  notificationSuccess: themeColors.green1,
  notificationError: themeColors.red1,
  buttonGradient: `linear-gradient(97.71deg, ${themeColors.gradient1} 13.18%, ${themeColors.gradient2} 42.81%, ${themeColors.gradient3} 76.14%, ${themeColors.gradient4} 97.53%)`,
  buttonActive: themeColors.green1,
  buttonDisable: themeColors.disable,
  overlay: themeColors.grayLight,
  borderColor: themeColors.gray,

  //
  other: themeColors,
};

export default colors;
