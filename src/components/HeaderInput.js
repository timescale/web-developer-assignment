import styled from 'styled-components';
import {useSearchQuery} from "../hooks/SearchQuery"

const Input = styled.input`
  border: 1px solid green;
  background: white;
  width: 100%;
  padding: 10px 10px 10px 24px;
  padding-left: 30px;
  border: 1px solid #C0C4CC;
  border-radius: 2px;
  font-size: 12px;
`
const Container = styled.div`
  position: relative;
  width: 180px;
`
const SearchIcon = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  color: #898E9A;
`
const placeholder =  "Search for a movie"
const HeaderInput = () =>{
  const {query, setQuery} = useSearchQuery();
  const onInput = (e) => setQuery(e.target.value);
  return(
    <Container>
      <SearchIcon>
        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </SearchIcon>
      <Input placeholder={placeholder} value={query} onInput={onInput} />
    </Container>
  )
}
export default HeaderInput;