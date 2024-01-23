import { useState } from "react";
import {
  InLineLeft,
  InLineRight,
  ChatListOutLine,
  CityList,
  CityItem,
} from "../../css/chat/AreaListCss";

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
            <CityItem
              key={index}
              onClick={() => handleCityClick(city)}
              className={`${selectedCities.includes(city) ? "clicked" : ""}`}
            >
              {city}
            </CityItem>
          ))}
        </InLineLeft>
        <InLineRight></InLineRight>
      </ChatListOutLine>
    </>
  );
};
