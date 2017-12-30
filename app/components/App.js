import React, { Component } from 'react';

// Whole application
export default props => (
    <div>
        <h1>SearchBar</h1>
        <h1>
            { props.hasSearched ? <div>beenSearched</div> : <div>nothing</div> }
        </h1>
        { /* search bar and nothing/results    */ }
    </div>
);