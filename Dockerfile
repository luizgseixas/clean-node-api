FROM node:16
WORKDIR /usr/src/clean-node-api
COPY ./package.json .
RUN npm install nodemon --save-dev
RUN npm install --omit=dev
