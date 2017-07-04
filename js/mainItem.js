class MainItem extends Item {
    constructor(data) {
        super(data);
        
        this.childrenRoot = null;

        this.initChildrenRoot();
        this.createChildren(data.subitems);
        this.bindChildrenEvents();
    }

    getTemplates() {
		return `<div><div class="main-item">${this.title}</div></div>`;
	}
    
    initChildrenRoot() {
        this.childrenRoot = $(`<ul class="subitems"></ul>`);
    }

    createChildren(data) {
        data.forEach(item => {
            const subItem = new SubItem(item);
            this.childrenRoot.append(subItem.root);
            this.root.append(this.childrenRoot);
        });
    }

    bindChildrenEvents() {
        this.childrenRoot.on('click', event => event.stopPropagation());
    }

    open() {
        // console.log(`Open ${this.title}`);
        this.state = true;
        this.reRender();
    }

    close() {
        // console.log(`Close ${this.title}`);
        this.state = false;
        this.reRender();
    }

    reRender() {
        if (!this.data.subitems) {
            return;
        }

        if (this.state) {
            this.childrenRoot.slideDown('normal');
        } else {
            this.childrenRoot.slideUp('normal');
        } 
    }
}