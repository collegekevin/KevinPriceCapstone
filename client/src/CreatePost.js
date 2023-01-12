import React, { useState } from "react";

function CreatePost({ user, setPosts }) {
  
    const [postImage, setPostImage] = useState("");
    const [caption, setCaption] = useState("");
    // const [newPostArray, setNewPostArray] = useState([])
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log("submitted");
      console.log(user);
  
      const postObj = { postImage, caption, user_id: user.id };
  
      const configObject = {
        method: "POST",
        headers: {
          "content-type": "application/JSON",
        },
        body: JSON.stringify(postObj),
      };
  
      fetch("http://localhost:9292/posts", configObject)
        .then((r) => r.json())
        .then((postReturn) => {
          setPosts((posts) => [postReturn, ...posts]);
          setPostImage("");
          setBody("");
        });
    }
  
    function handleImageChange(e) {
      setPostImage(e.target.value);
    }
  
    function handleCaptionChange(e) {
      setCaption(e.target.value);
    }
  
//     return (
//       <Grid textAlign="center" verticalAlign="middle" className="post-input">
//         <Grid.Column style={{ maxWidth: 430 }}>
//           <Form size="large" onSubmit={handleSubmit}>
//             <Form.Input
//               fluid
//               icon="globe"
//               iconPosition="left"
//               placeholder="Insert Image URL Here"
//               onChange={handleImageChange}
//               required
//             />
//             <Form.Input
//               fluid
//               icon="comment"
//               iconPosition="left"
//               placeholder="What would you like to tell the world today"
//               onChange={handleCaptionChange}
//               required
//             />
//             <Button className="post-button" fluid size="large">
//               Create Post
//             </Button>
//           </Form>
//         </Grid.Column>
//       </Grid>
//     );
//   }
  
//   export default CreatePost;