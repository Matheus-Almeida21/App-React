import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import PhotoComments from './PhotoComments';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`appModalPhoto ${single ? 'appPhotoSingle' : ''}`}>
      <div className="appModalImg">
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className="appModalDetails">
        <div>
          <p className="appModalAuthor">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className="appVisualizacoes">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="appAtributos">
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
