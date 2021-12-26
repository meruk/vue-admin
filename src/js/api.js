
function commonResponseTemplate(data, statusCode = 200) {
  return  {
    status: statusCode,
    data
  }
}


export const postLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    const tokenData = { token: 'login_aslkdjfklasjdflksaslkdjflsakjdf' }
    const response = commonResponseTemplate(tokenData)
    resolve(response)
  })
}
