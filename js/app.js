const closeOpenButton = document.querySelectorAll('.open-close-button');
const solutionContent = document.querySelector('.solution-content');

for (let i = 0; i < closeOpenButton.length; i++) {
  closeOpenButton[i].addEventListener('click', (e) => {
    e.preventDefault();
    solutionContent.classList.toggle('active');
  });
}
