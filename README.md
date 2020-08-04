# Lacona-Numi Plugin

This is a plugin that will allow me to integrate [Numi](https://numi.app) with the [Lacona](https://lacona.app) spotlight replacement.

Why not do this in Alfred, which is better-supported than Lacona? Because Lacona's included in Setapp.

[Lacona Plugin Documentation](https://docs.lacona.io/docs/basics/getting-started.html)

## Hooking into Numi

1. In Numi, check the "Enable Alfred Extension" box in settings. This enables Numi to listen to commands over a hardcoded port.
2. To test the connection is working, run `curl -G --data-urlencode 'q=${input}' http://localhost:15055`, where your `input` var can be any Numi-parseable statement, i.e. `2+2`.

# Dev Notes

## Resources

* [The Alfred plugin's code](https://github.com/nikolaeu/numi/blob/master/alfred/index.js)
* [Lacona CLI on github](https://github.com/laconalabs/lacona-cli)
* [nodenv](https://github.com/nodenv/nodenv#nodenv-which)
    * Don't forget to run `nodenv rehash` to get your commands added to the shims.

## Current Issues

1. Running `lacona install` does not add demo command on the lacona app.
    * There are no errors running.
    * Weirdly enough, `lacona logs` shows nothing. Lacona should have some logs somewhere though?
    * Maybe I'm running the wrong version of Lacona, or it installed to a weird place. I installed it using Setapp.

## Ideas

* To be honest, I think I could probably just copy the alfred osapplescript into my own apple script and use the existing Lacona apple script integration plugin. But that wouldn't have the pretty `n=` or `numi` command syntax.