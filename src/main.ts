import sum from '~/sum'

function main() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(sum(1, 2))

      resolve('done!!')
    }, 5000)
  })
}

const msg = await main()

console.log(msg)
