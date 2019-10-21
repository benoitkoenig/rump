import fs from 'fs';
import path from 'path';

const getUnnanotatedImageNames = () => {
    const annotationsCsv = fs.readFileSync(path.join(__dirname, '/output/annotations.csv'), 'utf8');
    const allImageNames = fs.readdirSync(path.join(__dirname, '/images'));
    const annotatedImageNames = annotationsCsv.split('\n').slice(1).map((row) => row.split(',')[0]);
    const unnanotatedImageNames = allImageNames.filter((name) => !annotatedImageNames.includes(name));
    return unnanotatedImageNames;
};

export default getUnnanotatedImageNames;
