import React, { Component } from 'react';


export const SearchInputComponent = (props) => {
    return (
        <input
            className="standard__input__style"
            placeholder="Search Mobster" 
            onChange={e => props.HandleSearch(e)}
        />
    )
}
