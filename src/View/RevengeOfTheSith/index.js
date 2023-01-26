import React, { useState } from 'react'
import { useEffect } from 'react'
import { PageComponent } from '..'
import { Layout } from '../../Layout/Layout'
import { GET } from '../../Service/Method'

export const RevengeOfTheSith = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getRevengeOfThesith = async () => {
    setLoading(true)
    const response = await GET(`https://swapi.dev/api/films`)
    setData(response.results)
    setLoading(false)
    return response.results
  }

  const opening_crawl = data.map(x => x.opening_crawl)

  useEffect(() => {
    getRevengeOfThesith()
  }, [])
  return (
    <Layout pageKey='7' pageTitle={'Revenge of the Sith'} pageUrl={"/revenge-of-the-sith"}>
      <PageComponent loading={loading} opening_crawl={opening_crawl} />
    </Layout>
  )
}
