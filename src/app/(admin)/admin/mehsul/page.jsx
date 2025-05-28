'use client'
import React, { useEffect, useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6"

function page() {
		const [openAddModal, setOpenAddModal] = useState(false);
		const [openDeleteModal, setOpenDeleteModal] = useState(false);
		const [openEditModal, setOpenEditModal] = useState(false);

        useEffect(() => {

            if (openAddModal || openDeleteModal || openEditModal) {
                document.body.style.background = "rgba(0, 0, 0, 0.16)";
            } else {
                document.body.style.background = "#f0f0f0";
            }
        }, [])
	

  return (
    <main className="admin-pages">
			<h1>Məhsullar</h1>
			<form className="admin-form" onSubmit={(e) => e.preventDefault()}>
				<button className='product-button' onClick={() => setOpenAddModal(true)}>Əlavə et +</button>
			</form>
			<div className="admin-tables">
				<table>
					<thead>
						<tr>
							<th>Məhsul </th>
							<th>Qiyməti</th>
							<th>Endirim</th>
							<th>Əməliyyatlar</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><img src="https://bazarstore.az/cdn/shop/products/30015508.jpg?v=1693387425" alt="" /><h6>Məhsul adı </h6></td>
							<td>16 ₼</td>
							<td>12 ₼</td>
							<td>
								<FiEdit className="edit" onClick={() => setOpenEditModal(true)}/>
								<RiDeleteBin5Line className="trash" onClick={() => setOpenDeleteModal(true)}/>
							</td>
						</tr>
						<tr>
                        <td><img src="https://bazarstore.az/cdn/shop/products/30015508.jpg?v=1693387425" alt="" /><h6>Məhsul adı </h6></td>
							<td>16 ₼</td>
							<td>12 ₼</td>
							<td>
								<FiEdit className="edit" onClick={() => setOpenEditModal(true)}/>
								<RiDeleteBin5Line className="trash" onClick={() => setOpenDeleteModal(true)} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
						{openAddModal ? (
							<div className="modal product-modal">
								<div
									className="x-mark"
									onClick={() => setOpenAddModal(false)}
								>
									<FaXmark />
								</div>
								<h3>Məhsul əlavə edilsin?</h3>
								<form action="" onClick={(e) => e.preventDefault()}>
									<input type="text" placeholder='Məhsulun adı...' />
									<input type="text" placeholder='Əlavə məlumat...' />
									<input type="text" placeholder='Məhsulun qiyməti...' />
									<input type="file" name="" id="" />
									<select>
										<option disabled>Kateqoriya</option>
										<option>Kateqoriya</option>
										<option>Kateqoriya</option>
										<option>Kateqoriya</option>
									</select>
									<select>
										<option disabled>Alt kateqoriya</option>
										<option>Alt kateqoriya</option>
										<option>Alt kateqoriya</option>
										<option>Alt kateqoriya</option>
									</select>
									<input type="number" placeholder='Stok' min={1} defaultValue={1} />
									<input type="text" placeholder='Endirimli qiymət...' />
									<input type="text" placeholder='Endirim faizi...' />
									
									{/* <label>Çox satılan<input type="radio"/></label> */}

								</form>
								<div className="buttons">
									<button className="no">Xeyr</button>
									<button className="yes">Bəli</button>
								</div>
							</div>
						) : (
							""
						)}
						{openDeleteModal ? (
							<div className="modal">
								<div
									className="x-mark"
									onClick={() => setOpenDeleteModal(false)}
								>
									<FaXmark />
								</div>
								<h3>Məhsul silinsin?</h3>
								<div className="buttons">
									<button className="no">Xeyr</button>
									<button className="yes">Bəli</button>
								</div>
							</div>
						) : (
							""
						)}
						{openEditModal ? (
							<div className="modal product-modal">
								<div
									className="x-mark"
									onClick={() => setOpenEditModal(false)}
								>
									<FaXmark />
								</div>
								<h3>Məhsul yenilənsin?</h3>
								<form action="" onClick={(e) => e.preventDefault()}>
									<input type="text" placeholder='Məhsulun adı...' />
									<input type="text" placeholder='Əlavə məlumat...' />
									<input type="text" placeholder='Məhsulun qiyməti...' />
									<input type="file" name="" id="" />
									<select>
										<option disabled>Kateqoriya</option>
										<option>Kateqoriya</option>
										<option>Kateqoriya</option>
										<option>Kateqoriya</option>
									</select>
									<select>
										<option disabled>Alt kateqoriya</option>
										<option>Alt kateqoriya</option>
										<option>Alt kateqoriya</option>
										<option>Alt kateqoriya</option>
									</select>
									<input type="number" placeholder='Stok' min={1} value={1}/>
									<input type="text" placeholder='Endirimli qiymət...' />
									<input type="text" placeholder='Endirim faizi...' />
									
									{/* <label>Çox satılan<input type="radio"/></label> */}

								</form>
								<button className="no">Xeyr</button>
								<button className="yes">Bəli</button>

							</div>
						) : (
							""
						)}
		</main>
  )
}

export default page;