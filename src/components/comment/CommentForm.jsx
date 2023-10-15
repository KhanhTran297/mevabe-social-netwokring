import { Avatar, Form, Input } from "antd";
import { ILocalArrowRight } from "../svg/arrow_right";
import useComment from "../../hooks/useComment";
import PropTypes from "prop-types";
import { useState } from "react";
const CommentForm = (props) => {
  const { createComment } = useComment(props.id);
  const [inputValue, setInputValue] = useState("");
  const handleCreateComment = (values) => {
    const data = { postId: props.id, commentContent: values.target.value };
    setInputValue("");
    createComment(data);
  };

  return (
    <div className=" xl:w-full xl:flex xl:flex-row xl:gap-2 ">
      <Avatar
        src="https://s3.ap-southeast-1.amazonaws.com/family.circle/avatar/AVATAR_tB5idnWvVj.jpg"
        className=" xl:w-10 xl:h-10 xl:rounded-[40px]"
      />
      <Input
        placeholder="Say some thing about this post..."
        className=" xl:flex xl:flex-row-reverse xl:pl-4 xl:p-[0px] xl:h-10 xl:flex-1-0-0 xl:rounded-[100px] xl:items-center xl:cursor-text hover:!border-gray-400 "
        prefix={
          <ILocalArrowRight
            fill="#1F1A1C"
            className="   xl:p-[8px] xl:ml-3 hover:bg-tab hover:bg-opacity-[8%] xl:cursor-pointer xl:rounded-full"
          />
        }
        onPressEnter={(values) => {
          handleCreateComment(values);
        }}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      ></Input>
    </div>
  );
};
CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
};
export default CommentForm;