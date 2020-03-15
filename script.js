// Навигация по сайту

const navLinks = document.querySelectorAll('.navigation__link')

const activeLink = (event) => {

    navLinks.forEach(link => link.classList.remove('navigation__link--current'))
    event.target.closest('.navigation__link').classList.add('navigation__link--current')
}

document.querySelector('.navigation').addEventListener('click', activeLink)

const scrollPage = () => {

    // Изменение состояния ссылки HOME при scroll

    if (window.pageYOffset < 1) {
        navLinks.forEach(link => link.classList.remove('navigation__link--current'))
        document.querySelector('.navigation__link').classList.add('navigation__link--current')
    }
    
    // Изменение вида HEADER при scroll

    if (window.pageYOffset >= 50) {
        document.querySelector('.header').classList.add('header--scroll')
    } else {
        document.querySelector('.header').classList.remove('header--scroll')
    }
}

window.addEventListener('scroll', scrollPage)

// Включение/отключение экранов смартфонов

const phoneVertical = document.querySelector('.slider__image--phone-vertical')
const phoneHorizontal = document.querySelector('.slider__image--phone-horizontal')
const phoneImageVertical = document.querySelector('.slider__phone-background--vertical')
const phoneImageHorizontal = document.querySelector('.slider__phone-background--horizontal')
    
phoneVertical.addEventListener('click', () => phoneImageVertical.classList.toggle('slider__image--hidden'))
phoneHorizontal.addEventListener('click', () => phoneImageHorizontal.classList.toggle('slider__image--hidden'))


// Изменение состояний кнопок галереи

const porfolioButtons = document.querySelectorAll('.portfolio__button')

const activeButton = (event) => {
    porfolioButtons.forEach(button => button.classList.remove('portfolio__button--current'))
    event.target.classList.add('portfolio__button--current')
}

document.querySelector('.portfolio__buttons').addEventListener('click', activeButton)

// Перемешивание изображений галереи

const FILTER__BUTTONS = document.querySelectorAll('.portfolio__button')

const shufflePortfolio = () => {

    const portfolioItems = document.querySelector('.gallery')

    let shuffledPortfolioItems = document.createElement('ul')
    shuffledPortfolioItems.className = 'gallery'

    const portfolio = Array.from(document.querySelectorAll('.gallery__item'))

    for (let i = portfolio.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        const temp = portfolio[j]
        portfolio[j] = portfolio[i]
        portfolio[i] = temp
    }
  
    for (let item of portfolio) {
    shuffledPortfolioItems.append(item)
    }

    portfolioItems.replaceWith(shuffledPortfolioItems)
}

for (let filterButton of FILTER__BUTTONS) {
    filterButton.addEventListener('click', shufflePortfolio)
}

// Появление рамки у изображений галереи

const portfolioImages = document.querySelectorAll('.gallery__image')

const borderImage = (event) => {
    portfolioImages.forEach(image => image.classList.remove('gallery__image--border'))
    event.target.closest('.gallery__image').classList.add('gallery__image--border')
}

document.querySelector('.gallery').addEventListener('click', borderImage)


// Отправка формы

const showModal = () => {
    if (document.getElementById('name').value !== '' && document.getElementById('email').value !== '') {
        event.preventDefault()

        const subject = document.getElementById('subject').value.toString()
        const description = document.getElementById('description').value.toString()

        if (subject !== '') {
            document.getElementById('modal-theme').innerText = 'Тема: ' + subject
        } else {
            document.getElementById('modal-theme').innerText = 'Без темы'
        }

        if (description !== '') {
            document.getElementById('modal-text').innerText = 'Описание: ' + description
        } else {
            document.getElementById('modal-text').innerText = 'Без описания'
        }

        document.querySelector('.modal').classList.remove('hidden')
    }
}

const closeModal = () => {
    document.querySelector('.modal').classList.add('hidden')
}


document.querySelector('.form-quote__button').addEventListener('click', showModal)
document.querySelector('.message__button').addEventListener('click', closeModal)

// Слайдер

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex)

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1)
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1)
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n)
}

/* Основная функция сладера */
function showSlides(n) {

    let slides = document.querySelectorAll('.slider__images')

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[slideIndex - 1].style.display = 'block'
}

const prevButtonSlide = document.querySelector('.slider__button--left')
const nextButtonSlide = document.querySelector('.slider__button--right')

prevButtonSlide.addEventListener('click', minusSlide)
nextButtonSlide.addEventListener('click', plusSlide)

document.querySelectorAll('.slider__button').forEach(item => item.addEventListener('click', () => {
    document.querySelector('.slider').classList.toggle('slider--slide-background')
}))