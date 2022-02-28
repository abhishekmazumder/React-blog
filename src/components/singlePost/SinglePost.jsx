import postBg from "../../assets/post-bg.jpg"
import {FaEdit, FaTrashAlt} from "react-icons/fa"
import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={postBg} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur.
          <div className="singlePostEdit">
            <FaEdit className="singlePostIcon" />
            <FaTrashAlt className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Abhishek Mazumder</b></span>
          <span className="singlePostDate">3 Hours Ago</span>
        </div>
        <p className="singlePostContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias error, beatae exercitationem necessitatibus dolorum laudantium, eum doloribus nihil quo modi libero qui eos ipsum aut, cupiditate sint deserunt. Eligendi commodi consectetur asperiores perferendis dolores ullam praesentium deleniti expedita unde inventore ea cum nemo omnis sed ad, hic facere. Iste est obcaecati cupiditate voluptatibus quisquam qui error commodi magni repellat dolorem, alias perferendis aliquid delectus sed quos a, praesentium earum maxime quam in ratione quibusdam! Fugiat temporibus, modi ex numquam possimus, facere dolorum delectus alias rem optio ipsam veritatis. Qui voluptatum architecto mollitia excepturi ea molestias magnam aliquam culpa quaerat. Aperiam deleniti, aspernatur quo sed repudiandae tenetur ipsum, alias error explicabo, doloribus voluptatibus rem voluptates in numquam odio et a similique id inventore libero porro ea! Quos reiciendis labore numquam incidunt animi ipsa, deserunt voluptatum omnis obcaecati deleniti possimus minima dignissimos assumenda nesciunt dolorem harum sint ullam quae cum rerum eaque. Ducimus ab repellendus, voluptatem recusandae hic ipsum magnam doloremque. Harum sit est quibusdam ratione aperiam ut eaque quae porro libero in? Est inventore laboriosam harum dicta fugit nemo provident in assumenda maxime ipsa praesentium voluptas, dolorum accusamus aliquam cum itaque? Nisi ipsam eveniet itaque ea nulla? Sint consequatur eaque quo corporis ex id culpa ad dicta voluptatum commodi, sunt aut doloremque aspernatur magni animi doloribus ut neque quam, minus omnis velit! Nisi iste corporis possimus id aliquam! Sunt laboriosam amet ex quibusdam! Corporis, alias vero? Atque quae iure quis nemo tempore officiis dicta aut quo ullam non ad consequatur dolore, consectetur possimus cupiditate nam repellat doloribus modi eos eum ex! Id necessitatibus aut neque rem vero similique doloribus consectetur voluptatem distinctio consequatur minus voluptate, repudiandae earum rerum, commodi officia in est tenetur dignissimos! Veniam quod omnis quae deserunt. Aliquid numquam atque omnis amet repellat harum quod eaque culpa nulla facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas laborum culpa deserunt ab quisquam doloremque omnis obcaecati! Dolore minima obcaecati cumque cupiditate animi nostrum vero eveniet, ab, est aperiam saepe ea iure aspernatur fugit in eum blanditiis perspiciatis. Laboriosam iusto consectetur expedita autem ea aliquid voluptas labore quam, temporibus ipsa vero delectus rem, repellat nesciunt blanditiis sit ducimus sed totam illo at eos impedit? Alias doloremque, nostrum aspernatur dolorum dolore repudiandae dolorem aperiam nemo itaque, debitis quam illum vitae excepturi, facere cupiditate amet eius voluptatum. Quo quisquam libero, esse iusto animi suscipit sequi corrupti sed exercitationem est nobis optio odio, totam quia assumenda reiciendis molestias eos doloremque. Aspernatur, accusamus! Deleniti animi illum sit debitis autem optio a maxime sed, aspernatur fugit. Sequi voluptate et natus accusantium! Voluptates quam numquam labore officiis quia. Reiciendis animi odio nemo tempore obcaecati quis consequuntur aperiam, ea soluta ducimus ad id facilis iure esse voluptas saepe. 
        </p>
      </div>
    </div>
  )
}

export default SinglePost