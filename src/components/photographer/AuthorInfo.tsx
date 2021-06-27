import React from 'react';

import ProfilePicture from './ProfilePicture';
import FollowButton from './FollowButton';
import ContactMeButton from './ContactMeButton';
import SocialMedia, { SocialMediaLink } from './SocialMedia';

interface Author {
    name: string;
    availability: string[];
    about: string;
    imageLink: string;
    socialMediaLinks: SocialMediaLink[];
}


const AuthorInfo = ({ name, availability, about, imageLink, socialMediaLinks }: Author) => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center gap-1">
                <ProfilePicture name={name} imageLink={imageLink} />
                <FollowButton />
                <ContactMeButton />
            </div>
            <div className="flex flex-col pt-16 md:pt-2 md:pl-8 md:pr-16">
                <h1 className="self-center md:self-start text-4xl font-bold">{name}</h1>
                <div className="flex flex-col md:flex-row pt-6 md:pt-3">
                    <span className="flex flex-col font-bold text-xl align-bottom md:px-4">Available:</span>
                    <p className="flex flex-col align-bottom text-xl">{availability.join(", ")}</p>
                </div>
                <div className="flex flex-col md:flex-row pt-4 md:pt-2">
                    <span className="flex flex-col font-bold text-xl align-bottom md:px-4">About Me:</span>
                    <p className="flex flex-col align-bottom text-xl max-w-xl">{about}</p>
                </div>
            </div>
            <div className="flex flex-col pt-6">
                <SocialMedia links={socialMediaLinks} />
            </div>
        </div>
    );
};

export default AuthorInfo;