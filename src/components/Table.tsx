import "solid-js"
import { createSignal, For } from "solid-js"
import styles from "./Table.module.css"

const Table = () => {
	const [columns, setColumns] = createSignal([
		{ id: 1, bmi: "Under 18.5", class: "Underweight", healthRisk: "Minimal" },
		{
			id: 2,
			bmi: "18.5 - 24.9",
			class: "Normal Weight",
			healthRisk: "Minimal",
		},
		{
			id: 3,
			bmi: "25 - 29.9",
			class: "Overweight",
			healthRisk: "Increased",
		},
		{
			id: 4,
			bmi: "30 - 34.9",
			class: "Obese",
			healthRisk: "High",
		},
		{
			id: 5,
			bmi: "35 - 39.9",
			class: "Severely Obese",
			healthRisk: "Very High",
		},
		{
			id: 6,
			bmi: "40 and over",
			class: "Morbidly Obese",
			healthRisk: "Extremely High",
		},
	])
	return (
		<table id="bmi" class={styles.bmi}>
			<thead>
				<tr>
					<th>BMI</th>
					<th>Classification</th>
					<th>Health Risk</th>
				</tr>
			</thead>
			<tbody>
				<For each={columns()}>
					{(column, i) => (
						<tr>
							<td>{column.bmi}</td>
							<td>{column.class}</td>
							<td>{column.healthRisk}</td>
						</tr>
					)}
				</For>
			</tbody>
		</table>
	)
}

export default Table
