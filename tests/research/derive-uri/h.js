if (this.cacheScript) {
  print('h.js is cached')
}
else {
  print('h.js is executed')
  order.push('H')
  mod = { id: 'h' }
}
