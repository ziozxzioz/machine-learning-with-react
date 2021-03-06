// @flow
import React, { Component } from 'react';
import type {
	dendriteObject,
	positionObject,
} from 'app/component/neural-network/types';

type Props = {
	name: string,
	input: Array<dendriteObject> | number,
	output: number,
	bias: number,
	position: positionObject,
};

type State = {
	output: number,
};

export default class Neuron extends Component<Props, State> {
	calculateWeightedSum(props: Props): number {
		if (!props.input) {
			return 0;
		}
		if (typeof props.input === 'number') {
			return props.input;
		}
		return props.input
			.map((dendrite): number => {
				return dendrite.output;
			})
			.reduce((prev, curr) => prev + curr, 0);
	}

	render() {
		const { x, y } = this.props.position;
		return (
			<g id={this.props.name}>
				<circle
					cx={x}
					cy={y}
					r="50"
					stroke="black"
					strokeWidth="1"
					fill="white"
				/>
				<text x={x - 20} y={y - 10} fontSize="12">
					bias: {this.props.bias}
				</text>
				<text x={x - 25} y={y + 10} fontSize="12">
					output: {Math.round(this.props.output * 100) / 100}
				</text>
			</g>
		);
	}
}
