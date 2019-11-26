'use strict'

import { Promise } from 'bluebird';
import { get } from 'lodash';
import soap from '../dashboard/node_modules/soap';


var soapClient;

//create SOAP client
export const initSoap = () => {
    return new Promise((resolve) => {
        soap.createClient(`${process.env.SOAP_WSDL_URL}?wsdl`, (err, client) => {
            if (err) logger.error(`ERROR => initSoap: Unable to create the SOAP client for WSDL URL: ${process.env.SOAP_WSDL_URL}?wsdl`, err);
            else {
                logger.info(`INFO => initSoap: Successfully created the SOAP client for WSDL URL: ${process.env.SOAP_WSDL_URL}?wsdl`);
                soapClient = client;
            }

            resolve();
        });
    });
};

export const getAllMember = () => {
    return new Promise((resolve, reject) => {
        if (!soapClient) reject({ 'error': 'SOAP Client is not initialized yet.' });
        else {
            soapClient.getAllMember((err, result) => {
                if (err) {
                    logger.error('ERROR => getAllMember: SOAP webservice is getting failed. ', err);
                    reject({ 'message': 'SOAP webservice throws an error.', 'error': err });
                }
                //check the result and return the result
                logger.info('INFO => getAllMember: SOAP webservice result: ', result);
                resolve(get(result, 'return'));
            });
        }
    });
};

export const addMember = (data) => {
    return new Promise((resolve, reject) => {
        if (!soapClient) reject({ 'error': 'SOAP Client is not initialized yet.' });
        else {
            soapClient.addMember({ arg0: data }, (err, result) => {
                if (err) {
                    logger.error('ERROR => addMember: SOAP webservice is getting failed. ', err);
                    reject({ 'message': 'SOAP webservice throws an error.', 'error': err });
                }
                //check the result and return the result
                logger.info('INFO => addMember: SOAP webservice result: ', result);
                resolve(get(result, 'return'));
            });
        }
    });
};

export const updateMember = (data) => {
    return new Promise((resolve, reject) => {
        if (!soapClient) reject({ 'error': 'SOAP Client is not initialized yet.' });
        else {
            soapClient.updateMember({ arg0: data }, (err, result) => {
                if (err) {
                    logger.error('ERROR => updateMember: SOAP webservice is getting failed. ', err);
                    reject({ 'message': 'SOAP webservice throws an error.', 'error': err });
                }
                //check the result and return the result
                logger.info('INFO => updateMember: SOAP webservice result: ', result);
                resolve(get(result, 'return'));
            });
        }
    });
};

export const getMember = (data) => {
    return new Promise((resolve, reject) => {
        if (!soapClient) reject({ 'error': 'SOAP Client is not initialized yet.' });
        else {
            soapClient.getMember({ arg0: data }, (err, result) => {
                if (err) {
                    logger.error('ERROR => getMember: SOAP webservice is getting failed. ', err);
                    reject({ 'message': 'SOAP webservice throws an error.', 'error': err });
                }
                //check the result and return the result
                logger.info('INFO => getMember: SOAP webservice result: ', result);
                resolve(get(result, 'return'));
            });
        }
    });
};

export const deleteMember = (data) => {
    return new Promise((resolve, reject) => {
        if (!soapClient) reject({ 'error': 'SOAP Client is not initialized yet.' });
        else {
            soapClient.deleteMember({ arg0: data }, (err, result) => {
                if (err) {
                    logger.error('ERROR => deleteMember: SOAP webservice is getting failed. ', err);
                    reject({ 'message': 'SOAP webservice throws an error.', 'error': err });
                }
                //check the result and return the result
                logger.info('INFO => deleteMember: SOAP webservice result: ', result);
                resolve(get(result, 'return'));
            });
        }
    });
};
