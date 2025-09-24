const urlBase = 'https://zpm9ntbq-3001.brs.devtunnels.ms/api/v1'
// const urlBase = 'http://localhost:3001/api/v1'

export async function createClient(clientForm) {
  console.log('create ', clientForm)
  let ok = false
  let data = null
  const url = `${urlBase}/createQR`
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clientForm)
    })

    ok = response.status === 200

    data = await response.json()
  } catch (error) {
    console.log(error)
    ok = false
  }

  return { ok, data }
}