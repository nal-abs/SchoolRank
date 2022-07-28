import { React } from 'react';
import Inputs from './Input';
import TableContain from '../Table';
import Status from './Status';
import { Box } from '@mui/material';

const StudentData = (context) => {
	const { state: { studentDetails }} = context;

	return <Box>
		<h3>
			Students Database - Add Student Details</h3>
		<Inputs { ...context }/>
		<TableContain { ...{ ...context, data: { content: studentDetails }} }/>
		{ Status(context) }
	</Box>;
};

export default StudentData;
