import React, { useEffect } from 'react';

import useArtService from '../../services/ArtService';

// @ts-ignore
import StyledArtCard from './styled.js';

const { getAllArts, process, setProcess } = useArtService();

useEffect(() => {
  onRequest();
}, []);

const onRequest = () => {
  getAllArts()
    .then(onArtGalleryLoaded)
    .then(() => setProcess('confirmed'));
};

const onArtGalleryLoaded = () => {};

const ArtCard = () => {
  return <StyledArtCard />;
};

export default ArtCard;
