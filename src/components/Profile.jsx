import React from 'react';

const Profile = () => {
    return (
        <>
            <div className="common-pages">
                Profile
            </div>
            <div className="profile">
                <div className="profile-up">
                    <img className="image" />
                    <button>Edit Profile</button>
                </div>
                <div className="profile-down">
                        <div><b>name: </b>ta</div>
                        <div><b>following: </b>0</div>
                        <div><b>followers: </b>0</div>
                </div>
                <div className="common-pages">Posts:0</div>
            </div>

        </>
    );
};
export default Profile;