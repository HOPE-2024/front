import { WordSwitcher } from "../../css/text/WordSwitcher";
import { StyledSearch } from "../../css/common/StyledSearch";
import { useNavigate } from "react-router-dom";

export const ElasticSearch = () => {
  const navigate = useNavigate();
  const onSearch = (searchOption, search) => {
    navigate(`/medicineresult?searchoption=${searchOption}&search=${search}`);
  };
  return (
    <>
      <WordSwitcher></WordSwitcher>
      <StyledSearch onSearch={onSearch}></StyledSearch>
    </>
  );
};
