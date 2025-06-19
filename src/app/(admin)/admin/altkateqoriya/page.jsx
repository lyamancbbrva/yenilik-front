"use client";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import { allcategories, createSubcat, deleteSubcat, editSubcat } from "@/app/api/api";
import { toast, ToastContainer } from "react-toastify";

function Page() {
	const [openAddModal, setOpenAddModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [categories, setCategories] = useState([]);
	const [subcatName, setSubcatName] = useState("");
	const [id, setId] = useState("");
	const [catName, setCatName] = useState("");
	const [subcats, setSubcats] = useState([]);

	useEffect(() => {
		if (openAddModal || openDeleteModal || openEditModal) {
			document.body.style.background = "rgba(0, 0, 0, 0.16)";
		} else {
			document.body.style.background = "#f0f0f0";
		}
		allcategories().then((resp) => setCategories(resp.data));
		setSubcats(categories?.filter((item) => item.name === catName)[0]?.subcategories)
	}, [openAddModal, openDeleteModal, openEditModal]);


	function handleAddSubcategory() {
		try {
			const catId = categories?.filter((item) => item.name === catName)[0]?.id;

			if (subcatName?.trim().length === 0) {
				return toast.error("Alt kateqoriya adı boş ola bilməz!");
			}
			if (!catId) {
				return toast.error("Kateqoriya seçilməyib!");
			}
			const obj = {
				name: subcatName,
				category_id: catId,
			};
			createSubcat(obj).then((resp) =>
			{
				if (resp.status !== 201) {
					setSubcats(subcats?.filter((item) => item.id !== resp.data.id));
					return toast.error("Alt kateqoriya əlavə edilə bilmədi!");
				}
				return toast.success("Alt kateqoriya əlavə edildi!");

			});
		} catch (error) {
			return error;
		}
	}
	function handleDeleteSubcategory() {
		try {
			if (!id) {
				return toast.error("Alt kateqoriya seçilməyib!");
			}
			deleteSubcat(id).then((resp) => {
				if (resp.status !== 200) {
					return toast.error("Alt kateqoriya silinə bilmədi!");
				}else{
					return toast.success("Alt kateqoriya silindi!");
				}
			})
			
		} catch (error) {
			return error;
		}
	}
	function handleEditSubcategory(){
		try {
			if (!id) {
				return toast.error("Alt kateqoriya seçilməyib!");
			}
			editSubcat(id).then(resp => console.log(resp))
			
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
				<h1>Alt kateqoriya</h1>
				<form
					className="admin-form"
					onSubmit={(e) => e.preventDefault()}
				>
					<select
						onChange={(e) => setCatName(e.target.value)}
						className="admin-select"
					>
						<option>Kateqoriya</option>
						{categories &&
							categories.map((item, i) => (
								<option key={i}>{item.name}</option>
							))}
					</select>
					<button onClick={() => setOpenAddModal(true)}>
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
							{subcats &&
								subcats.map((item, i) => (
									<tr key={i}>
										<td>{item.name}</td>
										<td>
											<FiEdit
												className="edit"
												onClick={() => {
													setOpenEditModal(true);
													setId(item.id);
												}}
											/>
											<RiDeleteBin5Line
												className="trash"
												onClick={() => {
													setOpenDeleteModal(true);
													setId(item.id);
												}}
											/>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
				{openAddModal ? (
					<div className="modal long-modal">
						<div
							className="x-mark"
							onClick={() => setOpenAddModal(false)}
						>
							<FaXmark />
						</div>
						<h3>Alt kateqoriya əlavə edilsin?</h3>
						<input
							onInput={(e) => setSubcatName(e.target.value)}
							type="text"
							placeholder="Alt katerqoriya adı"
						/>
						<select onChange={(e) => setCatName(e.target.value)}>
							<option value="Kateqoriya">Kateqoriya</option>
							{categories &&
								categories.map((item, i) => (
									<option key={i}>{item.name}</option>
								))}
						</select>
						<div className="buttons">
							<button
								onClick={() => setOpenAddModal(false)}
								className="no"
							>
								Xeyr
							</button>
							<button
								type="button"
								className="yes"
								onClick={() => {
									handleAddSubcategory();
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
						<h3>Alt kateqoriya silinsin?</h3>
						<div className="buttons">
							<button
								onClick={() => setOpenDeleteModal(false)}
								className="no"
							>
								Xeyr
							</button>
							<button 
							onClick={() => {
								handleDeleteSubcategory();
								setOpenDeleteModal(false);
							}} className="yes">Bəli</button>
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
						<input
							type="text"
							placeholder="Alt kateqoriya adı..."
						/>
						<select>
							<option disabled>kateqoriya seç</option>
							<option>kateqoriya seç</option>
							<option>kateqoriya seç</option>
							<option>kateqoriya seç</option>
						</select>
						<button
							onClick={() => setOpenEditModal(false)}
							className="no"
						>
							Xeyr
						</button>
						<button 
						onClick={() => {
							handleEditSubcategory();
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

export default Page;
