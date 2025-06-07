"use client";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { allcategories, createCategory, deleteeCategory, editCategory } from "@/app/api/api";
import { toast, ToastContainer } from "react-toastify";

function page() {
	const [openAddModal, setOpenAddModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [id, setID] = useState("");
	const [name, setName] = useState("");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		if (openAddModal || openDeleteModal || openEditModal) {
			document.body.style.background = "rgba(0, 0, 0, 0.16)";
		} else {
			document.body.style.background = "#f0f0f0";
		}

		try {
			allcategories().then((res) => setData(res.data));
		} catch (error) {
			return error;
		}
	}, [openAddModal, openDeleteModal, openEditModal]);
	useEffect(() => {
		setName(data.find((item) => item.id === id)?.name)
	}, [id])

	function createNewCategory() {
		const obj = {
			name,
		};
		if (name.trim().length == 0) {
			return toast.error("Kateqoriya adı boş ola bilməz!");
		}
		try {
			createCategory(obj).then((res) =>{
				console.log(res)
				if (res.status !== 201) {
					return toast.error("Kateqoriya əlavə edilərkən xəta baş verdi!");
				}
			return	toast.success("Kateqoriya əlavə edildi!")
			}
			);
		} catch (error) {
			return toast.error("Kateqoriya əlavə edilərkən xəta baş verdi!");
		}
	}
	function deletee(){
		try {
			deleteeCategory(id).then((res) => {
				setData(data.filter((item) => item.id !== id));
				console.log(res);
				if (res.status !== 200) {
					return toast.error("Kateqoriya silinərkən xəta baş verdi!");
				}
				return toast.success("Kateqoriya silindi!");
			})
		} catch (error) {
			return error;
		}
	}
	function edit(){
		const obj = {
			name
		}
		console.log(obj)
		try {
			editCategory(id, obj).then((res) => {console.log(res)
				if (res.status !== 200) {
					return toast.error("Kateqoriya yenilənərkən xəta baş verdi!");
					
				}
				 toast.success("Kateqoriya yeniləndi!");
				setData(data.map((item) => {
					if (item.id === id) {
						return { ...item, name: name }
					}
					return item;
				}))
			})
			
		} catch (error) {
			return error;
		}
	}

	return (
		<>
			<ToastContainer
				position="top-center"
				neweshrefnhrefp={false}
				auhrefClose={2000}
				closeOnClick
				draggable
				pauseOnHover
				theme="light"
			/>
			<main className="admin-pages">
				<h1>Kateqoriyalar</h1>
				<form className="admin-form">
					<input
						onInput={(e) => setName(e.target.value)}
						type="text"
						placeholder="Kateqoriya adı..."
					/>
					<button
						onClick={(e) => {
							setOpenAddModal(true);
							e.preventDefault();
						}}
					>
						Əlavə et +
					</button>
				</form>
				{data.length > 0 ? (
					<div className="admin-tables">
						<table>
							<thead>
								<tr>
									<th>Kateqoriya adı</th>
									<th>Əməliyyatlar</th>
								</tr>
							</thead>
							<tbody>
								{data?.map((item, i) => {
									return (
										<tr key={i}>
											<td>{item.name}</td>
											<td>
												<FiEdit
													className="edit"
													onClick={() => {
														setOpenEditModal(true);
														setID(item.id);
													}}
												/>
												<RiDeleteBin5Line
													className="trash"
													onClick={() => {
														setOpenDeleteModal(
															true
														);
														setID(item.id);
													}}
												/>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				) : (
					<div className="loader"></div>
				)}

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
							<button
								onClick={() => setOpenAddModal(false)}
								className="no"
							>
								Xeyr
							</button>
							<button
								className="yes"
								onClick={() => {
									createNewCategory();
									setOpenAddModal(false);
								}}
							>
								Bəli
							</button>
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
							<button
								onClick={() => setOpenDeleteModal(false)}
							 className="no">Xeyr</button>
							<button className="yes"
							onClick={() => {
								deletee();
								setOpenDeleteModal(false);
							}}
							>Bəli</button>
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
						<input value={name} onInput={(e) => setName(e.target.value)} type="text" placeholder="Kateqoriya adı..." />
						<button
						onClick={() => setOpenEditModal(false)}
						 className="no">Xeyr</button>
						<button
						onClick={() => {
							edit();
							setOpenEditModal(false);
						}}
						 className="yes">Bəli</button>
					</div>
				) : (
					""
				)}
			</main>
		</>
	);
}

export default page;
