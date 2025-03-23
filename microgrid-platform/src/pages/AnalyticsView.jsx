import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

// Mock data - replace with actual API data
const timeSeriesData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  actual: Math.random() * 5 + 2,
  predicted: Math.random() * 5 + 2,
}));

const featureImportance = [
  { feature: 'Temperature', importance: 0.25 },
  { feature: 'Humidity', importance: 0.20 },
  { feature: 'Time of Day', importance: 0.18 },
  { feature: 'Day of Week', importance: 0.15 },
  { feature: 'Wind Speed', importance: 0.12 },
  { feature: 'Pressure', importance: 0.10 },
].sort((a, b) => b.importance - a.importance);

const weeklyPattern = Array.from({ length: 7 }, (_, i) => ({
  day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i],
  consumption: Math.random() * 100 + 50,
}));

const AnalyticsView = () => {
  const [timeRange, setTimeRange] = useState('24h');

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto' }}>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">Energy Analytics</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              label="Time Range"
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="24h">Last 24 Hours</MenuItem>
              <MenuItem value="7d">Last 7 Days</MenuItem>
              <MenuItem value="30d">Last 30 Days</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary">
            Download Report
          </Button>
        </Box>
      </Box>

      {/* Time Series Chart */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Energy Consumption Over Time
          </Typography>
          <Box sx={{ height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis label={{ value: 'Energy (kWh)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual" />
                <Line type="monotone" dataKey="predicted" stroke="#82ca9d" name="Predicted" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Feature Importance */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Feature Importance
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={featureImportance}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 1]} />
                    <YAxis dataKey="feature" type="category" />
                    <Tooltip />
                    <Bar dataKey="importance" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Weekly Pattern */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Weekly Consumption Pattern
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyPattern}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis label={{ value: 'Energy (kWh)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="consumption" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Outlier Detection */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Anomaly Detection
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis label={{ value: 'Energy (kWh)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="actual"
                      stroke="#8884d8"
                      name="Consumption"
                      dot={(props) => {
                        const isOutlier = Math.abs(props.payload.actual - props.payload.predicted) > 1;
                        return isOutlier ? (
                          <circle
                            cx={props.cx}
                            cy={props.cy}
                            r={6}
                            fill="red"
                            stroke="none"
                          />
                        ) : null;
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsView; 