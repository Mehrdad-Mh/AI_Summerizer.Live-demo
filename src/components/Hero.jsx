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
                >صفحه Github</button>
            </nav>
            <h1 className="head_text">
                مقاله هارو خلاصه کن با<br className="max-md:hidden"/>
                <span className="orange_gradient "> OPEN AI GPT-4</span>
            </h1>
            <h2 className="desc">
            خواندن خود را با خلاصه کردن ساده کنید 
            خلاصه کننده مقاله OPEN AI GPT-4 
            این امکان را به شما می دهد که مقالات را به طور خلاصه و موثر مطالعه کنید
            </h2>
        </header>
    )
}

export default Hero