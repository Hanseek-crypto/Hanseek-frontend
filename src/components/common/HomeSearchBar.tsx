import { useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";

export default function HomeSearchBar() {
  // 검색어 상태
  const [query, setQuery] = useState("");
  // 검색 결과 상태
  const [results, setResults] = useState<any[]>([]);
  // 검색 결과 토글 상태
  const [showResults, setShowResults] = useState(false);

  // 검색 실행 함수
  const handleSearch = async () => {
    if (!query) return;

    // 실제 API 요청 부분 (실제로 Google Places API 호출 시 사용)
    const response = await fetch(`/api/places?query=${query}`);
    if (!response.ok) {
      console.error("Failed to fetch places data");
      return;
    }
    const data = await response.json();
    console.log("Search Results:", data.results); // 검색 결과 출력

    setResults(data.results.slice(0, 5)); // 최대 5개까지만 표시
    setShowResults(true); // 결과 창 표시
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch(); // Enter 키를 누르면 검색 함수 실행
    }
  };

  // 검색어 입력 변화 시 발생하는 이벤트 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value === "") {
      setShowResults(false); // 입력창이 비워지면 검색 결과 숨기기
    }
  };
  return (
    <SearchContainer>
      <Image
        src="/images/hs_search_white.svg"
        alt="search"
        width={16}
        height={16}
        style={{ position: "absolute", left: "24px", zIndex: "11" }}
      />
      <SearchInput
        type="text"
        placeholder="Search for restaurants or locations"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {showResults && (
        <ResultsContainer>
          {results.map((result, index) => (
            <ResultItem key={index}>
              <Image
                src="/images/hs_search_white.svg"
                alt="search"
                width={16}
                height={16}
                style={{ marginRight: "10px" }}
              />
              {result.name}
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: absolute;
  width: 720px;
  z-index: 10;

  margin-top: 24px;

  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 13px 24px 12px 50px; /* 아이콘을 위한 패딩 */
  border: none;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.28); /* 흰색 배경에 투명도 28% */

  color: rgba(255, 255, 255, 0.64);
  font-family: SFPro;
  font-weight: 400;
  font-size: 15px;
  backdrop-filter: blur(10px); /* 배경 블러 효과 */

  &::placeholder {
    color: rgba(255, 255, 255, 0.64); /* placeholder 텍스트 색상 및 투명도 */
  }
`;

const ResultsContainer = styled.div`
  position: absolute;
  top: 50px; /* 검색창 아래에 위치하도록 설정 */
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 210px;
  overflow-y: auto;
  z-index: 10;
`;

const ResultItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  /* color: rgba(255, 255, 255, 0.7); */
  color: rgba(0, 0, 0, 0.7);

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:last-child {
    border-bottom: none;
  }
`;
