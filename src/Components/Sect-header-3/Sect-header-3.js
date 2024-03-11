import './Sect-header-3.css'
import '/style.css'

import { createButton } from '../Button/Button'

export const SectHeader3 = (nodoPadre) => {
  const SectHeader3HTML = document.createElement('section')
  SectHeader3HTML.classList.add('SectHeader3HTML', 'flex-container')
  nodoPadre.appendChild(SectHeader3HTML)

  const divNav = document.createElement('div')
  divNav.classList.add('divNav', 'flex-container')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  ul.classList.add('ul', 'flex-container')
  const textUl = ['Info', 'Empresa', 'Blog']

  for (const element of textUl) {
    const li = document.createElement('li')
    li.innerText = element
    ul.appendChild(li)
  }

  SectHeader3HTML.appendChild(divNav)
  divNav.appendChild(nav)
  nav.appendChild(ul)

  const divBot = document.createElement('div')
  divBot.classList.add('divBot', 'flex-container')
  SectHeader3HTML.appendChild(divBot)
  createButton(divBot, 'primary', 'Iniciar sesión')
  createButton(divBot, 'secondary', 'Registrarse')
}
