"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Panel, PanelGroup } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { toggleSidebar } from "./Header";
import { allcategories } from "@/app/api/api";

function Sidebar({  }) {
	const [activeKey, setActiveKey] = useState(null);
	const [data, setData] = useState([])

	useEffect(() => {
		allcategories().then(resp => setData(resp.data))

	}, [])

	return (
		<div id="sidebar">
			<IoCloseOutline onClick={() => toggleSidebar()} />
			<div className="accordion">
				{
					data && data.map((item ,i) =><PanelGroup
					key={i}
					accordion
					activeKey={activeKey}
					onSelect={setActiveKey}
				>
					<Panel header={item.name} eventKey={i}>
						<Link href="/salam">{item.subcategories.length > 0 ? item.subcategories.map(subcat => subcat.name) : ''}</Link>
					</Panel>
				</PanelGroup> )
				}
				
			</div>
		</div>
	);
}

export default Sidebar;
