import React from "react";

interface ProfilePictureProps {
    name: string;
    imageLink: string;
}

const ProfilePicture = ({ name, imageLink }: ProfilePictureProps) => {
    return (
        <div className="h-60 w-60">
            <img src={imageLink} alt={`${name}'s profile picture`} className="w-full h-full rounded-full" />
        </div>
    );
};

export default ProfilePicture;