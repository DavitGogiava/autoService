import AutoImportPage from "@/Components/AutoImportPage/AutoImportPage"
import styles from "@/Components/AutoImportPage/AutoImport.module.css"

export const metadata = {
    title : "AutoImport"
}

export default function AutoImport(){
    return(
        <section className={styles.autoimportWrapper}>
            <AutoImportPage styles={styles}/>
        </section>
    )
}