import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import setContent from '../utils/setContent.js';

import ArtCard from '../components/artCard/ArtCard.js';

import SearchIcon from './../assets/search.svg';

const Title = styled.h1`
  width: 684px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  text-transform: capitalize;
  color: #393939;
`;

const TitleSpecial = styled.span`
  color: #f17900;
`;

export const MainPageTitle = () => {
  return (
    <Title>
      let's find some <TitleSpecial>art</TitleSpecial> here!
    </Title>
  );
};

const SearchBarContainer = styled.div`
  position: relative;
  margin-top: 72px;
`;

const SearchBarInput = styled.input`
  width: 762px;
  padding: 23.5px 48px 23.5px 16px;
  background: rgba(57, 57, 57, 0.05);
  border-radius: 16px;
  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
`;

const SortBarContainer = styled.div`
  margin-top: 20px;
  width: 762px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SortBarTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
`;

const SortBarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SortBarOptionLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  cursor: pointer;
`;

const searchSchema = Yup.object().shape({
  searchQuery: Yup.string().matches(
    /^[A-Za-z0-9\s]+$/,
    'Only latin letters, numbers, and spaces are allowed'
  ),
});

export const MainPageSearchBar = ({ artsGallerySearch, artsGallerySortOption, onSubmit }) => {
  return (
    <SearchBarContainer>
      <Formik
        initialValues={{ searchQuery: artsGallerySearch, sortOption: artsGallerySortOption }}
        validationSchema={searchSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await onSubmit(values.searchQuery, values.sortOption);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleSubmit, values, setFieldValue }) => (
          <Form>
            <Field
              id="searchQuery"
              name="searchQuery"
              type="text"
              placeholder="Search art, artist, work..."
              value={values.searchQuery}
              component={SearchBarInput}
              onChange={e => setFieldValue('searchQuery', e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  handleSubmit();
                }
              }}
            />
            <ErrorMessage style={{ color: 'red' }} name="searchQuery" component="div" />
            <SearchButton type="submit" disabled={isSubmitting}>
              <SearchIcon />
            </SearchButton>
            <SortBarContainer>
              <SortBarTitle>Sort:</SortBarTitle>
              <SortBarOptionContainer>
                <Field
                  type="radio"
                  id="option1"
                  name="sortOption"
                  value="deault"
                  checked={values.sortOption === 'deault'}
                  onChange={() => {
                    setFieldValue('sortOption', 'deault');
                    handleSubmit();
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <SortBarOptionLabel htmlFor="option1">deault</SortBarOptionLabel>
              </SortBarOptionContainer>
              <SortBarOptionContainer>
                <Field
                  type="radio"
                  id="option2"
                  name="sortOption"
                  value="modern"
                  checked={values.sortOption === 'modern'}
                  onChange={() => {
                    setFieldValue('sortOption', 'modern');
                    handleSubmit();
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <SortBarOptionLabel htmlFor="option2">start with modern</SortBarOptionLabel>
              </SortBarOptionContainer>
              <SortBarOptionContainer>
                <Field
                  type="radio"
                  id="option3"
                  name="sortOption"
                  value="ancient"
                  checked={values.sortOption === 'ancient'}
                  onChange={() => {
                    setFieldValue('sortOption', 'ancient');
                    handleSubmit();
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <SortBarOptionLabel htmlFor="option3">start with ancient</SortBarOptionLabel>
              </SortBarOptionContainer>
            </SortBarContainer>
          </Form>
        )}
      </Formik>
    </SearchBarContainer>
  );
};

const SectionSubtitle = styled.span`
  margin-top: 120px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #e0a449;
`;

export const MainPageGallerySubTitle = () => {
  return <SectionSubtitle>Topics for you</SectionSubtitle>;
};

const SectionTitle = styled.span`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #393939;
`;

export const MainPageGalleryTitle = () => {
  return <SectionTitle>Our special gallery</SectionTitle>;
};

const GalleryWrapper = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  height: 514px;
`;

const GallerySkeletonWrapper = styled.div`
  position: relative;
  width: 387px;
  height: 514px;
`;

const GalleryPlaceholderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
`;

const GalleryPlaceholder = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

export const MainPageSectionGallery = ({ process, data }) => {
  const renderArt = i => {
    if (data[i]) {
      return <ArtCard artInfo={data[i]} />;
    } else {
      return null;
    }
  };

  let noArtsPlaceholder = (
    <GalleryPlaceholderWrapper>
      <GalleryPlaceholder>No such arts</GalleryPlaceholder>
    </GalleryPlaceholderWrapper>
  );
  let content = (
    <>
      <GallerySkeletonWrapper>{setContent(process, () => renderArt(0))}</GallerySkeletonWrapper>
      <GallerySkeletonWrapper>{setContent(process, () => renderArt(1))}</GallerySkeletonWrapper>
      <GallerySkeletonWrapper>{setContent(process, () => renderArt(2))}</GallerySkeletonWrapper>
    </>
  );

  return (
    <GalleryWrapper>
      {!data.length && process !== 'loading' ? noArtsPlaceholder : content}
    </GalleryWrapper>
  );
};

const GalleryNavigationWrapper = styled.nav`
  align-self: flex-end;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 30px;
`;

const GalleryNavigationSpan = styled.span`
  padding: 0 10px;
  min-width: 30px;
  height: 30px;
  border-radius: 4px;
  background: #f9f9f9;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #393939;
`;

const GalleryNavigationButtonInactive = styled.button`
  padding: 0 10px;
  min-width: 30px;
  height: 30px;
  border-radius: 4px;
  background: #f9f9f9;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #393939;
`;

const GalleryNavigationButtonActive = styled.button`
  padding: 0 10px;
  min-width: 30px;
  height: 30px;
  background: #f17900;
  border-radius: 4px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`;

export const MainPageSectionGalleryNavigation = ({ paginationClicked, paginationArray }) => {
  if (!paginationArray.length) return null;
  const paginationElements = paginationArray.map((element, index) => {
    switch (element[0]) {
      case '<':
        return <GalleryNavigationButtonInactive key={index}>{'<'}</GalleryNavigationButtonInactive>;
      case '>':
        return <GalleryNavigationButtonInactive key={index}>{'>'}</GalleryNavigationButtonInactive>;
      case '...':
        return <GalleryNavigationSpan key={index}>{'...'}</GalleryNavigationSpan>;
      default:
        if (element[1]) {
          return (
            <GalleryNavigationButtonActive disabled key={index}>
              {element[0]}
            </GalleryNavigationButtonActive>
          );
        } else {
          return (
            <GalleryNavigationButtonInactive key={index}>
              {element[0]}
            </GalleryNavigationButtonInactive>
          );
        }
    }
  });

  return (
    <GalleryNavigationWrapper onClick={paginationClicked}>
      {paginationElements}
    </GalleryNavigationWrapper>
  );
};

export const MainPageCollectionSubtitle = () => {
  return <SectionSubtitle>Here some more</SectionSubtitle>;
};

export const MainPageCollectionTitle = () => {
  return <SectionTitle>Other works for you</SectionTitle>;
};
