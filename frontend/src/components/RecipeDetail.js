import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetail(props) {

    params = useParams();

    return (
        <h2>
            Selected recipe {params.id}
        </h2>
    );
}

export default RecipeDetail;