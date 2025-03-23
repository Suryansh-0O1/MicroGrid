import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const PredictionForm = () => {
  const [inputs, setInputs] = useState({
    temperatures: Array(9).fill(0),
    humidity: Array(9).fill(0),
    outdoorTemp: 0,
    outdoorHumidity: 0,
    pressure: 1013.25, // Default sea level pressure
    windSpeed: 0,
    visibility: 10, // Default good visibility
    hour: new Date().getHours(),
    weekday: new Date().getDay(),
  });

  const handleTemperatureChange = (index, value) => {
    const newTemps = [...inputs.temperatures];
    newTemps[index] = Number(value);
    setInputs({ ...inputs, temperatures: newTemps });
  };

  const handleHumidityChange = (index, value) => {
    const newHumidity = [...inputs.humidity];
    newHumidity[index] = Number(value);
    setInputs({ ...inputs, humidity: newHumidity });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle prediction API call
    console.log('Prediction inputs:', inputs);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1200, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Energy Consumption Prediction
      </Typography>
      
      <Grid container spacing={3}>
        {/* Temperature Inputs */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Temperature Sensors (°C)
              </Typography>
              <Grid container spacing={2}>
                {inputs.temperatures.map((temp, index) => (
                  <Grid item xs={12} sm={6} md={4} key={`temp-${index}`}>
                    <TextField
                      fullWidth
                      label={`T${index + 1}`}
                      type="number"
                      value={temp}
                      onChange={(e) => handleTemperatureChange(index, e.target.value)}
                      InputProps={{ inputProps: { min: -50, max: 100 } }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Humidity Inputs */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Humidity Sensors (%)
              </Typography>
              <Grid container spacing={2}>
                {inputs.humidity.map((hum, index) => (
                  <Grid item xs={12} sm={6} md={4} key={`hum-${index}`}>
                    <TextField
                      fullWidth
                      label={`RH${index + 1}`}
                      type="number"
                      value={hum}
                      onChange={(e) => handleHumidityChange(index, e.target.value)}
                      InputProps={{ inputProps: { min: 0, max: 100 } }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Outdoor Conditions */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Outdoor Conditions
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={2}>
                  <TextField
                    fullWidth
                    label="Temperature (°C)"
                    type="number"
                    value={inputs.outdoorTemp}
                    onChange={(e) => setInputs({ ...inputs, outdoorTemp: Number(e.target.value) })}
                    InputProps={{ inputProps: { min: -50, max: 100 } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <TextField
                    fullWidth
                    label="Humidity (%)"
                    type="number"
                    value={inputs.outdoorHumidity}
                    onChange={(e) => setInputs({ ...inputs, outdoorHumidity: Number(e.target.value) })}
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <TextField
                    fullWidth
                    label="Pressure (hPa)"
                    type="number"
                    value={inputs.pressure}
                    onChange={(e) => setInputs({ ...inputs, pressure: Number(e.target.value) })}
                    InputProps={{ inputProps: { min: 800, max: 1200 } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <TextField
                    fullWidth
                    label="Wind Speed (m/s)"
                    type="number"
                    value={inputs.windSpeed}
                    onChange={(e) => setInputs({ ...inputs, windSpeed: Number(e.target.value) })}
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <TextField
                    fullWidth
                    label="Visibility (km)"
                    type="number"
                    value={inputs.visibility}
                    onChange={(e) => setInputs({ ...inputs, visibility: Number(e.target.value) })}
                    InputProps={{ inputProps: { min: 0, max: 50 } }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Time Features */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Time Features
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Hour of Day</InputLabel>
                    <Select
                      value={inputs.hour}
                      label="Hour of Day"
                      onChange={(e) => setInputs({ ...inputs, hour: Number(e.target.value) })}
                    >
                      {Array.from({ length: 24 }, (_, i) => (
                        <MenuItem key={i} value={i}>
                          {i.toString().padStart(2, '0')}:00
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Weekday</InputLabel>
                    <Select
                      value={inputs.weekday}
                      label="Weekday"
                      onChange={(e) => setInputs({ ...inputs, weekday: Number(e.target.value) })}
                    >
                      {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, i) => (
                        <MenuItem key={i} value={i}>
                          {day}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          sx={{ minWidth: 200 }}
        >
          Generate Prediction
        </Button>
      </Box>
    </Box>
  );
};

export default PredictionForm; 