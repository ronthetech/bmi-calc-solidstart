import { createSignal, Show } from "solid-js"
import styles from "./AdultBMICalculator.module.css"

const AdultBMICalculator = () => {
	const [centimeters, setCentimeters] = createSignal(1)
	const [kilograms, setKilograms] = createSignal(1)
	const [feet, setFeet] = createSignal(1)
	const [inches, setInches] = createSignal(0)
	const [pounds, setPounds] = createSignal(1)
	const [BMI, setBMI] = createSignal(0)
	const [calculations, setCalculations] = createSignal(false)
	const [metric, setMetric] = createSignal(false)

	// const weightDec = pounds() - Math.floor(pounds())
	// console.log(weightDec)

	const getImperialBMI = () => {
		//convert feet to inches
		const heightFt = feet() * 12

		// get total height and square it
		const height = heightFt + inches()
		const heightSquared = () => height * height

		const result = (pounds() / heightSquared()) * 703
		return result
	}

	const getMetricBMI = () => {
		// get total height and square it
		// const heightSquareRoot = () => centimeters() / centimeters()

		const result = (kilograms() / centimeters() / centimeters()) * 10000
		return result
	}

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault()
		if (!metric()) {
			setBMI(getImperialBMI())
		} else if (metric()) {
			setBMI(getMetricBMI())
		}
		setCalculations(true)
	}

	return (
		<section class={styles.calculator}>
			<form onsubmit={handleSubmit} name="bmi" id="bmi" class={styles.bmi}>
				<Show
					when={metric()}
					fallback={
						<p>
							<span class={styles.switch}>English</span>
							<span
								class={styles.switch_metric}
								onClick={() => {
									setMetric(true)
								}}>
								/Metric
							</span>
						</p>
					}>
					<p>
						<span
							class={styles.switch_metric}
							onClick={() => {
								setMetric(false)
							}}>
							English/
						</span>
						<span class={styles.switch}>Metric</span>
					</p>
				</Show>
				<Show
					when={metric()}
					fallback={
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
					}>
					<div>
						<h2>Height</h2>
						<label for="height-centimeters">Centimeters</label>
						<br />
						<input
							style={"margin-bottom: 2.75rem;"}
							onInput={(e) => setCentimeters(+e.currentTarget.value)}
							type="number"
							name="height-centimeters"
							id="height-centimeters"
							min="1"
							max="272"
							step="0.01"
							required
						/>
					</div>
				</Show>
				<Show
					when={metric()}
					fallback={
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
					}>
					<div>
						<h2>Weight</h2>
						<label for="weight">Kilograms</label>
						<input
							onInput={(e) => setKilograms(+e.currentTarget.value)}
							type="number"
							name="weight"
							id="weight"
							min="1"
							max="635"
							step="0.01"
							required
						/>
					</div>
				</Show>

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
