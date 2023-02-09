import Header from "../header/Header"
import Footer from "../footer/Footer"

function Layout({children}) {
  return (
    <>
     <Header/>
      <div style={{minHeight: "80vh"}} className="--pad">
        {children}
      </div>
       <Footer/>
    </>
  )
}

export default Layout