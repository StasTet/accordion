class SubItem extends Item {
    constructor(data) {
        super(data);
        
        this.title = data.title;
        this.url = data.url;

        this.initDom();
    }

    getTemplates() {
		return `<li><a href="${this.url}">${this.title}</a></li>`;
	}

}

