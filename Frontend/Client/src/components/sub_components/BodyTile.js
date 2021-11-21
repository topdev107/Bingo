import React from 'react'

const BodyTile = ({ img, title, desc, link, img_class = "body_part_photo" }) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="img_container">
                <img className={img_class} src={img} />
                <div className="overlay"/>
            </div>
            <h2 className="red_letter mt-5">{title}</h2>
            <p className="mt-3 text-align-center">{desc}</p>
            <code>{link}</code>
            <br />
        </div>
    )
};

export default BodyTile;