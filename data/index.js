export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS LeetCode ",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "PersonaHub",
        des: "PersonaHub is a unique AI chat app where you can talk with digital personas of Hitesh Choudhary and Piyush Garg. It uses an Express.js backend and Perplexity AI to ensure the AI's responses.",
        img: "/persona-selection.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://personahub-chat.vercel.app",
    },
    {
        id: 2,
        title: "Character Tokenizer",
        des: "This project is a web-based, character-level tokenizer built with HTML, CSS, and JavaScript. It provides a simple interface for users to encode text into numerical tokens and decode them back. The application also dynamically displays a vocabulary list that shows the character-to-token mapping, making it an excellent tool for understanding the basics of text tokenization.",
        img: "/app.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://character-tokenizer.vercel.app/",
    },
    {
        id: 3,
        title: "Foods App",
        des: "Created a frontend Food Ordering App in React, replicating the real-world UI including restaurant listings, menus and cart. It uses React Router DOM for client-side routing, incorporates lazy loading for performance optimization, and uses Redux Toolkit to manage application state. Styled with Tailwind CSS, it also includes a dark/light toggle mode.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "/ui.aiimg.com",
    },
    {
        id: 4,
        title: "Personal Portfolio",
        des: "A personal portfolio site created using fundamental web technologies to showcase projects and skills. It features interactive UI elements and a clean, structured layout with a focus on static frontend development fundamentals.",
        img: "/portfolio.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "/ui.apple.com",
    },
];

// export const testimonials = [
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
// ];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];