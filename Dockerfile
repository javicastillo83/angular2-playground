# To build and run with Docker:
#
#  $ docker build -t angular2-playground .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 angular2-playground
#
FROM node:latest

RUN mkdir -p /angular2-playground /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /angular2-playground
COPY package.json typings.json /angular2-playground/
RUN npm install --unsafe-perm=true

COPY . /angular2-playground
RUN chown -R nodejs:nodejs /quickstart
USER nodejs

CMD npm start
