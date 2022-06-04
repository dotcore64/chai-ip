import { expect, use } from 'chai';

// eslint-disable-next-line import/no-unresolved,n/no-extraneous-import
import ip from 'chai-ip';

use(ip);

describe('ip', () => {
  it('#ip', () => {
    expect('127.0.0.1').to.be.an.ip; // eslint-disable-line no-unused-expressions
    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.be.an.ip; // eslint-disable-line no-unused-expressions

    expect(() => {
      expect('127.0.0.1').to.not.be.an.ip; // eslint-disable-line no-unused-expressions
    }).to.throw('expected \'127.0.0.1\' to not be an ip');

    expect(() => {
      expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.not.be.an.ip; // eslint-disable-line no-unused-expressions
    }).to.throw('expected \'2001:0db8:85a3:0000:0000:8a2e:0370:73…\' to not be an ip');
  });

  it('#ipv4', () => {
    expect('127.0.0.1').to.be.an.ipv4; // eslint-disable-line no-unused-expressions

    expect(() => {
      expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.be.an.ipv4; // eslint-disable-line no-unused-expressions
    }).to.throw('expected \'2001:0db8:85a3:0000:0000:8a2e:0370:73…\' to be an ipv4');

    expect(() => {
      expect('127.0.0.1').to.not.be.an.ipv4; // eslint-disable-line no-unused-expressions
    }).to.throw('expected \'127.0.0.1\' to not be an ip');

    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.not.be.an.ipv4; // eslint-disable-line no-unused-expressions
  });

  it('#ipv6', () => {
    expect(() => {
      expect('127.0.0.1').to.be.an.ipv6; // eslint-disable-line no-unused-expressions
    }).to.throw('expected \'127.0.0.1\' to be an ipv6');
    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.be.an.ipv6; // eslint-disable-line no-unused-expressions

    expect('127.0.0.1').to.not.be.an.ipv6; // eslint-disable-line no-unused-expressions

    expect(() => {
      expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.not.be.an.ipv6; // eslint-disable-line no-unused-expressions
    }).to.throw('expected \'2001:0db8:85a3:0000:0000:8a2e:0370:73…\' to not be an ipv6');
  });
});
