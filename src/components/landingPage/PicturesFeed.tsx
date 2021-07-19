import React from 'react';
import ColumnsLayout from "../ColumnsLayout";
import { gql, useQuery } from '@apollo/client';
import { FaTruckLoading } from "react-icons/fa";


const Image = ({ url }: { url: string }) => (
    <div>
      <img src={url} alt="" className="w-full" />
    </div>
  );
  
interface modelAvatar {
        avatar: {
            url: string
        }
}

interface modelAvatarUrl {
    url: string
}

const distinct = (avatar: modelAvatar[]) => {
const output: modelAvatarUrl[] = [];
avatar.forEach((item: modelAvatar) => {
    const obj = {
    url: item.avatar.url
    };
    if (!output.some((x) => x.url === obj.url)) {
    output.push(obj);
    }
});
return output;
};
  
export const PicturesFeed: React.FC = () => {
    const models_query = gql`
        query GET_ALL_AVATARS {
        models {
            avatar {
                url
            }
        },
        photographers {
            avatar {
                url
            }
        }
        }`;

    const { loading, error, data} = useQuery(models_query);

    if (error) return <div>Failed to load avatars</div>
    if (loading) return <FaTruckLoading></FaTruckLoading>
    return (
        <ColumnsLayout >
        {distinct(data.models).map((item: modelAvatarUrl) => (
          <Image url={item.url} />
        ))}
      </ColumnsLayout>
    )
};

export default PicturesFeed;