import { capitalize } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import ModalProps from "../../interfaces/react-props/ModalProps";
import { getAPI, postAPI } from "../../lib/fetchAPI";
import Modal from "../common/Modal";
import { SuccessIcon, WarnIcon } from "../Icon";

const LoginInput: React.FC<{
  label: string;
  value: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
  errorMsg?: string;
}> = (props) => {
  return (
    <div className="grid grid-cols-4 mb-5">
      <label className="flex items-center col-span-1" htmlFor={props.id}>
        {props.label}
      </label>
      <div className="relative col-span-3">
        <input
          type={props.type}
          id={props.id}
          name={props.id}
          className={`w-full p-2 text-sm text-gray-700 border border-gray-300 rounded ${
            props.errorMsg
              ? "focus:outline-red-500 focus:border-red-500"
              : "focus:outline-indigo-700 focus:border-indigo-700"
          }`}
          value={props.value}
          onChange={props.onChange}
        />
        {props.errorMsg && (
          <div className="absolute flex items-center text-xs text-red-500 top-full">
            <WarnIcon className="mr-1 text-red-500" />
            {props.errorMsg}
          </div>
        )}
      </div>
    </div>
  );
};

const LoginModal: React.FC<ModalProps> = ({
  openModal,
  closeModal,
  isOpen,
}) => {
  const initialLoginInfo = {
    email: "",
    password: "",
  };

  const [loginInfo, setLoginInfo] = useState({ ...initialLoginInfo });
  const [inputErr, setInputErr] = useState({ ...initialLoginInfo });
  const [msg, setMsg] = useState<{
    status: "success" | "failure";
    text: string;
  } | null>(null);

  const isBlankInput =
    loginInfo.email.length === 0 || loginInfo.password.length === 0;
  const noInputErr =
    inputErr.email.length === 0 && inputErr.password.length === 0;

  const isInvalid = isBlankInput || !noInputErr;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: postAPI("/api/login"),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["login"]);
    },
  });

  const handleChange =
    (field: string): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      e.preventDefault();
      setLoginInfo((prev) => ({ ...prev, [field]: e.target.value }));

      const inputLength = e.target.value.length;

      //Validate email
      if (field === "email") {
        if (!e.target.value.includes("@") && inputLength > 0) {
          setInputErr((prev) => ({ ...prev, email: "Invalid email" }));
        } else {
          setInputErr((prev) => ({ ...prev, email: "" }));
        }
      }

      //validate password
      if (field === "password") {
        const invalidLength = inputLength > 0 && inputLength < 8;

        if (invalidLength) {
          setInputErr((prev) => ({ ...prev, password: "Invalid password" }));
        } else {
          setInputErr((prev) => ({ ...prev, password: "" }));
        }
      }
    };

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    if (!isInvalid) {
      mutation.mutate(loginInfo);
    }
  };

  useEffect(() => {
    if (!loginInfo.email && !loginInfo.password) {
      setMsg(null);
    }
  }, [loginInfo]);

  return (
    <Modal
      openModal={openModal}
      closeModal={() => {
        closeModal();
        setLoginInfo({ ...initialLoginInfo });
        setInputErr({ ...initialLoginInfo });
        setMsg(null);
      }}
      isOpen={isOpen}
      title={
        <p className="font-[500]">
          Login to <span className="text-indigo-700">Cardsu</span>
        </p>
      }
      className="sm:w-[30rem]"
      isMobileFullScreen={false}
    >
      <form onSubmit={handleSubmit} className="py-3">
        {/* INPUT */}
        {Object.keys(loginInfo).map((info) => (
          <LoginInput
            key={`${info}-login`}
            //@ts-ignore
            value={loginInfo[info]}
            //@ts-ignore
            errorMsg={inputErr[info]}
            id={`${info}-login`}
            onChange={handleChange(info)}
            label={capitalize(info)}
            type={info === "password" ? "password" : "text"}
          />
        ))}
        {/* FOOTER */}
        <div
          className={`flex items-end mt-2 ${
            msg ? "justify-between" : "justify-end"
          }`}
        >
          {msg && (
            <div
              className={`text-sm flex items-center ${
                msg.status === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {msg.status === "success" ? (
                <SuccessIcon className="mr-1 text-green-500" />
              ) : (
                <WarnIcon className="mr-1 text-red-500" />
              )}{" "}
              {msg.text}
            </div>
          )}
          <button
            disabled={isInvalid}
            className={`px-6 py-2 rounded ${
              isInvalid
                ? "text-gray-400 bg-gray-200"
                : "text-white bg-indigo-700 hover:bg-indigo-800"
            }`}
          >
            Login
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;
