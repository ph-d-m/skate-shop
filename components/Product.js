import styles from "./modules/GridItems.module.css"

export default function Product({price}) {
    return (
      <>
        <div className={styles.itemViewPrice}>
          <p className={styles.itemPrice}>
            {price.formatted_with_symbol}
          </p>
          <p className={styles.itemView}>
            View
          </p>
        </div>
      </>
    );
}