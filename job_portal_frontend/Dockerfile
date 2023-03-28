# FROM node:16.15.0-alpine As build

# WORKDIR /opt/frontend

# COPY package.json .
# COPY package-lock.json .

# RUN npm ci --silent

# COPY . .

# RUN npm run build

# FROM nginx:1.23-alpine 
# COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build ./opt/frontend/build /usr/share/nginx/html


FROM node:16.15.0-alpine As build

WORKDIR /opt/frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","start","--","--watch" ]

# RUN npm run build

# FROM nginx:1.23-alpine 
# COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build ./opt/frontend/build /usr/share/nginx/html