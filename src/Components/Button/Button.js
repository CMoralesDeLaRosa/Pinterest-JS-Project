import '/style.css'
import './Button.css'

export const createButton = (
  nodoPadre,
  importance = 'primary',
  text = 'No hay texto'
) => {
  const button = document.createElement('button')
  button.classList.add('button', importance)
  button.innerText = text
  nodoPadre.appendChild(button)
}
