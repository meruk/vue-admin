export const localStorageUtil = {
  set: (key, value) => {
    localStorage.setItem(key, value)
  },
  get: (key) => {
    return localStorage.getItem(key)
  },
  remove: (key) => {
    localStorage.removeItem(key)
  },
  clear: () => {
    //도메인 기반
    localStorage.clear()
  }
}


