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
        img: "middle",
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
                img: "smart1"
            },
            {
                title: "Collaboration",
                paragraph: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
                img: "smart2"
            },
            {
                title: "Creativity",
                paragraph: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.",
                img: "smart3"
            }
        ]
    },
    portfolioSection: {
        subTitle: "Our Works",
        title: "Featured Productions",
        paragraph: "Here's just a small sample of some of those projects that we're quite proud of. If you're looking for something specific feel free to get in contact with us.",
        button: "See our Work",
        cards: [
            "work1",
            "work2",
            "work3",
            "work4"
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
                img: "process1"
            },
            {
                title: "Pre-Production",
                paragraph: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                img: "process2"
            },
            {
                title: "Scripting",
                paragraph: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                img: "process1"
            },
            {
                title: "Pre-Production",
                paragraph: "We'll take your idea and create a technical script which consists of action notes and animation descriptions",
                img: "process2"
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
                img: "team1"
            },
            {
                name: "Don Woods",
                role: "Administrator",
                img: "team2"
            },
            {
                name: "Tomas Nash",
                role: "2D Animator % Compositor",
                img: "team3"
            },
        ]
    },
    sponsorSection: {
        subTitle: "Why Anidio studio?",
        title: "We Love Our Clients",
        paragraph: "We are trusted throughout adland and have a wealth of recommendations from start-ups to renowned global brands.",
        cards: [
            {
                src: "sponsor1",
                alt: "Supreme"
            },
            {
                src: "sponsor2",
                alt: "Phoenix"
            },
            {
                src: "sponsor3",
                alt: "Cooperation"
            },
            {
                src: "sponsor4",
                alt: "Business"
            },
            {
                src: "sponsor5",
                alt: "Pillar"
            },
            {
                src: "sponsor6",
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
        primary: "logo",
        footer: "footer-logo"
    }
})