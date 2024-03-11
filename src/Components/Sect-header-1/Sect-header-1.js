import './Sect-header-1.css'
import '/style.css'

export const SectHeader1 = (nodoPadre) => {
  const SectHeader1HTML = document.createElement('section')
  SectHeader1HTML.classList.add('SectHeader1HTML', 'flex-container')
  nodoPadre.appendChild(SectHeader1HTML)

  const divImgLogo = document.createElement('div')
  divImgLogo.classList.add('divImgLogo', 'flex-container')
  const imgLogo = document.createElement('img')

  imgLogo.src = '/Assets/Logo-pint.png'

  SectHeader1HTML.appendChild(divImgLogo)
  divImgLogo.appendChild(imgLogo)

  const divNav = document.createElement('div')
  divNav.classList.add('divNav', 'flex-container')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  ul.classList.add('ul', 'flex-container')
  const textUl = ['Hoy', 'Explorar']

  for (const element of textUl) {
    const li = document.createElement('li')
    li.innerText = element
    ul.appendChild(li)
  }

  SectHeader1HTML.appendChild(divNav)
  divNav.appendChild(nav)
  nav.appendChild(ul)
}
