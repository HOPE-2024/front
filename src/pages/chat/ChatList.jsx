import { useState } from "react";
import {
  InLineLeft,
  InLineRight,
  ChatListOutLine,
  CityList,
} from "../../css/chat/AreaListCss";
import { LineButton } from "../../component/common/LineButton";
import { Toggle } from "../../component/common/ToggleSwitch";

export const ChatList = () => {
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCityClick = (city) => {
    if (selectedCities.includes(city)) {
      setSelectedCities((prevCities) =>
        prevCities.filter((selectedCity) => selectedCity !== city)
      );
    } else {
      setSelectedCities((prevCities) => [...prevCities, city]);
    }
  };
  return (
    <>
      <ChatListOutLine>
        <InLineLeft>
          {CityList.map((city, index) => (
            <LineButton
              key={index}
              onClick={() => handleCityClick(city)}
              className={`${selectedCities.includes(city) ? "clicked" : ""}`}
            >
              {city}
            </LineButton>
          ))}
        </InLineLeft>
        <InLineRight>
          <Toggle />
        </InLineRight>
      </ChatListOutLine>
    </>
  );
};
