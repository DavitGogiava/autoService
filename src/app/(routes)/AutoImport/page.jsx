import MainSlider from "@/Components/AutoImportPage/MainSlider"
import styles from "@/Components/AutoImportPage/AutoImport.module.css"

export const metadata = {
    title : "AutoImport"
}

export default function AutoImport(){
    return(
        <section className={styles.autoimportWrapper}>
            <MainSlider styles={styles}/>
        </section>
    )
}