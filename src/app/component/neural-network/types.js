// @flow
export type positionObject = { x: number, y: number };

export type activationFunction = {
	function: (n: number) => number,
	derivative: (n: number) => number,
};

export type dendriteObject = {
	id: string,
	weight: number,
	input: number,
	output: number,
	source: positionObject,
	destination: positionObject,
};

export type neuronObject = {
	id: string,
	position: positionObject,
	input: Array<dendriteObject> | number,
	output: number,
	bias: number,
	activation: activationFunction,
};

export type layerObject = {
	neurons: Array<neuronObject>,
	dendrites: Array<dendriteObject>,
};

export type networkObject = Array<layerObject>;

export type networkPositionsObject = Array<Array<positionObject>>;

export type propagationErrorObject = Array<Array<number>>;
