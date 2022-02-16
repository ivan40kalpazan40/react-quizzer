import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className='container center'>
      <h1>Welcome to Qzzr</h1>
      <h4>the ultimate quizzer</h4>
      <p>Your Total Score: </p>
    </div>
  );
};

export default Home;
