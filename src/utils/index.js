export const capitalize = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const removeAndGet = (array, itemName) => {
  let index = array.findIndex(
    item => item.name === itemName
  )
  if(index == -1) return undefined
  else {
    const removed = array.splice(index, 1)
    return removed[0]
  }
}