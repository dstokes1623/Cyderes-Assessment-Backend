FROM node:14

WORKDIR /backend

COPY package.json /backend/

RUN yarn

COPY . .

EXPOSE 8000

CMD ["yarn", "start"]