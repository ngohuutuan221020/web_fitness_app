import React from 'react';

import {
  Stack,
  Typography,
} from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '100px', height: '100px', cursor: 'pointer', gap: '10px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '100px', height: '100px', cursor: 'pointer', gap: '10px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '20px', height: '20px' }} />
    <Typography fontSize="14px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
