const Avatar = (props) => {
  return (
    <div>
      <img alt={props.avatarsArray.name} src={props.avatarsArray.picture}></img>
      <h3>{`${props.avatarsArray.name}`}</h3>
    </div>
  );
};

export default Avatar;
