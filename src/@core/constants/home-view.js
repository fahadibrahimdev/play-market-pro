import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Learn. Network. Implement. Repeat! Consistency is the key to your financial freedom!',
    subHeading: 'Social Research Platform and Custom Interval Notifications',
    text: 'PlayMarket Pro allows you to combine investing/sports knowledge with fast and accessible data to optimize both your sports betting and market positions',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Keeping You Up To Date with Opportunities and Obstacles Before you Invest or Bet with help from a social network!',
    subHeading: 'ANYONE CAN INVEST WITH THE RIGHT DATA',
    features: [
        {
            title: 'Custom Lockscreen Updates',
            description: 'Improve your positions with time interval notifications set at your preference. Gain access to information provided on your lockscreen at the frequency of your choosing.',
            icon: 'wide-mobile'
        },
        {
            title: 'Stock Market Updates',
            description: 'Get live updates as if you were on the trading floor.',
            icon: 'stocks-up'
        },
        {
            title: 'Your Network is your Networth!',
            description: 'Network with a social following and professionals from all over the world, while learning their favorite sports picks and market positions!',
            icon: 'network'
        },
        {
            title: 'Public or Private? ',
            description: 'PlayMarket Pro offers both a public social following from top portfolio holders and frequent sports bettors. Along with private chats for friends and coworkers!',
            icon: 'mass-opinion'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why ${siteName}?`,
    descriptions: [
        'PlayMarket Pro lets stock market investors and sports enthusiasts stay ahead of the game. Combining knowledge and networking, PlayMarket Pro is your one stop shop for the new age of sports betting and investing. We use custom notifications catering to the users preference, making investments and sports betting both accessible and convenient.'
    ],
}

export const benefitsContent = {
    heading: 'Don’t take a shot in the dark!',
    text: 'PlayMarket Pro will allow you to detect changes in betting lines and stock prices with the most convenient widget and notification center. Users will be informed more than ever with updates of both their favorite companies and sports teams! Enhancing users research and learning experiences to seize lucrative opportunities',
    benefits: [
        {
            title: 'When Worlds Collide',
            description: 'In the new innovative world of investing, With the number of investors growing more rapidly than ever. Why should all profits not share the same value! Stocks or Sports!',
            icon: 'rugby-ball-up'
        },
        {
            title: 'Accessible',
            description: 'No need to unlock phone, just one glance notifies you of new updates.',
            icon: 'screen-click'
        },
        {
            title: 'Live Networking ',
            description: 'Stay connected with your favorite investors and sports enthusiasts around the world while on the go! ',
            icon: 'world-network'
        }
    ],
    image: '/images/hero-image.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Why sign up now?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Who can use PlayMarket Pro?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'Why choose us?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Get Real-Time Updates in the Palm of your Hands',
    text: 'Download the PlayMarket Pro App Today!'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}`,
    ctaBtn: 'Download App',
    accent: 'Get Started'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
