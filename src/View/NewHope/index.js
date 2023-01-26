// import { Card, Select } from 'antd'
import { Badge, Select } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BsChat } from 'react-icons/bs'
import { PageComponent } from '..'
import { Layout } from '../../Layout/Layout'
import { GET } from '../../Service/Method'

export const NewHope = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)  

  const getNewHope = async () => {
    setLoading(true)
    const response = await GET(`https://swapi.dev/api/films`)
    setData(response.results)
    setLoading(false)
    return response.results
  }

  const opening_crawl = data.map( x => x.opening_crawl)

  useEffect(() => {
    getNewHope()
  }, [])

  return (
    <Layout pageKey='2' tabName={'a new hope'} pageTitle={'A New Hope'} pageUrl={"/a-new-hope"}>
      <PageComponent loading={loading} opening_crawl={opening_crawl} />
    </Layout>
  )
}