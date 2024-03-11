import './style.css'
import { SectHeader1 } from './src/Components/Sect-header-1/Sect-header-1'
import { SectHeader3 } from './src/Components/Sect-header-3/Sect-header-3'
import { createInput } from './src/Components/Input/Input'
import { SectMain } from './src/Components/Sect-main/Sect-main'
import { createFooter } from './src/Components/Footer/Footer'

const headerHTML = document.querySelector('#header')
headerHTML.classList.add('flex-container')
export const galleryHTML = document.querySelector('#gallery')
galleryHTML.classList.add('flex-container')
const mainHTML = document.querySelector('#main')
const h2 = document.createElement('h2')
h2.classList.add('h2')
h2.innerText = 'Descubre lo mejor de pinterest'
mainHTML.appendChild(h2)

SectHeader1(headerHTML)
createInput(headerHTML, 'Buscar')
SectHeader3(headerHTML)
SectMain(galleryHTML)
createFooter(document.body)
