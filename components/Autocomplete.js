// // 검색어 입력 시마다 검색어에 대한 결과를 가져오는 함수 작성
// // 가져온 결과를 저장하기 위한 상태 변수 작성
// // 검색창 컴포넌트에 검색어 자동완성 기능 추가
// import React, { useState, useEffect } from "react";

// // 검색 결과가 업데이트될 때마다 콘솔에 검색 결과를 출력

// function Autocomplete(props) {
//   const { value, onChange, onSubmit } = props;
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // 검색어에 대한 결과를 가져오는 함수
//     const fetchSearchResults = async () => {
//       const response = await fetch(`API_URL?query=${value}`);
//       const results = await response.json();
//       setSearchResults(results);
//     };

//     if (value !== "") {
//       fetchSearchResults();
//     } else {
//       setSearchResults([]);
//     }
//   }, [value]);

//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" value={value} onChange={onChange} />
//       {/* 이전의 검색 결과를 보여줌 */}

//       <ul>
//         {searchResults.map((result) => (
//           <li key={result.id}>{result.title}</li>
//         ))}
//       </ul>
//       <button type="submit">검색</button>
//     </form>
//   );
// }

// export default Autocomplete;
import React, { useState, useEffect } from "react";

function Autocomplete(props) {
  const { value, onChange, onSubmit } = props;
  const [searchResults, setSearchResults] = useState([]);

  // 검색 결과가 업데이트될 때마다 콘솔에 검색 결과를 출력
  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  useEffect(() => {
    // 검색어에 대한 결과를 가져오는 함수
    const fetchSearchResults = async () => {
      const response = await fetch(`API_URL?query=${value}`);
      const results = await response.json();
      setSearchResults(results);
    };

    if (value !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [value]);

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
      <button type="submit">검색</button>
    </form>
  );
}

export default Autocomplete;
