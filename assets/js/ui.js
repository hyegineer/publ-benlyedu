// ============ 헤더 검색버튼 (PC버전)
$('.header-search-inp .ico-search').on('click', function () {
  $(this).parent().addClass('active');
})

$('.header-search-inp .inp').on('input', function () {
  if ($(this).val()) {
    $(this).siblings('.del-btn').addClass('show');
  } else {
    $(this).siblings('.del-btn').removeClass('show');
  }
})

$('.header-search-inp .del-btn').on('click', function () {
  $(this).siblings('.inp').val('');
  $(this).removeClass('show');
})

$(document).mouseup(function (e) {
  var layerSearch = $(".header-search-inp");
  if (layerSearch.has(e.target).length === 0) {
    $('.header-search-inp').removeClass('active');
    $('.header-search-inp .inp').val('');
    $('.header-search-inp .del-btn').removeClass('show');
  }
});

// ============ 헤더 검색창 (MOBILE버전)
function openMobileSearch() {
  $('.mobile-header-search-wrap').addClass('active');
}

function closeMobileSearch() {
  $('.mobile-header-search-wrap').removeClass('active');
  $('.mobile-header-search-wrap .inp').val('');
  $('.mobile-header-search-inp .del-btn').hide();
}

$('.mobile-header-search-wrap .inp').on('input', function () {
  if ($(this).val()) {
    $(this).siblings('.del-btn').show();
  } else {
    $(this).siblings('.del-btn').hide();
  }
})

$('.mobile-header-search-inp .del-btn').on('click', function () {
  $(this).siblings('.inp').val('');
  $(this).hide();
})

// ============ 헤더 모바일 네비게이션 (MOBILE버전)
function openMobileNav() {
  $('.mobile-header-nav-container').addClass('active');
}

function closeMobileNav() {
  $('.mobile-header-nav-container').removeClass('active');
}
// ============ 모달창 열고닫기
function openModal(id) {
  $('#' + id).addClass('active');
  $('#' + id).children('.custom-modal').scrollTop(0);
}

function closeModal(id) {
  $('#' + id).removeClass('active');
}

function allCloseModal() {
  $('.modal-wrapper').removeClass('active');
}