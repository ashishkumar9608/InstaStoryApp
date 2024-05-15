import React from 'react';
import './Home.css';
import categoryItems from '../dataSource/catagories';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    function redirectToStory(name) {
        navigate(`/story/${name}`);
    }
    function renderCategoryItem() {
        return categoryItems.map((categoryItems) => {
            return (
                <div
                    className="flex justify-center items-center flex-col mt-4"
                    key={categoryItems.name}
                    onClick={() => redirectToStory(categoryItems.name)}>
                    <div className="rounded-full h-[100px] w-[100px] category-outer-circle flex justify-center items-center">
                        <div className="category-inner-circle flex justify-center items-center ">
                            <i className="material-icons text-3xl">{categoryItems.iconName}</i>
                        </div>
                    </div>
                    <div className='font-bold'>{categoryItems.name}</div>
                </div>
            );
        });
    }

    return (
        <div className='flex justify-center'>
            <div className='flex self-center flex-col w-[600px]'>
                <div className="header text-white flex justify-center items-center text-3xl font-bold">
                    Stories Feed
                </div>
                <div className=" flex justify-center items-center">
                    <div className="flex justify-center item-center ">
                        {renderCategoryItem()}
                    </div>
                </div>
                <div className="w-[600px] h-[600px]">
                    <div className="w-full h-full" style={{ backgroundImage: "url('https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg')" }}>
                    </div>
                </div>

            </div>
        </div>
    );
}
