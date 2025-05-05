
//// FILE TYPES /////
const FILE_TYPE = {
    list:"LIST", // new icon?
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

/*------------------games-------------------------*/
const GAMES = [
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
];

/*-------------------Images------------------------*/
const PROJECTS = [
    {
        lable:"Splunk Home Lab",
        src:MD_SRC.splunk_home_lab
    },
    {
        lable:"Vulnerability Assessment",
        src:MD_SRC.vulnerability_assessment
    },
    {
        lable:"Cloud Network Security: OpenStack",
        src:MD_SRC.openstack
    },
    {
        lable:"Blockchain Voting System",
        src:MD_SRC.blockchain_voting_system
    },
]

/*-------------------Images------------------------*/ //update it
const IMAGES = [
    {
        src: ICON_SRC.image,
        lable: "ME",
        fileType:FILE_TYPE.image,
        meta: IMG_SRC.me,
    },
    //
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
    //
    
];

/*-------------------Documents------------------------*/ //update it
const DOCUMENTS = [
    {
        src: ICON_SRC.file,
        lable: "ReadMe!",
        fileType:FILE_TYPE.md,
        meta: MD_SRC.readme
    },
    {
        src: ICON_SRC.file,
        lable: "Blockchain Voting System",
        fileType:FILE_TYPE.md,
        meta: MD_SRC.blockchain_voting_system
    },
];

/*--------------------Desktop-----------------------*/
const DESKTOP = [
    {
        src: ICON_SRC.folder,
        lable: "Games",
        fileType:FILE_TYPE.folder,
        meta: GAMES,
    },
    {
        src: ICON_SRC.folder,
        lable: "Certificates",
        fileType:FILE_TYPE.folder,
        meta: CERTIFICATES,
    },
    {
        src: ICON_SRC.projects,
        lable: "Projects",
        fileType:FILE_TYPE.list,
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
    // { // in this potfolio
    //     src: ICON_SRC.folder,
    //     lable: "Documents",
    //     fileType:FILE_TYPE.folder,
    //     meta: DOCUMENTS
    // },
    // {
    //     src: ICON_SRC.folder,
    //     lable: "Images",
    //     fileType:FILE_TYPE.folder,
    //     meta: IMAGES
    // },
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
]


