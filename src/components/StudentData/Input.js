import { React } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Table, TableCell, TableHead, TableRow } from '@mui/material';
import studentManager from '../../services/studentManager';

const MarksInput = ({ state: { validation }, state, actions, config }) =>
	config.subjects.map((subject) =>
		<TableCell 	key={ subject } align="center">
			<TextField
				error={ validation[subject] }
				label={ subject.toUpperCase() }
				id={ subject }
				focused={ true }
				type="number"
				color="primary"
				value={ state[subject] }
				onChange={ (evt) => {
					actions.setMark({ [subject]: evt.target.value });
					actions.checkValidation({ [subject]: evt.target.value });
				} }
				helperText={ studentManager.errorMessage(validation[subject]) }
			/></TableCell>);

const studentDetails = (context) =>
	<TableRow>
		<TableCell/>
		<TableCell align="center">
			<TextField
				fullWidth={ true }
				label="StudentName"
				id="name"
				focused={ true }
				color="primary"
				value={ context.state.name }
				onChange={ (evt) =>
					context.actions
						.setStudentName(evt.target.value) }
			/></TableCell>
		{MarksInput(context)}
	</TableRow>;

const Inputs = (context) =>

	<Box>
		<Table className="table">
			<TableHead>{ studentDetails(context)}</TableHead>
		</Table>
	</Box>;

export default Inputs;
