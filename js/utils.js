//////////
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

////// ICON FUNCTIONS /////
const buildIcons = (arr, parent) =>{
    arr.forEach(item => {
        ALL_ICONS.push(new Icon({ index:ALL_ICONS.length, ...item}));
        parent.appendChild(ALL_ICONS[ALL_ICONS.length - 1].entity);
    });
}

const removeIcons = (index) => {
    ALL_ICONS[index].entity.remove();
    ALL_ICONS.splice(index, 1);
}

///////// TASKBAR FUNCTIONS /////////
const buildBar = (index, lable, onClick) =>{
    const bar = document.createElement("p");
    bar.title = lable;
    bar.className="task";
    bar.id = `${index}`;
    bar.innerHTML= lable;
    bar.addEventListener("click", (e)=>onClick(e));
    taskbar.appendChild(bar);
}

const removeBar = (index) =>{
    taskbar.querySelector(`[id="${index}"]`).remove();
}

//////// WINDOWS FUNCITONS ////////
const buildWindow = (iconParam) => {
    ALL_WINDOWS.push( new MyWindow({
        index:ALL_WINDOWS.length,
        top:`${getRandomInt(50,150)}px`,
        left:`${getRandomInt(50,150)}px`,
        width:"500px",
        height:"300px", 
        lable: iconParam.lable, 
        fileType: iconParam.fileType, 
        meta: iconParam.meta
    }));
    ALL_WINDOWS[ALL_WINDOWS.length - 1].make();
}

const removeWindow = (index) => {
    ALL_WINDOWS[index].entity.remove();
    ALL_WINDOWS.splice(index, 1);
}

const windowZUpdate = (index) => {
    const lastIndex = ALL_WINDOWS.length - 1;

    if (index > -1 && index !== lastIndex) {
      [ALL_WINDOWS[index], ALL_WINDOWS[lastIndex]] = [ALL_WINDOWS[lastIndex], ALL_WINDOWS[index]];
    }

    for(i = 0; i < ALL_WINDOWS.length; i++){
        ALL_WINDOWS[i].entity.style.zIndex = 11 + i;
    }
}

