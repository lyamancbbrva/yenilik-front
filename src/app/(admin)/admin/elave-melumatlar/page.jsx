import React from 'react'

function page() {
  return (
    <main className='admin-pages'>
        <h1>Əlavə məlumatlar</h1>
        <div className="admin-tables ">
        <table>
            <thead>
                <tr>
                    <th>Ünvan</th>
                    <th>Nömrə</th>
                    <th>İnstagram</th>
                    <th>Filiallar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='info-td'><input type="text" defaultValue={""} /></td>
                    <td className='info-td'><input type="text" defaultValue={""} /></td>
                    <td className='info-td'><input type="text" defaultValue={""} /></td>
                    <td className='info-td'><input type="text" defaultValue={""} /></td>
                </tr>
            </tbody>
        </table>
        </div>
        <div className='save-button'>
        <button>Yadda saxla</button>
        </div>
    </main>
  )
}

export default page;