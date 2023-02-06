const uploadUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/video/upload`;

export async function uploadImage(
  file
) {

//   if (!apiKey) throw new Error("Missing Cloudinary API key");

  const formData = new FormData();

  formData.append("file", file);
  const url = new URL(uploadUrl);
  const api = process.env.REACT_APP_CLOUDINARY_API_KEY
  const upload = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
  url.searchParams.append("api_key", api);
  url.searchParams.append("upload_preset", upload);

  const data = await fetch(url, {
    method: "POST",
    body: formData,
  })
  .then((res) => res.json())
  .then((res) => {return res})
  return data;
}
