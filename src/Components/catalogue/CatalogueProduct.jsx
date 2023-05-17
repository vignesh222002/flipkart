import React from 'react'
import './Catalogue.css'
import { CatalogueHead, CatalogueProductCard, CatalogueProductDisplay } from './Products'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { IP, Port } from '../../IP Address/IPAddress'
import { useParams } from 'react-router-dom'

function CatalogueProduct() {
    let [data, setData] = useState(null)
    let { api } = useParams()

    useEffect(() => {
        axios.get(`http://${IP}:${Port}/getSubcategoryProducts/${api}`)
            .then((res) => {
                // console.log(res.data)
                setData(res.data)
            })
    }, [])

    return (
        <>
            <CatalogueHead length={data?.length} category={data?.[0].category} />
            <CatalogueProductDisplay>
                {data?.map((data) => <CatalogueProductCard key={data.id} data={data} />) }
            </CatalogueProductDisplay>
        </>
    )
}

export default CatalogueProduct