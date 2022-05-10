const getData = async (apiUrl: string) => {
  const res = await fetch(apiUrl);
  const data = await res.json();
  if(!data) {
      return { error: 'no data' }
  }
  return data;
}

export default getData;