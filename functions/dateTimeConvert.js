import moment from "moment";
import "moment/locale/ru";

const dateTimeConvert = (dateString) => {
  if (!dateString) return "---";
  return moment(dateString).format("ll");
};

export default dateTimeConvert;
