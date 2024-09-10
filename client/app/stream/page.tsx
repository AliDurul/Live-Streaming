import React from 'react'
import { InfoModal } from './components/InfoModal/InfoModal'
import StreamHeader from './components/streamHeader/Header'
import Sliders from './components/streamBody/Sliders'
import { auth } from '@/auth';

export default async function page() {
    const session = await auth();

    return (
        <>
            <StreamHeader />
            <Sliders />
            <div className="pb-40" />
            <InfoModal />
        </>
    )
}
