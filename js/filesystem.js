
//// FILE TYPES /////
const FILE_TYPE = {
    folder:"FOLDER", 
    md:"MD", 
    image:"IMG", 
    pdf:"PDF", 
    link:"LINK"
};

////// FILE STRUCTURES ///////
/*------------------certifiactions-------------------------*/
const CERTIFICATES = [
    {
        src: ICON_SRC.pdf,
        lable: "Security +",
        fileType:FILE_TYPE.pdf,
        meta: PDF_SRC.security_plus,
    },
    {
        src: ICON_SRC.pdf,
        lable: "ISC2 CC",
        fileType:FILE_TYPE.pdf,
        meta: PDF_SRC.isc2_cc,
    },
];

/*-------------------Projects------------------------*/
const Blockchain_Voting_System = [
    {
        src: ICON_SRC.file,
        lable: "ReadMe!",
        fileType:FILE_TYPE.md,
        meta: MD_SRC.blockchain_voting_system
    },
    {
        src: ICON_SRC.image,
        lable: "fig1",
        fileType:FILE_TYPE.image,
        meta: IMG_SRC.blockchain_voting_system_f1,
    },
    {
        src: ICON_SRC.image,
        lable: "fig2",
        fileType:FILE_TYPE.image,
        meta: IMG_SRC.blockchain_voting_system_f2,
    }
];
/*-------------------------------------------*/
const PROJECTS = [
    {
        src: ICON_SRC.folder,
        lable: "Blockchain Voting System",
        fileType:FILE_TYPE.folder,
        meta: Blockchain_Voting_System
    },
];

/*------------------Blogs-------------------------*/
/*-------------------------------------------*/
const BLOGS = [];

/*--------------------Desktop-----------------------*/
const DESKTOP = [
    {
        src: ICON_SRC.folder,
        lable: "Certificates",
        fileType:FILE_TYPE.folder,
        meta: CERTIFICATES,
    },
    {
        src: ICON_SRC.folder,
        lable: "Projects",
        fileType:FILE_TYPE.folder,
        meta: PROJECTS
    },
    {
        src: ICON_SRC.file,
        lable: "ReadMe!",
        fileType:FILE_TYPE.md,
        meta: MD_SRC.readme
    },
    {
        src: ICON_SRC.image,
        lable: "ME",
        fileType:FILE_TYPE.image,
        meta: IMG_SRC.me,
    },
    {
        src: ICON_SRC.folder,
        lable: "BLOGS",
        fileType:FILE_TYPE.folder,
        meta: BLOGS
    },
    {
        src: ICON_SRC.linkedIn,
        lable: "LinkedIn",
        fileType:FILE_TYPE.link,
        meta: "https://www.linkedin.com/in/dennistank011/",
    },
    {
        src: ICON_SRC.github,
        lable: "Github",
        fileType:FILE_TYPE.link,
        meta:"https://github.com/DennisTank/"
    },
    {
        src: ICON_SRC.leetcode,
        lable: "Leetcode",
        fileType:FILE_TYPE.link,
        meta:"https://leetcode.com/u/dennistank/"
    },
    {
        src: ICON_SRC.oddly,
        lable: "Oddly Adventure",
        fileType:FILE_TYPE.link,
        meta:"https://cyberstroke.itch.io/oddly-adventure/"
    },
    {
        src: ICON_SRC.elements,
        lable: "Element Simulation",
        fileType:FILE_TYPE.link,
        meta:"https://dennistank.github.io/Element-Simulation/"
    },
    {
        src: ICON_SRC.snack,
        lable: "Snake: Classic",
        fileType:FILE_TYPE.link,
        meta:"https://dennistank.github.io/Classic-Snake/"
    },
]


