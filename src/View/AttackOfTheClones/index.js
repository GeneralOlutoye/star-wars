import React, { useState } from 'react'
import { useEffect } from 'react'
import { PageComponent } from '..'
import { Layout } from '../../Layout/Layout'
import { GET } from '../../Service/Method'

export const AttackOfTheClones = () => {
    const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)  

  const getAttackOfTheClones = async () => {
    setLoading(true)
    const response = await GET(`https://swapi.dev/api/films`)
    setData(response.results)
    setLoading(false)
    return response.results
  }

  const opening_crawl = data.map( x => x.opening_crawl)

  useEffect(() => {
    getAttackOfTheClones()
  }, [])
  return (
    <Layout pageKey='6' pageTitle={'Attack of the Clones'} pageUrl={"/attack-of-the-clones"}>
      <PageComponent loading={loading} opening_crawl={opening_crawl} />

    </Layout>
  )
}
