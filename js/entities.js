class Icon{
    constructor(params){
        this.params = params;
        this.isFocus = false;
        this.init();
    }

    init(){
        this.entity = document.createElement("div");
        this.entity.className = "icon";
        this.entity.style.backgroundColor = "rgba(0,0,0,0)";
        this.entity.title = this.params.lable;

        this.entity.innerHTML=`
        <img class="icon-img" src="${this.params.src}" width="100%" height="100%"/>
        <p class="icon-p">${this.params.lable}</p>
        `;

        this.entity.addEventListener("mouseover",this.mouseover.bind(this));
        this.entity.addEventListener("mouseout",this.mouseout.bind(this));

        this.entity.addEventListener("contextmenu",this.contextmenu.bind(this));

        this.entity.addEventListener("dblclick",this.dblclick.bind(this));
        this.entity.addEventListener("touchend",this.dblclick.bind(this));
        
        document.addEventListener("click", this.click.bind(this));
    }

    // events
    mouseover(e){this.entity.style.backgroundColor = "rgba(0, 119, 210, 0.5)";}
    mouseout(e){
        if(this.isFocus) this.entity.style.backgroundColor = "rgba(0, 119, 210, 0.5)";
        else this.entity.style.backgroundColor = "rgba(0,0,0,0)";
    }
    click(e){
        if (this.entity.contains(e.target)){
            this.isFocus = true;
            this.entity.style.backgroundColor = "rgba(0, 119, 210, 0.5)";
        }
        else{
            this.isFocus = false;
            this.entity.style.backgroundColor = "rgba(0,0,0,0)";
        }
    }
    contextmenu(e){
        e.preventDefault();
        const opt = document.createElement("div");
        opt.className = "icon-opt";
        opt.innerHTML="open";
        opt.style.left = `${e.clientX + opt.style.height/2}px`;
        opt.style.top = `${e.clientY - opt.style.width/2}px`;
        opt.addEventListener("click",(e)=>{
            this.dblclick.bind(this);
            opt.remove();
        });
        document.addEventListener("click",(e)=>{
            if(!opt.contains(e.target)) opt.remove();
        });
        this.entity.parentElement.appendChild(opt);
    }
    dblclick(e){
        e.preventDefault();
        buildWindow(this.params);
    }

};

class MyWindow{
    constructor(params){
        this.params = params;

        this.taskIndex = Number(this.params.index);
        this.isMax = false;
        this.isMin = false;
        this.isDragging = false;
        this.offsetX=0; 
        this.offsetY=0;

        this.currListItem = "";
        this.currListItemMd = "";

        this.init();
    }

    init(){
        this.entity = document.createElement("div");
        this.entity.className = "window";
        this.entity.title = this.params.lable;
        this.entity.style.top = this.params.top;
        this.entity.style.left = this.params.left;
        this.entity.style.width = this.params.width;
        this.entity.style.height = this.params.height;
        this.entity.style.zIndex = 11 + ALL_WINDOWS.length;
        
        this.entity.innerHTML = `
        <div class="window-t-bar">
        <p class = "window-t1" >${this.params.lable}</p>
        <div class = window-t2>
            <img class = "window-t-img" title="minimize" src = "${ICON_SRC.minimize}" />
            <img class = "window-t-img" title="maximize" src = "${ICON_SRC.maximize}" />
            <img class = "window-t-img" title="close" src = "${ICON_SRC.close}" />
        </div>
        </div>
        `;

        this.entity.querySelector('[title="minimize"]').addEventListener("click", this.minimize.bind(this));
        this.entity.querySelector('[title="maximize"]').addEventListener("click", this.maximize.bind(this));
        this.entity.querySelector('[title="close"]').addEventListener("click", this.close.bind(this));

        this.entity.querySelector(".window-t-bar").addEventListener("mousedown", this.mousedown.bind(this));
        document.addEventListener("mousemove", this.mousemove.bind(this));
        document.addEventListener("mouseup", this.mouseup.bind(this));
        
        this.entity.querySelector(".window-t-bar").addEventListener("touchstart", this.mousedown.bind(this));
        document.addEventListener("touchmove", this.mousemove.bind(this));
        document.addEventListener("touchend", this.mouseup.bind(this));
    }

    //events
    minimize(e) {
        if(this.isMin){
            this.isMin = false;    
            this.entity.style.display = "flex";
            return;
        }
        this.isMin = true;
        this.entity.style.display = "none";
    }
    maximize(e) {
        if(this.isMax){
            this.entity.style.width = this.params.width;
            this.entity.style.height = this.params.height;
            this.entity.style.top = this.params.top;
            this.entity.style.left = this.params.left;
            this.isMax = false;
            
            this.entity.querySelector('[title="maximize"]').src = ICON_SRC.maximize;
            return;
        }
        this.isMax = true;
        const parent = this.entity.parentElement;
        this.entity.style.width = `${parent.offsetWidth}px`;
        this.entity.style.height = `${parent.offsetHeight}px`;
        this.entity.style.top = "0";
        this.entity.style.left = "0";
        this.entity.querySelector('[title="maximize"]').src = ICON_SRC.maximize_back;
    }
    close(e) {
        removeWindow(this.params.index);
        removeBar(this.taskIndex);
    }
    mousedown(e){
        this.isDragging = true;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        this.offsetX = clientX - this.entity.offsetLeft;
        this.offsetY = clientY - this.entity.offsetTop;

        windowZUpdate(this.params.index);
    }
    mousemove(e){
        if(!this.isDragging) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        this.entity.style.left = (clientX - this.offsetX) + "px";
        this.entity.style.top = (clientY - this.offsetY) + "px";
        
    }
    mouseup(e){this.isDragging = false;}

    // make window
    make(){
        switch(this.params.fileType){
            case FILE_TYPE.md:
                const boxMd = document.createElement("div");
                boxMd.className = "window-md";
                fetch(this.params.meta)
                .then(res => res.text())
                .then(md => {
                    boxMd.innerHTML = marked.parse(md);
                    this.entity.appendChild(boxMd);
                });
                windowsContainer.appendChild(this.entity);
                buildBar(this.params.index, this.params.lable, this.minimize.bind(this));
                break;

            case FILE_TYPE.folder:
                const boxFolder = document.createElement("div");
                boxFolder.className = "window-folder";
                this.entity.appendChild(boxFolder);
                buildIcons(this.params.meta, boxFolder);
                windowsContainer.appendChild(this.entity);
                buildBar(this.params.index, this.params.lable, this.minimize.bind(this));
                break;
            
                case FILE_TYPE.image:
                const boxImage = document.createElement("div");
                boxImage.className = "window-image-box";
                boxImage.innerHTML=`<img class="window-image" src="${this.params.meta}"/>`;
                this.entity.appendChild(boxImage);
                windowsContainer.appendChild(this.entity);
                buildBar(this.params.index, this.params.lable, this.minimize.bind(this));
                break;
                
                case FILE_TYPE.pdf:
                const boxPdf = document.createElement("div");
                boxPdf.className = "window-pdf-box";
                boxPdf.innerHTML=`<iframe  class="window-pdf" src="${this.params.meta}"></iframe>`;
                this.entity.appendChild(boxPdf);
                windowsContainer.appendChild(this.entity);
                buildBar(this.params.index, this.params.lable, this.minimize.bind(this));
                break;
                
                case FILE_TYPE.list:
                const boxList = document.createElement("div");
                boxList.className = "window-list-box";

                const list = document.createElement("ul");
                list.className="window-list-ul"

                this.params.meta.forEach( data => {
                    const item = document.createElement("div");
                    item.className = "window-list-li";
                    item.innerHTML = `${data.lable}`

                    const hr = document.createElement("hr");
                    hr.className = "window-list-li-hr";

                    item.addEventListener("click", (e)=>{
                        this.currListItem = data.lable;
                        item.style.backgroundColor = "rgb(40, 40, 40)";
                        this.currListItemMd = data.src;
                    });

                    list.appendChild(item);
                    list.appendChild(hr);
                });

                const itemMd = document.createElement("div");
                itemMd.className = "window-list-md";
                itemMd.innerHTML = "";

                fetch(MD_SRC.projects)
                .then(res => res.text())
                .then(md => {
                    itemMd.innerHTML = marked.parse(md);
                    itemMd.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });

                list.addEventListener("click", (e)=>{
                    [...list.children].forEach(li =>{
                        if(li.innerHTML != this.currListItem){
                            li.style.backgroundColor = "#0077D2";
                        }
                    });

                    if(this.currListItemMd == "") return;

                    fetch(this.currListItemMd)
                    .then(res => res.text())
                    .then(md => {
                        itemMd.innerHTML = marked.parse(md);
                        itemMd.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    });
                });


                boxList.appendChild(list);
                boxList.appendChild(itemMd);

                this.entity.appendChild(boxList);
                
                windowsContainer.appendChild(this.entity);
                buildBar(this.params.index, this.params.lable, this.minimize.bind(this));
                break;

                case FILE_TYPE.link:
                window.open(this.params.meta, "_blank");
                break;

            default:break;
        }
    }
}