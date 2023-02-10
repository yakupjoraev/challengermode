// Custom Scripts
// Custom scripts


const modal = new GraphModal();

function modalJoin() {
  const container = document.querySelector('.join')

  if (!container) {
    return null
  }

  const arrow = document.querySelector('.join__connect-arrow')
  const content = document.querySelector('.join__connect')

  arrow.addEventListener('click', () => {
    content.classList.toggle('active')
  })
}

modalJoin();


function modalLogin() {
  const container = document.querySelector('.login')

  if (!container) {
    return null
  }

  const more = document.querySelector('.login__social-more')
  const socialsContainer = document.querySelector('.login__socials')

  more.addEventListener('click', () => {
    socialsContainer.classList.toggle('active')
  })
}

modalLogin();
