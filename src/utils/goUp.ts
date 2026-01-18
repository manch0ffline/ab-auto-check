export default function goUp() {
  const scrollToTopBtn = document.getElementById(
    'scrollToTopBtn',
  ) as HTMLElement;

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
