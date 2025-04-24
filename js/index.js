const iconContainer = document.getElementById("icon-container");
const windowsContainer = document.getElementById("window-container");
const taskbar = document.getElementById("taskbar");

const ALL_ICONS = [];
const ALL_WINDOWS = [];

// can update wallpaper
document.getElementById("desktop").style.backgroundImage = `url('${WALLPAPER_SRC.mount_hammer}')`;

///////// BEGINS ///////
buildIcons(DESKTOP, iconContainer);