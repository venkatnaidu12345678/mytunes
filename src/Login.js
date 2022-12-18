import React from 'react';
import "./Login.css";


const Login = () => {
    return (
        <div className='w-screen h-screen '>
            <div className='bg-[#5c5353d8] pl- fixed'>
                <nav className='flex text-[#f1ecec] gap-10 w-screen p-5 text-xl '>
                    <h3> <a href='#mytunes'>mytunes</a></h3>
                    <h3> <a href='#music'>Music</a></h3>
                    <h3> <a href='#video'>Video </a></h3>
                    <h3> <a href='#giftcard'>Gift Card </a></h3>
                </nav>
            </div>
            <div className="text-white text-center p-32 h-96 bg  pt-56 ">
                <div id='mytunes'>
                    <h1 className='text-4xl mb-10'>myTunes</h1>
                </div>
                <div>
                    <h2 className='text-3xl mb-6'>Your music, movies, and TV shows take center stage.</h2>
                </div>
                <div>
                    <p className='text-xl mb-6'>myTunes is the best way to organize and enjoy the music, movies, and TV shows you already have — and shop for the ones you want.</p>
                    <p className='text-xl'>Enjoy all the entertainment myTunes has to offer on your Mac and PC.</p>
                </div>
            </div>
            <div className='text-[white] text-center p-32 bg-[#000000ad] '>
                <div id='music'>
                    <h1 className='text-4xl mb-4'>♫Music</h1>
                </div>
                <div>
                    <h2 className='text-3xl mb-6'>45 million songs. Zero ads.</h2>
                </div>
                <div>
                    <p className='text-2xl mb-6'>Stream over 45 million songs, ad-free. Or download albums and tracks to listen to offline. All the music in your personal myTunes</p>
                    <p className='text-2xl mb-6'>library — no matter where it came from — lives right alongside the Orange Music catalog. Start your free three-month trial with no</p>
                    <p className='text-2xl mb-10'>commitment, and cancel anytime.</p>
                    <button className='bg-[red] p-8 text-[white]'>start your free trail</button>
                    <p className='text-2xl mb-6 mt-4'>Orange Music is available in myTunes, and for iOS and Android devices.</p>
                    <img src='https://jolly-kalam-23776e.netlify.app/mytunes/img/mockup1.png' alt='img not available'></img>
                </div>
            </div>
            <div className='text-center p-32 '>
                <div id='video'>
                    <h2 className='text-2xl mb-6'>The movie and TV collection you always wished for. Granted.</h2>
                    <p className='text-xl mb-6'>With over 100,000 movies and TV shows to choose from, there’s always something great to watch on myTunes and if you watch on</p>
                    <p className='text-xl mb-6'>Orange TV 4K, you’ll be able to enjoy a tremendous selection of your favorite content in 4K HDR. So get ready to enjoy episodes of</p>
                    <p className='text-xl mb-6'>your favorite TV shows or hit movies you’ve been waiting to see — anytime, anywhere. Just tap to play, or even download if you’re</p>
                    <p className='text-xl mb-10'>going somewhere you won’t have Wi-Fi.</p>
                    <button className='bg-[blue] p-8 text-[white]'>Read More</button>
                    <div>
                        <img src='https://jolly-kalam-23776e.netlify.app/mytunes/img/mockup2.png' alt='img not available'></img>
                    </div>
                </div>
            </div>
            <div className='text-center p-32 '>
                <div>
                    <h2 className='text-3xl mb-6'>A world of entertainment. Available wherever you are.</h2>
                    <p className='text-2xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam nobis, nisi ut expedita, doloribus reprehenderit explicabo</p>
                    <p className='text-2xl mb-6'>non velit repellat alias saepe inventore repellendus? Molestias suscipit eos tempora? Quae quaerat cumque in veritatis impedit</p>
                    <p className='text-2xl mb-6'>dolorum sapiente recusandae minima quo aperiam quam, excepturi quasi totam ad quas? Ipsam laudantium soluta delectus!</p>
                </div>
            </div>
            <div className=' flex flex-row pl-10' id='giftcard'>

                <div style={{ height: "600px", width: "600px" }}>
                    <img src='https://jolly-kalam-23776e.netlify.app/mytunes/img/cards.png' alt='img not available '></img>
                </div>
                <div className='pl-20'>
                    <h2 className='text-3xl mb-4'>Gift Cards</h2>
                    <p className='mb-6 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque expedita tempore</p>
                    <p className='mb-6 text-xl'>quasi omnis a aut et totam illo fuga accusamus dolorum vero, ut harum consectetur.</p>
                    <p className='mb-6 text-xl'>Minima molestias officiis culpa non sed dicta itaque. Et aliquam illo obcaecati</p>
                    <p className='mb-6 text-xl'>molestias veritatis porro.</p>
                    <p className='mb-6 text-xl'>Already have an Orange MyTunes Music Gift Card?</p>
                    <hr></hr>
                    <p className='mb-6 text-xl'>Read Me</p>
                </div>
            </div>
        </div>
    )
}

export default Login;
