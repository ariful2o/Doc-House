import dots from '../../../assets/images/Group 34830.svg';
import OrButton from '../../../components/OrButton';
import Navbar from '../share/Navbar';
const Banner = () => {
    return (
        <section className="bg-[#07332F] min-h-[800px] relative ">
            <svg className='absolute top-0 left-0' xmlns="http://www.w3.org/2000/svg" width="239" height="253" viewBox="0 0 239 253" fill="none">
                <path d="M-5.10515e-06 136.208C0.688424 167.418 13.5809 197.117 35.9165 218.947C58.2521 240.776 88.255 253 119.5 253C150.745 253 180.748 240.776 203.083 218.947C225.419 197.117 238.312 167.418 239 136.208L239 4.81177e-06L6.97331e-06 1.52588e-05L-5.10515e-06 136.208ZM195.606 136.208C195.611 134.443 196.315 132.753 197.564 131.505C198.812 130.257 200.505 129.554 202.271 129.549C204.025 129.556 205.705 130.251 206.951 131.485C207.576 132.103 208.074 132.838 208.414 133.649C208.755 134.459 208.932 135.329 208.936 136.208C208.915 159.901 199.486 182.617 182.718 199.37C165.95 216.123 143.214 225.544 119.5 225.565C117.734 225.56 116.042 224.856 114.793 223.609C113.544 222.361 112.84 220.67 112.835 218.906C112.84 217.141 113.544 215.45 114.793 214.203C116.042 212.955 117.734 212.252 119.5 212.246C139.671 212.201 159.002 204.175 173.265 189.925C187.528 175.675 195.56 156.361 195.606 136.208Z" fill="white" fillOpacity="0.05" />
            </svg>
            <Navbar />
            <div className="w-4/5 flex flex-col lg:flex-row">
                <div className="w-1/2  mx-auto space-y-10 p-8 relative">
                    <h1 className="text-[#F3F3F3] text-7xl font-semibold pt-36 leading-[90pd]">Your Best Medical<br /> Help Center</h1>
                    <p className="text-[18px] font-[600] leading-normal  text-[#F3F3F3]
">Lorem Ipsum is simply dummy text they are printing typesetting<br /> has been the industry’s stardard.</p>
                    <OrButton text="All Service"></OrButton>
                    <svg className='absolute bottom-[-10px] right-[45px]' xmlns="http://www.w3.org/2000/svg" width="67" height="147" viewBox="0 0 67 147" fill="none">
                        <path d="M67 33.5761C66.8077 24.8523 63.2072 16.5506 56.9695 10.4488C50.7317 4.34704 42.3527 0.930297 33.6269 0.930296C24.901 0.930296 16.522 4.34704 10.2842 10.4488C4.0465 16.5506 0.445968 24.8523 0.253706 33.5761L0.253712 71.6489L67 71.6489L67 33.5761ZM12.3726 33.5761C12.3711 34.0693 12.1745 34.5419 11.8258 34.8906C11.477 35.2394 11.0044 35.436 10.5112 35.4374C10.0214 35.4354 9.55204 35.2411 9.20426 34.8962C9.02952 34.7235 8.89059 34.5179 8.79544 34.2914C8.70029 34.0648 8.6508 33.8218 8.6498 33.5761C8.6555 26.9535 11.2888 20.6038 15.9717 15.9209C20.6546 11.238 27.0043 8.6047 33.6269 8.599C34.1201 8.60046 34.5927 8.79704 34.9414 9.14581C35.2902 9.49457 35.4868 9.96717 35.4883 10.4604C35.4868 10.9536 35.2902 11.4262 34.9414 11.775C34.5927 12.1237 34.1201 12.3203 33.6269 12.3218C27.9938 12.3344 22.595 14.5777 18.6118 18.561C14.6285 22.5442 12.3852 27.9429 12.3726 33.5761Z" fill="white" fillOpacity="0.05" />
                        <path d="M67 113.418L67 75.3717L0.253708 75.3717L0.253706 113.418C0.445967 122.142 4.04649 130.444 10.2842 136.545C16.522 142.647 24.901 146.064 33.6269 146.064C42.3527 146.064 50.7317 142.647 56.9695 136.545C63.2072 130.444 66.8077 122.142 67 113.418Z" fill="white" fillOpacity="0.05" />
                    </svg>
                </div>
                <div className="relative">
                    <svg className='absolute top-[40px] -left-[253px] rotate-45' xmlns="http://www.w3.org/2000/svg" width="267" height="337" viewBox="0 0 67 147" fill="none">
                        <path d="M67 33.5761C66.8077 24.8523 63.2072 16.5506 56.9695 10.4488C50.7317 4.34704 42.3527 0.930297 33.6269 0.930296C24.901 0.930296 16.522 4.34704 10.2842 10.4488C4.0465 16.5506 0.445968 24.8523 0.253706 33.5761L0.253712 71.6489L67 71.6489L67 33.5761ZM12.3726 33.5761C12.3711 34.0693 12.1745 34.5419 11.8258 34.8906C11.477 35.2394 11.0044 35.436 10.5112 35.4374C10.0214 35.4354 9.55204 35.2411 9.20426 34.8962C9.02952 34.7235 8.89059 34.5179 8.79544 34.2914C8.70029 34.0648 8.6508 33.8218 8.6498 33.5761C8.6555 26.9535 11.2888 20.6038 15.9717 15.9209C20.6546 11.238 27.0043 8.6047 33.6269 8.599C34.1201 8.60046 34.5927 8.79704 34.9414 9.14581C35.2902 9.49457 35.4868 9.96717 35.4883 10.4604C35.4868 10.9536 35.2902 11.4262 34.9414 11.775C34.5927 12.1237 34.1201 12.3203 33.6269 12.3218C27.9938 12.3344 22.595 14.5777 18.6118 18.561C14.6285 22.5442 12.3852 27.9429 12.3726 33.5761Z" fill="white" fillOpacity="0.05" />
                        <path d="M67 113.418L67 75.3717L0.253708 75.3717L0.253706 113.418C0.445967 122.142 4.04649 130.444 10.2842 136.545C16.522 142.647 24.901 146.064 33.6269 146.064C42.3527 146.064 50.7317 142.647 56.9695 136.545C63.2072 130.444 66.8077 122.142 67 113.418Z" fill="white" fillOpacity="0.05" />
                    </svg>

                    <div className="relative bg-teal-900 p-6">
                        <div className="absolute top-32 -left-20 w-[150px] h-[200px] bg-white shadow-lg border-2  rotate-[10deg]">
                            <img src="https://s3-alpha-sig.figma.com/img/a00f/5a94/915a95c993fb3a9d7f9eb2ade1b30af5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QeK6d8xAVol7hhOT8FRIEG-Yxcx65dUkKyuQB8YFBntl~9udmzsdiA02TclsiKslqZ2LxSEXNbiGOx2q3VGWIV9nrHRu-Eohkd7IYbmZGWxzbdcif4MtKASqiJdC5eocornx7cs1Z2ErnRyhioOFIiV6PJwJtM0tusJBv6iqReLPr8LsMekIYuou37Pc1KJqGDWtXiMcLXw59CnhkddHR08kxqwLINVcXxz2uW-G-ez73WtrpXH3dWDBGxl2s3D3la8B6vWnyEw-DvVwBrrwAiQehBN3yoA9NSHjXPxisTz89cz41-YQ~9FxZ3cKykBifqVHnLepJFr0lUh2TpQ0PA__" alt="Doctor 1" className="w-full h-full object-cover  border-white border-8" />
                        </div>

                        <div className="absolute top-56 left-8  w-[150px] h-[200px] bg-white shadow-lg border-2  rotate-[5deg] z-10">
                            <img src="https://s3-alpha-sig.figma.com/img/1b07/a265/6c4a929054d116d1a248dcc535dc0b16?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QjZn0w6zNlNaznV-wPrXltTVDPNUeHRSHcoDEosy3sl3EaRYbWCzgF5tSH4sIp1u3sXdOhWGkg9GciYtuLvTNnOtoMKQQnke2C-VcdoXR1qVu7F-Xbgt2Tsx8RrEHkEopuv8nf3al-tidYvmh2XmHjUwyMm5Hqudc0Z1TA0Zsr5~yuf1svsCUQkqMhsoLnV-CrbuO1odVR3f31JjfVAezUAGilLdlrRijRDlVzgq6yRNEsfDF7SlR7oLOdiJIbqKDlYwDXrjaDTTyzy3iA1VZ5z2ARhEEdMSMOAHAlCciVvSD9WFVKQmXCKxFxFunROr55CG8VB3OIHtI4ggdBSGnQ__" alt="Doctor 2" className="w-full h-full object-cover  border-white border-8" />
                        </div>

                        <div className="absolute top-24 left-40 w-[150px] h-[200px] bg-white shadow-lg border-2  rotate-[5deg] z-20">
                            <img src="https://s3-alpha-sig.figma.com/img/7c08/4297/babfaef4dbaa82de8f1b80cbe6010d0e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNLTDRWsVacl0rWoBMV2ZtqKtU6pVMifnhZGmpuf0t3uhVQLIoOi~3Nl-egHpPvrLDH4thQXSTEAX~iB0VytMtsPj0oBnQREIZF2VLGDqf6iX~gQ8cCzwLDhSEkGMHLVMBnUd0ul-P~Cs~BP0kgSlFyMhRmhYq~n~qhmayHB7Kd5lGPe8KZw5Y-RXEl7mEZr~GnUtSPFU2q9FF~rVOX3aiZlvztlyoTWbTSuoq5SCoT0fIUD8VtL6wS0KSFqMP-BUQyPl5Iz5y5TVp5HnqJH3~0SOORfPyqneT1xEW3LwJWbOJBWQa4Y-sgcGmZgN0-szVew35tuwA51pTBdaYZCFQ__" alt="Doctor 3" className="w-full h-full object-cover  border-white border-8" />
                            <img className='absolute top-72 -left-64' src={dots} alt="" />
                        </div>
                        <img className='absolute' src={dots} alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;