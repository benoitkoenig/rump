import fs from 'fs';
import path from 'path';

const saveAnnotation = ({ img, above, below, behind, inFront }) => {
  fs.appendFileSync(
    path.join(__dirname, '/output/annotations.csv'),
    `\n${img},${above},${below},${behind},${inFront}`,
    'utf8',
  );
};

export default saveAnnotation;
