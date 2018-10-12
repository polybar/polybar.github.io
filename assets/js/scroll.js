function scrollToMain() {
  // have to scroll to child here in order to avoid having border in view
  document.querySelector('main :first-child').scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

window.onload = function() {
  let btnScrollToMain = document.getElementById('btn-scroll-to-main');

  if (btnScrollToMain) {
    btnScrollToMain.addEventListener('click', scrollToMain);
  } else {
    console.error('Failed to attach event listener to scroll to main button');
  }
}
