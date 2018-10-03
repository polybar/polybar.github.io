function scrollToMain() {
  // have to scroll to child here in order to avoid having border in view
  document.querySelector('main :first-child').scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}
