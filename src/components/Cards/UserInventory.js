import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Icon from '@mui/material/Icon';
import Divider from '@mui/material/Divider';
import ResourceDatagrid from '../Datagrid/ResourceDatagrid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InventoryLineChart from '../Charts/LineChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import { Grid } from '@mui/material';
import HistoryTable from '../Datagrid/HistoryTable';

/*
This card is used for demonstrating the hardware utilization of the user's inventory.
*/

const card = (
    <React.Fragment>
      <CardContent>
        <Grid container spacing={0}>
            <Box sx={{ display: 'inline-block', width: '25%', p: 1.5,}}>

                <Typography sx={{ fontSize: 20, fontWeight: 1000 }} color="#065073" gutterBottom >
                Zebra System Management
                </Typography>
                    <Typography sx={{ fontSize: 50, fontWeight: 1000 }} color="#599E05" gutterBottom >
                 {/*   Healthy */}
                    </Typography>
                <Typography sx={{ mr:2, }} color="text.secondary">
                </Typography>
                  <Icon 
                      component={TrendingUpIcon}
                      sx={{ fontSize: 40, color: '#599E05', mt: 5 }}
                  />
                  <Typography sx={{ mr:2, }} color="text.secondary">
                  </Typography>

            </Box>
            <Divider orientation="vertical" variant='middle' flexItem />
            <Box sx={{ display: 'inline-block', width: '70%', p:4.5, ml: 5 }}>
                <InventoryLineChart />
            </Box>
        </Grid>
      </CardContent>

    </React.Fragment>
  );

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  export default function Chart() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          {card}
            <CardActions disableSpacing>
              <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              >
              <ExpandMoreIcon />
              </ExpandMore>
          </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <HistoryTable />  
          </CardContent>
        </Collapse>
        </Card>
      </Box>
    );
  }