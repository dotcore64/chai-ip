// eslint-disable-next-line import/no-unresolved
import { isIP, isIPv4, isIPv6 } from '#is-ip'; // this is 'net' in node, 'is-ip' in browsers

/**
 * ## Assertions
 *
 * The Chai HTTP module provides a number of assertions
 * for the `expect` and `should` interfaces.
 */

export default ({ Assertion }) => {
  /**
   * ### .ip
   *
   * Assert that a string represents valid ip address.
   *
   * ```js
   * expect('127.0.0.1').to.be.an.ip;
   * expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.be.an.ip;
   * ```
   *
   * @name ip
   * @api public
   */
  Assertion.addProperty('ip', function () { // eslint-disable-line func-names
    this.assert(
      isIP(this._obj),
      'expected #{this} to be an ip',
      'expected #{this} to not be an ip',
    );
  });

  /**
   * ### .ipv4
   *
   * Assert that a string represents valid ipv4 address.
   *
   * ```js
   * expect('127.0.0.1').to.be.an.ipv4;
   * ```
   *
   * @name ipv4
   * @api public
   */
  Assertion.addProperty('ipv4', function () { // eslint-disable-line func-names
    this.assert(
      isIPv4(this._obj),
      'expected #{this} to be an ipv4',
      'expected #{this} to not be an ipv4',
    );
  });

  /**
   * ### .ipv6
   *
   * Assert that a string represents valid ipv6 address.
   *
   * ```js
   * expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.be.an.ipv6;
   * ```
   *
   * @name ipv6
   * @api public
   */
  Assertion.addProperty('ipv6', function () { // eslint-disable-line func-names
    this.assert(
      isIPv6(this._obj),
      'expected #{this} to be an ipv6',
      'expected #{this} to not be an ipv6',
    );
  });
};
