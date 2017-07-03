$(document).ready(function() {
    
    const rootNode = $('.accordion');
    const url = '/src/data.json';

    new Accordion(rootNode, url);
});