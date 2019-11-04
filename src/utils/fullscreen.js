export {
  enableFullScreen,
  disableFullScreen,
  checkFullScreenCapabilities
}

function enableFullScreen (selector = 'html') {
  try {
    var { browserSupported, fullScreen } = checkFullScreenCapabilities()
    if (browserSupported) {
      fullScreen(selector)
    } else {
      console.warn('Your browser doesnt support the fullscreen API')
    }
  } catch (e) {
    console.warn('Unable to set fullscreen: ', e)
  }
}

function disableFullScreen () {
  document.exitFullscreen()
}

function checkFullScreenCapabilities (selector = 'html') {
  var elem = document.querySelector(selector)
  if (firefoxSupported()) {
    return {
      browserSupported: true,
      fullScreen: () => { elem.requestFullscreen() }
    }
  } else if (chromeSupported()) {
    return {
      browserSupported: true,
      fullScreen: () => { elem.webkitRequestFullScreen() }
    }
  }

  function firefoxSupported () {
    return 'requestFullscreen' in elem
  }
  function chromeSupported () {
    return 'webkitRequestFullScreen' in elem
  }
}
