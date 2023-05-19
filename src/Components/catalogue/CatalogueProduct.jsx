import React from 'react'
import './Catalogue.css'
import { CatalogueHead, CatalogueProductCard, CatalogueProductDisplay } from './Products'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCatalogueProduct, getCatalogueProductFilter } from '../../utils/Catalogue'
import { useSelector } from 'react-redux'

function CatalogueProduct() {
    let [data, setData] = useState(null)
    let { api } = useParams()
    let f_Assured = useSelector((state) => state.filter.F_Assured)

    // useEffect(() => {
    //     getCatalogueProduct(api, setData)
    // }, [])

    useEffect(() => {
        getCatalogueProductFilter(api, setData, f_Assured)
    },[f_Assured])

    return (
        <>
            <CatalogueHead length={data?.length} category={data?.[0].category_name} />
            <CatalogueProductDisplay>
                {data?.map((data) => <CatalogueProductCard key={data.id} data={data} />) }
                {data?.map((data) => <CatalogueProductCard key={data.id} data={data} />) }
            </CatalogueProductDisplay>
        </>
    )
}

export default CatalogueProduct