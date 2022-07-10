var carousel_items = document.querySelectorAll('.carousel-item');
var carousel_items_lists = document.getElementById('carousel_items_lists');
var previous = document.getElementById('chevron_left');
var next = document.getElementById('chevron_right');

var transformTranslate = [];

// Listener Functions
var listenerFunctions = {
    previous: () => {
        if (transformTranslate.length == 0) {
            return;
        } else {
            transformTranslate.pop();
            carousel_items_lists.style.transform = "translateX(" + -650 * (transformTranslate.length) + "px)";
        }
    },
    next: () => {
        let endOfTheCarousel = carousel_items.length - 1;
        if (transformTranslate.length == endOfTheCarousel) {
            return;
        }
        transformTranslate.push("translateX(650px)");
        carousel_items_lists.style.transform = "translateX(" + -650 * (transformTranslate.length) + "px)";

    }
}

// Position & Functions
for (let i = 0; i < carousel_items.length; i++) {
    // Init Position
    var carousel_item = carousel_items[i];
    carousel_item.parentNode.style.transform = "translateX(" + 0 + (650 * i) + "px)";
    // Previous Functions
    previous.onclick = listenerFunctions.previous;
    // Next
    next.onclick = listenerFunctions.next;
}