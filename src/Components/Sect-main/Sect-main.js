import './Sect-main.css'
import '/style.css'
import { createButton } from '../Button/Button'

export const SectMain = (nodoPadre) => {
  const SectMain = document.createElement('section')
  SectMain.classList.add('SectMain', 'flex-container')
  nodoPadre.appendChild(SectMain)

  const divImg = document.createElement('div')
  divImg.classList.add('divImg')
  const img = document.createElement('img')
  img.src = '/Assets/Img-main.png'
  divImg.appendChild(img)
  SectMain.appendChild(divImg)

  const divText = document.createElement('div')
  const h3 = document.createElement('h3')
  divText.classList.add('divText', 'flex-container')
  const p = document.createElement('p')

  h3.innerText = 'Míralo, fabrícalo, pruébalo, hazlo'
  p.innerText =
    'Lo mejor de Pinterest es descubrir cosas e ideas nuevas de personas de todo el mundo.'

  SectMain.appendChild(divText)
  divText.appendChild(h3)
  divText.appendChild(p)
  createButton(divText, 'primary', 'Explorar')
}
