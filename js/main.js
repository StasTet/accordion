$(document).ready(function() {
    
    const rootTable = $('.accordion');
    const url = '/src/data.json';

    new Accordion(rootTable, url);

});