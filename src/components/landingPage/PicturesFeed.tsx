import React from 'react';
import ColumnsLayout from "../ColumnsLayout";
import { gql, useQuery } from '@apollo/client';
import { FaTruckLoading } from "react-icons/fa";
import client from '../../apollo';


const Image = ({ url }: { url: string }) => (
    <div>
      <img src={url} alt="" className="w-full" />
    </div>
  );
  

interface modelAvatar {
    model: {
        avatar: {
            url: string
        }
    }
}

interface modelAvatarUrl {
    url: string
}

const distinct = (avatar: modelAvatar[]) => {
const output: modelAvatarUrl[] = [];
avatar.forEach((item: modelAvatar) => {
    const obj = {
    url: item.model.avatar.url
    };
    if (!output.some((x) => x.url === obj.url)) {
    output.push(obj);
    }
});
return output;
};
  
  

const PicturesFeed: React.FC = () => {
    const gqlurls = gql`
        query GET_ALL_AVATARS {
        models {
            avatar {
                url
            }
        }
        }`;
    const { loading, error, data} = useQuery(gqlurls);

    if (error) return <div>Failed to load avatars</div>
    if (loading) return <FaTruckLoading></FaTruckLoading>
    return (
        <ColumnsLayout>
        {distinct(data.models).map((item: modelAvatarUrl) => (
          <Image url={item.url} />
        ))}
      </ColumnsLayout>
    )
};

export default PicturesFeed;
  
  
  
  // const urls = {JSON.stringify(gqlurls.data)}
  
    // console.log(urls);
  
  // const urls = [
  //   'https://images.pexels.com/photos/1680342/pexels-photo-1680342.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  //   'https://images.pexels.com/photos/3435321/pexels-photo-3435321.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  //   'https://dummyimage.com/600x400/000/fff.png',
  //   'https://dummyimage.com/800x1600/53c227/fff.png',
  //   'https://dummyimage.com/600x400/000/c225c2.png',
  //   'https://dummyimage.com/50x400/f2112b/fff.png',
  //   'https://dummyimage.com/600x100/000/fff.png',
  //   'https://dummyimage.com/800x400/53c227/fff.png',
  //   'https://dummyimage.com/600x200/000/fff.png',
  //   'https://dummyimage.com/600x400/000/c225c2.png'
  // ];