const uploadUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/video/destroy`;

export async function deleteImage(id) {
  //   if (!apiKey) throw new Error("Missing Cloudinary API key");
  const formData = new FormData();
  formData.append("public_id", "nn3d4pwy4vv3fevylksb");
  formData.append("signature", "b17567fac153338858bdc3b83a459c974c3660f8");
  const url = new URL(uploadUrl);
  const api = process.env.REACT_APP_CLOUDINARY_API_KEY;
  const upload = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
  const timestamp = new Date().getTime();
  url.searchParams.append("api_key", api);
  url.searchParams.append("timestamp", timestamp);
  url.searchParams.append("upload_preset", upload);

  const data = await fetch(url, {
    method: "DELETE",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  console.log(data);
  return data;
}
