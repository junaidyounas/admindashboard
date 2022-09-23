import React from 'react'
import AsideBar from '../../../components/organisms/aside';
import MainSection from './mainSection';

type Props = {}

export default function DashboardPage({ }: Props) {
    return (
        <div className='container'>
            <AsideBar />
            <MainSection />
        </div>
    )
}