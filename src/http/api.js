const API_BASE_URL = "http://127.0.0.1:5000";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const FILE_AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = fetch(url, {
      method: "POST",
      body: uploadData,
    });

    const res = await Promise.race([fetchPro, timeout(180)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const uploadImage = async (image) => {
  try {
    const data = await FILE_AJAX(API_BASE_URL + "/upload", image);
    return data;
  } catch (error) {
    return { sucess: "error", message: error.message };
  }
};
