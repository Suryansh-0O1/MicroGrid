import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import {
  TrendingUp,
  AttachMoney,
  PowerSettingsNew,
  WbSunny,
} from '@mui/icons-material';

const Dashboard = () => {
  // Mock data - replace with actual API calls
  const quickStats = {
    currentConsumption: '2.4 kW',
    dailyAverage: '45.6 kWh',
    peakHour: '14:00',
    estimatedCost: '$12.45',
  };

  const StatCard = ({ title, value, icon }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ p: 1, borderRadius: 1, bgcolor: 'primary.light', mr: 2 }}>
            {icon}
          </Box>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Box>
        <Typography variant="h4" component="div" sx={{ mb: 1 }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto' }}>
      {/* Overview Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Microgrid Energy Platform
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Welcome to your microgrid energy management dashboard. Monitor and optimize your energy consumption
          with real-time predictions and insights. Make data-driven decisions to reduce costs and improve
          efficiency.
        </Typography>
        <Button variant="contained" color="primary" href="/predict">
          Make New Prediction
        </Button>
      </Paper>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Current Consumption"
            value={quickStats.currentConsumption}
            icon={<PowerSettingsNew sx={{ color: 'primary.main' }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Daily Average"
            value={quickStats.dailyAverage}
            icon={<TrendingUp sx={{ color: 'primary.main' }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Peak Hour"
            value={quickStats.peakHour}
            icon={<WbSunny sx={{ color: 'primary.main' }} />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Today's Est. Cost"
            value={quickStats.estimatedCost}
            icon={<AttachMoney sx={{ color: 'primary.main' }} />}
          />
        </Grid>
      </Grid>

      {/* Energy Saving Tips */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Energy Saving Tips
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Peak Hours Management
              </Typography>
              <Typography variant="body2" paragraph>
                • Schedule high-energy activities during off-peak hours (10 PM - 6 AM)
                • Use automated controls to reduce consumption during peak periods
                • Monitor real-time pricing signals for cost-effective operation
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                System Optimization
              </Typography>
              <Typography variant="body2" paragraph>
                • Regular maintenance of HVAC systems
                • Optimize temperature setpoints based on occupancy
                • Implement smart scheduling for equipment operation
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            href="/analytics"
            sx={{ height: '100%', minHeight: 100 }}
          >
            View Detailed Analytics
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => {/* TODO: Handle download */}}
            sx={{ height: '100%', minHeight: 100 }}
          >
            Download Reports
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            href="/predict"
            sx={{ height: '100%', minHeight: 100 }}
          >
            Future Forecasting
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => {/* TODO: Handle settings */}}
            sx={{ height: '100%', minHeight: 100 }}
          >
            System Settings
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 