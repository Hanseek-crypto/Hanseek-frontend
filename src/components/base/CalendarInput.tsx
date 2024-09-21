import colors from "@/styles/color";
import { Body2Regular } from "@/styles/texts";
import React, { useState, useRef } from "react";
import styled from "styled-components";

// const CalendarInput = ({ margin }: { margin: string }) => {
//   const [selectedDate, setSelectedDate] = useState<string | null>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleContainerClick = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//       inputRef.current.click(); // 트리거하여 캘린더를 띄우기 위함
//     }
//   };

//   const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const dateValue = event.target.value;
//     setSelectedDate(formatDate(dateValue));
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = `0${date.getMonth() + 1}`.slice(-2); // 월은 0부터 시작하므로 +1
//     const day = `0${date.getDate()}`.slice(-2);
//     return `${year} / ${month} / ${day}`;
//   };

//   return (
//     <DateInputContainer onClick={handleContainerClick} $margin={margin}>
//       {selectedDate ? (
//         <Body2Regular>{selectedDate}</Body2Regular>
//       ) : (
//         <PlaceholderText>YYYY / MM / DD</PlaceholderText>
//       )}
//       <HiddenInput ref={inputRef} type="date" onChange={handleDateChange} />
//     </DateInputContainer>
//   );
// };

const CalendarInput = ({ margin }: { margin: string }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // 날짜 선택창을 강제로 띄우는 메서드
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    setSelectedDate(formatDate(dateValue));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2); // 월은 0부터 시작하므로 +1
    const day = `0${date.getDate()}`.slice(-2);
    return `${year} / ${month} / ${day}`;
  };

  return (
    <DateInputContainer onClick={handleContainerClick} $margin={margin}>
      {selectedDate ? (
        <Body2Regular>{selectedDate}</Body2Regular>
      ) : (
        <PlaceholderText>YYYY / MM / DD</PlaceholderText>
      )}
      <HiddenInput ref={inputRef} type="date" onChange={handleDateChange} />
    </DateInputContainer>
  );
};

const DateInputContainer = styled.div<{ $margin: string }>`
  width: 720px;
  height: 55px;
  background-color: ${colors.grey1};
  border-radius: 8px;
  padding: 16px;
  margin: ${(props) => props.$margin};

  cursor: pointer;
  position: relative;
`;

const PlaceholderText = styled.span`
  color: ${colors.grey4};
  font-family: Pretendard;
  font-weight: 600; //Semibold
  font-size: 17px;
`;

const HiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export default CalendarInput;
