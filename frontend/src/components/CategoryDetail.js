import React from "react";
import { useLocation, useParams } from "react-router-dom";

function CategoryDetail() {

    const params = useParams();
    const location = useLocation();

    return (
        <>
            <h2>
                Selected category {params.id}
            </h2>
            <h2>
                {location.state}
            </h2>
        </>
    );
}

export default CategoryDetail;