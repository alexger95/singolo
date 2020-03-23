/*menu selected*/
const MENU = document.getElementById('header-menu');

MENU.addEventListener('click', (event) => {

    MENU.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active');


});

/*slider import*/
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {

    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function priviousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.control.left').addEventListener('click', function() {
    if (isEnabled) {
        priviousItem(currentItem);
    }
});

document.querySelector('.control.right').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});

/*black display*/
const hDisplay = document.querySelector('.iphone--horizontal-display');
const vDisplay = document.querySelector('.iphone--vertical-display');
document.querySelector('.iphone--vertical').addEventListener('click', (event) => {
    if (vDisplay.style.display == 'none') {
        vDisplay.style.display = 'block';
    } else {
        vDisplay.style.display = 'none';
    };
});
vDisplay.addEventListener('click', (event) => {
    if (vDisplay.style.display == 'none') {
        vDisplay.style.display = 'block';
    } else {
        vDisplay.style.display = 'none';
    };
});

document.querySelector('.iphone--horizontal').addEventListener('click', (event) => {
    if (hDisplay.style.display == 'none') {
        hDisplay.style.display = 'block';
    } else {
        hDisplay.style.display = 'none';
    };
});
hDisplay.addEventListener('click', (event) => {
    if (hDisplay.style.display == 'none') {
        hDisplay.style.display = 'block';
    } else {
        hDisplay.style.display = 'none';
    };
});



/*tags swap*/
const TAGS = document.getElementById('tags');
const PROJECTSLIST = document.getElementById('projectslist');


TAGS.addEventListener('click', (event) => {
    let swap = [];
    PROJECTSLIST.querySelectorAll('div').forEach(element => {
        swap.unshift(element.outerHTML);


    })
    PROJECTSLIST.innerHTML = swap.join('');

    TAGS.querySelectorAll('li').forEach(element => element.classList.remove('active'));
    if (event.target.tagName == 'LI') {
        event.target.classList.add('active');
    }
    if (event.target.tagName == 'A') {
        event.target.parentNode.classList.add('active');
    }
    console.log(event);

});


/*project select*/

PROJECTSLIST.addEventListener('click', (event) => {

    PROJECTSLIST.querySelectorAll('img').forEach(element => element.parentNode.classList.remove('border'));
    event.target.parentNode.classList.add('border');
});

/*tag selected*/


/*form*/

const FORM = document.querySelector('form');
const CLOSEBUTTON = document.getElementById('close-btn');

FORM.addEventListener('submit', (event) => {

    let subject = '';
    let describe = '';

    if (document.getElementById('subject').value.toString() != '') {
        subject = 'Тема: ' + document.getElementById('subject').value.toString();
    } else {
        subject = 'Без темы';
    }
    if (document.getElementById('describe').value.toString() != '') {
        describe = 'Описание: ' + document.getElementById('describe').value.toString();
    } else {
        describe = 'Без описания';
    }
    document.getElementById('subjectout').innerText = subject;
    document.getElementById('describeout').innerText = describe;
    document.getElementById('message-block').classList.remove('hidden');

    event.preventDefault();

});

CLOSEBUTTON.addEventListener('click', () => {
    document.querySelector('form').reset();
    document.getElementById('message-block').classList.add('hidden');
});

/*scroll */

document.addEventListener('scroll', onscroll);

function onscroll(event) {
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('body > div');
    const links = document.querySelectorAll('#header-menu a');

    divs.forEach((el) => {
        console.log(el.getAttribute('id'));

        el.getAttribute('id');

        if (el.offsetTop - 95 <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });
}