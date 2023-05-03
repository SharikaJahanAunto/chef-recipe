import React from 'react';
import logo from '../../../assets/logo.jpg'
import moment from 'moment';
import './Header.css'
import { Button} from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div className=''>
            <div className="text-center">
                <img className='mb-0 rounded-circle' src={logo} alt="" />
                <p><small className='text-secondary'>Bangladeshi chefs have gained international recognition in recent years.</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex ms-3 mb-4'>
            <Button variant="danger">Latest</Button>
            <Marquee className='text-danger' speed={100}>
            Chef Ananya Banerjee is a popular Bangladeshi chef who has written several cookbooks and is known for her fusion cuisine that combines Bangladeshi flavors with international cuisine... Chef Rownak Jahan is another popular Bangladeshi chef who has a YouTube cooking channel and has published several cookbooks focusing on Bangladeshi cuisine.....
                </Marquee>
            </div>
        </div>
    );
};

export default Header;