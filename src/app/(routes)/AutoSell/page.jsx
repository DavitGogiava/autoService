import MainSlider from "@/Components/AutoSellPage/MainSlider"
import styles from "@/Components/AutoSellPage/AutoSell.module.css"

export const metadata = {
    title : "AutoSell"
}

export default function AutoSell(){
    return(
        <section className={styles.autoimportWrapper}>
            <MainSlider styles={styles}/>
        </section>
    )
}