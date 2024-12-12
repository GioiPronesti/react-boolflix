import Header from "../components/Header"
import Gallery from "../components/Gallery"

export default function Home (){

    return (
        <main>
            <section>
                <div className="container">
                    <Header/>
                    <Gallery/>
                </div>
            </section>
        </main>
    )
}