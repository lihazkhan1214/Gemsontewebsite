"use client"
import React, { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import { updateMainserviceSate } from "@/constants";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import Loader from "./Loader";

interface MyComponentProps {
  isEditModalOpen: boolean;
  setEditModalOpen: Dispatch<SetStateAction<boolean>>;
  EditcloseModal: () => void;
  id: string;
}

const EditMainService: React.FC<MyComponentProps> = ({
  isEditModalOpen,
  setEditModalOpen,
  EditcloseModal,
  id,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [load, setLoad] = useState(false);
  const [mainservices, setMainservices] = useState<updateMainserviceSate>({
    Ename: "",
    Arname: "",
    Endescription: "",
    Ardescription: "",
    image: { url: "", public_id: "" },
    status: false,
   
    
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMainservices({
      ...mainservices,
      [name]: value,
    });
  };

  const handleStatusChange = () => {
    setMainservices({
      ...mainservices,
      status: !mainservices.status,
    });
  };

  const handleReset = () => {
    setMainservices({
      Ename: "",
      Arname: "",
      Endescription: "",
      Ardescription: "",
      image: { url: "", public_id: "" },
      status: false,
     
    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  console.log("idedit",id)

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image");
      return;
    }
    setLoad(true);
    const cloudinaryUploadUrl =
      "https://api.cloudinary.com/v1_1/dyczf3coz/image/upload";
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    try {
      const uploadRes = await axios.post(cloudinaryUploadUrl, data);

      if (uploadRes.status === 200) {
        const { url, public_id } = uploadRes.data;

        setMainservices({
          ...mainservices,
          image: { url, public_id },
        });

        setLoad(false);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoad(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/mainservice/${id}`
        );
        console.log(res.data);
        setMainservices(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [id]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3000/api/mainservice/${id}`,
        mainservices
      );

      if (res.status === 201) {
        console.log("Response OK");
        EditcloseModal();
        handleReset();
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div
      className={`  ${!isEditModalOpen ? "hidden" : "flex"
        } min-h-screen  items-center justify-center `}
    >
      {isEditModalOpen && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center ">
          <div className="bg-white h-[90vh] p-4 rounded-lg shadow-md w-[80%] md:w-[65%] z-50 overflow-y-scroll">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={EditcloseModal}
              >
                <Image
                  src={"/images/cross.svg"}
                  width={30}
                  height={30}
                  alt="cross"
                />
              </button>
            </div>

            <h2 className="text-[#AF2245] text-2xl font-[600]">Main Service</h2>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-start mt-5 gap-4 p-3">
                <div className="flex  justify-center items-center gap-5">
                 
                    <label htmlFor="image">
                   
                      <Image
                        src={mainservices.image?.url}
                        width={70}
                        height={70}
                        alt="profile"
                        className="flex items-center justify-center cursor-pointer rounded-md"
                      />
                    </label>
                 
                  <input
                    type="file"
                    placeholder="Upload Image"
                    id="image"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <label
                    className="text-[18px] text-[#333333] cursor-pointer font-[500]"
                    onClick={handleUpload}
                  >
                    Upload Image
                  </label>
                </div>
                <div className="flex flex-col gap-5 md:flex-row  justify-start items-center md:gap-10">
                  <div className="flex flex-col  gap-3">
                    <label
                      htmlFor="enName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      En Name
                    </label>
                    <input
                      type="text"
                      name="Ename"
                      value={mainservices.Ename}
                      onChange={handleInputChange}
                      placeholder="Service Name (English)"
                      className="text-[18px] text-center p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col  gap-3">
                    <label
                      htmlFor="arName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Ar Name
                    </label>
                    <input
                      type="text"
                      name="Arname"
                      value={mainservices.Arname}
                      onChange={handleInputChange}
                      placeholder="Service Name (Arabic)"
                      className="text-[18px] text-center p-2 font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col  gap-2 w-full">
                  <label
                    htmlFor="desc"
                    className="text-[#111535] text-[20px] font-[400]"
                  >
                    En Description
                  </label>
                  <textarea
                    rows={1}
                    name="Endescription"
                    value={mainservices.Endescription}
                    onChange={handleInputChange}
                    placeholder="Service Description (English)"
                    className="text-[18px] w-full p-1  text-center font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                  />
                </div>
                <div className="flex flex-col  gap-2 w-full">
                  <label
                    htmlFor="desc"
                    className="text-[#111535] text-[20px] font-[400]"
                  >
                    Ar Description
                  </label>
                  <textarea
                    rows={1}
                    name="Ardescription"
                    value={mainservices.Ardescription}
                    onChange={handleInputChange}
                    placeholder="Product Description (Arabic)"
                    className="text-[18px] w-full p-1  text-center font-[400] text-[#7e82ad] outline-none border-b-2 border-[#AF2245] rounded-md"
                  />
                </div>

                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 ">
                    <label
                      htmlFor=""
                      className="text-[#AF2245] text-[18px] font-[400]"
                    >
                      Status
                    </label>
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="status"
                        checked={mainservices.status}
                        onChange={handleStatusChange}
                        className="w-[20px] h-[20px] accent-[#AF2245]"
                      />

                      <span className="text-[#898B9F] text-[18px] font-[400]">
                        Active
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="reset"
                      onClick={handleReset}
                      className="text-[16px] bg-[#AF22451A] font-[400] text-[#AF2245] py-2 px-4 rounded-[6px] "
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="text-[16px] text-[#FFFFFF] font-[400] bg-[#AF2245] py-2 px-4 rounded-[6px] "
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditMainService;