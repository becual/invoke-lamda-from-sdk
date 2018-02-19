const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID, 
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1'
});


const AWSLambda = new aws.Lambda();

const params = {
    FunctionName: process.env.LAMDA_FUNCTION_NAME    
};


AWSLambda.invoke(params).promise()
    .then(data => {
        console.info('data', JSON.parse(data.Payload));
    })
    .catch(error => {
        console.info(`Error invoking lamda function`, error);
    });