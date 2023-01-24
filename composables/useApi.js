const useApi = () => {
  // init
  const config = useRuntimeConfig()
  const nytUri = config.public.nytUri
  const apiKey = config.public.apiKey

  // get
  const get = async endpoint => await useFetch(`${nytUri}/svc/${endpoint}`)

  // get articale
  const getArticale = async p => {
    let query = `search/v2/articlesearch.json?q=technology&page=${p}&api-key=${apiKey}`
    return get(query)
  }

  // usage
  return { get, getArticale }
}

export default useApi