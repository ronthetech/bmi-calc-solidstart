import type { Component } from "solid-js"
import styles from "./App.module.css"
import AdultBMICalculator from "./components/AdultBMICalculator"
import Table from "./components/Table"

type HeaderProps = {
	title: string
}

const Header = (props: HeaderProps) => {
	return (
		<header>
			<div class={styles.header_bar}>
				<h2>{props.title}</h2>
			</div>
		</header>
	)
}

const App: Component = () => {
	return (
		<>
			<Header title="BMI Calculator" />
			<div class={styles.blue_bar}></div>
			<main>
				<h1>
					BMI <span class={styles.text_gradient}>CALCULATOR</span>
				</h1>
				<p class={styles.instructions}>
					The Body Mass Index (BMI) is a measurement of body fat using height
					and weight. To calculate BMI you would divide the body mass by the
					square of the body height.
					<br />
					<strong>Metric BMI Equation:</strong>
					<br />
					<code>weight (kg) / [height (m)] ** 2</code> OR
					<br />
					<code>[weight (kg) / height (cm) / height (cm)] * 10,000</code>
					<br />
					<strong>Imperial/English BMI Equation:</strong>
					<br />
					<code>weight (lb) / [height (in)] ** 2 * 703</code>
					<br />
					Or you can use the calculator below.
				</p>
				<section class={styles.bmi_grid}>
					<AdultBMICalculator />
					<Table />
				</section>
			</main>
		</>
	)
}

export default App
