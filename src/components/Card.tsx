import React from "react";

const styles = {
    main: 'w-1/4 h-96 flex flex-col justify-between items-center p-4 border',
    imgContainer: 'h-1/2 relative',
    image: 'w-72 h-44',
    discount: 'absolute bg-[#6100FF] text-center text-sm font-semibold leading-normal py-1 px-3 rounded-3xl right-2 top-2',
    titleAndPriceDiv: 'w-full flex justify-between items-center font-semibold leading-normal text-xl',
    title: '',
    price: 'flex gap-2',
    descriptionDiv: '',
    description: 'text-sm font-medium',
    button: 'w-full py-1 rounded-3xl border'
}

interface CardProps {
    image: string;
    discount: number;
    title: string;
    price: number;
    description: string;
}

const Card = ({image, discount, title, price, description}: CardProps) => {
    return(
        <div className={styles.main}>
            <div className={styles.imgContainer}>
                <div className={styles.discount}>-{discount}%</div>
                <img src={image} className={styles.image}/>
            </div>
            <div className={styles.titleAndPriceDiv}>
                <div className={styles.title}>{title}</div>
                <div className={styles.price}><span>{price}</span><span>$</span></div>
            </div>
            <div className={styles.descriptionDiv}>
                <p className={styles.description}>{description}</p>
            </div>
            <button className={styles.button}>See details</button>
        </div>
    )
}

export default Card;