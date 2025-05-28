'use client'
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";

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
			<h1>Alt kateqoriya</h1>
			<form className="admin-form" onSubmit={(e) => e.preventDefault()}>
				<input type="text" placeholder="Kateqoriya adı..." />
				<button onClick={() => setOpenAddModal(true)}>Əlavə et +</button>
			</form>
			<div className="admin-tables">
				<table>
					<thead>
						<tr>
							<th>Alt kateqoriya adı</th>
							<th>Əməliyyatlar</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Alt kateqoriya adı</td>
							<td>
								<FiEdit className="edit" onClick={() => setOpenEditModal(true)} />
								<RiDeleteBin5Line className="trash" onClick={() => setOpenDeleteModal(true)} />
							</td>
						</tr>
						<tr>
							<td>Alt kateqoriya adı</td>
							<td>
								<FiEdit className="edit" onClick={() => setOpenEditModal(true)} />
								<RiDeleteBin5Line className="trash" onClick={() => setOpenDeleteModal(true)}/>
							</td>
						</tr>
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

export default page;
