import React from 'react';

const ServiceTable = ({ service }) => {

    const { title, company, category, price, deadline, email } = service || {}
    console.log(title)
    return (
        <tr>
            <th>{title}</th>
            <td>{company}</td>
            <td>{category}</td>
            <td>{deadline}</td>
            <td>{price}</td>
            <td>{email}</td>
            <th>1</th>
        </tr>
    );
};

export default ServiceTable;