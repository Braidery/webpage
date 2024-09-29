import localFont from 'next/font/local';
const Poppins = localFont({
  src: [
    { path: '../fonts/Poppins/Poppins-Light.ttf', weight: '300' },
    { path: '../fonts/Poppins/Poppins-Regular.ttf', weight: '400' },
    { path: '../fonts/Poppins/Poppins-Medium.ttf', weight: '500' },
    { path: '../fonts/Poppins/Poppins-Bold.ttf', weight: '900' }
  ],
  display: 'swap',
  variable: '--font-poppins'
});

export { Poppins };
