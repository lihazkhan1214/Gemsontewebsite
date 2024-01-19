"use client"

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Loader from "./Loader";
import SimpleTagInput from "./SimpleTagInput";
// import { updateMainserviceSate } from "@/constants";
interface MyComponentProps {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;

}

const AddPost: React.FC<MyComponentProps> = ({
  isModalOpen,
  setModalOpen,
  closeModal,
}) => {
  const [file, setFile] = useState<File | null>(null); // Specify the type of the file state
  const [load, setload] = useState(false);
  const [mainservices, setMainservices] = useState({
    Ename: '',
    Arname: '',
    Endescription: '',
    Ardescription: '',
    image: { url: '', public_id: '' }, // Initialize image with empty strings
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
      Ename: '',
      Arname: '',
      Endescription: '',
      Ardescription: '',
      image: { url: '', public_id: '' }, // Reset image to empty strings
      status: false,

    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };








  const handleUpload = async () => {



    if (!file) {
      alert("Please select an image");
      return;
    }
    setload(true);
    const cloudinaryUploadUrl = "https://api.cloudinary.com/v1_1/dyczf3coz/image/upload";
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    const uploadRes = await fetch(cloudinaryUploadUrl, {
      method: "POST",
      body: data,
    });



    if (uploadRes.ok) {
      alert("image upload")
      const responseJson = await uploadRes.json();
      const { url, public_id } = responseJson;

      setMainservices({
        ...mainservices,
        image: { url, public_id },
      });
      setload(false);


    }






  }












  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/mainservice`, {
        method: "POST",
        body: JSON.stringify(mainservices),
      });

      if (res.status === 201) {
        console.log("responsive ok");
        closeModal();
        handleReset();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error:", error);
    }



  };



  return (
    <div
      className={`  ${!isModalOpen ? "hidden" : "flex"
        } min-h-screen  items-center justify-center `}
    >
      {isModalOpen && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center ">
          <div className="bg-white h-[90vh] p-4 rounded-lg shadow-md w-[80%] md:w-[65%] z-50 overflow-y-scroll">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <Image
                  src={"/assets/fimages/cross.png"}
                  width={30}
                  height={30}
                  alt="cross"
                />
              </button>
            </div>

            <h2 className="text-[#141313] text-2xl font-[600]">Create Post</h2>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-start mt-5 gap-4 p-3">
                <div className="flex  justify-center items-center gap-5">
                  {
                    load ? <Loader /> : (<>
                      <label htmlFor="image"> <Image
                        src={mainservices.image?.url || "/assets/fimages/default.png"}
                        width={70}
                        height={70}
                        alt="profile"
                        className="flex items-center justify-center cursor-pointer rounded-md"
                      /></label>
                    </>)
                  }






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























                {/* this is dropdwon */}
                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">

                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="serviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Title
                    </label>
                    <input type="text" placeholder="Title..." className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md" />
                  </div>
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="serviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Author Name
                    </label>
                    <input type="text" placeholder="Author Name..." className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md" />
                  </div>
                </div>















                {/* second */}
                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">

                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="serviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      MainCategory
                    </label>
                    <select
                      name="serviceName"
                      id="service"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] bg-[#FFF] rounded-md"
                      required
                    >
                      <option value="" className="hidden" disabled selected>
                        MainCategory Name
                      </option>
                      <option value="Doctors visit">Doctors visit</option>
                      <option value="Caregiver">Caregiver</option>
                      <option value="Vaccination">Vaccination</option>
                      <option value="Nursing Service">Nursing Service</option>
                      <option value="Medical Test">Medical Test</option>
                    </select>
                  </div>
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="subserviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Sub Service Name
                    </label>
                    <select
                      name="subserviceName"
                      id="service"
                      className="text-[18px]  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] bg-[#FFF] rounded-md"
                      required
                    >
                      <option value="" className="hidden" disabled selected>
                        Sub Sercice Name
                      </option>
                      <option value="Doctors visit">Doctors visit</option>
                      <option value="Caregiver">Caregiver</option>
                      <option value="Vaccination">Vaccination</option>
                      <option value="Nursing Service">Nursing Service</option>
                      <option value="Medical Test">Medical Test</option>
                    </select>
                  </div>
                </div>









                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="w-full">
                    <label
                      htmlFor="subserviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Alternate Names
                    </label>



                    <input className="text-[18px] w-full  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md" placeholder="Names sperate by comma ,..." />

                  </div>

                </div>

















                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="w-full">
                    <label
                      htmlFor="subserviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Short Descrition
                    </label>



                    <textarea className="text-[18px] w-full  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md" placeholder="enter short descrition of post" name="" id="" ></textarea>

                  </div>

                </div>










                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="w-full">
                    <label
                      htmlFor="subserviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Long Descrition
                    </label>



                    <textarea className="text-[18px] w-full h-[300px]  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md" placeholder="Enter Long Descrition of Post" name="" id="" ></textarea>

                  </div>

                </div>











                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="w-full">
                    <label
                      htmlFor="subserviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Short History
                    </label>



                    <textarea className="text-[18px] w-full  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md" placeholder="Gem stones History..." name="" id="" ></textarea>

                  </div>

                </div>



                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="w-full">
                    <label
                      htmlFor="subserviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Countries of Origin
                    </label>



                    <input className="text-[18px] w-full  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md" placeholder="sperate countries name with comma,..." />

                  </div>

                </div>




                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="w-full">
                    <label
                      htmlFor="subserviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      Care Descrition
                    </label>



                   


                    <textarea className="text-[18px] w-full  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md" placeholder="Care Short Description..." name="" id="" ></textarea>

                  </div>

                </div>








                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="w-full">
                    <label
                      htmlFor="subserviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                    Upload Creation Method Video or Optionally
                    </label>



                   


                    <input type="file" className="text-[18px] w-full  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md" placeholder="upload short video..."  />

                  </div>

                </div>








                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">
                  <div className="w-full">
                    <label
                      htmlFor="subserviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                    Select four Images for color at time
                    </label>



                   


                    <input type="file" className="text-[18px] w-full  p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md" placeholder="upload short video..."  />

                  </div>

                </div>









                <div className="flex w-full flex-col gap-5 md:flex-row  justify-between items-center md:gap-10">

                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">
                    <label
                      htmlFor="serviceName"
                      className="text-[#111535] text-[20px] font-[400]"
                    >
                      BirthStones or Optionally
                    </label>
                    <select
                      name="serviceName"
                      id="service"
                      className="text-[18px]  bg-[#FFF] p-2 font-[400] text-[#7e82ad] outline-none border-2 border-[#BBBBBB] rounded-md"
                      required
                    >
                      <option value="" className="hidden" disabled selected>
                        MainCategory Name
                      </option>
                      <option value="Doctors visit">Doctors visit</option>
                      <option value="Caregiver">Caregiver</option>
                      <option value="Vaccination">Vaccination</option>
                      <option value="Nursing Service">Nursing Service</option>
                      <option value="Medical Test">Medical Test</option>
                    </select>
                  </div>
                  <div className="flex w-full flex-col  gap-1 lg:w-1/2">

                  </div>
                </div>



































                <div className="flex justify-center items-center w-full">
                  <div className="flex flex-col gap-2 ">

                    <button
                      type="submit"
                      className="text-[16px] text-[#FFFFFF] font-[400] bg-[#7C1DC9] py-2 px-4 rounded-[6px] "
                    >
                      Save
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

export default AddPost;