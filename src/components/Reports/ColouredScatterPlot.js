/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
import React from 'react';
import { VegaLite } from 'react-vega';
const encoding = (hundred) => ({
	x: {
		field: 'subjectName',
		type: 'nominal',
		title: 'Subject',
	},
	y: {
		field: 'marks',
		type: 'quantitative',
		title: 'Marks Obtained',
		scale: { domain: [0, hundred] },
	},
	color: {
		field: 'studentName',
		type: 'nominal',
	},
	shape: {
		field: 'studentName',
		type: 'nominal',
		title: 'Student Name',
	},
});
const ColouredScatterPlot = ({ config, data }) => {
	const { chartProps: { width, height }, hundred } = config;
	const spec = {
		width: width,
		height: height,
		transform: [{ flatten: ['subjectName', 'marks'] }],
		mark: { type: 'point', tooltip: true },
		encoding: encoding(hundred),
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite key={ rndString() }{ ...{ spec, data, actions } }/>;
};

export default ColouredScatterPlot;
