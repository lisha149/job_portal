#!/bin/sh

npm run migrate-db
npm run migrate-undo-seed
npm run migrate-seed
npm run start

