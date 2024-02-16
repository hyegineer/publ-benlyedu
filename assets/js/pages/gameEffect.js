// ============ 게임 모달
function openGameModal(id) {
  if ($(`#${id}`).hasClass('hide')) {
    $(`#${id}`).removeClass('hide');
  }

  openModal(id);
}

function closeGameModal(id, time = 300) {
  $(`#${id}`).addClass('hide');
  setTimeout(function () {
    $(`#${id}`).removeClass('active');
  }, time)
}

// 모달 : 레벨 + 별점 열릴 때 효과 1
function openGameClearModal(id, count) {
  if ($(`#${id}`).hasClass('hide')) {
    $(`#${id}`).removeClass('hide');
  }

  openModal(id);
  autoStarChecked(count);

  // 모달 레벨 + 별점 부여 효과
  // https://github.hubspot.com/odometer/
  var el01 = document.querySelector('#odometer01');

  od = new Odometer({
    el: el01,
    value: 0,
    duration: 500,
  });

  setTimeout(function () {
    od.update(251830);
  }, 1100);
}

// 모달 : 레벨 + 별점 닫힐 때 효과 2
function closeGameClearModal(id, time) {
  closeGameModal(id, time);
  autoStarChecked(0);
}

// 모달 : 기억률 계산 중 열릴 때 효과
function openGameProgressModal(id) {
  if ($(`#${id}`).hasClass('hide')) {
    $(`#${id}`).removeClass('hide');
  }

  openModal(id);
}

// 모달 : 레벨 + 별점 부여 효과
function autoStarChecked(count) {
  if (count == 0) {
    $('.star-effect-box #rating-1').prop('checked', false);
    $('.star-effect-box #rating-2').prop('checked', false);
    $('.star-effect-box #rating-3').prop('checked', false);
  }

  if (count == 1) {
    setTimeout(function () {
      $('.star-effect-box #rating-1').prop('checked', true);
    }, 1200)
  }

  if (count == 2) {
    setTimeout(function () {
      $('.star-effect-box #rating-1').prop('checked', true);
    }, 1200)
    setTimeout(function () {
      $('.star-effect-box #rating-2').prop('checked', true);
    }, 1400)
  }

  if (count == 3) {
    setTimeout(function () {
      $('.star-effect-box #rating-1').prop('checked', true);
    }, 1200)
    setTimeout(function () {
      $('.star-effect-box #rating-2').prop('checked', true);
    }, 1400)
    setTimeout(function () {
      $('.star-effect-box #rating-3').prop('checked', true);
    }, 1600)
  }
}

// 모달 : 기억률 계산 중 효과
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// ============ 게임 스플래시 화면
// 스플래시 : 게임 진입시 로고 등장 
function splashIntro() {
  $('.splash-game.type-game-intro').addClass('active');

  setTimeout(function () {
    $('.splash-game.type-game-intro').removeClass('active');
  }, 2300)
}

// 스플래시 : 공통
function splash(type, time = 1500) {
  if ($(`.splash-game.${type}`).hasClass('hide')) {
    $(`.splash-game.${type}`).removeClass('hide');
  }

  $(`.splash-game.${type}`).addClass('active');

  setTimeout(function () {
    $(`.splash-game.${type}`).addClass('hide');
    setTimeout(function () {
      $(`.splash-game.${type}`).removeClass('active');
    }, 300)
  }, time)
}

// 스플래시 : 종료일 때는 이거 사용해야해요!
function splashExit() {
  if ($(`.splash-game.type-game-exit`).hasClass('hide')) {
    $(`.splash-game.type-game-exit`).removeClass('hide');
  }

  $(`.splash-game.type-game-exit`).addClass('active');
  splashExitOpen();

  setTimeout(function () {
    splashExitClose();
  }, 1500)

  setTimeout(function () {
    $(`.splash-game.type-game-exit`).addClass('hide');
    setTimeout(function () {
      $(`.splash-game.type-game-exit`).removeClass('active');
      document.querySelector('.splash-game.type-game-exit .bg-box').style.display = 'none';
    }, 300)
  }, 1800)
}

// 스플래시 : 종료일 때 관련 효과
function splashExitOpen() {
  document.querySelector('.splash-game.type-game-exit .bg-box').style.display = 'block';
  window.setTimeout(function () {
    document.querySelector('.splash-game.type-game-exit .bg-box').classList.add('active');
  }, 0.1);
}

// 스플래시 : 종료일 때 관련 효과
function splashExitClose() {
  document.querySelector('.splash-game.type-game-exit .bg-box').classList.remove('active');
}

// 스플래시 : 종료일 때 관련 효과
if ($('.splash-game.type-game-exit').length) {
  var num = 15;
  var modalContainer = document.querySelector('.splash-game.type-game-exit .bg-box');
  var holdModals = document.createDocumentFragment();

  for (var i = 0; i < num; i++) {
    var div = document.createElement('div');
    div.classList.add('modal-drop');
    div.style.top = Math.floor((Math.random() * 100)) + 'vh';
    div.style.left = Math.floor((Math.random() * 100)) + 'vw';
    div.style.transitionDelay = Math.random() + 's';
    holdModals.appendChild(div);
  }
  modalContainer.appendChild(holdModals);
}