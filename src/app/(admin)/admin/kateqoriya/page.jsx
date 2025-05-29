'use client'
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { AppCOnfig } from "../../../../../config"; 
import { getCategories } from "@/app/components/client/Header";


async function page() {
	const [openAddModal, setOpenAddModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [id, setID] = useState('')
	const [name, setName] = useState('')

    useEffect(() => {
        if (openAddModal || openDeleteModal || openEditModal) {
            document.body.style.background = "rgba(0, 0, 0, 0.16)";
            
        } else {
            document.body.style.background = "#f0f0f0";
        }

    }, [openAddModal, openDeleteModal, openEditModal])

	const {data} = await getCategories()

	
	function createNewCategory() {
		const obj = {
			name
		}
		
	}


	return (
		<main className="admin-pages">
			<h1>Kateqoriyalar</h1>
			<form className="admin-form">
				<input onInput={(e) => setName(e.target.value)} type="text" placeholder="Kateqoriya adı..." />
				<button
					onClick={(e) => {
						setOpenAddModal(true);
						e.preventDefault();
					}}
				>
					Əlavə et +
				</button>
			</form>
			<div className="admin-tables">
				<table>
					<thead>
						<tr>
							<th>Kateqoriya adı</th>
							<th>Əməliyyatlar</th>
						</tr>
					</thead>
					<tbody>
							{
								data && data.map((item, i) => {
									return(
									<tr key={i}>
							<td>{item.name}</td>
							<td>
								<FiEdit
									className="edit"
									onClick={() => {
										setOpenEditModal(true);
										setID(item.id)
									}}
								/>
								<RiDeleteBin5Line
									className="trash"
									onClick={() => 
										{
										setOpenDeleteModal(true)
										setID(item.id)
									}
									}
								/>
							</td>
						</tr>)
								})
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
					<h3>Kateqoriya əlavə edilsin?</h3>
					<div className="buttons">
						<button className="no">Xeyr</button>
						<button className="yes" onClick={createNewCategory}>Bəli</button>
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
					<h3>Kateqoriya silinsin?</h3>
					<div className="buttons">
						<button className="no">Xeyr</button>
						<button className="yes">Bəli</button>
					</div>
				</div>
			) : (
				""
			)}
			{openEditModal ? (
				<div className="modal">
					<div
						className="x-mark"
						onClick={() => setOpenEditModal(false)}
					>
						<FaXmark />
					</div>
					<h3>Kateqoriya yenilənsin?</h3>
					<input type="text" placeholder="Kateqoriya adı..." />
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
