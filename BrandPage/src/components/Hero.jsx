const Hero = () => {
    return <main className="hero container">
        <div className="Hero-content">
            <h1>YOUR FEET
                DESERVE
                THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also avilable on</p>
                <div className="brand-icons">
                    <img src="/images/flipkart.png" alt="image" />
                    <img src="/images/flipkart.png" alt="image" />
                </div>
            </div>
        </div>
        <div className="Hero-content">
            <div className="ShoeIcon">
                <img src="/images/shoe_image.png" alt="image" />
            </div>
        </div>
        <div className="hero-image"></div>
    </main>

};
export default Hero;