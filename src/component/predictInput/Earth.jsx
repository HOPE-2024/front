import { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import styled from "styled-components";
// https://github.com/vasturiano/react-globe.gl?tab=readme-ov-file#container-layout

const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Earth = ({ Country = "Korea, Rep." }) => {
  const globeEl = useRef();
  const wrapperRef = useRef();
  const [globeSize, setGlobeSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const handleResize = () => {
      if (wrapperRef.current) {
        const { width, height } = wrapperRef.current.getBoundingClientRect();
        setGlobeSize({ width: width * 1, height: height * 1 });
      }
    };

    // 초기 사이즈 설정
    handleResize();

    // resize 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 국가별 위도와 경도
  const countryCoordinates = {
    "Korea, Rep.": { lat: 35.9078, lng: 127.7669 },
    Aruba: { lat: 12.5211, lng: -69.9683 },
    Afghanistan: { lat: 33.9391, lng: 67.71 },
    Angola: { lat: -11.2027, lng: 17.8739 },
    Albania: { lat: 41.1533, lng: 20.1683 },
    Andorra: { lat: 42.5462, lng: 1.6016 },
    "Arab World": { lat: 24.7036, lng: 44.3838 },
    "United Arab Emirates": { lat: 23.4241, lng: 53.8478 },
    Argentina: { lat: -38.4161, lng: -63.6167 },
    Armenia: { lat: 40.0691, lng: 45.0382 },
    "American Samoa": { lat: -14.271, lng: -170.1322 },
    "Antigua and Barbuda": { lat: 17.0608, lng: -61.7964 },
    Australia: { lat: -25.2744, lng: 133.7751 },
    Austria: { lat: 47.5162, lng: 14.5501 },
    Azerbaijan: { lat: 40.1431, lng: 47.5769 },
    // ...
  };

  const coordinates = countryCoordinates[Country];

  // coordinates가 유효한지 확인한 후 console.log 실행
  if (coordinates) {
    console.log("위도 : " + coordinates.lat);
    console.log("경도 : " + coordinates.lng);
  } else {
    console.log(Country + "의 좌표 정보가 없습니다.");
  }

  useEffect(() => {
    // coordinates가 유효할 때만 pointOfView 메서드 호출
    if (coordinates && globeEl.current) {
      globeEl.current.pointOfView(
        { lat: coordinates.lat, lng: coordinates.lng, altitude: 2 },
        1000
      );
    }
  }, [Country, coordinates]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          // coordinates가 유효한지 확인하고, 유효하지 않다면 빈 배열을 전달
          pointsData={coordinates ? [coordinates] : []}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "red"}
          pointAltitude={0}
          pointRadius={2}
          width={globeSize.width}
          height={globeSize.height}
          backgroundColor="rgba(255,255,255,0)"
        />
      </Wrapper>
    </>
  );
};
