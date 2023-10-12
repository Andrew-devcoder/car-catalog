
import styles from "./Home.module.css";
// import supra from "./supra.jpg";
import {cars} from "./cars.data.js"

const Home = () => {
	return <div>
		<h1>
			Catalog cars
		</h1>

		<div>
			{cars.map(car=>(

			<div key={car.id} className={styles.item}>
					<img src={car.image} alt={car.name} className={styles.image}/>
					<h2>{car.name}</h2>
					<p>{car.price}</p>
					<button>Read more</button>
				</div>
			))}
		</div>
	</div >
}

export default Home