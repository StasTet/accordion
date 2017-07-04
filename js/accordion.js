class Accordion {
    constructor(rootNode, url) {
        this.root = rootNode;
        this.url = url;

        this.items = [];

        this.loadData();
    }

    loadData() {
        fetch(this.url)
        .then(res => res.json())
        .then(this.createAccordion.bind(this))
        .catch(console.error);
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