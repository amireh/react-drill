module.exports = function createSweeper(mochaSuite) {
  const callbacks = []

  mochaSuite.afterEach(function() {
    return Promise.all(callbacks.splice(0).map(x => x()))
  })

  return function sweep(x) {
    callbacks.push(x)
  }
}
