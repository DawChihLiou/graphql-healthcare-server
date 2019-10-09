import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    MLAB_URL: process.env.MLAB_URL,
    MLAB_USERNAME: process.env.MLAB_USERNAME,
    MLAB_PASSWORD: process.env.MLAB_PASSWORD,
    PORT: process.env.PORT,
};
