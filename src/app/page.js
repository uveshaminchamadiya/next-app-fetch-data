import Image from "next/image";
import styles from "./page.module.css"
import { getData } from "./fetchApi";

export default async function Home() {
  const data = await getData();
    return (
        <>
            <h1 className={styles.heading}>Fetch Data fom API</h1>
            <div className={styles.cards}>
                {data.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <Image src={item.url} width={300} height={300} />
                        <h3>{item.title}</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, ad. Exercitationem officiis accusamus blanditiis sequi dolor sapiente nemo cumque accusantium aliquid! Porro eius illo maiores voluptatum animi ut voluptatem obcaecati?</p>
                    </div>
                ))}
            </div>
        </>
    )
}
