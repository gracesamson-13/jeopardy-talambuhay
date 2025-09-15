import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'Childhood NYC borough',
        answer: 'The Bronx',
    },
    {
        points: 200,
        question:
            'What country flag is this?',
        imgSrc: "https://www.bing.com/ck/a?!&&p=d36567aea8ed349622b21f2620adc68e8b3ed01d9378300378748193f3af6e24JmltdHM9MTc1NzU0ODgwMA&ptn=3&ver=2&hsh=4&fclid=24753c92-2c28-6c17-10ef-2abf2d4f6daf&u=a1L2ltYWdlcy9zZWFyY2g_cT1ldGhpb3BpYW4rZmxhZyZpZD02RTNFQ0Q1OEYxMzM2MTJBOUI4NTlGQUI2RTRGQUI1MjVCN0UyOTVBJkZPUk09SVFGUkJB",
        answer: 'Ethiopia',
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
        question: 'What roblox game is this from?',
        imgSrc: "https://th.bing.com/th/id/OIP.JlKBa4RFQS-vKsceUUCXmwHaD4?w=275&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
        answer: 'Adopt me',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'The best ice cream flavor of all time is..',
            imgSrc: 'https://www.daringgourmet.com/wp-content/uploads/2023/07/Cookies-and-Cream-Ice-Cream-Recipe-3.jpg',
            answer: 'Cookies and cream', 
        },
        {
            points: 200,
            question:
                'Who is this?',
            imgSrc: 'https://64.media.tumblr.com/tumblr_mdjwo2Nq361rw4zmjo1_640.png',
            answer: 'Drake',
        },
        {
            points: 300,
            question: 'Whats the best donut ever',
            imgSrc: "https://th.bing.com/th/id/OIP.i-gx6wRmUOtn6wQ_T1IATwHaLH?w=186&h=279&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
            answer: 'Boston Cream'
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
        question:
            'Dream Ivy',
            answer: 'Columbia'
    }
]);


const categories = [
    {
        title: 'Past',
        questions: pastQuestions
    },
    {
        title: 'Present',
        questions: presentQuestions
    },
    {
        title: 'Future',
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