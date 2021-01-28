import { server } from './server'

server
  .listen(5000)
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
