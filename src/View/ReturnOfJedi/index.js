import React, { useEffect, useState } from 'react'
import { PageComponent } from '..'
import { Layout } from '../../Layout/Layout'
import { GET } from '../../Service/Method'

export const ReturnOfJedi = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getEmpireStrikeBack = async () => {
    setLoading(true)
    const response = await GET(`https://swapi.dev/api/films`)
    setData(response.results)
    setLoading(false)
    return response.results
  }

  const opening_crawl = data.map(x => x.opening_crawl)

  useEffect(() => {
    getEmpireStrikeBack()
  }, [])
  return (
    <Layout pageKey='4' tabName={'return of the jedi'} pageTitle={'Return of the Jedi'} pageUrl={"/return-of-the-jedi"}>
      <PageComponent loading={loading} opening_crawl={opening_crawl} />
    </Layout>
  )
}
