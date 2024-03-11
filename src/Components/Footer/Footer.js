import '/style.css'
import './Footer.css'

export const createFooter = (nodoPadre) => {
  const footer = document.createElement('footer')
  const divFooter = document.createElement('div')
  const ul = document.createElement('ul')
  const footerList = [
    'Términos del servicio',
    'Política de privacidad',
    'Ayuda',
    'Aplicación para iPhone',
    'Aplicación para Android',
    'Usuarios',
    'Colecciones',
    'Compras',
    'Hoy',
    'Explorar'
  ]

  for (const element of footerList) {
    const li = document.createElement('li')
    li.innerText = element
    ul.appendChild(li)
  }

  divFooter.classList.add('divFooter', 'flex-container')

  nodoPadre.appendChild(footer)
  footer.appendChild(divFooter)
  divFooter.appendChild(ul)
}
