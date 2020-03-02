import Vue from 'vue'

Vue.filter('dateFormat', (date, format = 'MMMM D', add) => {
  if (typeof date === 'string') date = new Date(date)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  if (add === '1 month') {
    let month = date.getMonth() + 1
    if (month === 12) month = 0
    date = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
  }
  if (add === '1 year') {
    date = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate())
  }
  return format
    .replace('YYYY', `${date.getFullYear()}`)
    .replace('D', `${date.getDate()}`)
    .replace('MMMM', `${months[date.getMonth()]}`)
})
