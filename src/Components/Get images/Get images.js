import '/style.css'
import './Get images.css'

const accessKey = 'k72-8dUmUIxwj3AH4lmGGKyxC9gVruCtICAcveLWwvs'
const endPoint = 'https://api.unsplash.com/search/photos'
import { galleryHTML } from '../../../main'
import { SectMain } from '../Sect-main/Sect-main'

export async function getImages(query) {
  try {
    const response = await fetch(
      `${endPoint}?query=${query}&client_id=${accessKey}`
    )
    if (!response.ok) {
      throw new Error('Error de búsqueda')
    }
    const jsonResponse = await response.json()
    const imagesList = jsonResponse.results
    createImages(imagesList)
  } catch (error) {
    console.error('Error de búsqueda', error)
  }
}

function createImages(imagesList) {
  galleryHTML.innerHTML = ''

  if (imagesList.length === 0) {
    SectMain(galleryHTML)
  } else {
    for (let i = 0; i < imagesList.length; i++) {
      if (imagesList[i].urls.thumb) {
        const image = document.createElement('img')
        const divImage = document.createElement('div')
        divImage.classList.add('divImage', 'flex-container')
        image.src = imagesList[i].urls.thumb
        divImage.appendChild(image)
        galleryHTML.appendChild(divImage)
      }
    }
  }
}
