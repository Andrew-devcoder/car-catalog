
import styles from "./Home.module.css";
import supra from "./supra.jpg";

const Home = () => {
	return <div>
		<h1>
			Catalog cars
		</h1>

		<div>
			<div className={styles.item}>
				<img src={supra} alt=''></img>
				<h2>Car 1</h2>
				<p>$100 000</p>
				<button>Read more</button>
			</div>
		</div>
	</div >
}

export default Home