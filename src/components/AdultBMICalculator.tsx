import { createSignal, Show } from "solid-js"
import styles from "./AdultBMICalculator.module.css"

const AdultBMICalculator = () => {
	const [feet, setFeet] = createSignal(1)
	const [inches, setInches] = createSignal(0)
	const [pounds, setPounds] = createSignal(1)
	const [BMI, setBMI] = createSignal(0)
	const [calculations, setCalculations] = createSignal(false)

	// const weightDec = pounds() - Math.floor(pounds())
	// console.log(weightDec)

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault()

		//convert feet to inches
		const heightFt = feet() * 12

		// get total height
		const height = heightFt + inches()

		const heightSquared = () => height * height

		const result = (pounds() / heightSquared()) * 703
		setBMI(result)
		setCalculations(true)
	}

	return (
		<section class={styles.calculator}>
			<form onsubmit={handleSubmit} name="bmi" id="bmi" class={styles.bmi}>
				<p>
					<span class={styles.switch}>English</span>
					/Metric
				</p>
				<div>
					<h2>Height</h2>
					<label for="height-feet">Feet</label>
					<br />
					<input
						onInput={(e) => setFeet(+e.currentTarget.value)}
						type="number"
						name="height-feet"
						id="height-feet"
						min="1"
						max="6"
						required
					/>
					<br />
					<label for="height-inches">Inches</label>
					<br />
					<input
						onInput={(e) => setInches(+e.currentTarget.value)}
						type="number"
						name="height-inches"
						id="height-inches"
						min="0"
						max="11.99"
						step="0.01"
						required
					/>
				</div>
				<div>
					<h2>Weight</h2>
					<label for="weight">Pounds</label>
					<input
						onInput={(e) => setPounds(+e.currentTarget.value)}
						type="number"
						name="weight"
						id="weight"
						min="1"
						max="1399.99"
						step="0.01"
						required
					/>
				</div>

				<button type="submit" class={styles.submitBtn}>
					Calculate
				</button>
			</form>
			<div class={styles.results_container}>
				<p>Your BMI is:</p>
				<Show when={calculations()} fallback={<p></p>}>
					<span>{BMI().toFixed(1)}</span>
				</Show>
			</div>
		</section>
	)
}
export default AdultBMICalculator
