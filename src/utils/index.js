export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const truncateString = (string, length) => {
  if (string.length > length) {
    return string.substring(0, length) + '...'
  } else {
    return string
  }
}
