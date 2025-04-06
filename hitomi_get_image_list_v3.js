// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

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


gg = { m: function(g) {
var o = 0;
switch (g) {
case 3020:
case 2510:
case 329:
case 2966:
case 1088:
case 2655:
case 2820:
case 1195:
case 1477:
case 189:
case 2117:
case 2288:
case 2691:
case 1151:
case 2413:
case 3601:
case 100:
case 1615:
case 1173:
case 1550:
case 492:
case 459:
case 1946:
case 2111:
case 2697:
case 3087:
case 2447:
case 1608:
case 1461:
case 3172:
case 43:
case 805:
case 1985:
case 2301:
case 168:
case 2976:
case 2441:
case 2881:
case 3355:
case 3158:
case 1419:
case 1467:
case 3452:
case 2307:
case 66:
case 4018:
case 2364:
case 2543:
case 3674:
case 3558:
case 1534:
case 2579:
case 643:
case 1748:
case 3080:
case 2236:
case 650:
case 1344:
case 3572:
case 1028:
case 1632:
case 2880:
case 1549:
case 3741:
case 2690:
case 1150:
case 419:
case 162:
case 764:
case 2821:
case 3562:
case 2110:
case 1470:
case 920:
case 1339:
case 2517:
case 3600:
case 3664:
case 3027:
case 2778:
case 3592:
case 3114:
case 3922:
case 2545:
case 883:
case 2604:
case 747:
case 3715:
case 3509:
case 416:
case 948:
case 1640:
case 2929:
case 2138:
case 2432:
case 1707:
case 1565:
case 2126:
case 2502:
case 715:
case 4030:
case 242:
case 2394:
case 378:
case 2084:
case 675:
case 3884:
case 445:
case 3360:
case 417:
case 4003:
case 2670:
case 1923:
case 2677:
case 3732:
case 1491:
case 457:
case 2989:
case 2653:
case 2671:
case 187:
case 2312:
case 1175:
case 1378:
case 1613:
case 3982:
case 4037:
case 2415:
case 3361:
case 1659:
case 186:
case 1983:
case 1165:
case 2102:
case 2526:
case 3016:
case 755:
case 3371:
case 3498:
case 2145:
case 372:
case 3514:
case 3256:
case 3109:
case 456:
case 248:
case 304:
case 1641:
case 1224:
case 3377:
case 1856:
case 4054:
case 3010:
case 2520:
case 794:
case 192:
case 159:
case 1706:
case 2127:
case 400:
case 965:
case 1625:
case 3964:
case 53:
case 3250:
case 877:
case 592:
case 559:
case 2587:
case 468:
case 2180:
case 822:
case 13:
case 1429:
case 1258:
case 4028:
case 3234:
case 561:
case 335:
case 2843:
case 3858:
case 1834:
case 3079:
case 2058:
case 2483:
case 519:
case 1863:
case 2676:
case 2218:
case 2187:
case 3263:
case 2072:
case 3872:
case 2580:
case 1849:
case 2666:
case 573:
case 3257:
case 3249:
case 2062:
case 3862:
case 1857:
case 1042:
case 3901:
case 1895:
case 3251:
case 1722:
case 1646:
case 2817:
case 2527:
case 3017:
case 1851:
case 3295:
case 3069:
case 2961:
case 3892:
case 2845:
case 3045:
case 3912:
case 853:
case 2382:
case 1947:
case 1292:
case 2009:
case 840:
case 3725:
case 2696:
case 517:
case 2967:
case 3265:
case 72:
case 116:
case 545:
case 1865:
case 2116:
case 2802:
case 2977:
case 2203:
case 2953:
case 3948:
case 2689:
case 606:
case 145:
case 3396:
case 3086:
case 2446:
case 2886:
case 3293:
case 516:
case 1030:
case 3935:
case 3329:
case 2237:
case 941:
case 363:
case 1031:
case 157:
case 2970:
case 2231:
case 2425:
case 1054:
case 3038:
case 2838:
case 914:
case 233:
case 2960:
case 2904:
case 2826:
case 785:
case 2254:
case 3814:
case 2014:
case 3994:
case 3524:
case 813:
case 254:
case 557:
case 1556:
case 2319:
case 3653:
case 506:
case 2732:
case 978:
case 227:
case 993:
case 3312:
case 1668:
case 107:
case 2371:
case 617:
case 2612:
case 1313:
case 1554:
case 3199:
case 1216:
case 106:
case 2377:
case 645:
case 507:
case 1056:
case 2824:
case 1652:
case 3348:
case 3145:
case 3024:
case 2192:
case 2514:
case 2353:
case 2715:
case 3660:
case 926:
case 1797:
case 2370:
case 3545:
case 2439:
case 1474:
case 657:
case 1791:
case 2694:
case 3929:
case 3335:
case 2884:
case 278:
case 2444:
case 656:
case 1503:
case 2708:
case 3670:
case 1530:
case 3586:
case 1137:
case 431:
case 3579:
case 2674:
case 740:
case 2558:
case 4063:
case 1639:
case 3300:
case 3364:
case 1494:
case 1518:
case 2572:
case 1828:
case 3236:
case 3440:
case 1777:
case 82:
case 132:
case 734:
case 4095:
case 19:
case 3821:
case 3511:
case 3752:
case 1767:
case 1719:
case 1505:
case 2741:
case 1332:
case 63:
case 3827:
case 2759:
case 1761:
case 2664:
case 4057:
case 1227:
case 2747:
case 3691:
case 3117:
case 3288:
case 2740:
case 3169:
case 779:
case 3820:
case 1448:
case 1888:
case 2607:
case 3510:
case 3966:
case 320:
case 2162:
case 2468:
case 395:
case 3111:
case 1105:
case 1308:
case 1704:
case 1760:
case 1412:
case 1315:
case 2172:
case 509:
case 538:
case 1770:
case 2397:
case 3307:
case 1281:
case 2452:
case 3143:
case 3881:
case 619:
case 3976:
case 713:
case 2391:
case 2935:
case 1776:
case 575:
case 3322:
case 3425:
case 2184:
case 1831:
case 3826:
case 3516:
case 2026:
case 333:
case 424:
case 4056:
case 1854:
case 3838:
case 1226:
case 2746:
case 2038:
case 1323:
case 2622:
case 175:
case 354:
case 1766:
case 2524:
case 1245:
case 2045:
case 3092:
case 2912:
case 2892:
case 3802:
case 2002:
case 37:
case 2265:
case 3919:
case 849:
case 3967:
case 2606:
case 2948:
case 3306:
case 2584:
case 686:
case 341:
case 2275:
case 963:
case 1093:
case 1383:
case 1968:
case 2293:
case 3971:
case 2396:
case 510:
case 2043:
case 847:
case 2079:
case 3879:
case 3181:
case 783:
case 691:
case 2366:
case 2872:
case 1818:
case 1528:
case 3072:
case 1998:
case 815:
case 1536:
case 2862:
case 1729:
case 3991:
case 2011:
case 1805:
case 1049:
case 110:
case 0:
case 2907:
case 3205:
case 2295:
case 2069:
case 3527:
case 531:
case 3869:
case 1051:
case 2251:
case 3120:
case 2901:
case 1217:
case 1385:
case 1188:
case 1482:
case 1269:
case 49:
case 1095:
case 16:
case 480:
case 3520:
case 3990:
case 2933:
case 1944:
case 2783:
case 143:
case 2900:
case 1050:
case 438:
case 409:
case 1939:
case 1128:
case 3587:
case 550:
case 543:
case 324:
case 433:
case 1348:
case 3652:
case 1619:
case 2224:
case 1744:
case 148:
case 2733:
case 3554:
case 2659:
case 1199:
case 2700:
case 1408:
case 1102:
case 1996:
case 1526:
case 1816:
case 4014:
case 2165:
case 2368:
case 287:
case 2497:
case 584:
case 3347:
case 3668:
case 3531:
case 2774:
case 3359:
case 2491:
case 3341:
case 2455:
case 1989:
case 2193:
case 3130:
case 3407:
case 3464:
case 987:
case 2923:
case 2593:
case 1670:
case 2284:
case 788:
case 744:
case 3340:
case 1084:
case 3433:
case 1394:
case 769:
case 3755:
case 1502:
case 4092:
case 2565:
case 2707:
case 711:
case 542:
case 47:
case 1660:
case 1604:
case 64:
case 2925:
case 1374:
case 4062:
case 3542:
case 3227:
case 1778:
case 1827:
case 900:
case 3761:
case 1517:
case 1569:
case 465:
case 1690:
case 3221:
case 989:
case 3644:
case 2557:
case 1821:
case 1752:
case 1511:
case 3280:
case 2748:
case 3753:
case 1333:
case 3494:
case 88:
case 1880:
case 2632:
case 2344:
case 2028:
case 3828:
case 3777:
case 1440:
case 1300:
case 2460:
case 2404:
case 2534:
case 1579:
case 1543:
case 3639:
case 1881:
case 268:
case 2735:
case 1307:
case 3281:
case 2467:
case 1179:
case 2134:
case 801:
case 2419:
case 3698:
case 890:
case 3770:
case 1301:
case 3412:
case 3287:
case 2615:
case 2173:
case 1413:
case 1697:
case 195:
case 1111:
case 2946:
case 2195:
case 2088:
case 3888:
case 962:
case 1691:
case 3220:
case 2794:
case 2151:
case 338:
case 1288:
case 1117:
case 289:
case 1169:
case 1014:
case 2556:
case 154:
case 752:
case 781:
case 678:
case 448:
case 256:
case 484:
case 3323:
case 3238:
case 1826:
case 133:
case 1516:
case 2031:
case 554:
case 718:
case 3831:
case 2623:
case 1425:
case 1231:
case 3837:
case 917:
case 1237:
case 3776:
case 3968:
case 604:
case 4084:
case 1446:
case 1971:
case 1230:
case 442:
case 3093:
case 2913:
case 3383:
case 514:
case 758:
case 3803:
case 626:
case 1306:
case 1689:
case 1203:
case 2875:
case 216:
case 3299:
case 2865:
case 2476:
case 2941:
case 2683:
case 1382:
case 2959:
case 3978:
case 1092:
case 2209:
case 2156:
case 712:
case 541:
case 114:
case 2947:
case 2895:
case 3385:
case 3188:
case 3269:
case 1997:
case 1869:
case 165:
case 3049:
case 2489:
case 310:
case 3073:
case 959:
case 3211:
case 1205:
case 3729:
case 1062:
case 2272:
case 331:
case 3536:
case 565:
case 1676:
case 2018:
case 3528:
case 3406:
case 1181:
case 860:
case 2908:
case 1483:
case 629:
case 3034:
case 1879:
case 1843:
case 874:
case 3789:
case 23:
case 2429:
case 2932:
case 998:
case 1587:
case 797:
case 2782:
case 3939:
case 3128:
case 350:
case 1423:
case 2850:
case 919:
case 796:
case 343:
case 1520:
case 3588:
case 1810:
case 292:
case 3419:
case 852:
case 899:
case 3134:
case 1452:
case 2281:
case 881:
case 1391:
case 665:
case 529:
case 3461:
case 1172:
case 2315:
case 3985:
case 2412:
case 1397:
case 1087:
case 2770:
case 4010:
case 2308:
case 3157:
case 1162:
case 2760:
case 2704:
case 3149:
case 300:
case 3615:
case 3173:
case 3550:
case 280:
case 8:
case 3477:
case 1740:
case 238:
case 391:
case 2220:
case 3794:
case 1020:
case 129:
case 2888:
case 99:
case 2448:
case 3398:
case 1664:
case 1759:
case 980:
case 3551:
case 3470:
case 4011:
case 3339:
case 1021:
case 362:
case 1562:
case 4069:
case 858:
case 3573:
case 3150:
case 2221:
case 938:
case 80:
case 1080:
case 3344:
case 4043:
case 3563:
case 2836:
case 3748:
case 2753:
case 2280:
case 812:
case 2771:
case 2639:
case 1558:
case 736:
case 1713:
case 3404:
case 907:
case 654:
case 2464:
case 2400:
case 1304:
case 193:
case 178:
case 3490:
case 2340:
case 739:
case 708:
case 2131:
case 633:
case 3565:
case 4045:
case 2755:
case 2154:
case 2791:
case 1694:
case 3701:
case 906:
case 1439:
case 760:
case 2474:
case 1114:
case 1592:
case 578:
case 4002:
case 1370:
case 3641:
case 2790:
case 3856:
case 1377:
case 172:
case 1906:
case 224:
case 1256:
case 641:
case 3165:
case 126:
case 1016:
case 1371:
case 386:
case 897:
case 1612:
case 2554:
case 3175:
case 2401:
case 3613:
case 67:
case 2359:
case 1982:
case 44:
case 3497:
case 3193:
case 1367:
case 3455:
case 614:
case 2341:
case 526:
case 3491:
case 931:
case 882:
case 4087:
case 3429:
case 851:
case 2939:
case 2128:
case 3782:
case 1900:
case 1964:
case 1250:
case 243:
case 1783:
case 3850:
case 3706:
case 2944:
case 2588:
case 1933:
case 319:
case 830:
case 3646:
case 1295:
case 2095:
case 2188:
case 2217:
case 4021:
case 943:
case 3895:
case 2057:
case 2805:
case 1249:
case 1273:
case 1011:
case 1862:
case 535:
case 1376:
case 888:
case 1907:
case 4027:
case 2073:
case 2049:
case 3489:
case 96:
case 210:
case 1263:
case 3018:
case 869:
case 2528:
case 2998:
case 1366:
case 2818:
case 3863:
case 620:
case 3272:
case 2063:
case 3685:
case 811:
case 3258:
case 2279:
case 2346:
case 1723:
case 135:
case 2383:
case 2830:
case 3913:
case 2286:
case 3893:
case 3030:
case 345:
case 1396:
case 684:
case 1293:
case 866:
case 3466:
case 1584:
case 1948:
case 2803:
case 3003:
case 317:
case 3865:
case 2299:
case 2065:
case 2952:
case 1389:
case 1265:
case 3156:
case 1892:
case 1124:
case 2766:
case 3214:
case 563:
case 701:
case 3940:
case 4016:
case 426:
case 1814:
case 171:
case 1026:
case 2238:
case 54:
case 2323:
case 3054:
case 275:
case 1746:
case 404:
case 2226:
case 2854:
case 1184:
case 1785:
case 357:
case 2776:
case 14:
case 3037:
case 313:
case 1235:
case 2035:
case 3684:
case 2589:
case 3835:
case 1427:
case 3070:
case 2938:
case 2129:
case 1583:
case 3060:
case 2926:
case 270:
case 720:
case 2804:
case 84:
case 1480:
case 1840:
case 379:
case 3914:
case 3122:
case 2384:
case 970:
case 1859:
case 3812:
case 2012:
case 1078:
case 3992:
case 3522:
case 3247:
case 3909:
case 1847:
case 2529:
case 3019:
case 2819:
case 1481:
case 264:
case 2196:
case 1656:
case 567:
case 2902:
case 2252:
case 3077:
case 2877:
case 249:
case 566:
case 1420:
case 2048:
case 353:
case 2986:
case 3213:
case 2871:
case 2268:
case 1993:
case 2189:
case 1813:
case 2687:
case 601:
case 1416:
case 1934:
case 2979:
case 3958:
case 2681:
case 742:
case 511:
case 2456:
case 2298:
case 3320:
case 2007:
case 2855:
case 1973:
case 3055:
case 530:
case 3807:
case 1949:
case 3962:
case 1957:
case 2911:
case 215:
case 3381:
case 1146:
case 1525:
case 40:
case 835:
case 2001:
case 544:
case 247:
case 3097:
case 2969:
case 588:
case 1044:
case 1328:
case 1125:
case 3756:
case 3380:
case 3833:
case 915:
case 2910:
case 2621:
case 784:
case 452:
case 499:
case 1950:
case 1200:
case 255:
case 1546:
case 3864:
case 4:
case 946:
case 1274:
case 582:
case 3327:
case 1585:
case 3232:
case 1832:
case 637:
case 2457:
case 2171:
case 3302:
case 2889:
case 596:
case 1675:
case 1113:
case 3089:
case 804:
case 197:
case 2309:
case 2451:
case 2177:
case 1469:
case 1693:
case 2392:
case 2082:
case 826:
case 2570:
case 2645:
case 2167:
case 827:
case 3750:
case 3096:
case 3386:
case 1141:
case 1159:
case 2699:
case 3924:
case 636:
case 3806:
case 1540:
case 1303:
case 1206:
case 1665:
case 2022:
case 3512:
case 3751:
case 3194:
case 3822:
case 2561:
case 3795:
case 1222:
case 1547:
case 4052:
case 523:
case 994:
case 2829:
case 3757:
case 2519:
case 3029:
case 3614:
case 1337:
case 4078:
case 878:
case 3773:
case 1410:
case 2170:
case 383:
case 3223:
case 203:
case 3734:
case 2450:
case 1823:
case 1354:
case 1513:
case 3338:
case 3135:
case 1426:
case 1508:
case 2730:
case 602:
case 50:
case 1438:
case 3454:
case 1132:
case 674:
case 444:
case 430:
case 3775:
case 158:
case 3310:
case 3174:
case 2703:
case 22:
case 2555:
case 3507:
case 3765:
case 3437:
case 10:
case 3100:
case 1825:
case 3501:
case 1709:
case 3225:
case 2927:
case 112:
case 1792:
case 558:
case 714:
case 2475:
case 2372:
case 1115:
case 1318:
case 2866:
case 1657:
case 2611:
case 482:
case 3379:
case 2358:
case 1695:
case 3343:
case 3430:
case 3246:
case 2191:
case 305:
case 608:
case 3564:
case 2617:
case 3369:
case 65:
case 118:
case 552:
case 599:
case 3658:
case 2643:
case 3574:
case 1445:
case 1634:
case 1305:
case 2981:
case 3076:
case 2876:
case 2362:
case 2465:
case 829:
case 1532:
case 490:
case 425:
case 3621:
case 102:
case 704:
case 1290:
case 3910:
case 1844:
case 3566:
case 2833:
case 2756:
case 772:
case 2864:
case 726:
case 11:
case 3000:
case 3627:
case 1839:
case 727:
case 3074:
case 574:
case 2327:
case 3239:
case 502:
case 1032:
case 2321:
case 1636:
case 3576:
case 928:
case 612:
case 3943:
case 2958:
case 865:
case 2208:
case 346:
case 1008:
case 3176:
case 652:
case 699:
case 977:
case 2972:
case 560:
case 1424:
case 778:
case 3298:
case 139:
case 108:
case 3681:
case 1905:
case 3911:
case 3891:
case 2962:
case 4025:
case 1688:
case 3969:
case 2387:
case 539:
case 2801:
case 160:
case 1261:
case 137:
case 3278:
case 1047:
case 2259:
case 3861:
case 2106:
case 3945:
case 2812:
case 1878:
case 1727:
case 3252:
case 364:
case 2241:
case 3529:
case 2488:
case 3048:
case 2053:
case 2182:
case 1277:
case 913:
case 2848:
case 1903:
case 2077:
case 4023:
case 136:
case 1930:
case 1271:
case 240:
case 3189:
case 2213:
case 3986:
case 2071:
case 934:
case 854:
case 3589:
case 1781:
case 213:
case 3870:
case 2582:
case 833:
case 1787:
case 1931:
case 3804:
case 3860:
case 3596:
case 3926:
case 370:
case 1260:
case 1954:
case 1720:
case 4083:
case 2428:
case 623:
case 279:
case 2122:
case 2894:
case 729:
case 101:
case 1605:
case 1363:
case 3197:
case 3866:
case 771:
case 1544:
case 3475:
case 3590:
case 474:
case 3617:
case 3669:
case 644:
case 3191:
case 688:
case 205:
case 1738:
case 402:
case 125:
case 2107:
case 2430:
case 1642:
case 3155:
case 2343:
case 190:
case 1334:
case 3493:
case 1492:
case 3679:
case 3731:
case 895:
case 2658:
case 1198:
case 501:
case 1351:
case 2317:
case 525:
case 1349:
case 2672:
case 3465:
case 74:
case 1357:
case 3876:
case 3362:
case 408:
case 2454:
case 1786:
case 651:
case 682:
case 2793:
case 1414:
case 3703:
case 1928:
case 1139:
case 4008:
case 2775:
case 2164:
case 4015:
case 460:
case 3591:
case 921:
case 18:
case 3610:
case 2507:
case 3555:
case 1702:
case 1745:
case 3927:
case 2225:
case 1144:
case 2501:
case 3190:
case 3626:
case 4041:
case 1717:
case 2751:
case 3638:
case 2773:
case 3160:
case 2749:
case 3104:
case 1229:
case 4059:
case 1711:
case 3705:
case 3519:
case 842:
case 2029:
case 437:
case 3829:
case 2763:
case 3553:
case 1637:
case 3577:
case 436:
case 2338:
case 3450:
case 1631:
case 303:
case 2734:
case 735:
case 1568:
case 283:
case 2535:
case 2399:
case 2089:
case 3889:
case 2302:
case 1603:
case 3171:
case 1168:
case 2882:
case 3495:
case 2442:
case 2148:
case 3153:
case 3177:
case 3309:
case 3916:
case 3896:
case 2283:
case 2750:
case 3645:
case 3434:
case 1393:
case 1152:
case 1296:
case 394:
case 3161:
case 1178:
case 1375:
case 2112:
case 3006:
case 1472:
case 3699:
case 3636:
case 3628:
case 787:
case 3839:
case 2039:
case 2585:
case 2264:
case 3716:
case 911:
case 155:
case 1627:
case 1000:
case 969:
case 3844:
case 485:
case 2125:
case 374:
case 2328:
case 282:
case 3290:
case 2724:
case 1166:
case 2815:
case 3297:
case 147:
case 2949:
case 982:
case 1620:
case 951:
case 1855:
case 3291:
case 3905:
case 1911:
case 115:
case 1891:
case 3255:
case 2957:
case 288:
case 1298:
case 547:
case 339:
case 244:
case 1681:
case 2098:
case 3918:
case 2185:
case 2416:
case 3008:
case 1176:
case 1687:
case 230:
case 621:
case 2068:
case 1871:
case 3868:
case 564:
case 3930:
case 1189:
case 1268:
case 2248:
case 1048:
case 2975:
case 2420:
case 1867:
case 3852:
case 1819:
case 2183:
case 1999:
case 3721:
case 2052:
case 3267:
case 4022:
case 3219:
case 2656:
case 164:
case 1012:
case 1945:
case 1616:
case 2847:
case 549:
case 1788:
case 791:
case 3720:
case 789:
case 3204:
case 1938:
case 3954:
case 1860:
case 1804:
case 170:
case 3931:
case 2427:
case 967:
case 3787:
case 3937:
case 1589:
case 2123:
case 1035:
case 1465:
case 1876:
case 585:
case 3357:
case 1362:
case 4074:
case 1981:
case 1737:
case 3276:
case 3618:
case 3409:
case 757:
case 3351:
case 880:
case 1731:
case 3085:
case 2634:
case 2342:
case 3539:
case 3198:
case 3395:
case 2885:
case 756:
case 912:
case 1155:
case 3726:
case 390:
case 3334:
case 1191:
case 3738:
case 2318:
case 3544:
case 2673:
case 2714:
case 301:
case 3266:
case 299:
case 3605:
case 281:
case 2709:
case 2515:
case 415:
case 1190:
case 2650:
case 4007:
case 677:
case 716:
case 952:
case 999:
case 1555:
case 981:
case 4001:
case 1591:
case 258:
case 9:
case 676:
case 3936:
case 1703:
case 3414:
case 3928:
case 3598:
case 1980:
case 1730:
case 745:
case 622:
case 2132:
case 2438:
case 3786:
case 52:
case 3631:
case 3779:
case 3568:
case 2354:
case 449:
case 997:
case 1450:
case 679:
case 223:
case 798:
case 1718:
case 1170:
case 3711:
case 1705:
case 1829:
case 2541:
case 1104:
case 1160:
case 3229:
case 4012:
case 3717:
case 1561:
case 3654:
case 3578:
case 1638:
case 2559:
case 2547:
case 2222:
case 719:
case 1742:
case 2331:
case 470:
case 3375:
case 3178:
case 3472:
case 2147:
case 2665:
case 653:
case 2206:
case 1463:
case 792:
case 1602:
case 3152:
case 1645:
case 807:
case 1119:
case 3296:
case 1560:
case 634:
case 4035:
case 806:
case 2469:
case 2282:
case 1451:
case 1309:
case 1686:
case 297:
case 3630:
case 1495:
case 1082:
case 1153:
case 1171:
case 3289:
case 824:
case 1457:
case 1449:
case 2113:
case 1889:
case 3294:
case 603:
case 738:
case 1506:
case 1122:
case 1428:
case 513:
case 1004:
case 2954:
case 2204:
case 2260:
case 1582:
case 3427:
case 1684:
case 1835:
case 3421:
case 3235:
case 2013:
case 3993:
case 2271:
case 2930:
case 2868:
case 1316:
case 367:
case 1071:
case 694:
case 3068:
case 3420:
case 2277:
case 1488:
case 3975:
case 1053:
case 2253:
case 2780:
case 1077:
case 2903:
case 2356:
case 732:
case 134:
case 2041:
case 553:
case 79:
case 2267:
case 817:
case 1067:
case 1019:
case 3183:
case 1241:
case 2852:
case 2047:
case 3487:
case 1259:
case 3212:
case 237:
case 1909:
case 534:
case 3847:
case 3859:
case 2878:
case 1812:
case 1522:
case 845:
case 3951:
case 873:
case 1387:
case 3995:
case 260:
case 3815:
case 369:
case 1091:
case 2291:
case 1807:
case 898:
case 3388:
case 3098:
case 1972:
case 861:
case 2918:
case 1320:
case 128:
case 344:
case 208:
case 685:
case 239:
case 388:
case 1208:
case 3934:
case 330:
case 1958:
case 3808:
case 2008:
case 939:
case 908:
case 2032:
case 2628:
case 1232:
case 3039:
case 177:
case 2839:
case 1874:
case 707:
case 3274:
case 960:
case 21:
case 3546:
case 706:
case 2716:
case 3336:
case 3233:
case 2484:
case 95:
case 1756:
case 83:
case 1833:
case 2844:
case 3956:
case 3147:
case 76:
case 1418:
case 2375:
case 2178:
case 3540:
case 4004:
case 4060:
case 479:
case 743:
case 887:
case 396:
case 3883:
case 2296:
case 750:
case 2152:
case 1148:
case 1882:
case 397:
case 3469:
case 1399:
case 2168:
case 2365:
case 2289:
case 2462:
case 3411:
case 434:
case 3823:
case 3513:
case 3354:
case 4077:
case 1135:
case 1338:
case 2568:
case 183:
case 3758:
case 2743:
case 1326:
case 2779:
case 1548:
case 4071:
case 731:
case 3337:
case 1749:
case 4061:
case 1757:
case 3762:
case 3222:
case 4019:
case 1194:
case 2769:
case 2717:
case 990:
case 312:
case 3650:
case 4091:
case 1501:
case 3709:
case 3515:
case 2025:
case 28:
case 1100:
case 2702:
case 1507:
case 1765:
case 1174:
case 2598:
case 2139:
case 655:
case 358:
case 3438:
case 2786:
case 3132:
case 2350:
case 1793:
case 3426:
case 891:
case 3532:
case 2276:
case 3305:
case 1076:
case 2357:
case 477:
case 647:
case 521:
case 3342:
case 2539:
case 2395:
case 2085:
case 3634:
case 1317:
case 615:
case 1285:
case 2409:
case 2738:
case 4090:
case 3651:
case 3846:
case 2726:
case 2334:
case 1107:
case 1430:
case 1246:
case 3657:
case 2363:
case 1662:
case 2266:
case 352:
case 121:
case 3649:
case 2988:
case 646:
case 868:
case 3115:
case 2544:
case 476:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743908402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,];
var gg_b = "1743912001/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
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
