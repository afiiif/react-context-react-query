const waitAndGetRandomNumber = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;
  return new Promise((resolve) => setTimeout(() => resolve(getRandomNumber()), 1000));
};

export default async function exampleAPI(req, res) {
  const randomNumber = await waitAndGetRandomNumber(); // To simulate loading
  const resJson = {
    randomNumber,
    message: 'Random number generated successfully',
    lastUpdate: new Date(),
  };
  res.status(200).json(resJson);
}
