import { FaStar } from "react-icons/fa";

const styles = {
    starContainer: 'flex justify-center items-center gap-1 mr-2',
    fillPurple: 'fill-[#6100FF]',
    fillGray: 'fill-slate-300',
}

export const renderStars = (rating: number | null) => {
    if(rating !== null){
        const roundedRating = Math.floor(rating);
        switch(roundedRating){
            case 5:
            return (
                <div className={styles.starContainer}>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillPurple}/>
                </div>
            );
            case 4:
                return (
                    <div className={styles.starContainer}>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillGray}/>
               </div>
                );
            case 3:
                return (
                    <div className={styles.starContainer}>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillGray}/>
                    <FaStar className={styles.fillGray}/>
               </div>
                );  
            case 2:
                return (
                    <div className={styles.starContainer}>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillGray}/>
                    <FaStar className={styles.fillGray}/>
                    <FaStar className={styles.fillGray}/>
               </div>
                );
            case 1:
                return (
                    <div className={styles.starContainer}>
                    <FaStar className={styles.fillPurple}/>
                    <FaStar className={styles.fillGray}/>
                    <FaStar className={styles.fillGray}/>
                    <FaStar className={styles.fillGray}/>
                    <FaStar className={styles.fillGray}/>
               </div>
                );  
            default:
                return;        
        }
    } else {
        return;
    }
};