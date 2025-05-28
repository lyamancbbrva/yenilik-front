'use client'
import Image from 'next/image';

function page() {
  return (
  <main className='profile admin-pages'>
    <h1>Şəxsi məlumatlarım</h1>
    <div className="photo">
      <Image width={100} height={110} src='/imgs/user.png' alt="User" />
    </div>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder='E-mail'/>
      <input type="text" placeholder='+994-XX-XXX-XX-XX'/>
      <input type="password" placeholder='Şifrə'/>
      <input type="password" placeholder='Yeni Şifrə'/>
      <button>Şifrəni dəyiş</button>
    </form>
  </main>
  )
}

export default page;