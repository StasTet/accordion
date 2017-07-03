class Item {
    constructor(data) {
        this.title = data.title;

        this.root = null;
        this.eventHandlers = {};

        this.state = false;

        this.initDom();
        this.bindEvents();
    }

    initDom() {
        this.root = $(this.getTemplates());
    }

    bindEvents() {
        this.root.on('click', () => {
            if (this.eventHandlers.click) {
                this.eventHandlers.click(this);
            }
        });
    }
    
    on(eventName, handler) {
        this.eventHandlers[eventName] = handler;
    }

}