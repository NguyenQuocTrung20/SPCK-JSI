import React from "react";
import { useSongsData } from "../../zustandStore/useSongsData";

const SongsCard = ({ songs }) => {
  const { setEditModalVisible, setSelectedItem } = useSongsData();

  return (
    <>
      <div className="card xl:w-96 sm:w-[128px] sm:h-[50%] bg-base-100 shadow-xl xl:my-4 xl:mr-4 sm:mr-2">
        <figure>
          <img src={songs?.imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="xl:card-title text-[22px] font-semibold">
            {songs?.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{songs?.singer}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{songs?.album}</div>
            <div className="badge badge-outline">{songs.release}</div>
          </div>
        </div>
        <div
          onClick={() => {
            setEditModalVisible();
            setSelectedItem(songs);
          }}
          className="bg-red-500 absolute top-0 right-0 text-white px-3 py-2 rounded-md self-center cursor-pointer"
        >
          Edit
        </div>
      </div>
    </>
  );
};

export default SongsCard;
