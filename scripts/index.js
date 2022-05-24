document.addEventListener('DOMContentLoaded', function () {
  let html = document.querySelector('html')

  // клик по кнопке "узнать больше"
  // let moreBtn = document.querySelector('.autocheck-wrapper .first-section__left-more-btn')
  // moreBtn.onclick = (event) => {
  //   event.preventDefault()
  //   window.scrollTo({
  //     top: 500,
  //     behavior: "smooth"
  //   })

  // }

  // скрол меню при клике
  // let menu = document.querySelector('.autocheck-wrapper .second-section__controls-list');
  // menu.addEventListener('click', (evt) => {
  //   let target = evt.target;
  //   menu.scrollLeft = target.offsetLeft - 150;
  // });

  // клик по "VIN"
  // let vinBtn = document.querySelector('.autocheck-wrapper .vin-btn')
  // document.addEventListener('click', function (e) {
  //   let target = e.target;
  //   // открытие окна
  //   if (target == vinBtn) {
  //     document.querySelector('.autocheck-popups__background').classList.add('active')
  //     document.querySelector('.autocheck-popups__vin').classList.add('active')
  //     html.classList.add('html-lock')
  //   }
  //   // закрытие окна
  //   let btn = target.closest('.vin-btn')
  //   let modal = target.closest('.autocheck-popups__vin')
  //   let modal_is_active = document.querySelector('.autocheck-popups__vin').classList.contains('active')
  //   if (!btn && !modal && modal_is_active) {
  //     document.querySelector('.autocheck-popups__background').classList.remove('active')
  //     document.querySelector('.autocheck-popups__vin').classList.remove('active')
  //     html.classList.remove('html-lock')
  //   }
  // })

  // клик по "+"
  // let reportBtn = document.querySelector('.autocheck-wrapper .controls-other')
  // document.addEventListener('click', function (e) {
  //   let target = e.target;
  //   // открытие окна
  //   if (target == reportBtn) {
  //     document.querySelector('.autocheck-popups__background').classList.add('active')
  //     document.querySelector('.autocheck-popups__report').classList.add('active')
  //     html.classList.add('html-lock')
  //   }
  //   // закрытие окна
  //   let btn = target.closest('.controls-other')
  //   let modal = target.closest('.autocheck-popups__report')
  //   let modal_is_active = document.querySelector('.autocheck-popups__report').classList.contains('active')
  //   if (!btn && !modal && modal_is_active) {
  //     document.querySelector('.autocheck-popups__background').classList.remove('active')
  //     document.querySelector('.autocheck-popups__report').classList.remove('active')
  //     html.classList.remove('html-lock')
  //   }
  // })


  // клик по "info" в поле "введите госномер и..."
  // document.addEventListener('click', function (e) {
  //   let target = e.target;
  //   // открытие окна
  //   if (target.closest('.third-section__input-var')) {
  //     document.querySelector('.autocheck-popups__background').classList.add('active')
  //     document.querySelector('.autocheck-popups__STS').classList.add('active')
  //     html.classList.add('html-lock')
  //   }
  //   // закрытие окна
  //   let btn = target.closest('.third-section__input-var')
  //   let modal = target.closest('.autocheck-popups__STS')
  //   let modal_is_active = document.querySelector('.autocheck-popups__STS').classList.contains('active')
  //   if (!btn && !modal && modal_is_active) {
  //     document.querySelector('.autocheck-popups__background').classList.remove('active')
  //     document.querySelector('.autocheck-popups__STS').classList.remove('active')
  //     html.classList.remove('html-lock')
  //   }
  // })


  // валидация полей "Введите госномер и номер..."
  let arrayLat = ['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'а', 'в', 'е', 'к', 'м', 'н', 'о', 'р', 'с', 'т', 'у', 'х', 'Shift']
  $('.first-inps-finput').keyup(function (e) {
    this.value = this.value.toUpperCase()
    if (arrayLat.indexOf(e.key) == -1) {
      $(this).val($(this).val().slice(0, -1))
    }
    if ($(this).val().length > 6) {
      $(this).val($(this).val().slice(0, -1))
    }
    if ($(this).val().length == 6) {
      $('.first-inps-sinput').focus()
    }
  })

  $('.first-inps-sinput').keyup(function (e) {
    var that = this;
    setTimeout(function () {
      var res = /[^0-9]/g.exec(that.value);
      that.value = that.value.replace(res, '');
    }, 0);
    if ($(this).val().length > 3) {
      $(this).val($(this).val().slice(0, -1))
    }
    if ($(this).val().length == 3) {
      $('.fine-form-input').focus()
    }
  })

  $('.fine-form-input').keyup(function (e) {
    var that = this;
    setTimeout(function () {
      var res = /[^0-9]/g.exec(that.value);
      that.value = that.value.replace(res, '');
    }, 0);

    if ($('.fine-form-input').val().length > 10) {
      $(this).val($(this).val().slice(0, -1))
    }
  })


  // скрытие и показ иконки при изменении окна
  window.addEventListener('resize', function (e) {
    if (window.innerWidth <= 1000) {
      document.querySelector('.where-vin p').style.display = 'none'
      document.querySelector('.where-vin img').style.display = 'block'
    } else {
      document.querySelector('.where-vin p').style.display = 'block'
      document.querySelector('.where-vin img').style.display = 'none'

    }
  })

  //  открытие окна VIN при наведении
  document.querySelector('.first-section__left-input .where-vin').onmouseover = () => {
    document.querySelector('.autocheck-popups__vin').classList.add('active')
    document.querySelector('.where-vin p').classList.add('active')
  }

  // document.addEventListener('mousemove', (e) => {
  //   let target = e.target
  //   if (!target.closest('.where-vin') && !target.closest('.autocheck-popups__vin') && document.querySelector('.autocheck-popups__vin').classList.contains('active')) {
  //     document.querySelector('.autocheck-popups__vin').classList.remove('active')
  //     document.querySelector('.where-vin p').classList.remove('active')
  //   }
  //   if (!target.closest('.where-vin') && !target.closest('.autocheck-popups__vin') && document.querySelector('.autocheck-popups__vin').classList.contains('active')) {
  //     document.querySelector('.autocheck-popups__vin').classList.remove('active')
  //     document.querySelector('.where-vin p').classList.remove('active')
  //   }
  // })

  document.querySelector('.third-section__input-inputs .where-STS').onmouseover = () => {
    document.querySelector('.third-section__input-inputs .autocheck-popups__STS').classList.add('active')
  }
  document.querySelector('.third-section__input-inputs .where-STS').onmouseout = () => {
    document.querySelector('.third-section__input-inputs .autocheck-popups__STS').classList.remove('active')
  }

  document.querySelector('.where-vin').onmouseover = () => {
    document.querySelector('.autocheck-popups__vin').classList.add('active')
  }
  document.querySelector('.where-vin').onmouseout = () => {
    document.querySelector('.autocheck-popups__vin').classList.remove('active')
  }

  // VIN modal
  // document.onclick = (e) => {
  //   let target = e.target;
  //   if (target == document.querySelector('.autocheck-wrapper .vin-text-more')) {
  //     document.querySelectorAll('.autocheck-wrapper .autocheck-popups__vin-text .hide').forEach(item => {
  //       item.classList.remove('hide')
  //     })
  //     target.closest('p').textContent = ''
  //   }
  // }

  // submit на инпут проверить авто
  let evtClick = new Event('click');

  document.addEventListener('keydown', (e) => {
    var hasFocus = $('.vin-input').is(':focus');
    if (hasFocus) {
      if (e.keyCode === 13) {
        document.querySelector('.input-from__btn').dispatchEvent(evtClick);
        document.querySelector('.vin-input').blur()
      }
    }
  })

})