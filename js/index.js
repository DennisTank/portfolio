const ALL_ICONS = [];
const ALL_WINDOWS = [];

// can update wallpaper
desktop.style.backgroundImage = `url('${WALLPAPER_SRC.mount_hammer}')`;

///////// BEGINS ///////
buildIcons(DESKTOP, iconContainer);

///////////// Introduction//////
buildWindow({
    lable: "ReadMe!",
    fileType:FILE_TYPE.md,
    meta: MD_SRC.readme
});