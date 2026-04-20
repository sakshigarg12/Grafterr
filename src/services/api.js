import data from "../data/content.json";

export const fetchNavigation = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.navigation);
    }, 1000);
  });
};

export const fetchHeroContent = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3;

      if (shouldFail) {
        reject("Something went wrong");
      } else {
        resolve(data.hero);
      }
    }, 1200);
  });
};

export const fetchFeaturesContent = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.features);
    }, 1200);
  });
};
