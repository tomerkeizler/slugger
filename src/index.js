const slugger = (...strings) => {
  return strings
    .map((str) =>
      typeof str !== "string"
        ? ""
        : str.replace(/\s+/g, "-")
    )
    .join("-");
};

exports.slugger = slugger;
