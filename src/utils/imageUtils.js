// utils/imageUtils.js

import { IMAGE_PATH } from "src/config";

export function getImagePath(imageName) {
  return `${IMAGE_PATH}${imageName}`;
}
