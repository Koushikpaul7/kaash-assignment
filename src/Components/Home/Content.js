import React from 'react';
import '../../Components/Home/content.css'
import image from '../../images/f2f3a5f7feae3210baa8d3e11e2240af3389a0f7_2_1035x604.png'
const Content = () => {
    return (
        <div>
            <div className='container mb-5 pb-5'>
            <h2 className='mt-5 pb-5 pt-5'>Light defines spatial experience, as it falls and reflects. As design consultants, Kaash - light engineers aims to elevate this experience with sustainable and human-centric light planning.</h2>
            
            <h3 className='mt-5 pt-5'>
            Services customized to your need
            </h3>
            <p>Light + Sustainability + Technology</p>
            </div>

            <section className='container'>
                <div  className='card'>
                <p className='text-center pt-5'>Designing with <span className='heading'>light</span> for people, their space and its architecture</p>
                
                <h1 className='heading-two text-center'>HUMAN-CENTRIC LIGHTING</h1>
                <img className='w-50 mx-auto mb-5' src={image} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Content;