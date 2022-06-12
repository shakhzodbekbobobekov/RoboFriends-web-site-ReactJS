const Card = ({ id, email, name }) => {
  return (
    <div className="bg-light-green br-3 dib pa3 ma2 grow shadow-5 bw-2">
      <img src={`https://robohash.org/${id}`} alt="Robohash" />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
