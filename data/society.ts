// Society history, committee and quiz data from earlier public websites. Years are BS.

export const history = [
  {
    year: "2062 BS",
    place: "Bharatpur, Chitwan",
    body: "Informal founding led by Mahendra Dura, bringing together Dura students studying there.",
  },
  {
    year: "2067 BS",
    place: "Kathmandu",
    body: "An initiative led by Ganesh Dura united Dura students living in Kathmandu. Top Raj Dura led the society's informal establishment at that time.",
  },
  {
    year: "2073 BS",
    place: "Nepal",
    body: "Kosh Bahadur Dura led the Society's formal, legal establishment, following earlier efforts to organize Dura students nationwide under one organization.",
  },
];

export const committee = {
  tenure: "2083/84 BS",
  members: [
    { name: "Amar Dura", role: "President", photo: "/committee/amar.webp" },
    { name: "Dhan Bahadur Dura", role: "Vice President", photo: "/committee/dhan-bahadur.webp" },
    { name: "Sanjita Dura", role: "General Secretary", photo: "/committee/sanjita.webp" },
    { name: "Nishan Dura", role: "Secretary", photo: "/committee/nishan.webp" },
    { name: "Sudarshan Dura", role: "Treasurer", photo: "/committee/sudarshan.webp" },
    { name: "Aashika Dura", role: "Committee Member", photo: "/committee/aashika.webp" },
    { name: "Bikesh Dura", role: "Committee Member", photo: "/committee/bikesh.webp" },
    { name: "Dipesh Dura", role: "Committee Member", photo: "/committee/dipesh.webp" },
    { name: "Puja Dura", role: "Committee Member", photo: "/committee/puja.webp" },
    { name: "Sushmita Dura", role: "Committee Member", photo: "/committee/sushmita.webp" },
    { name: "Yam Bahadur Dura", role: "Committee Member", photo: "/committee/yam-bahadur.webp" },
  ],
};

type QuizEvent = {
  year: string;
  status: "held" | "not-held";
  venue?: string;
  winner?: string;
  note?: string;
  teamsInPositionOrder?: boolean;
  teams: { name: string; participants: string[] }[];
  prizeSponsors: string[];
  additionalSponsors: string[];
};

const quizEvents: QuizEvent[] = [
  {
    year: "2083",
    status: "held",
    teams: [
      { name: "Lamjung 1", participants: ["Prakriti Dura", "Shavee Dura", "Aryan Dura"] },
      { name: "Lamjung 2", participants: ["Prasan Dura", "Roshika Dura", "Kusma Dura"] },
      { name: "Tanahun", participants: ["Yumika Dura", "Lalit Dura", "Samir Dura"] },
      { name: "Kaski", participants: ["Ismita Dura", "Yuna Dura", "Bibas Dura"] },
      { name: "Chitwan", participants: ["Asmi Dura", "Arik Dura", "Khusi Dura"] },
      { name: "Kathmandu", participants: ["Dilasha Dura", "Sonib Dura", "Deu Maya Dura"] },
    ],
    winner: "Kathmandu",
    prizeSponsors: [
      "1st prize: Tola Maya Dura (NRs. 15,000)",
      "2nd prize: Bhakta Bahadur Dura & Ganga Maya Dura (NRs. 12,000)",
      "3rd prize: Dhan Maya Dura (NRs. 9,000)",
      "Participant prize: Nilanjan Dura & Nawaraj Dura",
    ],
    additionalSponsors: [
      "Pharam Bahadur Dura & Jali Maya Dura (NRs. 16,890)",
      "Man Bahadur Dura (NRs. 5,000)",
    ],
  },
  {
    year: "2082",
    status: "held",
    teams: [
      { name: "Chitwan", participants: ["Dilasha Dura", "Asmi Dura", "Aarik Dura"] },
      { name: "Tanahun", participants: ["Samir Dura", "Ranjit Dura", "Barsa Dura"] },
      { name: "Kaski", participants: ["Rojan Dura", "Kridev Dura", "Alina Dura"] },
      { name: "Lamjung", participants: ["Rosika Dura", "Liljung Dura", "Mery Dura"] },
      { name: "Kathmandu", participants: ["Nikas Dura", "Laxmi Dura", "Reman Dura"] },
    ],
    winner: "Chitwan",
    teamsInPositionOrder: true,
    prizeSponsors: [
      "1st prize: Tola Maya Dura (NRs. 15,000)",
      "2nd prize: Bhakta Bahadur Dura & Ganga Maya Dura (NRs. 12,000)",
      "3rd prize: Dhan Maya Dura (NRs. 9,000)",
      "Participant prize: Nilanjan Dura (NRs. 5,000), Nawaraj Dura (NRs. 5,000)",
    ],
    additionalSponsors: [
      "Pharam Bahadur Dura & Jali Maya Dura (NRs. 16,890)",
      "Man Bahadur Dura (NRs. 5,000)",
    ],
  },
  {
    year: "2081",
    status: "held",
    venue: "Sundarbazar-11, Turlungkot, Lamjung",
    winner: "Chitwan",
    teams: [
      { name: "Chitwan", participants: ["Swechchha Dura", "Ichha Dura", "Tripti Dura"] },
      { name: "Tanahun", participants: ["Sugam Dura", "Roshika Dura", "Ranjit Dura"] },
      { name: "Kaski", participants: ["Alina Dura", "Rojan Dura", "kridey Dura"] },
      { name: "Lamjung", participants: ["Roshika Dura", "Lilijung Dura", "Meri Dura"] },
      { name: "Kathmandu", participants: ["Prabin Dura", "Nitika Dura", "Deu Maya Dura"] },
    ],
    prizeSponsors: [
      "1st prize: Indra Jung Dura & Rima Dura (NRs. 15,000)",
      "2nd prize: Bhakta Bahadur Dura & Ganga Maya Dura",
      "3rd prize: Pharam Bahadur Dura & Jali Maya Dura (NRs. 10,000)",
      "Participant prize: Tola Maya Dura (NRs. 5,000), Bhakta Bahadur Dura & Ganga Maya Dura (NRs. 5,000)",
    ],
    additionalSponsors: ["Anil Dura-FBA (NRs. 10,000)", "Surya Dura-Lakecity Coffee (NRs. 2,000)"],
  },
  {
    year: "2080",
    status: "held",
    venue: "Madi-9, Gobindabasti, Chitwan",
    winner: "Chitwan",
    teams: [
      { name: "Chitwan", participants: ["Swechchha Dura", "Ichha Dura", "Rohan Dura"] },
      { name: "Tanahun", participants: ["Rupa Dura", "Prami Dura", "Sadikshya Dura"] },
      { name: "Kathmandu", participants: ["Selestina Dura Pulami", "Umi Dura", "Prabin Dura"] },
      { name: "Lamjung", participants: ["Binita Dura", "Ritu Dura", "Anupa Dura"] },
      { name: "Kaski", participants: ["Rojina Dura", "Pramila Dura", "Sneha Dura"] },
    ],
    prizeSponsors: [
      "1st prize: Bhakta Bahadur Dura & Ganga Maya Dura (NRs. 10,000)",
      "2nd prize: Prakash Dura (NRs. 7,000)",
      "3rd prize: Indra Jung Dura (NRs. 5,000)",
      "Participant prize (2 teams): Tola Maya Dura (NRs. 5,000)",
    ],
    additionalSponsors: [
      "Kishor Dura (NRs. 5,000)",
      "Bhuwan Dura & Anita Dura (NRs. 5,000)",
      "Dura Service Society (NRs. 7,000)",
    ],
  },
  {
    year: "2079",
    status: "held",
    venue: "Vyas-6, Sisaghat, Tanahun",
    winner: "Lamjung",
    teams: [
      { name: "Lamjung", participants: ["Manisha Dura", "Binita Dura", "Bipasa Dura"] },
      { name: "Chitwan", participants: ["Swechchha Dura", "Ichhya Dura", "Yam Kumar Dura"] },
      { name: "Kathmandu", participants: ["Mausam Dura", "Inuj Dura", "Sandip Dura"] },
      { name: "Tanahun", participants: ["Nabin Dura", "Sumit Dura", "Meena Dura"] },
    ],
    prizeSponsors: [
      "Dura Service Society, Central Committee (NRs. 5,000)",
      "Dura Service Society, Kathmandu (NRs. 5,000)",
      "Dura Aama Samuha, Kathmandu (NRs. 5,000)",
      "Kishor Dura (NRs. 5,000)",
    ],
    additionalSponsors: [],
  },
  {
    year: "2078",
    status: "not-held",
    note: "The competition was not held due to COVID-19.",
    teams: [],
    prizeSponsors: [],
    additionalSponsors: [],
  },
  {
    year: "2077",
    status: "not-held",
    note: "The competition was not held due to COVID-19.",
    teams: [],
    prizeSponsors: [],
    additionalSponsors: [],
  },
  {
    year: "2076",
    status: "held",
    venue: "Sundarbazar-10, Turlungkot, Lamjung",
    winner: "Chitwan",
    teams: [
      { name: "Chitwan", participants: ["Sagun Dura", "Astha Dura", "Deepa Dura"] },
      { name: "Lamjung", participants: ["Manisha Dura", "Namuna Dura", "Nabina Dura"] },
      { name: "Tanahu", participants: [] },
    ],
    prizeSponsors: ["Mahadev Dura"],
    additionalSponsors: [],
  },
  {
    year: "2075",
    status: "held",
    venue: "Sundarbazar-10, Kaniswara, Lamjung",
    winner: "Chitwan",
    teams: [
      { name: "Chitwan", participants: ["Sagun Dura", "Amar Dura", "Astha Dura"] },
      { name: "Kathmandu", participants: ["Bikesh Dura", "Pabitra Dura", "Rojina Dura"] },
      { name: "Kaski", participants: ["Chandra Dura", "Tulsi Dura", "Prabin Dura"] },
      { name: "Lamjung", participants: [] },
      { name: "Tanahu", participants: ["Pritam Dura"] },
    ],
    prizeSponsors: [
      "Rajkumari Dura (NRs. 5,000)",
      "Suman Dura (NRs. 5,000)",
      "Sushil Dura (NRs. 5,000)",
      "Dura Service Society Chitwan (NRs. 5,000)",
    ],
    additionalSponsors: [],
  },
  {
    year: "2074",
    status: "held",
    venue: "Vyas-6, Tanahun",
    winner: "Chitwan",
    teams: [
      { name: "Chitwan", participants: ["Milan Dura", "Amar Dura", "Astha Dura"] },
      { name: "Kathmandu", participants: ["Sanjita Dura", "Sudarshan Dura", "Suyog Dura"] },
      { name: "Tanahu", participants: ["Menita Dura", "Basanta Dura", "Apekshya Dura"] },
    ],
    prizeSponsors: [],
    additionalSponsors: [],
  },
];

export const quiz = {
  name: "Shree Khaje Dura Smriti Inter-District Quiz Contest",
  purpose:
    "Held annually by Dura Students Society to promote knowledge, unity and healthy academic competition among Dura communities.",
  districts: ["Kathmandu", "Chitwan", "Lamjung", "Kaski", "Tanahun"],
  publishedHighlights: [
    { value: "10+", label: "years of competition history" },
    { value: "5", label: "participating districts" },
    { value: "200+", label: "participants over the years" },
  ],
  events: quizEvents,
};
