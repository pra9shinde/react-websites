import svgImg from '../../assets/images/svg-1.svg';
import svgImg2 from '../../assets/images/svg-2.svg';
import svgImg3 from '../../assets/images/svg-4.svg';

export const homeObjeone = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    btnLabel: 'Get Started',
    imgStart: false,
    img: svgImg,
    alt: 'Transactions',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjeTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'No Minimum balance for an account',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    btnLabel: 'Start Now',
    imgStart: true,
    img: svgImg2,
    alt: 'Unlimited Access',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'No Charges',
    headLine: 'Zero Processing fees for all transactions',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    btnLabel: 'Sign Up Now!!!',
    imgStart: false,
    img: svgImg3,
    alt: 'No Charges',
    dark: false,
    primary: false,
    darkText: true,
};
