import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <React.Fragment>
      {loading ? (
        <button className="appButtonDelete" disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className="appButtonDelete">
          Deletar
        </button>
      )}
    </React.Fragment>
  );
};

export default PhotoDelete;
