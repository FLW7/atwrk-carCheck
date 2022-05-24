$(document).ready(function () {
  $('.first-section__right-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: $('.slider-dots'),
    dots: true
  });

  $('.second-section__controls-list .slider-control').click(function (e) {
    let target = e.target
    let slideId = target.closest('.slider-control').getAttribute('ctrl-num');
    $('.first-section__right-slider').slick('slickGoTo', slideId)
  })

  let cur_dot = document.querySelectorAll('.slick-dots li')
  let cur_ctrl = document.querySelectorAll('.second-section__controls-list .slider-control')
  let slides = document.querySelectorAll('.autocheck-wrapper .slick-track .slider-item')

  let evtClick = new Event('click');
  setInterval(function () {
    document.querySelector('.slick-next').dispatchEvent(evtClick);
    if (slides[1].classList.contains('slick-active')) {
    }
  }, 5000)

  setInterval(function () {
    document.querySelectorAll('.slide-features').forEach(item => {
      item.classList.remove('active')

      if (slides[1].classList.contains('slick-active')) {
        document.querySelector('.specs-auto').classList.add('active')
      }

      else if (slides[2].classList.contains('slick-active')) {
        document.querySelector('.check-taxi').classList.add('active')
      }

      else if (slides[3].classList.contains('slick-active')) {
        document.querySelector('.ownership-history').classList.add('active')
      }

      else if (slides[4].classList.contains('slick-active')) {
        document.querySelector('.accident').classList.add('active')
      }

      else if (slides[5].classList.contains('slick-active')) {
        document.querySelector('.operational-history').classList.add('active')
      }

      else if (slides[6].classList.contains('slick-active')) {
        document.querySelector('.tracing').classList.add('active')
      }

      else {
        item.classList.remove('active')
      }
    })
  }, 0)

});
