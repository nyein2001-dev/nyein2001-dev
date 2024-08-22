export function getImagePath(image) {
    try {
      return require(`../assets/${image}`);
    } catch (e) {
      console.error(`Image not found: ${image}`);
      return null;
    }
  }