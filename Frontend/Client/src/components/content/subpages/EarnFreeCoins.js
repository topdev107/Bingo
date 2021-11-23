import React from 'react'
import BodyTile from '../../sub_components/BodyTile'

const EarnFreeCoins = () => {
    return (
        <div className="body-part">
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