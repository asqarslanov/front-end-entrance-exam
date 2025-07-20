import { LanguageLevel, Month } from "./enums";

export function globalState() {
  const raw = localStorage.getItem("global");
  if (raw === null) {
    const initialState = {
      nameBox: {
        greetingPhrase: "Hello 👋🏻 I’m",
        name: "Karthik SR",
        role: "UX/UI Designer",
      },
      languagesBox: [
        { name: "English", level: LanguageLevel.C2 },
        { name: "Malayalam", level: LanguageLevel.C2 },
        { name: "Hindi", level: LanguageLevel.B2 },
      ],
      experienceBox: [
        {
          dates: { start: { month: Month.JUNE, year: 2023 } },
          role: "Marketing Manager",
          companyName: "Pankayam",
          info: "Full-time",
          featuredPoints: [
            "Strategy development and planning of campaigns that promote the business and generate genuine traffic",
            "SEO Content Creation for Blogs, Website, Social media",
          ],
        },
        {
          dates: { start: { year: 2017 } },
          role: "Graphic / Web designer",
          info: "Freelance",
          featuredPoints: [
            "Development of internal projects from scratch, product design of brands ",
            "Landing page, webapps and hybrid apps",
            "Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.",
          ],
        },
        {
          dates: {
            start: { month: Month.SEPTEMBER, year: 2021 },
            end: { month: Month.JULY, year: 2023 },
          },
          role: "Legal Assistant",
          companyName: "Law Firm",
          info: "Intern",
          featuredPoints: [
            "Provide administrative support to lawyer and enhance office effectiveness",
            "Handle communication with clients, witnesses etc.",
            "repare case briefs and summarize depositions, interrogatories and testimony",
          ],
        },
      ],
      interestsBox: [
        "branding",
        "design",
        "photography",
        "artificial intelligence",
        "illustration",
        "typography",
        "social networks",
        "research",
        "dron pilot",
        "games",
      ],
      contactBox: {
        message: "Let´s chat! I´m ready to work on excinting projects",
        email: "srkarthik.designscape@gmail.com",
      },
    };
    setGlobalState(initialState);
    return initialState;
  } else {
    return JSON.parse(raw);
  }
}

export function setGlobalState(object) {
  localStorage.setItem("global", JSON.stringify(object));
}
