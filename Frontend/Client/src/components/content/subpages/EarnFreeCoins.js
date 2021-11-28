import React from 'react'
import BodyTile from '../../sub_components/BodyTile'
import axios from "axios";
import Swal from "sweetalert2";

const EarnFreeCoins = () => {

    const handleClick = () => {
        Swal.fire({
            title: 'Earn Free Coins',
            text: 'Do you want to earn free coins?'
        }).then(() => {
            Swal.fire({
                title: 'Success',
                text: 'You earned 1 Algo'
            })
        })
    }

    return (
        <div className="body-part">

            <button onClick={handleClick}>Submit Survey(Get Receive Free Coin)</button>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <BodyTile
                        img="./assets/earn_free_coins.jpg"
                        img_class={"body_part_photo_fixed_height"}
                    />
                </div>
                <div className="col-lg-6">
                    <BodyTile
                        img="./assets/earn_interest.jpg"
                        img_class={"body_part_photo_fixed_height"}
                    />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-lg-6">
                    <BodyTile
                        img="./assets/earn_interest.jpg"
                        img_class={"body_part_photo_fixed_height"}
                    />
                </div>
                <div className="col-lg-6">
                    <BodyTile
                        img="./assets/earn_interest.jpg"
                        img_class={"body_part_photo_fixed_height"}
                    />
                </div>
            </div>
        </div >
    )
}

export default EarnFreeCoins;