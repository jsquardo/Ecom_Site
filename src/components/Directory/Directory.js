import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";

import "./Directory.scss";

class Directory extends Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "hats",
					imageUrl:
						"https://images.unsplash.com/photo-1466151781656-41b0002fd529?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
					id: 1,
					linkUrl: "hats"
				},
				{
					title: "jackets",
					imageUrl:
						"https://images.unsplash.com/photo-1552641274-765176e2475d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
					id: 2,
					linkUrl: ""
				},
				{
					title: "sneakers",
					imageUrl:
						"https://images.unsplash.com/photo-1496151296477-52b25888251d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
					id: 3,
					linkUrl: ""
				},
				{
					title: "womens",
					imageUrl:
						"https://images.unsplash.com/photo-1471310722956-19e564757459?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
					size: "large",
					id: 4,
					linkUrl: ""
				},
				{
					title: "mens",
					imageUrl:
						"https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
					size: "large",
					id: 5,
					linkUrl: ""
				}
			]
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
