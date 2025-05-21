import { ServerResponse } from 'http';

const sendJsonResponse = (res: ServerResponse, statusCode: number, data: object) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data));
};

export { sendJsonResponse };
