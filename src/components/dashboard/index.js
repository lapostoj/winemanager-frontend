import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import NoData from './no-data';
import WineList from './wine-list';
import { getBottlesForCellarId } from '../../clients/bottle-client';

export default function Dashboard() {
  const CELLAR_ID = 5662025548038144;
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    loadBottles();
  }, []);

  const loadBottles = () => {
    getBottlesForCellarId(CELLAR_ID)
      .then((bottles) => {
        setBottles(bottles);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container classes={{ root: 'dashboard' }}>
      <Box display="flex" justifyContent="center">
        {bottles.length !== 0 ? (
          <WineList bottles={bottles} />
        ) : (
          <NoData onDataAdded={(wines) => setBottles(wines)} />
        )}
      </Box>
    </Container>
  );
}
