## Example invoking AWS Lamda function from NodeJS AWS sdk

### Instructions  (assuming you are in repo root directory)

#### Installing dependencies
```bash
$ yarn 
# or  with npm
$ npm install
```

#### You must create a file with **.env** name  where we set our env vars (using dot env a dev dependency) **replace with  your own params**
```bash
$ echo ACCESS_KEY_ID=[YOU_AMAZON_ACCESS_KEY] >> .env
$ echo SECRET_ACCESS_KEY=[YOU_AMAZON_SECRET_ACCESS_KEY] >> .env
$ echo LAMDA_FUNCTION_NAME=[THE_AMAZON_AWS_LAMBDA_FUNCTION_NAME_THAT_YOU_WANT_CALL] >> .env
```

#### Run the code
```bash
$ yarn start 
# or with npm
$ npm start
```