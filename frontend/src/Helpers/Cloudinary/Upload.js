const uploadUrl = `https://api.cloudinary.com/v1_1/nurovicmert/video/upload`;

export async function uploadImage(
  file
) {
//   const apiKey = process.env.PUBLIC_CLOUDINARY_API_KEY;

//   if (!apiKey) throw new Error("Missing Cloudinary API key");

  const formData = new FormData();

  formData.append("file", file);

  const url = new URL(uploadUrl);

  url.searchParams.append("api_key", "742294137561642");
  url.searchParams.append("upload_preset", "h5oy3slu");

  //TODO: split the clients folder in to backend and frontend
  const data = await fetch(url, {
    method: "POST",
    body: formData,
  })
  .then((res) => res.json())
  .then((res) => {return res})
  return data;
}
