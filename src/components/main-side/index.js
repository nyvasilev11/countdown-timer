import React from "react";
import EventNameCenter from "./EventNameDisplay";
import TimeAndDate from "./TimeAndDate";
import { MainSideSection } from "../../styles/styled-component";
import { useSelector } from "react-redux";

const MainSide = () => {
  const background = useSelector(state => state.bgColor);
  const text = useSelector(state => state.textColor);
  const borderRadius = useSelector(state => state.borderRadius);
  const width = useSelector(state => state.sizeWidth);
  const height = useSelector(state => state.sizeHeight);

  return (
    <MainSideSection
      background={background}
      tColor={text}
      radius={borderRadius}
      width={width}
      height={height}
      className="main-side">
      <EventNameCenter className="main-side__event-name" />
      <TimeAndDate className="main-side__time-date" />
    </MainSideSection>
  );
};

export default MainSide;
