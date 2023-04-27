import { reactive } from "vue";

export const store = reactive({
    headerLinks: [
        {
            text: "home",
            href: "#"
        },
        {
            text: "about us",
            href: "#"
        },
        {
            text: "portfolio",
            href: "#"
        },
        {
            text: "our process",
            href: "#"
        },
        {
            text: "pricing",
            href: "#"
        },
        {
            text: "blog",
            href: "#"
        },
        {
            text: "contact",
            href: "#"
        },
        {
            text: "get a quote",
            href: "#"
        }
    ],
    footerLinks: [
        {
            text: "about us",
            href: "#"
        },
        {
            text: "portfolio",
            href: "#"
        },
        {
            text: "pricing",
            href: "#"
        },
        {
            text: "career",
            href: "#"
        },
        {
            text: "contact",
            href: "#"
        }
    ],
    heroSection:{
        subTitle: "Imagine, Create, Experience",
        title: 'With Ninja-Like Precision',
        paragraph: "We are a character-driven animation studio striving to make high-quality animations.",
        img: "./imgs/middle.png",
        buttons: {
            primary: "Start a Project",
            secondary: "Portfolio",
        }
    },
    aboutSection: {
        subTitle: "Our Love For Animation",
        title: "We're Storytelling Experts With Creative Smarts",
        paragraph: "Our culture inspires the creative and innovative spirit found throughout our Studio. We breathe life into new ideas!",
        cards: [
            {
                title: "3D modeling",
                paragraph: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
                img: "./imgs/smart1.png"
            },
            {
                title: "Collaboration",
                paragraph: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
                img: "./imgs/smart2.png"
            },
            {
                title: "Creativity",
                paragraph: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
                img: "./imgs/smart3.png"
            }
        ]
    },
    portfolioSection: {
        subTitle: "Our Works",
        title: "Featured Productions",
        paragraph: "Here's just a small sample of some of those projects that we're quite proud of. If you're looking for something specific feel free to get in contact with us.",
        button: "See our Work",
        cards: [
            "./imgs/work1.png",
            "./imgs/work2.png",
            "./imgs/work3.png",
            "./imgs/work4.png"
        ]
    },
    processSection: {
        subTitle: "Our Process",
        title: "Our Process for Your Animation Production",
        paragraph: "We have an effective process for working on animation.",
        cards: [
            {
                title: "Scripting",
                paragraph: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                img: "./imgs/process1.png"
            },
            {
                title: "Pre-Production",
                paragraph: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                img: "./imgs/process2.png"
            },
            {
                title: "Scripting",
                paragraph: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                img: "./imgs/process1.png"
            },
            {
                title: "Pre-Production",
                paragraph: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                img: "./imgs/process2.png"
            },
        ]
    },
    teamSection: {
        subTitle: "Anidio Magic Team Member",
        title: "Let Us Animate Your Project",
        paragraph: "We create new worlds! Let's collaborate and create engaging, effective, award-winning animations",
        cards: [
            {
                name: "Robert Coleman",
                role: "Owner & Creative Director",
                img: "./imgs/team1.png"
            },
            {
                name: "Don Woods",
                role: "Administrator",
                img: "./imgs/team2.png"
            },
            {
                name: "Tomas Nash",
                role: "2D Animator % Compositor",
                img: "./imgs/team3.png"
            },
        ]
    },
    sponsorSection: {
        subTitle: "Why Anidio studio?",
        title: "We Love Our Clients",
        paragraph: "We are trusted throughout adland and have a wealth of recommendations from start-ups to renowned global brands.",
        cards: [
            {
                src: "./imgs/sponsor1.png",
                alt: "Supreme"
            },
            {
                src: "./imgs/sponsor2.png",
                alt: "Phoenix"
            },
            {
                src: "./imgs/sponsor3.png",
                alt: "Cooperation"
            },
            {
                src: "./imgs/sponsor4.png",
                alt: "Business"
            },
            {
                src: "./imgs/sponsor5.png",
                alt: "Pillar"
            },
            {
                src: "./imgs/sponsor6.png",
                alt: "Digital Eagle"
            },
        ]
    },
    contactSection: {
        subTitle: "We Create New Worlds!",
        title: "Want Tips On Your Storytelling?",
        paragraph: "Join our newsletter for tips on how to elevate your brand through storytelling"
    },
    bridgeSection: {
        subTitle: null,
        title: "Anidio Quick Facts",
        paragraph: null,
        cards: [
            {
                text: "Projects Done",
                item:   "700+",
            },
            {
                text: "Happy Clients",
                item:   "250+",
            },
            {
                text: "Team Members",
                item:   "25+",
            },
            {
                text: "Years on the market",
                item:   "12+",
            }
        ]
    },
    logoImg: {
        primary: "./imgs/logo.png",
        footer: "./imgs/footer-logo.png"
    }
})