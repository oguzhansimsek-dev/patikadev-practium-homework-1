import axios from "axios";

const getData = async (id) => {
  var data = {};
  await axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      data = { ...data, ...res.data };
    });
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((res) => {
      data = { ...data, posts: [...res.data] };
    });

  return data;
};

export default getData;
