export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const createMagicSquares = (containers) => {
  containers.forEach((container) => {
    const containerElement = document.querySelector(container)
    if (!containerElement) return
    for (let i = 0; i < 2; i++) {
      const div = document.createElement('div')
      div.classList.add('magic-square')
      div.style.width = `${Math.floor(Math.random() * 100)}px`
      div.style.height = `${Math.floor(Math.random() * 100)}px`
      div.style.top = `${Math.floor(Math.random() * 100)}%`
      div.style.left = `${Math.floor(Math.random() * 100)}%`
      const colors = ['ff9f1c']
      div.style.backgroundColor = `#${colors[Math.floor(Math.random() * colors.length)]}`
      div.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`
      containerElement.appendChild(div)
    }
  })
}
