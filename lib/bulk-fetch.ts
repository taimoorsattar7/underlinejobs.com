import axios from "axios";

export default function bulkFetcher(url: any) {
  axios.all([
    axios.get(url)
  ])
    .then(axios.spread((data1, data2) => {
      return [data1, data2];
    }))
    .catch(errors => {
      // react on errors.
      return errors;
    });
}
