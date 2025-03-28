const urlBase = ''

export async function createClient(clientForm) {
  let ok = false
  let data = null
  const url = `${urlBase}/`
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