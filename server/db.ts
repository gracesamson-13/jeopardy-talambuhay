import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What Roblox game is this from?',
        imgSrc: "https://th.bing.com/th/id/OIP.JlKBa4RFQS-vKsceUUCXmwHaD4?w=275&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        answer: 'Adopt me',
    },
    {
        points: 200,
        question: 'NYC borough I lived in',
        answer: 'Bronx',
    },
    {
        points: 300,
        question:
            'Where is this?',
            imgSrc: "https://c8.alamy.com/comp/RYXNTH/new-york-usa-15th-mar-2019-the-vessel-is-seen-from-the-lobby-of-the-hudson-yards-mall-on-the-west-side-of-manhattan-on-its-grand-opening-day-friday-march-15-2019-retailers-including-the-neiman-marcus-department-store-opened-their-shops-in-the-development-which-was-built-on-a-platform-over-the-west-side-railroad-yards-office-residential-public-space-and-retail-space-comprise-the-first-phase-in-what-is-arguably-the-most-expensive-construction-project-ever-built-in-the-us-richard-b-levine-credit-richard-levinealamy-live-news-RYXNTH.jpg",
        answer: 'Hudson Yards',
    },
    {
        points: 400,
         question:
            'What country flag is this?',
        imgSrc: "https://www.bing.com/ck/a?!&&p=d36567aea8ed349622b21f2620adc68e8b3ed01d9378300378748193f3af6e24JmltdHM9MTc1NzU0ODgwMA&ptn=3&ver=2&hsh=4&fclid=24753c92-2c28-6c17-10ef-2abf2d4f6daf&u=a1L2ltYWdlcy9zZWFyY2g_cT1ldGhpb3BpYW4rZmxhZyZpZD02RTNFQ0Q1OEYxMzM2MTJBOUI4NTlGQUI2RTRGQUI1MjVCN0UyOTVBJkZPUk09SVFGUkJB",
        answer: 'Ethiopia',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question: 'Who made this album?',
            imgSrc: 'https://th.bing.com/th/id/OIP.qhyLO8I5p0-2UUthc-xCvQHaHa?w=199&h=199&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3',
            answer: 'Drake', 
        },
        {
            points: 200,
            question:'The best ice cream flavor of all time is..',
            imgSrc: 'https://www.daringgourmet.com/wp-content/uploads/2023/07/Cookies-and-Cream-Ice-Cream-Recipe-3.jpg',
            answer: 'Cookies and cream',  
        },
        {
            points: 300,
            question: 'Current Instrument at HM',
            answer: 'Steel Drum',
        },
        {
            points: 400,
            question:'Top favorite basketball team (Hint: Pennsylvania)',
            answer: '76ers',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
    points: 100,
       question: 'Winter sport I will do',
       answer: 'Basketball',
    },
    {
       points: 200,
    question: 'Race distance I want to PR this season (Km)',
    answer: '5k',
    },
    {
    points: 300,
     question: 'Dream Ivy School (Hint: NY)',
    answer: 'Columbia',
    },
    {
    points: 400,
    question: 'European country I want to visit',
    answer: 'Italy',
    },

]);


const categories = [
    {
        title: 'Grace - Past',
        questions: pastQuestions
    },
    {
        title: 'Grace - Present',
        questions: presentQuestions
    },
    {
        title: 'Grace - Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}