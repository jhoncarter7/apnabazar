import { useState } from "react";
import { app } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSelector } from "react-redux";
export default function Dashboard() {
  const [files, setFile] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    categories: "",
    subCategories: "",
    oldPrice: "",
    newPrice: "",
    description: "",
    imageUrl: [],
    userRef: "",
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [imageUpload, setImageUpload] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null)
  console.log(formData);
  const { currentUser } = useSelector((state) => state.user);
  const imageSubmitHandler = () => {
    setImageUpload(true);
    setImageUploadError(false);
    if (files.length > 0 && files.length + formData.imageUrl.length < 7) {
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      console.log(promises);
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrl: formData.imageUrl.concat(urls),
          });
          setImageUpload(false);
          setImageUploadError(false);
        })
        .catch((error) => {
          console.log(error);
          setImageUpload(false);
          setImageUploadError("Image Upload Failed (2 mb max size per image)");
        });
    } else {
      setImageUpload(false);
      setImageUploadError("You can only upload 6 images per listing");
    }
  };

  const storeImage = (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`uploaded ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  const removeItem = (index) => {
    setFormData({
      ...formData,
      imageUrl: formData.imageUrl.filter((_, i) => i !== index),
    });
  };
  const changehandler = (e) => {
    if (
      e.target.type === "text" ||
      e.target.type === "number" ||
      e.target.type === "textarea" ||
      e.target.type === "select-one"
    ) {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if(formData.imageUrl.length < 1){
        return setError("You have to upload at least 1 image")
      }
      if(+formData.oldPrice < +formData.newPrice){
        return setError("Discount price must be lower than regular price");
      }
      setLoading(true);
      const res = await fetch(`/api/admin/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      if (data.message !== "success") {
        setError(data.message);
        setLoading(false)
        return;
      }
      setSuccessMsg(data.message)
      setLoading(false)
      setError(null);
    } catch (error) {
      setError(error);
      setLoading(false)
    }

  };

  return (
    <div className="">
      <form
        onSubmit={submitHandler}
        className="w-[75%] shadow-md mx-auto mt-9 p-4 "
      >
        <div className="flex flex-col md:flex-row sm:flex-1 gap-4">
          <div className="flex flex-col gap-4">
            {/*  */}
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold text-gray-500">
                Title
              </label>
              <input
                className="text-gray-700  px-3 border-2 rounded-lg py-1 outline-none"
                type="text"
                id="title"
                onChange={changehandler}
                value={formData.title}
              />
            </div>
            {/*  price*/}
            <div className="flex  gap-2">
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-lg font-semibold text-gray-500">
                  Categories
                </label>
                <select
                  id="categories"
                  onChange={changehandler}
                  value={formData.categories}
                  className="text-gray-700  px-3 border-2 rounded-lg py-1 outline-none"
                >
                  {/* <option selected >select one</option> */}
                  <option defaultValue>choose any</option>
                  <option>vegetable</option>
                  <option>Groceries</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-lg font-semibold text-gray-500">
                  SubCategories
                </label>
                <select
                  id="subCategories"
                  onChange={changehandler}
                  value={formData.subCategories}
                  className="text-gray-700  px-3 border-2 rounded-lg py-1 outline-none"
                >
                  <option defaultValue>choose any</option>
                  <option>veg&fruit</option>
                  <option>munchies</option>
                  <option>DryFruits</option>
                  <option>Sauces&Spreads</option>
                  <option>Instant&Frozen</option>
                  <option>tea&coffe</option>
                  <option>DairyBreakfast</option>
                  <option>PersonalCare</option>
                  <option>sweetTooth</option>
                  <option>coldDrink</option>
                  <option>Cleaning</option>
                  <option>Atta&Rice</option>
                  <option>BabyCare</option>
                  <option>Bakery</option>
                </select>
              </div>
            </div>
            {/*  */}
            <div className="sm:flex  gap-2">
          
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-lg font-semibold text-gray-500">
                  oldPrice
                </label>
                <input
                  className="text-gray-700  sm:px-3 border-2 rounded-lg py-1 outline-none"
                  type="number"
                  id="oldPrice"
                  onChange={changehandler}
                  value={formData.oldPrice}
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-lg font-semibold text-gray-500">
                  newPrice
                </label>
                <input
                  className="text-gray-700  sm:px-3 border-2 rounded-lg py-1 outline-none"
                  type="number"
                  id="newPrice"
                  onChange={changehandler}
                  value={formData.newPrice}
                />
              </div>
            
            </div>
            {/*  */}
            <label className="text-lg font-semibold text-gray-500">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              onChange={changehandler}
              value={formData.description}
              required
              cols="10"
              rows="7"
              className="text-gray-700  px-3 border-2 rounded-lg py-1 outline-none"
            ></textarea>
          </div>
          {/* image */}

          <div className="flex flex-col items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload image</span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {" "}
                  JPG (MAX. 800x400px)
                </p>
              </div>
              <input
                id="images"
                accept="image/*"
                multiple
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files)}
              />
            </label>
            <div className="flex  gap-2 w-full p-4">
              {formData.imageUrl.length > 0 &&
                formData.imageUrl.map((url, index) => (
                  <div className="flex flex-col" key={url}>
                    <img src={url} alt="" className="w-14 h-14 rounded-lg" />
                    <button onClick={() => removeItem(index)}>Delete</button>
                  </div>
                ))}
            </div>

            <div className="w-full text-center pt-4">
              <button
                type="button"
                onClick={imageSubmitHandler}
                className="  bg-[#21e065] text-white p-3 px-3 rounded-lg md:w-[12vw] font-medium text-xl hover:opacity-90 "
              >
                {imageUpload ? "uploading..." : "Upload"}
              </button>
            </div>
            <div className="">{imageUploadError && imageUploadError}</div>
          </div>
        </div>
        <div className="w-full text-center pt-4">
          <p className="p-2 text-red-400 font-semibold">{error && error }</p>
          <p className="p-2 text-green-400 font-semibold">{successMsg && successMsg }</p>
          <button className="  bg-[#21e065] text-white p-2 px-3 rounded-lg md:w-[12vw] font-medium text-xl hover:opacity-90 ">
          {loading ? "saving":"save"}
          </button>
        </div>
      </form>
    </div>
  );
}
