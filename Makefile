install:
	npm install

dev:
	npx cross-env NODE_ENV=development webpack --mode development

build:
	npx cross-env NODE_ENV=production webpack --mode production

start-front:
	npm run start-frontend

start-back:
	npm run start-backend

serve:
	npm run start-frontend | npm run start-backend

lint:
	npm run lint

prettier:
	npx prettier --check .
