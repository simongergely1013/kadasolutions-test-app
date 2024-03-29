import React from "react";
import Link from "next/link";

const styles = {
    main: 'w-80 h-96 flex flex-col justify-between items-center p-4 m-2 border rounded-lg',
    imgContainer: 'h-1/2 relative',
    image: 'w-72 h-44',
    discount: 'absolute bg-[#6100FF] text-white text-center text-sm font-semibold leading-normal py-1 px-3 rounded-3xl right-2 top-2',
    titleAndPriceDiv: 'w-full flex justify-between items-center font-semibold leading-normal text-xl',
    title: '',
    price: 'flex gap-2',
    descriptionDiv: '',
    description: 'text-sm font-medium',
    link: 'w-full bg-black text-white text-center py-3 rounded-3xl border'
}

interface CardProps {
    id: number | null;
    image: string;
    discount: number | null;
    title: string;
    price: number | null;
    description: string;
}

const Card = ({id, image, discount, title, price, description}: CardProps) => {
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
            <Link href={`/products/${id}`} className={styles.link}>See details</Link>
        </div>
    )
}

export default Card;