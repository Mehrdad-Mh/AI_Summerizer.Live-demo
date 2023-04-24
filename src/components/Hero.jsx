import { logo } from "../assets"

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full pt-5 mb-10">
                <img src={logo} alt="Ai-logo" className="w-28 object-contain" />
                <button
                type="button"
                onClick={() => window.open('https://github.com/Mehrdad-Mh')}
                className="black_btn"
                >My Github</button>
            </nav>
            <h1 className="head_text">
                summarize article with<br className="max-md:hidden"/>
                <span className="orange_gradient "> OPEN AI GPT-4</span>
            </h1>
            <h2 className="desc">
Simplify your reading with summize,
an open-source article summarizer that transform lengthy articles into 
clear and concise summarize
            </h2>
        </header>
    )
}

export default Hero