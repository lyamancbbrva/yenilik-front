'use client'
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { allcategories, allSubcats } from "@/app/api/api";

function Page() {
	const [openAddModal, setOpenAddModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [data, setData] = useState([])
    useEffect(() => {
        if (openAddModal || openDeleteModal || openEditModal) {
            document.body.style.background = "rgba(0, 0, 0, 0.16)";
        } else {
            document.body.style.background = "#f0f0f0";
        }
		allcategories().then((resp) => setData(resp.data.data))
    }, [openAddModal, openDeleteModal, openEditModal])


		console.log(data)
	return (
		<main className="admin-pages">
			<h1>Alt kateqoriya</h1>
			<form className="admin-form" onSubmit={(e) => e.preventDefault()}>
				<input type="text" placeholder="Kateqoriya adı..." />
				<button onClick={() => setOpenAddModal(true)}>Əlavə et +</button>
			</form>
			<div className="admin-tables">
				<table>
					<thead>
						<tr>
							<th>Kateqoriya adı</th>
							<th>Alt kateqoriya adı</th>
							<th>Əməliyyatlar</th>
						</tr>
					</thead>
					<tbody>
						{
							data && data.map((item, i) =>
							<tr key={i}>
							<td>{item.name}</td>
							<td>{item.subcategories.length > 0 ? item.subcategories.map(subcat => subcat.name) : "Alt kateqoriya yoxdur"}</td>
							<td>
								<FiEdit className="edit" onClick={() => setOpenEditModal(true)} />
								<RiDeleteBin5Line className="trash" onClick={() => setOpenDeleteModal(true)} />
							</td>
						</tr> )
						}
						
					</tbody>
				</table>
			</div>
			{openAddModal ? (
				<div className="modal">
					<div
						className="x-mark"
						onClick={() => setOpenAddModal(false)}
					>
						<FaXmark />
					</div>
					<h3>Alt kateqoriya əlavə edilsin?</h3>
					<select>
						{
							data && data.map((item, i) => <option>{item.name}</option>)
						}
					</select>
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
					<h3>Alt kateqoriya silinsin?</h3>
					<div className="buttons">
						<button className="no">Xeyr</button>
						<button className="yes">Bəli</button>
					</div>
				</div>
			) : (
				""
			)}
			{openEditModal ? (
				<div className="modal long-modal">
					<div
						className="x-mark"
						onClick={() => setOpenEditModal(false)}
					>
						<FaXmark />
					</div>
					<h3>Alt kateqoriya yenilənsin?</h3>
					<input type="text" placeholder="Alt kateqoriya adı..." />
					<select>
						<option disabled>kateqoriya seç</option>
						<option>kateqoriya seç</option>
						<option>kateqoriya seç</option>
						<option>kateqoriya seç</option>
					</select>
					<button className="no">Xeyr</button>
					<button className="yes">Bəli</button>
				</div>
			) : (
				""
			)}
		</main>
	);
}

export default Page;
