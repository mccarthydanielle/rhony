export const filter = (ab, neighborhoods, seasons) => {
  // eslint-disable-next-line
  const filteredLocations = ab.filter(curr => {
    let seasonFound = false;
    let neighborhoodFound = false;

    //check neighborhoods
    if (neighborhoods.size) {
      if (neighborhoods.has(curr.neighborhood)) {
        neighborhoodFound = true;
      }
    }

    //check seasons
    if (seasons.size) {
      for (let season of seasons) {
        if (curr.seasons.has(season) && seasonFound === false) {
          seasonFound = true;
        }
      }
    }
    // if both neighborhoods and seasons are being filtered
    if (
      neighborhoods.size &&
      seasons.size &&
      seasonFound &&
      neighborhoodFound
    ) {
      return curr;
    }

    //if only season is being filtered
    if (seasons.size && seasonFound && !neighborhoods.size) {
      return curr;
    }

    //if only neighborhood is being filtered
    if (neighborhoods.size && neighborhoodFound && !seasons.size) {
      return curr;
    }
  });
  return filteredLocations;
};
