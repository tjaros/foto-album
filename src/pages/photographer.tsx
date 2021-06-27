import React from "react";
import { Layout } from "../components";
import AuthorInfo from "../components/photographer/AuthorInfo";
import AuthorPageNav from "../components/photographer/AuthorPageNav";


import { SocialMediaLink, SocialMediaType } from "../components/photographer/SocialMedia"
const name = "Aaron Hofbauer";
const availability = ["Brno", "Praha", "Hlohovec"];
const about = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore dicta voluptatem sapiente, eum nemo voluptat \
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in provident architecto incidunt inventore molestias accusantium quos nemo, assumenda eligendi at officia odio quo recusandae ducimus ullam, repudiandae dicta officiis."
const links: SocialMediaLink[] = [
  { url: "https://instagram.com", type: SocialMediaType.INSTAGRAM },
  { url: "https://facebook.com", type: SocialMediaType.FACEBOOK },
  { url: "https://google.com", type: SocialMediaType.WEBSITE }
];
const imageLink = "https://thispersondoesnotexist.com/image";

const Photographer = () => (
  <Layout>
    <div className="flex flex-col items-center px-8 py-12">
      <AuthorInfo name={name} availability={availability} about={about} imageLink={imageLink} socialMediaLinks={links} />
      <AuthorPageNav />
      <div className="flex flex-col">
        {
          //TODO Content
        }
      </div>
    </div>
  </Layout>
);

export default Photographer;
