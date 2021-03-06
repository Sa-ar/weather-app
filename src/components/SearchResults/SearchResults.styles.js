import styled from 'styled-components';

export const SearchResultsWrapper = styled.section`
  margin: 0 auto;
  width: 80%;
  padding: 1.5rem 3rem;
  background-color: #7b57ae;
  color: #eaeaff;
  border-radius: 3px;
`;

export const SearchResultsHeader = styled.header`
  text-align: center;
`;

export const SelectedResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectedResultCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Next5DaysSection = styled.footer`
  margin-top: 2rem;
`;

export const Next5DaysList = styled.ol`
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style-type: none;
`;
