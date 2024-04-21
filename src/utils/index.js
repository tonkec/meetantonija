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

export const getValuesAndProperties = (object) => {
  const values = []
  const properties = []
  for (const key in object) {
    if (key === 'current') {
      for (const key2 in object[key]) {
        values.push(object[key][key2])
        properties.push(key2)
      }
    }
  }

  return { values: values.slice(0, 3), properties: properties.slice(0, 3) }
}


export const scrollToTheElement = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' })
}