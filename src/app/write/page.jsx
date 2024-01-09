"use client"
import Image from 'next/image'
import styles from './write.module.css'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'


const page = () => {
const[open,setOpen] = useState(false);
  const[value,setvalue] = useState(false);
  const { status } = useSession();
  const router = useRouter();


  if(status==="loading"){
    return <div className={styles.loading}>Loading...</div>;
  }
  if(status==="authenticated"){
    router.push('/')
  }

  
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Title' className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=> setOpen(!open)}>
          <Image src='/plus.png' alt="" width={16} height={16} className={styles.image}/>
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src='/image.png' alt='' width={16}  height={16}/>
            </button>
            <button className={styles.addButton}>
              <Image src='/external.png' alt='' width={16}  height={16}/>
            </button>
            <button className={styles.addButton}>
              <Image src='/video.png' alt='' width={16}  height={16}/>
            </button>
          </div>
        )}
        <ReactQuill  className={styles.textArea} theme='bubble' value={value} onChange={setvalue} placeholder='Tell Your Story ....'/>
      </div>
    <div className={styles.buttonContainer}>
      <button className={styles.publish} >Publish</button>
      <a href='/' className={styles.close} >Close</a>
      </div>
    </div>
  )
}

export default page
