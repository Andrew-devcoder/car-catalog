import { useState } from "react";
import { CarItem } from "./car-item/CarItem";
import {cars as carsData} from "./cars.data.js"
import { CreateCarForm } from "./create-car-from/CreateCarForm";

const Home = () => {

const [cars, setCars] = useState(carsData)

	return <div>
		<h1>
			Catalog cars
		</h1>

		<CreateCarForm setCars={setCars}/>

		<div>
			{cars.length ? cars.map(car=>(
				<CarItem key={car.id} car= {car}/>
			))
		: <p>not found</p>
		}
		</div>
	</div >
}

export default Home