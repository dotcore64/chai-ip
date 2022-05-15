import chai from 'chai';
import ChaiIp from 'chai-ip'; // eslint-disable-line import/no-unresolved,node/no-missing-import

chai.use(ChaiIp);

chai.expect('127.0.0.1').to.be.an.ip; // eslint-disable-line no-unused-expressions
chai.expect('127.0.0.1').to.be.an.ipv4; // eslint-disable-line no-unused-expressions
chai.expect('127.0.0.1').to.be.an.ipv6; // eslint-disable-line no-unused-expressions
