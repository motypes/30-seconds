# The official nodejs docker image
FROM node:9.4-alpine@sha256:359a2efa481b9edeff9ca120128f89387ce13dafe30b05f762ec63c7f770e415

LABEL maintainer="epicallan.al@gmail.com"
# Copy package.json only to temp folder, install its dependencies,
# set workdir and copy the dependnecies there
RUN mkdir /src
# This way, dependnecies are cached without the need of cacheing all files.
ADD package.json /tmp/
RUN cd /tmp && npm install --silent
RUN cp -a /tmp/node_modules /src/

WORKDIR /src

# Copy the rest of the files to the container workdir
COPY . /src

RUN npm run build

ENV NODE_ENV='production'
ENV PORT=7777

EXPOSE ${PORT}

CMD ["npm", "start"]
