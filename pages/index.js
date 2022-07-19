import styles from "../components/modules/Section.module.css"
import Link from "next/link"
import HeaderVideo from "../components/HeaderVideo";
import CtaLinks from "../components/CtaLinks";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
        <HeaderVideo />
          <CtaLinks/>
            <section className="bg-gradient-to-br from-indigo-600 to-transparent">
              <div className={styles.imageShopProducts}>
                <div className={styles.containerLinkShop}>
                  <p className={styles.textShopLink}>
                    The latest products just for you. Right here.</p>
                    <Link href="/shop" passHref>
                     <button><span>SHOP</span></button>
                   </Link>
                </div>
              </div>
            </section>

      <section className={styles.sectionTeam}>
        <div className={styles.sectionTeamContainer}>

            <h2 className={styles.sectionTeamTexte}>Each member of jaajskateboards is unique&nbsp;in their own way.
              <br /> Maybe you can recognize one of them</h2>

            <div className={styles.containerTeamMembers}>
              
                <div className={styles.sectionMembersPicture}>
                  </div>
            
                <div className={styles.sectionMembersPicture}>
                  </div>

                <div className={styles.sectionMembersPicture}>
                  </div>

                <div className={styles.sectionMembersPicture}>
                  </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}
