function calculateLastBeanColor() {
  let whiteBeans = 75;
  let blackBeans = 150;

  while (whiteBeans + blackBeans > 1) {
      if (whiteBeans > 0) {
          whiteBeans -= 2;
          blackBeans++;
      } else {
          break;
      }
  }

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Осталась ${whiteBeans === 1 ? 'белая' : 'черная'} фасолина.`;
}
