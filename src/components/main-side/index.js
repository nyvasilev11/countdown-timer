import React from "react";
import EventNameCenter from "./EventNameDisplay";
import TimeAndDate from "./TimeAndDate";
import { MainSideSection } from "../../styles/styled-component";
import { useSelector } from "react-redux";

const MainSide = () => {
  const backgroundColor = useSelector(state => state.bgColor);
  const textColor = useSelector(state => state.textColor);
  const borderRadius = useSelector(state => state.borderRadius);
  const widthSize = useSelector(state => state.sizeWidth);
  const heightSize = useSelector(state => state.sizeHeight);
  const bgTransperancy = useSelector(state => state.bgTransperancy);
  const dateNameShow = useSelector(state => state.dateNameShowHide);

  return (
    <MainSideSection
      background={
        bgTransperancy === "transparency" ? "transperant" : backgroundColor
      }
      tColor={textColor}
      radius={borderRadius}
      width={widthSize}
      height={heightSize}
      className="main-side">
      {dateNameShow === "hideDateTitle" ? null : (
        <EventNameCenter className="main-side__event-name" />
      )}
      <TimeAndDate className="main-side__time-date" />
    </MainSideSection>
  );
};

export default MainSide;
