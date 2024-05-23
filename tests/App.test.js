import '@testing-library/jest-dom'
import React from "react";
import { render, screen } from '@testing-library/react';

import {
    Wrapper,
    PhotoWrapper,
    Photo,
    Description,
    DescriptionTextWrapper,
    DescriptionTextArtName,
    DescriptionTextAuthorName,
    DescriptionTextVisibilityStatus,
    DescriptionTextFavoriteButton,
} from '../src/components/artCard/styled';

describe('StyledArtCard', () => {
    it('renders correctly with artInfo', () => {
        const artInfo = {
            id: '123',
            title: 'Test Art',
            artistName: 'Test Artist',
            imageUrl: 'https://example.com/test-art.jpg',
            isPublicDomain: true
        };
        const isFavorite = true;

        render(
            <Wrapper>
                <PhotoWrapper>
                    {artInfo.imageUrl ? (
                        <Photo src={artInfo.imageUrl} alt={artInfo.title} />
                    ) : (
                        null
                    )}
                </PhotoWrapper>
                <Description>
                    <DescriptionTextWrapper>
                        <DescriptionTextArtName>
                            {artInfo.title ? artInfo.title : 'Unknown title'}
                        </DescriptionTextArtName>
                        <DescriptionTextAuthorName>
                            {artInfo.artistName ? artInfo.artistName : 'Unknown artist'}
                        </DescriptionTextAuthorName>
                        <DescriptionTextVisibilityStatus>
                            {artInfo.isPublicDomain ? 'public' : 'private'}
                        </DescriptionTextVisibilityStatus>
                    </DescriptionTextWrapper>
                    <DescriptionTextFavoriteButton
                        $favorite={isFavorite}
                    >
                        null
                    </DescriptionTextFavoriteButton>
                </Description>
            </Wrapper>);

        expect(screen.getByText('Test Art')).toBeInTheDocument();
        expect(screen.getByText('Test Artist')).toBeInTheDocument();
        expect(screen.getByText('public')).toBeInTheDocument();
    });
});
