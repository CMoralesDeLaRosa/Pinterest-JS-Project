import '/style.css'
import './Input.css'
import { getImages } from '../Get images/Get images'

export const createInput = (parentNode, text) => {
  const divInput = document.createElement('div')
  divInput.classList.add('divInput', 'flex-container')
  parentNode.appendChild(divInput)
  const input = document.createElement('input')
  input.classList.add('input')
  divInput.appendChild(input)
  input.placeholder = text
  input.addEventListener('input', function () {
    getImages(input.value)
  })

  input.addEventListener('input', function () {
    const query = input.value.trim()
    getImages(query)
    if (query === '') {
      clearImages()
    }
  })
  function clearImages() {
    const images = document.querySelectorAll('img')
    images.forEach((image) => image.remove())
  }
}
