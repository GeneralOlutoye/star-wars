/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { PageComponent } from '..'
import { Layout } from '../../Layout/Layout'
import { GET } from '../../Service/Method'

export const PhantomMenace = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)  

  const getPhantomMenace = async () => {
    setLoading(true)
    const response = await GET(`https://swapi.dev/api/films`)
    setData(response.results)
    setLoading(false)
    return response.results
  }

  const opening_crawl = data.map( x => x.opening_crawl)

  useEffect(() => {
    getPhantomMenace()
  }, [])

  return (
    <Layout pageKey='5' pageTitle={'The Phantom Menace'} pageUrl="/phantom-menace">
    <PageComponent loading={loading} opening_crawl={opening_crawl} />
    </Layout>
  )
}
