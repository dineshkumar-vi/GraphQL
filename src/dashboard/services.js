'use strict'

import { Promise } from 'bluebird';
import { get } from 'lodash';
import soap from 'soap';
 

var soapClient;

//create SOAP client
export const initSoap = () => {
    return soap.createClient(process.env.SOAP_WSDL_URL, (err, client) => {
        if (err) console.log(err)
        else {
 
            soapClient = client;
        }

        return null;
    });
};

export const getAllDashboard = () => {
    return new Promise((resolve, reject) => {
        if (!soapClient) reject({ 'error': 'SOAP Client is not initialized yet.' });
        else {
            soapClient.getAllDashboard((err, result) => {
                if (err) {
                     
                    reject({ 'message': 'SOAP webservice throws an error.', 'error': err });
                }
 
                resolve(get(result, 'return'));
            });
        }
    });
};

export const getUser = (data, callback) => {
    return new Promise((resolve, reject) => {
        if (!soapClient) reject({ 'error': 'SOAP Client is not initialized yet.' });
        else {
            soapClient.getUser({ arg0: data }, (err, result) => {
                if (err) {                    
                    reject({ 'message': 'SOAP webservice throws an error.', 'error': err });
                }
                resolve(get(result, 'return'));
            });
        }
    });
};

 
 
