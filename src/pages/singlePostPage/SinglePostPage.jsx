import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./singlePostPage.css"

const SinglePostPage = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default SinglePostPage