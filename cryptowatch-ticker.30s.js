#!/usr/local/bin/node
/**
 * <bitbar.title>Cryptowatch Ticker</bitbar.title>
 * <bitbar.version>v1.0.0</bitbar.version>
 * <bitbar.author>Jamie Straw</bitbar.author>
 * <bitbar.author.github>jamiestraw</bitbar.author.github>
 * <bitbar.image>https://raw.githubusercontent.com/jamiestraw/bitbar-cryptowatch-ticker/master/screenshot.png</bitbar.image>
 * <bitbar.desc>Configurable cryptowat.ch price tracking ticker plugin for BitBar</bitbar.desc>
 * <bitbar.dependencies>node</bitbar.dependencies>
 */

const config = {
  exchange: 'gdax',
  currency: 'usd',
  showIcons: true,
  showCurrencyCodes: true,
  enabledCurrencies: {
    BTC: true,
    LTC: true,
    ETH: true
  },
  arrows: {
    up: '⬆',
    down: '⬇'
  }
}

const icons = {
  BTC: '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',
  ETH: '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',
  LTC: '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'
}

const https = require('https')
const requests = []
const responses = {}

Object.keys(config.enabledCurrencies).forEach(currency => { if (config.enabledCurrencies[currency]) requests.push(currency) })

requests.forEach(request => {
  const options = {
    host: 'api.cryptowat.ch',
    path: `/markets/${config.exchange}/${request}${config.currency}/summary`
  }
  https.get(options, response => {
    let body = ''
    response.on('data', data => body += data)
    response.on('end', () => {
      responses[request] = JSON.parse(body)
      if (Object.keys(responses).length === requests.length) update()
    })
  })
})

function update() {
  const dropdownItems = {}
  const sortedResponses = Object.keys(responses).sort().reduce((r, k) => (r[k] = responses[k], r), {})

  Object.keys(sortedResponses).forEach(response => {
    let currencyCode = (config.showCurrencyCodes) ? `${response}: ` : ''
    let price = sortedResponses[response].result.price.last.toLocaleString('en-GB', { style: 'currency', currency: config.currency })
    let percentage = (sortedResponses[response].result.price.change.percentage * 100).toFixed(2)
    let arrow = (percentage > 0) ? config.arrows.up : config.arrows.down
    let color = (percentage > 0) ? '\033[0;32m' : '\033[0;31m'
    let href = `https://cryptowat.ch/gdax/${response}${config.currency}/1m`
    let icon = (config.showIcons) ? icons[response] : 'no-image'

    dropdownItems[response] = `${currencyCode}${price.padEnd(10)} ${color}${arrow} ${percentage}% | href=${href} templateImage=${icon}`
    console.log(`${currencyCode}${price} ${arrow} ${percentage}% | dropdown=false templateImage=${icon}`)
  })
  console.log('---')
  Object.keys(dropdownItems).forEach(cryptocurrency => console.log(dropdownItems[cryptocurrency] + ' font=Menlo' ))
  console.log('---')
  console.log('Cryptowat.ch | href=https://cryptowat.ch')
}
