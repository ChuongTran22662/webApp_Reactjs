import React from 'react';
import './sign-dropdown.styles.scss';
import {withRouter} from 'react-router-dom'

const SignDropdown = ({history}) => {
    return (
        <div className='sign-dropdown'>
            <div className='option' onClick={() => history.push('/signin')}>SIGN IN</div>
            <div className='option' onClick={() => history.push('/signup')}>SIGN UP</div>
        </div>
    )
};

export default withRouter(SignDropdown);