let cards = document.querySelector(".card-container");
const fetchData = async (config) => {
  try {
    const response = await axios(config);
    const data = response.data;
    return data;
  } catch (err) {
    throw Error("Data fetch failed!");
  }
  //console.log(data);
};

const loadData = async () => {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  posts.map((post) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    cards.appendChild(card);
  });
};
loadData();
