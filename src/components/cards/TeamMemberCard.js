import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { MdAccountBalanceWallet, MdBook, MdBrush, MdCameraEnhance, MdLoyalty, MdRecordVoiceOver } from 'react-icons/md';
import placeholder from '../../assets/PNG/placeholder.png';
import React from 'react';

const teamColors = {
  'creative': 'purple.500',
  'marketing': 'red.500',
  'curation': 'yellow.500',
  'production': 'green.500',
  'logistics': 'blue.500',
  'finance': 'gray.500',
};

const teamIcons = {
  'creative': <MdBrush />,
  'marketing': <MdLoyalty />,
  'curation': <MdRecordVoiceOver />,
  'production': <MdCameraEnhance />,
  'logistics': <MdBook />,
  'finance': <MdAccountBalanceWallet />,
};


export const TeamMemberCard = ({ name, bio, url, team, year }) => {
  const fallback = <Image src={placeholder}
                          borderRadius={['', 'full']}
                          border='2px'
                          m={['', '3%']}
                          borderWidth={['4px', '8px']}
                          borderColor={teamColors[team]}
                          boxSize={['100%', '30vh']} />;
  return (
    <Stack borderWidth="1px" borderRadius="lg" shadow="md" direction={['column', 'row']}>
      <Image
        m={['', '3%']}
        fallback={fallback}
        src={url}
        alt={name}
        borderRadius={['', 'full']}
        border='2px'
        borderWidth={['4px', '8px']}
        borderColor={teamColors[team]}
        objectFit="scale-dowm"
        boxSize={['30vh']}
      />
      <Stack w="100%" direction='column' p={['8%', '4%']}>
        <Text
          w="100%"
          mt="1"
          fontWeight="bold"
        >
          {name} (C`{year})
        </Text>
        <Stack
          w="100%"
          textAlign="left"
          color={teamColors[team]}
          fontWeight="bold"
          direction='row'
        >
          <Text>
            {team.charAt(0).toUpperCase() + team.slice(1)}
          </Text>
          <Box>
            {teamIcons[team]}
          </Box>

        </Stack>
        <Text
          w="100%"
          textAlign="left"
          pr={'10%'}
        >
          {bio}
        </Text>
      </Stack>
    </Stack>
  );
};