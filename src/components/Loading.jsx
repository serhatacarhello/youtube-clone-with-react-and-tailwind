import loadingImage from "../assets/loading.png";

const Loading = () => {
  return (
    <div className="rounded-full">
    <img
      className="mx-auto rounded-full"
      src={loadingImage}
      alt="loading Image"
    />
  </div>
  )
}

export default Loading