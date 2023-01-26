import { Badge, Spin } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import { useState } from 'react'

export const PageComponent = ({ opening_crawl, loading }) => {
    const [comment, setComment] = useState("")
    return (
        <Spin tip="processing" spinning={loading}>
            <div className="justify-between">
                <h3>{opening_crawl}</h3>
                <div className='mx-auto w-full'>
                    {!loading &&
                        <TextArea className='w-[30rem]' placeholder='Add a comment here...' value={comment} onChange={e => setComment(e.target.value)} />
                    }
                </div>
            </div>
        </Spin>
    )
}
