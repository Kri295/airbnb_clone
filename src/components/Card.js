import React from "react"

export default function Card({img, rating, reviewCount, country, title, price}) {
    return (
        <div className="card">
            <img src= {img} alt = {title} className="card--image" />
            <div className="card--stats">
                <img src= "/images/star.png" alt = "star" className="card--star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{country}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}