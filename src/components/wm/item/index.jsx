const Item = ({ icon, title, subtitile }) => {
  // console.log(icon);
  return (
    <div className="item">
      <div dangerouslySetInnerHTML={{ __html: icon }}></div>
      <div className="texts">
        <span className="headline">{title}</span>
        <p className="subtitile">{subtitile}</p>
      </div>
    </div>
  );
};

export default Item;
