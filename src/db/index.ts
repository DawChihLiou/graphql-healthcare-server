import mongoose from 'mongoose';

import { ENV } from '../env';

export function connectDB() {
    const { MLAB_URL, MLAB_USERNAME, MLAB_PASSWORD } = ENV;
    const uri = `mongodb://${MLAB_USERNAME}:${MLAB_PASSWORD}@${MLAB_URL}`;

    mongoose.Promise = global.Promise;
    mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(
            /* tslint:disable no-console */
            () => console.log('MongoDB connection established.'),
            err => console.error('MongoDB connection failed.', err),
            /* tslint:enable */
        );
}
