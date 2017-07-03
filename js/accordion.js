class Accordion {
    constructor(rootNode, url) {
        this.root = rootNode;
        this.url = url;

        this.items = [];

        this.loadData();
    }

    async loadData() {
        try {
            let res = await fetch(this.url);
            res = await res.json();
            this.createAccordion(res);
        }
        catch (e) {
            console.error(e);
        }
    }

    createAccordion(data) {
        data.forEach((item) => {
            const mainItem = new MainItem(item);
            this.root.append(mainItem.root);
            this.items.push(mainItem);
        });

        this.bindItemsEvents();
    }

    bindItemsEvents() {
        this.items.forEach((targetItem) => targetItem.on('click', () => {
            this.items.forEach(item => item !== targetItem && item.close());

            if (targetItem.state) {
                targetItem.close();
                return;
            }

            targetItem.open();
        }));
    }
}