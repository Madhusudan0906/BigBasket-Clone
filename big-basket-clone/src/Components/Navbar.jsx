import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navdiv}>
      <div>
        <img src="images/bb.png" alt="error" width="80%" style={{marginTop:"20px"}} />
      </div>
      <div className={styles.navdiv2}>
        <div>
          <p><img src="/images/icons/phone.png" alt="phone" width="16" height="16"/> 1860 123 1000</p>
          <p><img src="/images/icons/location.png" alt="location" width="16" height="16"/> 560004,Bangalore</p>
          <p><img src="/images/icons/user.png" alt="user" width="16" height="16"/> Login/Sign UP</p>
        </div>
        <div className={styles.navdiv22}>
          <div>
            <form>
              <input type="search" placeholder="Search for products.." />
              <button style={{
                backgroundColor:"#76EE00",
                border:"none",
                marginTop:"20px",
                padding:"4px"
              }}><img src="/images/icons/search.png" alt="search" width="30%" /></button>
            </form>
          </div>
          <div>
            <img src="/images/icons/basket.png" alt="Basket" width="30%" height="50px" style={{marginTop:"10px"}}/>
            <p>
              My Basket
              <br />0 items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
