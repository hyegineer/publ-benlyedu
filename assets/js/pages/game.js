// 게임 페이지일 때는 헤더 안보임
if ($('.page-wrapper').hasClass('game-page')) {
  $('.header').hide();
}

// 0213 힌트보기 버튼 구현
function showPartHint(element) {
  if ($(element).hasClass('active')) {
    alert('이미 힌트를 보셨습니다.');

    return false;
  } else {
    $('#hint-part-btn').hide();
    $('#hint-all-btn').show();
    $(element).addClass('active');
  }
}

function showAllHint() {
  $('#hint-part-area').removeClass('active');
  $('#hint-all-area').addClass('active');
}

function showPartHint03(element) {
  if ($(element).hasClass('active')) {
    alert('이미 힌트를 보셨습니다.');

    return false;
  } else {
    $('#hint-part-btn02').hide();
    $('#hint-all-btn02').show();
    $(element).addClass('active');
  }
}

function showAllHint04() {
  $('#hint-part-area').removeClass('active');
  $('#hint-all-area').addClass('active');
}

// 0213 카드 뒤집어지는 효과
function flipCard(element) {
  $(element).addClass('hide-ment');
  $(element).toggleClass('active');
  $(element).siblings('.gfcard-guide-ment.mb-show').hide();
}

// 외우기 게임 말고 다른 게임들 효과
function showPartHint02() {
  $('#hint-before-area').removeClass('active');
  $('#hint-part-area').addClass('active');
  $('#hint-part-btn').hide();
  $('#hint-btn-wrap').addClass('active');
}

function showAllHint02() {
  $('#hint-part-area').removeClass('active');
  $('#hint-all-area').addClass('active');
  $('#hint-all-btn').hide();
  $('#hint-count-btn').addClass('active');
}

function lockBtnShow() {
  $('#hint-count-btn').removeClass('active');
  $('#hint-lock-btn').addClass('active');
}

$('#game-answer-inp').on('keydown', function (e) {
  if ($(this).val() == '오답' && e.code == 'Enter') {
    $('.game-answer-container').removeClass('shaking');
    setTimeout(function () {
      $('.game-answer-container').addClass('shaking');
    }, 200)
  }
})