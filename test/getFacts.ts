import { expect } from 'chai';
import { getFacts } from '../src/service';

describe('Cat Facts', () => {

    it('getFacts', async () => {
        let resp = await getFacts();
        resp.data.all.forEach((value: any) => {
            expect(value.text).not.to.be.null;
        })
    })

    it('getFacts', async () => {
        let resp = await getFacts();
        resp.data.all.forEach((value: any) => {
            expect(value.text).not.to.be.null;
        })
    })
})