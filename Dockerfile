FROM node:18 as client 

WORKDIR /build

COPY Client/package*.json Client/tsconfig*.json ./

RUN npm install

COPY Client/. .

RUN npm run build

FROM node:18 as server

WORKDIR /app

COPY Server/package*.json ./

RUN npm install

COPY Server/. .

COPY --from=client /build/dist ./

# Run the server
CMD [ "node", "index.js" ]
