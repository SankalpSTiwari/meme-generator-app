import React from 'react';
import { useSearchParams } from 'react-router-dom';
const EditPage = () => {
  const [params] = useSearchParams();
  console.log(params.get('url'));
  return (
    <div>
      <img src={params.get('url')} width='250 px' />
    </div>
  );
};

export default EditPage;
