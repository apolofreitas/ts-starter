import sum from '~/sum'

async function main() {
  const msg = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`result: ${sum(1, 2)}`)
    }, 5000)
  })

  console.log(msg)
}
main()
