import server from './server'

;(async () => {
  const { url } = await server.listen();

  console.log(`Server ready at ${url}`);
})()
