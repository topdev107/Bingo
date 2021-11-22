import React from 'react'
import BodyTile from '../../sub_components/BodyTile'

const EarnInterest = () => {
    return (
        <div className="body-part">

            <div className="row mt-5">                
                <div className="col-lg-6">
                    <BodyTile
                        img="./assets/earn_interest.jpg"
                        img_class={"body_part_photo_fixed_height"}
                    />
                </div>
                <div className="col-lg-6">
                    <BodyTile
                        title={"Stake Your Bingo Coins and Earn 12% Interest Paid Daily"}
                    />
                </div>
            </div>
        </div >
    )
}

export default EarnInterest;