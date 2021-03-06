import React from "react";
import { connect } from "react-redux";

// import CollectionItem from "../../components/CollectionItem/CollectionItem";

import { selectCollection } from "../../Redux/Shop//shopSelector";

import "./CollectionPage.scss";

const CollectionPage = ({ collection }) => {
	console.log(collection);
	return (
		<div className="collection">
			<h2>COLLECTION PAGE</h2>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
