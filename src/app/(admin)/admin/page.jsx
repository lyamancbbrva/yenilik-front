import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <main id='admin-home'>
        <h1>Yenilik Marketə xoş gəlmisiniz!</h1>
        <p>Zəhmət olmasa şifrənizi heçkimlə paylaşmayın!</p>
        <Link href='/admin/mehsul'>Məhsul əlavə et</Link>
    </main>
  )
}

export default page;