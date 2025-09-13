import PropTypes from "prop-types";

function Button({ onClick, children }) {
  return (
    <button
      className="bg-purple-600 text-white p-1 rounded-sm cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    console.log(`Playing ${movieName}!`);
  }
  return <Button onClick={handlePlayClick}>Play {movieName}</Button>;
}

function UploadButton() {
  return <Button onClick={() => console.log("Uploading...")}>Upload</Button>;
}

function ToolBar() {
  return (
    <div>
      <PlayButton movieName="Tom & Jerry" />
      <UploadButton />
    </div>
  );
}
PlayButton.propTypes = {
  movieName: PropTypes.string.isRequired,
};
export default ToolBar;
