import { useState, useEffect } from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import { useInsCardAlbum, useUpdCardAlbum } from "@/hooks/useCardAlbum";
import { useForm, SubmitHandler } from "react-hook-form";
import { CardAlbum } from "@/types/types";
import Image from "next/image";

const StyledForm = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 20px;
  box-shadow: 100px 100px 80px rgba(0, 0, 0, 0.03);
  z-index: 100;

  .title {
    color: black;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    margin-bottom: 4px;
  }

  .sub {
    text-align: center;
    color: black;
    font-size: 14px;
    width: 100%;
  }

  .sub.mb {
    margin-bottom: 1px;
  }

  .sub a {
    color: rgb(23, 111, 211);
  }

  .avatar {
    position: relative;
    height: 50px;
    width: 50px;
    background-color: rgb(23, 111, 211);
    border-radius: 50%;
    align-self: center;
    padding: 6px;
    cursor: pointer;
    box-shadow: 12.5px 12.5px 10px rgba(0, 0, 0, 0.015),
      100px 100px 80px rgba(0, 0, 0, 0.03);
    transition: 1s;
    &:hover {
      transform: scale(1.2);
    }
  }

  button {
    align-self: flex-end;
  }

  .input,
  button {
    border: none;
    outline: none;
    width: 100%;
    padding: 16px 10px;
    background-color: rgb(247, 243, 243);
    border-radius: 10px;
    box-shadow: 12.5px 12.5px 10px rgba(0, 0, 0, 0.015),
      100px 100px 80px rgba(0, 0, 0, 0.03);
  }
  p[role="alert"] {
    color: red;
  }

  button {
    margin-top: 12px;
    background-color: rgb(23, 111, 211);
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }

  .input:focus {
    border: 1px solid rgb(23, 111, 211);
  }

  #card-album-file {
    display: block;
  }
`;
interface RegisterFormProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  type: string;
  closeModal: () => void;
}

export default function RegisterForm({
  id = "",
  title = "",
  description = "",
  image="",
  type,
  closeModal,
}: RegisterFormProps) {
  const insCardAlbum = useInsCardAlbum();
  const updCardAlbum = useUpdCardAlbum();
  const settedImage = "https://koo-image-bucket.s3.ap-northeast-2.amazonaws.com/"+image

  const [avatarPreview, setAvatarPreview] = useState(image===""?"/upload/default.jpg":settedImage);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CardAlbum, any, undefined>({ defaultValues: { id: id } });

  const avatar = watch("image");
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      console.log(URL.createObjectURL(file))
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  const onSubmit: SubmitHandler<CardAlbum> = (data) => {
    if (type === "ins") {
      insCardAlbum(data);
    } else {
      updCardAlbum(data);
    }
    closeModal();
  };
  return (
    <>
      <Backdrop closeModal={closeModal} />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <span className="title">Insert new CardAlbum</span>
        <input
          type="file"
          id="card-album-file"
          accept=".jpg, .jpeg, .png"
          {...register("image")}
        />
        <label className="avatar" htmlFor="card-album-file">
          <Image
            src={avatarPreview}
            fill
            sizes="(max-width: 60px)"
            alt="default Avarta"
            className="nwull"
          />
        </label>
        <input
          type="text"
          className="input"
          placeholder="title"
          defaultValue={title}
          {...register("title", { required: true })}
        />
        {errors.title?.type === "required" && (
          <p role="alert">title is required</p>
        )}
        <input
          type="text"
          className="input"
          placeholder="description"
          defaultValue={description}
          {...register("description")}
        />
        {errors.description?.type === "required" && (
          <p role="alert">description is required</p>
        )}
        <button type="submit">Register</button>
      </StyledForm>
    </>
  );
}
