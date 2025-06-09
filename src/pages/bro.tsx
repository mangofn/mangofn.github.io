import Layout from "@theme/Layout"
import styles from './index.module.css'

export default function e() {
  return (
    <Layout>
      <div style={{ margin: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img className={styles.stitch} src="https://i.imgur.com/FOCNu73.gif" alt="" />
        <p>not this button bro</p>
      </div>
    </Layout>
  )
}