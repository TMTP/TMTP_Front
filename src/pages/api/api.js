import fetch from "isomorphic-unfetch";

async function fetchUsers() {
  const res = await fetch("https://randomuser.me/api/?results=500");
  const data = await res.json();
  return data.results;
}

export async function getStaticProps() {
  const users = await fetchUsers();

  return {
    props: {
      users,
    },
  };
}
