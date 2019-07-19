import {
  BETHENNY,
  LUANN,
  ALEX,
  RAMONA,
  JILL,
  KELLY,
  SONJA,
  CINDY,
  AVIVA,
  CAROLE,
  HEATHER,
  KRISTEN,
  DORINDA,
  JULES,
  TINSLEY,
  HARRY,
  TOM,
  BARBARA,
  JENNIFER,
  TOMAS,
  GARY,
} from './castMembers';

const castRelationships = {
  nodes: [
    //--------CENTERPOINT - BRAVO
    {
      id: 'BRAVO',
      isHousewife: false,
      isFriend: false,
      svg: require('../assets/Bravo_2017_logo.svg'),
    },
    //----------HOUSEWIVES
    { id: LUANN, isHousewife: true, isFriend: false },
    { id: BETHENNY, isHousewife: true, isFriend: false },
    { id: ALEX, isHousewife: true, isFriend: false },
    {
      id: RAMONA,
      isHousewife: true,
      isFriend: false,
      svg: require('../assets/heads/ramona.svg'),
    },
    {
      id: JILL,
      isHousewife: true,
      isFriend: false,
      svg: require('../assets/heads/iconmonstr-random-thin.svg'),
    },
    {
      id: KELLY,
      isHousewife: true,
      isFriend: false,
    },
    { id: SONJA, isHousewife: true, isFriend: false },
    { id: CINDY, isHousewife: true, isFriend: false },
    { id: AVIVA, isHousewife: true, isFriend: false },
    { id: CAROLE, isHousewife: true, isFriend: false },
    { id: HEATHER, isHousewife: true, isFriend: false },
    { id: KRISTEN, isHousewife: true, isFriend: false },
    { id: DORINDA, isHousewife: true, isFriend: false },
    { id: JULES, isHousewife: true, isFriend: false },
    { id: TINSLEY, isHousewife: true, isFriend: false },
    //---------------FRIENDS
    { id: JENNIFER, isHousewife: false, isFriend: true },
    { id: BARBARA, isHousewife: false, isFriend: true },
    //---------------EVERYONE ELSE
    { id: HARRY, isHousewife: false, isFriend: false, symbolType: 'square' },
    { id: TOM, isHousewife: false, isFriend: false },
    { id: TOMAS, isHousewife: false, isFriend: false },
    { id: GARY, isHousewife: false, isFriend: false },
  ],
  // -----------------------LINKS BETWEEN CAST
  links: [
    {
      source: 'BRAVO',
      target: LUANN,
      label: 'Cast member seasons 1-5, 7-11, friend season 6.',
    },
    {
      source: 'BRAVO',
      target: BETHENNY,
      label: 'Cast member seasons 1-4, 7-11.',
    },
    {
      source: 'BRAVO',
      target: ALEX,
      label: 'Cast member seasons 1-4.',
    },
    {
      source: 'BRAVO',
      target: RAMONA,
      label: 'Cast member seasons 1-11.',
    },
    {
      source: 'BRAVO',
      target: JILL,
      label: 'Cast member seasons 1-4, guest seasons 9-11.',
    },
    {
      source: 'BRAVO',
      target: KELLY,
      label: 'Cast member seasons 2-4, guest seasons 6-7.',
    },
    {
      source: 'BRAVO',
      target: SONJA,
      label: 'Cast member seasons 3-11',
    },
    {
      source: 'BRAVO',
      target: CINDY,
      label: 'Cast member season 4.',
    },
    {
      source: 'BRAVO',
      target: AVIVA,
      label: 'Cast member seasons 5-6.',
    },
    {
      source: 'BRAVO',
      target: CAROLE,
      label: 'Cast member seasons 5-10.',
    },
    {
      source: 'BRAVO',
      target: HEATHER,
      label: 'Cast member seasons 5-7, guest seasons 8-10.',
    },
    {
      source: 'BRAVO',
      target: KRISTEN,
      label: 'Cast member seasons 6-7.',
    },
    {
      source: 'BRAVO',
      target: DORINDA,
      label: 'Cast member seasons 7-11, guest season 4.',
    },
    {
      source: 'BRAVO',
      target: JULES,
      label: 'Cast member season 8.',
    },
    {
      source: 'BRAVO',
      target: TINSLEY,
      label: 'Cast member seasons 9-11.',
    },
    {
      source: 'BRAVO',
      target: BARBARA,
      label: 'Guest seasons 3, 6, 9, friend season 11',
    },
    {
      source: 'BRAVO',
      target: JENNIFER,
      label: 'Friend season 3',
    },

    {
      source: AVIVA,
      target: HARRY,
      label: 'Married, divorced in 2005. They have a son together.',
    },

    {
      source: SONJA,
      target: HARRY,
      label: 'On again, off again dating',
    },
    {
      source: RAMONA,
      target: HARRY,
      label: 'Spotted making out on several occasions',
    },
    {
      source: LUANN,
      target: TOM,
      label: 'Briefly married',
    },
    {
      source: RAMONA,
      target: TOM,
      label: 'Briefly dated',
    },
    {
      source: SONJA,
      target: TOM,
      label: 'Dated on and off for several years',
    },
    {
      source: SONJA,
      target: TOMAS,
      label:
        "Randomer Johnny Depp lookalike Sonja schlepped in St. Bart's (so did Luann)",
    },
    {
      source: LUANN,
      target: TOMAS,
      label:
        "Randomer Johnny Depp lookalike Luanna schlepped in St. Bart's (so did Sonja)",
    },
    {
      source: SONJA,
      target: RAMONA,
      label:
        'Not only are they castmates on RHONY, they formed a friendship sometime after college.',
    },
    {
      source: SONJA,
      target: TINSLEY,
      label:
        "As of 2017, they had been friends for 15 years, they've been part of the same crowd in NYC",
    },
    {
      source: DORINDA,
      target: RAMONA,
      label:
        'Dorinda and Ramonda met while their daughters were attending the same school.',
    },
    {
      source: JILL,
      target: GARY,
      label:
        'As of August 2018, Jilly was dating Gary and revealed that Ramona also used to date Gary as well.',
    },
    {
      source: RAMONA,
      target: GARY,
      label:
        'Ramona went on 4 dates with Gary while in the process of divorcing ex-husand, Mario Singer.',
    },
  ],
};
export default castRelationships;
