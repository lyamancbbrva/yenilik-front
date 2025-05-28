"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Panel, PanelGroup } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { toggleSidebar } from "./Header";

function Sidebar({  }) {
	const [activeKey, setActiveKey] = useState(null);

	return (
		<div id="sidebar">
			<IoCloseOutline onClick={() => toggleSidebar()} />
			<div className="accordion">
				<PanelGroup
					accordion
					activeKey={activeKey}
					onSelect={setActiveKey}
				>
					<Panel header="Salam" eventKey="1">
						<Link href="/salam">salam</Link>
					</Panel>
					<Panel header="Salam 2" eventKey="2">
						<div>salam</div>
					</Panel>
					<Panel header="Necəsən?" eventKey="3">
						<div>nexesen</div>
					</Panel>
				</PanelGroup>
			</div>
		</div>
	);
}

export default Sidebar;
