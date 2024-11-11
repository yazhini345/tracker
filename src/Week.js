

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  { value: 1, label: 'Week 1' },
  { value: 2, label: 'Week 2' },
  { value: 3, label: 'Week 3' },
  { value: 4, label: 'Week 4' },
  { value: 5, label: 'Week 5' },
  { value: 6, label: 'Week 6' },
  { value: 7, label: 'Week 7' },
  { value: 8, label: 'Week 8' },
  { value: 9, label: 'Week 9' },
  { value: 10, label: 'Week 10' },
  { value: 11, label: 'Week 11' },
  { value: 12, label: 'Week 12' },
];

function valuetext(value) {
  return `Week ${value}`;
}

export default function WeekSelector({ setSelectedWeek }) {
  const [selectedWeek, setLocalSelectedWeek] = React.useState(3); // Default week is 3

  const handleWeekChange = (event, newValue) => {
    setLocalSelectedWeek(newValue);
    setSelectedWeek(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',  // Set the Box to take full width
       // maxWidth: '600px', // Set a maximum width for the Box
        margin: '0 auto', // Center the Box horizontally
        marginTop:2,
        padding: 8,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor: '#f5f5f5',//#f5f5f5', // Background color for visibility
        borderRadius: '8px', // Rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
      }}
    >
      <p style={{ textAlign: 'center', fontSize: '1.7em', fontWeight: 'bold', 	color: '#585858'}}>
        Select the week: Week {selectedWeek}
      </p>
      <Slider
        aria-label="Week Selector"
        defaultValue={3}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        min={1}
        max={12}
        valueLabelDisplay="on"
        value={selectedWeek}
        onChange={handleWeekChange}
        sx={{
          width: '100%', // Make the slider take full width of the Box
          color: '#077680', // Customize the slider color
        }}
      />
    </Box>
  );
}
