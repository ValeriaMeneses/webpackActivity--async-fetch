function printInPage(arrayDates) {
  var userList = document.querySelector('.users-list')
  userList.innerHTML = ''
  arrayDates.forEach(function (elements) {
        userList.innerHTML += `
        <article>
          <span>${elements.nat}</span>
          <h6>${elements.email}</h6>
        </article>
        `
      })
}
export default printInPage;
