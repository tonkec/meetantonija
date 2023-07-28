const NotesImage = ({ src }: { src: any }) => (
  <div className="row">
    <div className="col-xs-12">
      <img src={src} alt="note" style={{ width: '100%' }} />
    </div>
  </div>
);

export default NotesImage;