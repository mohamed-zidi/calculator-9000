import React from 'react';

const ItsOverNineThousand = (props) => {

    let affichage = null;

    props.resultat >= 9000 ? affichage = "It's over 9000 !!": affichage = "";
    
    return (

        <div>
            <h1>{affichage}</h1>
        </div>
    );
};

export default ItsOverNineThousand;