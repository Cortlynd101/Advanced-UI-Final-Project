FROM node:20 as build
 
WORKDIR /app
COPY package*.json ./
RUN npm install react-router-dom
RUN npm install react-bootstrap-icons
# RUN npm install react-router-dom
RUN npm install
COPY . .

# ENV VITE_API_URL http://api.cort-final.duckdns.org
ENV VITE_REDIRECT_URI https://cort-final.duckdns.org/
ENV VITE_API_URL https://api.cort-final.duckdns.org/
RUN npm run build
 
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]