import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4  ">
      <br />
      <br />
      <p style={{ fontSize: "40px" }} className="head">
        <b>Clothes That Never Go Out of Style!!!</b>
      </p>
      <br />
      <div className="flex flex-col lg:flex-row justify-between gap-8  transition  duration-75 ">
        <div
          className="w-full lg:w-5/12 flex flex-col justify-center "
          style={{
            position: "relative",
            transition: "2s  width 2s, height 4s",
          }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-8 text-gray-1000 mt-6">
            KVS Garments was Established in the year 2005. The aim
            of the company is to provide good quality Clothes . The Fashion
            Store caters to thoughtful shoppers who appreciate unique design 
            and top quality pieces you just can't find anywhere else.
            We are constantly curating fresh new collections and looking for  
            the next big thing our customers will love our expert service and care.
           
          </p>
          <br />
          <p>
            {" "}
         
          </p>
        </div>
        <div className="w-3/4 lg:w-6/12">
          <img
            className="w-3/4 mx-auto about-img mt-10"
            src="https://img.freepik.com/free-vector/sticker-template-clothes-racks-with-many-clothes-hangers-white-background_1308-64160.jpg?w=900&t=st=1683314151~exp=1683314751~hmac=bec33cbeb57094e9c1a648dc159dca33541f7946c6fb5ef4cea421955f461cdb"
            alt="A group of Products"
          />
        </div>
      </div>
      <br />
      <br />

      <div>
        <br />

        <div className="p-10 grid cards grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="rounded overflow-hidden shadow-lg hover:shadow-xl">
          <div className="img-box">
          <img
              className="w-full transform bg-blue-400 w-100   transition duration-500 hover:scale-125  hover:bg-blue-600 flex justify-center items-center"
              src="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg?w=996&t=st=1683308568~exp=1683309168~hmac=1e0ed60ff1dc3911bdbf27d54b35e100d4578850e9761d2e4ccdfc215b651065"
              alt="Mountain"
            />
          </div>
            <div className="px-6 py-9 ">
              <div className="font-bold text-xl mb-2">
                Dressed For The Occasion
              </div>

              {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> */}
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Stylish
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Fashion
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Rock_it
              </span>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl">
           <div className="img-box">
           <img
              className="w-full transform bg-blue-400 w-100 transition duration-500 hover:scale-125  hover:bg-blue-600 flex justify-center items-center"
              src="https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669581.jpg?w=996&t=st=1683308897~exp=1683309497~hmac=6a7bc9d9524fa4870f063adfcfe046c5832a889f2a2b87dc88ee750a5683623c"
              alt="River"
            />
           </div>
            <div className="px-6 py-9">
              <div className="font-bold text-xl mb-2">
                Switch To The Fashion Diva
              </div>
              {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> */}
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #brand
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Lifestyle
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #comfort
              </span>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl">
           <div className="img-box">
           <img
              className="w-full transformbg-blue-400 w-100 transition duration-500 hover:scale-125  hover:bg-blue-600 flex justify-center items-center"
              src="https://img.freepik.com/premium-photo/stylish-summer-set-child-clothes-denim-jumpsuit-pink-sneakers-accessories-pink-blue-background-fashion-girl-lookbook-concept-top-view-flat-lay_75163-3078.jpg?w=996"
              alt="Forest"
            />
           </div>
            <div className="px-6 py-9">
              <div className="font-bold text-xl mb-2">Comfy and Stylish for kids</div>
              {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> */}
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #kids
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Outfit
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Comfort
              </span>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div>
        <div className="w-full  flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Goals
          </h1>
          <br />
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Our Good and Green philosophy emanates from a strong belief in the
            value of the triple bottom line - protection of people and the
            planet while creating value for shareholders.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            <br />
            <pre> </pre>
            {/* <hr /> */}
            <p>
              {" "}
              <b>Living Doesn't Have To Be Hard.</b>
            </p>
            {/* <hr /> */}
            <br /> <br />
            We strive to deliver the greatest possible customer benefit through
            our products and services with the highest safety standards, minimal
            adverse environmental impact and optimum social compatibility.{" "}
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <center>
        <div className="w-full lg:w-8/12 lg:pt-8 scale-75 transition duration-500 hover:scale-100">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4  rounded-md">
            <div className="p-1 pb-2 h-1 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVyN0UzuuH0BtzxabGzH9QKpguiNR87Cwcg&usqp=CAU"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVyN0UzuuH0BtzxabGzH9QKpguiNR87Cwcg&usqp=CAU"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Quality
              </p>
            </div>
            <div className="p-7 pb-2 h-0.10  flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp3LXUVMFamOWqApEj0Q8EbFlnP1kbe8RcQ&usqp=CAU"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp3LXUVMFamOWqApEj0Q8EbFlnP1kbe8RcQ&usqp=CAU"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Assurance
              </p>
            </div>
            <div className="p-0 pb-2 h-1 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyaG28oOricgvCtIXN9KgLUJOpdeLtyMrYg&usqp=CAU"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyaG28oOricgvCtIXN9KgLUJOpdeLtyMrYg&usqp=CAU"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Trust
              </p>
            </div>
            <div className="p-1 pb-2 h-0.25  flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsmNLJIvVAfSl0BcVN2y8v6UCQs5OnfO7vQ&usqp=CAU"
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsmNLJIvVAfSl0BcVN2y8v6UCQs5OnfO7vQ&usqp=CAU"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Optimize
              </p>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default About;
