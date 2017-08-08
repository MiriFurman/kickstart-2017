import 'babel-polyfill';
import 'jsdom-global/register';
import axios from 'axios';
import {wixAxiosConfig} from 'wix-axios-config';
import {baseURL} from './test-common';

wixAxiosConfig(axios, {baseURL});
