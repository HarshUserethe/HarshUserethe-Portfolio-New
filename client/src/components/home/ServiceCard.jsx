import React, { useState } from 'react';
import { Box, Typography, Collapse, IconButton } from '@mui/material';
import { LuChevronDown } from 'react-icons/lu';

const ServiceCard = ({ icon: Icon, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#111116',
        borderRadius: '8px',
        padding: '20px 60px',
        marginBottom: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#222',
        },
      }}
    >
      <Box
        onClick={handleToggle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Icon size={24} color="#fff" />
          <Typography
            variant="h6"
            sx={{
              color: '#fff',
              fontSize: '16px',
              fontWeight: 400,
            }}
          >
            {title}
          </Typography>
        </Box>
        <IconButton
          sx={{
            color: '#fff',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            padding: '4px',
          }}
        >
          <LuChevronDown size={20} />
        </IconButton>
      </Box>
      <Collapse in={expanded}>
        <Typography
          sx={{
            color: '#999',
            fontSize: '14px',
            marginTop: '16px',
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </Collapse>
    </Box>
  );
};

// Demo component showing how to use it
export default ServiceCard;