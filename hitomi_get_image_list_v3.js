// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};



document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,];
var gg_b = "1666213202/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
