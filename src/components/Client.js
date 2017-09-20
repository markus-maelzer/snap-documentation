

function getFeed(success) {
  return fetch('https://codepen.io/collection/DkgeWZ/feed')
    .then(response => {
      return response.text()
    })
    .then(success)
}

const Client = { getFeed }
export default Client;
