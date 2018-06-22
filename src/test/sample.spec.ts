// tslint:disable:only-arrow-functions
import * as dmc from 'doc-merge-client';
import 'mocha';
import * as chai from 'chai';
const expect = chai.expect;

describe('Sample client', function () {
    it('get url with model file url', async function () {
        const client = new dmc.Client('http://localhost:3838');
        const url = await client.getUrl('docx', { soc: 'Salvia' }, { url: 'file://' });
    });
});
