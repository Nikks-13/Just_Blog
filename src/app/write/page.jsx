"use client";
import { ImFolderUpload } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./write.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from "next/dynamic";

const Page = () => {
  const { status } = useSession();
  const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
  });
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
         
          
          switch (snapshot.state) {
            case "paused":
              toast.error("Upload paused", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
                }); 
              break;
            case "running":
               
              break;
          }
        },
        (error) => {
          console.error("Error uploading file:", error);
          toast.error("Error uploading file"); // Display error toast
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            toast.success("File uploaded successfully", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "colored",
              }); 
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={styles.radioGroup}>
        <h3 className={styles.categoryHead}> Select Category type </h3>
        <div className={styles.optionContainer}>
          {["style", "fashion", "food", "culture", "travel", "coding"].map(
            (category) => (
              <div
                key={category}
                className={catSlug === category ? styles.selected : ""}
              >
                <input
                  type="radio"
                  id={category}
                  name="category"
                  value={category}
                  onChange={(e) => setCatSlug(e.target.value)}
                  checked={catSlug === category}
                  className={styles.radioInput} // Add a class for styling purposes
                />
                <label htmlFor={category} className={styles.radioLabel}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      <div className={styles.imageUploadButton}>
        <input
          type="file"
          id="image"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        <button className={styles.addButton}>
          <label htmlFor="image">
            <ImFolderUpload /> Upload Image
          </label>
        </button>
      </div>

      <div className={styles.editor}>
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.publish} onClick={handleSubmit}>
          Publish
        </button>
        <a href="/" className={styles.close}>
          Close
        </a>
      </div>
    </div>
  );
};

export default Page;
