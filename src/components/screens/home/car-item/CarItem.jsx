import styles from "../Home.module.css";

export const CarItem = ({car}) => {
    return (
        <div key={car.id} className={styles.item}>
        <img src={car.image} alt={car.name} className={styles.image}/>
        <div className={styles.description}>
        <h2>{car.name}</h2>
        <p>{new Intl.NumberFormat('en-US', {
            style:'currency',
            currency: 'USD'}).format(car.price)}</p>
        <button>Read more</button>
        </div>
        </div>
    )
}
