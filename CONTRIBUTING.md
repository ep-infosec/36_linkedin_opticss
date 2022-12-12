Contribution Agreement
======================

As a contributor, you represent that the code you submit is your
original work or that of your employer (in which case you represent you
have the right to bind your employer).  By submitting code, you (and, if
applicable, your employer) are licensing the submitted code to LinkedIn
and the open source community subject to the BSD 2-Clause license. 

Getting Started
===============

Install required global dependencies:

```
$ npm install -g lerna yarn
```

Check out the code:

```
$ git clone https://github.com/linkedin/opticss.git
```

Go into the `opticss` directory and install dependencies
and make sure all the tests are passing.

```
$ cd opticss
$ lerna bootstrap
$ lerna run test
```

The code for individual packages of this monorepo are in `packages/*`.
Within any of the packages in this monorepo you'll generally use the npm
package scripts to manage the project, E.g. `yarn run test` or
`yarn run lintfix`. Run `yarn run` for a list of available commands.


Responsible Disclosure of Security Vulnerabilities
==================================================

**Do not file an issue on Github for security issues.**  Please review
the [guidelines for disclosure][disclosure_guidelines].  Reports should
be encrypted using PGP ([public key][pubkey]) and sent to
[security@linkedin.com][disclosure_email] preferably with the title
"Vulnerability in Github LinkedIn/opticss - &lt;short summary&gt;".


Tips for Getting Your Pull Request Accepted
===========================================

1. Make sure all new features are tested and the tests pass.
2. Bug fixes must include a test case demonstrating the error that it fixes.
3. Open an issue first and seek advice for your change before submitting
   a pull request. Large features which have never been discussed are
   unlikely to be accepted. **You have been warned.**

[disclosure_guidelines]: https://www.linkedin.com/help/linkedin/answer/62924
[pubkey]: https://gist.github.com/chriseppstein/3f45d3a8e6fb42f24cb7b3f77f21381e
[disclosure_email]: mailto:security@linkedin.com?subject=Vulnerability%20in%20Github%20LinkedIn/opticss%20-%20%3Csummary%3E
