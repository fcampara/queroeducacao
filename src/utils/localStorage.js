export const _getItemLocalStorage = (key) => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

export const _setItemLocalStorage = (key, data) => {
  if (data) {
    const item = JSON.stringify(data)
    localStorage.setItem(key, item)
  }
}
