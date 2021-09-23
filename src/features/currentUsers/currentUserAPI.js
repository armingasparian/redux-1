export function loadCurrentUSer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Michael Jackson"
      });
    }, 1000)
  })
}