const desktop = document.getElementById("desktop");
const iconContainer = document.getElementById("icon-container");
const windowsContainer = document.getElementById("window-container");
const taskbar = document.getElementById("taskbar");

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
        width:"70%",
        height:"70%", 
        lable: iconParam.lable, 
        fileType: iconParam.fileType, 
        meta: iconParam.meta
    }));
    ALL_WINDOWS[ALL_WINDOWS.length - 1].make();
}

const removeWindow = (index) => {
    ALL_WINDOWS[index].entity.remove();
    ALL_WINDOWS.splice(index, 1);

    for(i = 0; i < ALL_WINDOWS.length; i++){
        ALL_WINDOWS[i].params.index = i;
    }
}

const windowZUpdate = (index) => {
    const curr = ALL_WINDOWS[index];
    const top = ALL_WINDOWS.reduce((max, obj) => obj.entity.style.zIndex > max.entity.style.zIndex ? obj : max);

    const temp = curr.entity.style.zIndex;
    curr.entity.style.zIndex = top.entity.style.zIndex;
    top.entity.style.zIndex = temp;

    taskbar.style.zIndex = `${Number(top.entity.style.zIndex) + 10}`;
}

