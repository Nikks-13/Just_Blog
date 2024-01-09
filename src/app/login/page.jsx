"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";

const page = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if(status==="loading"){
    return <div className={styles.loading}>Loading...</div>;
  }
  if(status==="authenticated"){
    router.push('/')
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>
          Sign in with Google
          <div className={styles.google} onClick={() => signIn("google")}>
            <FaGoogle className={styles.logoGoogle} />
          </div>
        </div>
        <div className={styles.socialButton}>
          Sign in with Github
          <div className={styles.github}></div>
          <FaGithub className={styles.logoGithub} />
        </div>
        <div className={styles.socialButton}>
          Sign in with Facebook
          <div className={styles.facebook}>
            <FaFacebook className={styles.logoFacebook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
