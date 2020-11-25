'use strict';

import db from '../dbConnection';

import { Schema } from 'mongoose';

const ObjectId = Schema.ObjectId;


const user = new Schema({
    "name": { type: String, index: true },
    "email": { type: String, index: true },
    "password": { type: String, },
    "_id": { type: ObjectId },
}, { timestamps: true });

export default db.model('UserDetails', user);