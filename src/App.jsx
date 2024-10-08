import Contact from "./Contact/contact.jsx";
import Footer from "./Footer/footer.jsx";
import Intro from "./Intro/intro.jsx";
import Loader from "./Loader/loader.jsx";
import Navbar from "./Navbar/navbar.jsx";
import Skills from "./Skills/skills.jsx";
import Works from "./Works/works.jsx";
export function App() {

    return (
        <>
            <div>
             <Loader/>
             <Navbar />
             <Intro />
             <Skills />
             <Works />
             <Contact />
             <Footer/>
            </div>


        </>
    );
}
export default App



