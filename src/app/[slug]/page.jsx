import Menu from "@/components/Menu/Menu";
import styles from "./SinglePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (                 
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
           <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1> 
           <div className={styles.user}>
            <div className={styles.userImageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.avatar}/>
            </div>
            <div className={styles.userTextContainer}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>01.01.2024</span>
            </div>
           </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt="" fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.posts}>
            <div className={styles.descption}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, saepe eaque, molestiae aut laboriosam ipsa est veniam ad illum distinctio odit quam commodi a. Architecto at ipsa fugiat cum neque.</p>
                <h2 className={styles.titleDesc}>Lorem ipsum dolor sit.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem aspernatur, eligendi fugit dicta ipsa earum, fugiat nemo expedita officia saepe veniam. Est ratione quasi reiciendis excepturi nisi, accusantium numquam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas molestiae fugit fuga ratione voluptate. Saepe, dignissimos explicabo laborum ipsa, officia beatae porro provident molestias quia optio sed dicta maxime.</p>
        </div>
        <div className={styles.comments}>
            <Comments/>
        </div>
        </div>
        <Menu/>
      </div>
    </div>
  );
};

export default SinglePage;
