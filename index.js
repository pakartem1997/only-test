const blockImg = document.getElementById('block-img');

blockImg.addEventListener('click', function (e) {
  const target = e.target;

  if (target.tagName.toLowerCase() === 'button') {
    target.classList.toggle('clicked');
    const span = target.querySelector('.mark');
    span.classList.toggle('clicked');
  }

  if (target.tagName.toLowerCase() === 'span') {
    target.classList.toggle('clicked');
    const button = target.closest('button');
    button.classList.toggle('clicked');
  }
});

