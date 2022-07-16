const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

// get random photos
export const getCuratedPhotos = async () => {
  const res = await fetch(
    `https://api.pexels.com/v1/curated?page=11&per_page=18`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const responseJson = await res.json();
  return responseJson.photos;
};


//get photos from a theme

export const getQueryPhotos = async () => {
    const res = await fetch(`https://api.pexels.com/v1/search?query=skate`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const responseJson = await res.json();
    return responseJson.photos;
  };
  

// trying to get my collection - try unsplash next  
  
export const getCollectionPhotos = async () => {
    const res = await fetch(
        `https://api.pexels.com/v1/collections/:jaajskate-7crd8z2/`,
        {
            headers: {
                Authorization: API_KEY,
            }
        }
    );
    const responseJson = await res.json();
    return responseJson.photos;
}

