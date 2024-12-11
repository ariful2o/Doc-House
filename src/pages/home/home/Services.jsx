import titch from "../../../assets/images/Rectangle 10.png";
import docImage from "../../../assets/images/Rectangle 20078.png";
import OrButton from "../../../components/OrButton";

const Services = () => {
    return (
        <section className="flex flex-col lg:flex-row w-4/5 mx-auto gap-8 pt-20">
            <div className="">
                <img className="" src={docImage} alt="" />
            </div>
            <div className="max-w-[558px] space-y-8">
                <h1 className="text-4xl font-bold text-[#0A0808]">Our Services</h1>
                <p className="text-lg text-[#3B3A3A] leading-[26px]">At Doc House, we strive to provide exceptional care, expertise, and compassion for our patients. Our doctors are trained to understand the needs of our patients and provide personalized care.</p>
                <div className="flex flex-wrap gap-4 ">
                    <OrButton text="Cavity Protection"></OrButton>
                    <button className="btn btn-ghost">Cosmetic Dentisty</button>
                    <button className="btn btn-ghost">Oral Surgery</button>
                </div>
                <img src={titch} alt="" />
                <h2 className="text-4xl font-bold text-[#0A0808]">Electro  Gastrology Therapy</h2>
                <p className="text-lg text-[#3B3A3A] leading-[26px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                <div className="text-lg text-[#3B3A3A] leading-[26px]">Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                <button className="btn btn-outline btn-warning">More Details</button>
            </div>
        </section>
    );
};

export default Services;