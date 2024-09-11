import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            This is dynamic page {params.productId}
        </div>
    );
};

export default DynamicPage;