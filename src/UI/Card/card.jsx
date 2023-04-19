import React from 'react';
import cardImg from "../../assets/images/hero-img.png"

// card({title: "salom"})
const card = () => {
    // function card(props) {
    //     console.log(props.title);
    // }
    return (
        <div class="card" style="width: 18rem;">
            <img src={cardImg} class="card-img-top" alt="img" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
};

export default card;