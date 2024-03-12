const getData = async (url, header) => {
  const data = await fetch(`${url}/${header}`).then((res) => res.json());

  return data;
};
