if (this.cacheScript) {
  print('c.js is cached')
}
else {
  print('c.js is executed')
  order.push('C')
  mod = { id: 'c' }
}
