import React from 'react'

function Footer() {
    return (
        <div className='min-h-[10vw] mt-10 space-y-2 flex flex-col items-center justify-center'>

            <span>Coinshop SARL, ©copyright 2022 - Tous droits réservés</span>

            <a href="/terms" className='text-red-900'>Conditions d'utilisations</a>

            <a href="">Version 1.2.10</a>
        </div>
    )
}

export default Footer