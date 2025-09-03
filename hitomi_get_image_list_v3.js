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
var o = 1;
switch (g) {
case 1087:
case 1176:
case 360:
case 3741:
case 1935:
case 1062:
case 2242:
case 3089:
case 1972:
case 1047:
case 3138:
case 2451:
case 3049:
case 1612:
case 1305:
case 3123:
case 2140:
case 517:
case 2180:
case 2115:
case 1592:
case 3914:
case 1108:
case 509:
case 459:
case 163:
case 3905:
case 497:
case 461:
case 1501:
case 556:
case 2320:
case 1279:
case 1809:
case 3527:
case 2989:
case 3277:
case 3807:
case 399:
case 859:
case 2396:
case 2949:
case 348:
case 3311:
case 806:
case 2499:
case 4023:
case 322:
case 344:
case 1534:
case 897:
case 1493:
case 1756:
case 1671:
case 2664:
case 3839:
case 1911:
case 2538:
case 3504:
case 2273:
case 2788:
case 2131:
case 3824:
case 3458:
case 2523:
case 768:
case 316:
case 2362:
case 687:
case 1943:
case 764:
case 3580:
case 2138:
case 3422:
case 1269:
case 3451:
case 260:
case 2741:
case 3242:
case 309:
case 963:
case 3725:
case 356:
case 2255:
case 2713:
case 3140:
case 896:
case 98:
case 1918:
case 3104:
case 1011:
case 2905:
case 560:
case 2674:
case 1845:
case 1129:
case 3127:
case 1661:
case 3717:
case 2263:
case 317:
case 1083:
case 686:
case 4031:
case 1947:
case 3949:
case 3396:
case 1987:
case 419:
case 3320:
case 2807:
case 2277:
case 299:
case 4015:
case 516:
case 244:
case 4004:
case 2311:
case 1497:
case 4040:
case 3005:
case 1290:
case 3664:
case 2730:
case 1226:
case 3014:
case 1576:
case 3362:
case 1389:
case 2515:
case 1192:
case 544:
case 3748:
case 2470:
case 3387:
case 496:
case 1920:
case 3803:
case 557:
case 2504:
case 1996:
case 2458:
case 3785:
case 2034:
case 3710:
case 3819:
case 3196:
case 1366:
case 3745:
case 919:
case 2518:
case 1817:
case 3572:
case 1469:
case 2721:
case 1301:
case 2029:
case 3008:
case 3535:
case 779:
case 3442:
case 536:
case 2463:
case 3901:
case 1023:
case 3147:
case 1505:
case 88:
case 996:
case 1149:
case 3966:
case 863:
case 1392:
case 236:
case 1189:
case 3934:
case 4020:
case 2092:
case 161:
case 242:
case 197:
case 2338:
case 705:
case 3304:
case 2547:
case 3340:
case 3929:
case 1888:
case 159:
case 2562:
case 2908:
case 48:
case 1980:
case 2844:
case 524:
case 1329:
case 2001:
case 2270:
case 2800:
case 2709:
case 2884:
case 3583:
case 1904:
case 786:
case 3511:
case 337:
case 2066:
case 2976:
case 4062:
case 2135:
case 1426:
case 1334:
case 2745:
case 2819:
case 2196:
case 107:
case 1653:
case 3034:
case 2785:
case 3455:
case 3143:
case 2710:
case 2120:
case 2008:
case 1027:
case 2535:
case 2467:
case 2482:
case 2572:
case 2260:
case 1841:
case 1004:
case 1665:
case 1015:
case 2901:
case 664:
case 119:
case 2659:
case 2162:
case 336:
case 668:
case 2331:
case 4072:
case 2966:
case 4083:
case 1830:
case 1031:
case 3338:
case 3737:
case 3092:
case 1376:
case 1479:
case 3908:
case 3587:
case 3477:
case 1114:
case 1724:
case 1549:
case 4011:
case 2304:
case 2340:
case 3323:
case 3547:
case 60:
case 1105:
case 2473:
case 959:
case 1707:
case 2118:
case 3596:
case 3844:
case 2327:
case 2543:
case 640:
case 3800:
case 3270:
case 3976:
case 3135:
case 3616:
case 1938:
case 2511:
case 3172:
case 906:
case 2733:
case 3066:
case 1737:
case 1092:
case 3376:
case 417:
case 1338:
case 75:
case 2848:
case 1323:
case 3105:
case 1547:
case 259:
case 2703:
case 3479:
case 3589:
case 1477:
case 3724:
case 585:
case 2254:
case 2675:
case 1844:
case 506:
case 1520:
case 2940:
case 2632:
case 1709:
case 1884:
case 3707:
case 1258:
case 2904:
case 1172:
case 1066:
case 3293:
case 409:
case 559:
case 1135:
case 1034:
case 396:
case 1455:
case 1143:
case 1518:
case 2366:
case 2817:
case 3653:
case 1721:
case 809:
case 2469:
case 1029:
case 4014:
case 2301:
case 3015:
case 3841:
case 3040:
case 2023:
case 3004:
case 2038:
case 735:
case 2514:
case 319:
case 2830:
case 2031:
case 3297:
case 1934:
case 306:
case 1602:
case 1929:
case 359:
case 3254:
case 3927:
case 2105:
case 899:
case 1340:
case 816:
case 1583:
case 741:
case 2707:
case 1118:
case 2308:
case 3675:
case 1327:
case 3915:
case 942:
case 3426:
case 4089:
case 3334:
case 3286:
case 385:
case 137:
case 689:
case 2938:
case 924:
case 3490:
case 1733:
case 3246:
case 1196:
case 3366:
case 1745:
case 207:
case 3817:
case 1992:
case 296:
case 1785:
case 1710:
case 3301:
case 676:
case 1442:
case 1535:
case 1008:
case 2027:
case 1222:
case 860:
case 1467:
case 1482:
case 1251:
case 2841:
case 2040:
case 71:
case 3694:
case 422:
case 1260:
case 448:
case 2665:
case 457:
case 2004:
case 507:
case 2881:
case 444:
case 1901:
case 3657:
case 2813:
case 1187:
case 1076:
case 3189:
case 219:
case 1147:
case 1966:
case 1331:
case 3035:
case 3987:
case 2784:
case 2809:
case 1320:
case 436:
case 3962:
case 1989:
case 3947:
case 1949:
case 3166:
case 1396:
case 916:
case 824:
case 2018:
case 3497:
case 776:
case 3101:
case 3833:
case 2756:
case 957:
case 1014:
case 948:
case 2837:
case 61:
case 1788:
case 3349:
case 1803:
case 47:
case 721:
case 239:
case 3192:
case 1748:
case 1387:
case 4034:
case 2943:
case 58:
case 2087:
case 0:
case 2062:
case 1422:
case 1267:
case 4066:
case 2972:
case 3269:
case 1451:
case 1140:
case 3678:
case 3918:
case 1104:
case 3650:
case 1636:
case 1180:
case 4001:
case 156:
case 2592:
case 1725:
case 1115:
case 28:
case 3661:
case 2566:
case 1318:
case 3885:
case 641:
case 836:
case 3810:
case 263:
case 1460:
case 3606:
case 3134:
case 2852:
case 2020:
case 424:
case 3744:
case 2072:
case 3700:
case 3784:
case 3809:
case 1343:
case 2508:
case 2987:
case 2454:
case 4076:
case 1277:
case 144:
case 148:
case 157:
case 3018:
case 122:
case 3671:
case 1695:
case 2446:
case 1839:
case 2290:
case 3756:
case 2226:
case 837:
case 975:
case 2576:
case 2486:
case 116:
case 2192:
case 339:
case 1470:
case 2996:
case 1504:
case 1458:
case 1540:
case 743:
case 65:
case 3047:
case 1138:
case 2269:
case 3176:
case 917:
case 1089:
case 3314:
case 1531:
case 2918:
case 3566:
case 1905:
case 2810:
case 2011:
case 2129:
case 38:
case 2661:
case 2134:
case 3501:
case 3020:
case 909:
case 3096:
case 1372:
case 2606:
case 1865:
case 170:
case 3712:
case 3122:
case 232:
case 3990:
case 1681:
case 2211:
case 2423:
case 3296:
case 2859:
case 929:
case 1973:
case 791:
case 684:
case 1613:
case 2283:
case 2778:
case 3570:
case 3480:
case 2750:
case 3287:
case 1853:
case 1429:
case 3427:
case 1289:
case 3247:
case 849:
case 2069:
case 3160:
case 347:
case 1434:
case 354:
case 1326:
case 1154:
case 782:
case 4051:
case 3600:
case 3644:
case 4022:
case 2090:
case 981:
case 3367:
case 2560:
case 498:
case 1197:
case 214:
case 546:
case 2235:
case 1077:
case 965:
case 3656:
case 1942:
case 2272:
case 1967:
case 1982:
case 2522:
case 1146:
case 3771:
case 3431:
case 102:
case 4060:
case 2158:
case 3218:
case 514:
case 246:
case 2122:
case 2712:
case 3438:
case 2151:
case 3750:
case 1379:
case 3243:
case 1736:
case 883:
case 3423:
case 2296:
case 3859:
case 1857:
case 3283:
case 547:
case 3778:
case 408:
case 558:
case 1067:
case 273:
case 2247:
case 1082:
case 2287:
case 1617:
case 3761:
case 3979:
case 630:
case 129:
case 2262:
case 2427:
case 4058:
case 192:
case 2600:
case 3090:
case 1205:
case 1875:
case 3026:
case 3355:
case 2684:
case 1214:
case 2768:
case 318:
case 165:
case 1073:
case 2382:
case 701:
case 2367:
case 3551:
case 3272:
case 3363:
case 181:
case 808:
case 1648:
case 483:
case 1955:
case 3170:
case 804:
case 3158:
case 2218:
case 2280:
case 1610:
case 3155:
case 2420:
case 3443:
case 552:
case 3223:
case 2240:
case 580:
case 1958:
case 1590:
case 2167:
case 2182:
case 3411:
case 870:
case 338:
case 1276:
case 1806:
case 334:
case 1393:
case 252:
case 2765:
case 280:
case 227:
case 3836:
case 983:
case 96:
case 2487:
case 2954:
case 1208:
case 3757:
case 1702:
case 2563:
case 4055:
case 3864:
case 2895:
case 2351:
case 2322:
case 2093:
case 1179:
case 2624:
case 3086:
case 730:
case 2555:
case 326:
case 4063:
case 3775:
case 802:
case 2607:
case 1628:
case 3097:
case 3732:
case 3582:
case 793:
case 1569:
case 3472:
case 3567:
case 2360:
case 3435:
case 470:
case 2223:
case 3240:
case 3874:
case 16:
case 2483:
case 1354:
case 3280:
case 2155:
case 2993:
case 998:
case 3986:
case 234:
case 2238:
case 1621:
case 1169:
case 3946:
case 1652:
case 994:
case 3399:
case 1346:
case 1999:
case 380:
case 327:
case 1812:
case 2163:
case 3227:
case 2757:
case 829:
case 2836:
case 1449:
case 538:
case 1960:
case 3351:
case 271:
case 212:
case 1058:
case 3322:
case 865:
case 1201:
case 1637:
case 3895:
case 429:
case 2086:
case 2177:
case 4082:
case 4067:
case 2046:
case 667:
case 3173:
case 3607:
case 1609:
case 571:
case 512:
case 2732:
case 1292:
case 226:
case 2775:
case 2542:
case 1126:
case 1716:
case 3360:
case 1639:
case 818:
case 3871:
case 3070:
case 3637:
case 1895:
case 3266:
case 2405:
case 926:
case 1093:
case 2179:
case 2414:
case 304:
case 1555:
case 1231:
case 1173:
case 2099:
case 308:
case 2628:
case 3609:
case 772:
case 1418:
case 2569:
case 1360:
case 432:
case 62:
case 3190:
case 912:
case 971:
case 3716:
case 383:
case 594:
case 3354:
case 446:
case 1753:
case 598:
case 2645:
case 1204:
case 1167:
case 2590:
case 1946:
case 1182:
case 832:
case 2806:
case 1142:
case 2526:
case 1986:
case 3812:
case 3234:
case 294:
case 414:
case 1765:
case 653:
case 3346:
case 298:
case 152:
case 3999:
case 180:
case 127:
case 418:
case 1447:
case 4090:
case 678:
case 2850:
case 2051:
case 1577:
case 2878:
case 4026:
case 1227:
case 249:
case 674:
case 508:
case 733:
case 613:
case 112:
case 3702:
case 454:
case 1864:
case 2871:
case 2070:
case 2201:
case 3179:
case 1086:
case 1177:
case 1046:
case 2266:
case 3405:
case 3099:
case 1097:
case 725:
case 126:
case 2292:
case 3791:
case 2716:
case 2126:
case 1542:
case 1054:
case 2868:
case 3633:
case 1472:
case 2190:
case 2951:
case 3861:
case 3060:
case 1483:
case 3645:
case 3958:
case 2354:
case 3970:
case 1443:
case 3806:
case 3276:
case 927:
case 1993:
case 980:
case 134:
case 952:
case 2798:
case 2621:
case 1411:
case 138:
case 2169:
case 2346:
case 398:
case 1794:
case 854:
case 2812:
case 2386:
case 2234:
case 583:
case 394:
case 3393:
case 3759:
case 873:
case 2579:
case 3878:
case 3208:
case 1358:
case 3022:
case 3850:
case 2449:
case 1026:
case 1355:
case 651:
case 1090:
case 1891:
case 2466:
case 2369:
case 118:
case 427:
case 480:
case 3073:
case 2197:
case 1560:
case 452:
case 502:
case 114:
case 2401:
case 3193:
case 1235:
case 2630:
case 1551:
case 2967:
case 1272:
case 2146:
case 1158:
case 146:
case 2492:
case 3955:
case 1170:
case 3476:
case 2865:
case 947:
case 3586:
case 270:
case 3894:
case 3546:
case 1438:
case 1211:
case 1423:
case 1859:
case 1778:
case 1283:
case 1377:
case 690:
case 2063:
case 2853:
case 2429:
case 3554:
case 3408:
case 3042:
case 2249:
case 1069:
case 392:
case 1599:
case 2434:
case 852:
case 880:
case 2326:
case 1600:
case 2205:
case 1644:
case 3466:
case 2214:
case 3154:
case 1684:
case 1768:
case 1342:
case 2963:
case 3401:
case 2073:
case 3369:
case 1367:
case 3197:
case 3967:
case 438:
case 3795:
case 753:
case 1771:
case 434:
case 1079:
case 2193:
case 281:
case 918:
case 3942:
case 774:
case 2955:
case 826:
case 1431:
case 2688:
case 1218:
case 1122:
case 2476:
case 529:
case 2894:
case 838:
case 3593:
case 1570:
case 1480:
case 1220:
case 426:
case 2379:
case 3063:
case 1296:
case 3613:
case 592:
case 1404:
case 731:
case 611:
case 1373:
case 2617:
case 2554:
case 3853:
case 3429:
case 1427:
case 3289:
case 1262:
case 3434:
case 932:
case 72:
case 2597:
case 471:
case 412:
case 147:
case 2769:
case 1452:
case 1964:
case 2611:
case 303:
case 951:
case 3516:
case 2860:
case 2061:
case 1241:
case 4002:
case 2643:
case 3620:
case 3696:
case 780:
case 2006:
case 1213:
case 2683:
case 752:
case 3647:
case 813:
case 1689:
case 2219:
case 2050:
case 1763:
case 2968:
case 3364:
case 2078:
case 2395:
case 445:
case 413:
case 3870:
case 658:
case 647:
case 3284:
case 3961:
case 3336:
case 654:
case 845:
case 230:
case 3102:
case 1437:
case 673:
case 1565:
case 172:
case 111:
case 1893:
case 3906:
case 593:
case 2912:
case 2635:
case 4059:
case 388:
case 2899:
case 3256:
case 1230:
case 2116:
case 1936:
case 1175:
case 1361:
case 3950:
case 3068:
case 1132:
case 3407:
case 3618:
case 646:
case 3061:
case 831:
case 1995:
case 1782:
case 3611:
case 1767:
case 1445:
case 3683:
case 3006:
case 1410:
case 1485:
case 3643:
case 3591:
case 2687:
case 94:
case 734:
case 2662:
case 738:
case 618:
case 3078:
case 478:
case 3395:
case 1371:
case 1165:
case 474:
case 3851:
case 3050:
case 1974:
case 3559:
case 2424:
case 2779:
case 2284:
case 588:
case 2961:
case 2336:
case 1614:
case 2071:
case 393:
case 2244:
case 1605:
case 1312:
case 1886:
case 125:
case 2439:
case 1846:
case 2102:
case 726:
case 878:
case 330:
case 3635:
case 1897:
case 3899:
case 2256:
case 3726:
case 3116:
case 911:
case 2598:
case 3790:
case 3672:
case 284:
case 3912:
case 1854:
case 1428:
case 712:
case 771:
case 2978:
case 2618:
case 1773:
case 2068:
case 3094:
case 567:
case 1425:
case 2680:
case 1210:
case 2136:
case 2615:
case 1285:
case 310:
case 626:
case 1059:
case 2595:
case 3842:
case 291:
case 411:
case 1760:
case 472:
case 2053:
case 1869:
case 3316:
case 3867:
case 92:
case 3174:
case 1417:
case 3419:
case 2391:
case 1608:
case 2627:
case 800:
case 2855:
case 4095:
case 671:
case 612:
case 3797:
case 3032:
case 1506:
case 145:
case 2994:
case 1826:
case 1799:
case 811:
case 746:
case 1168:
case 2957:
case 1561:
case 3873:
case 550:
case 2400:
case 1353:
case 2444:
case 2207:
case 1228:
case 44:
case 2631:
case 301:
case 3953:
case 1578:
case 718:
case 1488:
case 366:
case 1002:
case 714:
case 634:
case 1550:
case 978:
case 282:
case 3786:
case 2793:
case 4074:
case 250:
case 1171:
case 1365:
case 3746:
case 974:
case 3136:
case 1150:
case 1991:
case 3680:
case 913:
case 3615:
case 758:
case 747:
case 2094:
case 433:
case 12:
case 2638:
case 3863:
case 2564:
case 1221:
case 2057:
case 210:
case 490:
case 851:
case 2842:
case 391:
case 3053:
case 1332:
case 510:
case 1375:
case 3391:
case 566:
case 3239:
case 2075:
case 1601:
case 3994:
case 2797:
case 2032:
case 451:
case 178:
case 627:
case 3574:
case 2873:
case 1016:
case 1770:
case 3359:
case 833:
case 266:
case 1692:
case 3207:
case 3877:
case 1879:
case 2953:
case 2195:
case 890:
case 1394:
case 945:
case 350:
case 3793:
case 1994:
case 2506:
case 2826:
case 830:
case 1239:
case 2091:
case 2890:
case 374:
case 3601:
case 4050:
case 3237:
case 1224:
case 1957:
case 901:
case 1484:
case 1400:
case 353:
case 3666:
case 966:
case 1631:
case 1877:
case 4006:
case 2228:
case 3770:
case 2448:
case 3357:
case 2998:
case 683:
case 182:
case 1456:
case 3430:
case 3512:
case 2365:
case 2233:
case 3394:
case 66:
case 1164:
case 1065:
case 3413:
case 2210:
case 1136:
case 2285:
case 1302:
case 604:
case 2916:
case 2059:
case 3441:
case 608:
case 3221:
case 2751:
case 2722:
case 3252:
case 513:
case 3571:
case 331:
case 167:
case 3106:
case 910:
case 3634:
case 3098:
case 2417:
case 3629:
case 3161:
case 1391:
case 1855:
case 493:
case 3332:
case 213:
case 2237:
case 274:
case 649:
case 3168:
case 1032:
case 982:
case 278:
case 3826:
case 3353:
case 694:
case 2016:
case 1873:
case 2959:
case 2692:
case 574:
case 3550:
case 3228:
case 578:
case 3488:
case 2879:
case 2209:
case 3171:
case 3233:
case 403:
case 1195:
case 1786:
case 884:
case 3425:
case 2150:
case 3210:
case 1094:
case 792:
case 22:
case 3245:
case 3751:
case 484:
case 488:
case 967:
case 729:
case 1057:
case 2441:
case 991:
case 3916:
case 3869:
case 2568:
case 1316:
case 1867:
case 2902:
case 52:
case 4071:
case 2332:
case 531:
case 3417:
case 1419:
case 2375:
case 3605:
case 2378:
case 3974:
case 1403:
case 2350:
case 3557:
case 3846:
case 2437:
case 130:
case 4053:
case 3312:
case 467:
case 211:
case 988:
case 2893:
case 491:
case 3433:
case 1790:
case 882:
case 1672:
case 1635:
case 3897:
case 2175:
case 2936:
case 1374:
case 511:
case 3854:
case 4065:
case 3773:
case 2409:
case 3288:
case 3782:
case 3767:
case 1611:
case 2281:
case 2452:
case 3368:
case 3742:
case 500:
case 1860:
case 482:
case 3225:
case 3410:
case 3575:
case 681:
case 1643:
case 798:
case 3445:
case 3532:
case 1683:
case 24:
case 2213:
case 3217:
case 2157:
case 369:
case 2689:
case 1851:
case 867:
case 1822:
case 2194:
case 1078:
case 1395:
case 3165:
case 1424:
case 3777:
case 1858:
case 2614:
case 2557:
case 1336:
case 1779:
case 3350:
case 2605:
case 1244:
case 2064:
case 311:
case 372:
case 533:
case 708:
case 3893:
case 2594:
case 1906:
case 1439:
case 704:
case 3437:
case 3230:
case 1256:
case 3306:
case 2433:
case 184:
case 866:
case 1407:
case 3132:
case 2854:
case 525:
case 4094:
case 2288:
case 3409:
case 1191:
case 3361:
case 3175:
case 3936:
case 1068:
case 670:
case 2742:
case 3074:
case 810:
case 2782:
case 3421:
case 3452:
case 3964:
case 2767:
case 3213:
case 2153:
case 551:
case 2445:
case 2532:
case 2410:
case 3755:
case 1620:
case 466:
case 2575:
case 300:
case 269:
case 1647:
case 1364:
case 76:
case 3194:
case 251:
case 2371:
case 2165:
case 3763:
case 1212:
case 387:
case 320:
case 579:
case 616:
case 4003:
case 2017:
case 1110:
case 1720:
case 2384:
case 1185:
case 3827:
case 3507:
case 1796:
case 1829:
case 648:
case 123:
case 43:
case 622:
case 3880:
case 644:
case 91:
case 1762:
case 279:
case 3789:
case 3804:
case 3274:
case 2823:
case 2459:
case 3041:
case 3840:
case 3524:
case 1537:
case 855:
case 699:
case 2838:
case 3539:
case 1465:
case 1892:
case 83:
case 1679:
case 3917:
case 2124:
case 1056:
case 3103:
case 1919:
case 3677:
case 821:
case 2139:
case 2048:
case 1268:
case 505:
case 2088:
case 1133:
case 1801:
case 1271:
case 1000:
case 586:
case 1044:
case 1084:
case 660:
case 3319:
case 1128:
case 742:
case 205:
case 2673:
case 728:
case 2498:
case 1956:
case 3642:
case 3930:
case 4024:
case 1019:
case 3667:
case 1152:
case 1669:
case 595:
case 1278:
case 1808:
case 1783:
case 2507:
case 3236:
case 2948:
case 2655:
case 587:
case 2274:
case 2804:
case 3503:
case 1261:
case 2041:
case 2840:
case 2081:
case 1944:
case 295:
case 1876:
case 1206:
case 415:
case 935:
case 2539:
case 3838:
case 2663:
case 3124:
case 3705:
case 443:
case 1381:
case 3088:
case 477:
case 815:
case 3048:
case 3402:
case 656:
case 3941:
case 3264:
case 3673:
case 3107:
case 562:
case 3913:
case 1585:
case 3491:
case 609:
case 1510:
case 2928:
case 1907:
case 717:
case 2887:
case 45:
case 50:
case 1113:
case 1723:
case 2303:
case 2847:
case 3324:
case 4084:
case 2298:
case 1337:
case 2556:
case 835:
case 1141:
case 2933:
case 4044:
case 1181:
case 3660:
case 1294:
case 155:
case 1406:
case 20:
case 3811:
case 3937:
case 2734:
case 1257:
case 709:
case 2584:
case 2119:
case 2729:
case 3843:
case 2021:
case 2052:
case 3307:
case 2500:
case 3699:
case 268:
case 3028:
case 1352:
case 3835:
case 264:
case 2701:
case 2:
case 2818:
case 3519:
case 1654:
case 1517:
case 2766:
case 3033:
case 568:
case 2945:
case 2658:
case 3291:
case 2910:
case 564:
case 5:
case 2037:
case 176:
case 1525:
case 1686:
case 915:
case 1003:
case 1130:
case 3464:
case 1646:
case 3952:
case 1125:
case 2436:
case 2324:
case 1889:
case 1704:
case 3928:
case 3862:
case 1740:
case 3887:
case 1253:
case 2622:
case 3933:
case 2651:
case 3556:
case 340:
case 955:
case 2010:
case 3734:
case 2937:
case 2085:
case 2660:
case 177:
case 441:
case 1333:
case 2843:
case 3021:
case 3544:
case 3500:
case 3052:
case 1328:
case 3584:
case 2883:
case 3474:
case 1117:
case 3119:
case 2259:
case 3896:
case 760:
case 364:
case 2202:
case 636:
case 716:
case 1007:
case 368:
case 2835:
case 2100:
case 976:
case 1345:
case 1385:
case 1310:
case 2291:
case 3037:
case 744:
case 3792:
case 3985:
case 722:
case 3658:
case 757:
case 748:
case 3945:
case 1471:
case 1581:
case 67:
case 2464:
case 1541:
case 1693:
case 1024:
case 921:
case 3007:
case 168:
case 221:
case 315:
case 2697:
case 1009:
case 164:
case 739:
case 4025:
case 3385:
case 3310:
case 886:
case 479:
case 1766:
case 23:
case 3345:
case 2232:
case 3513:
case 1658:
case 3188:
case 2275:
case 805:
case 3039:
case 1985:
case 3541:
case 696:
case 1216:
case 4017:
case 1495:
case 607:
case 2646:
case 3889:
case 1862:
case 2588:
case 555:
case 2113:
case 3715:
case 3125:
case 1303:
case 3849:
case 1847:
case 3780:
case 3530:
case 140:
case 1556:
case 1298:
case 2337:
case 2141:
case 78:
case 763:
case 1933:
case 2181:
case 4088:
case 10:
case 3333:
case 2406:
case 4048:
case 3727:
case 2257:
case 1729:
case 2461:
case 3903:
case 1820:
case 2309:
case 1500:
case 3328:
case 1052:
case 2468:
case 1202:
case 1872:
case 321:
case 215:
case 495:
case 3697:
case 1835:
case 33:
case 2345:
case 4041:
case 2385:
case 3654:
case 2310:
case 2039:
case 3275:
case 3525:
case 2513:
case 3814:
case 3232:
case 19:
case 1921:
case 2581:
case 2471:
case 964:
case 1952:
case 3646:
case 1464:
case 2024:
case 2541:
case 487:
case 420:
case 3686:
case 968:
case 1156:
case 3003:
case 2849:
case 1436:
case 685:
case 3588:
case 3907:
case 2704:
case 3723:
case 2253:
case 1909:
case 887:
case 543:
case 3181:
case 2412:
case 1651:
case 2530:
case 90:
case 3141:
case 1339:
case 895:
case 1010:
case 1085:
case 1937:
case 3294:
case 2333:
case 661:
case 3309:
case 243:
case 2727:
case 606:
case 2903:
case 1259:
case 3313:
case 4052:
case 1124:
case 2679:
case 1139:
case 3137:
case 55:
case 3381:
case 864:
case 8:
case 2271:
case 2000:
case 3772:
case 2521:
case 3690:
case 1941:
case 759:
case 2084:
case 3585:
case 2866:
case 3475:
case 2317:
case 105:
case 25:
case 2128:
case 1107:
case 1913:
case 761:
case 840:
case 1667:
case 3711:
case 2212:
case 523:
case 3669:
case 3152:
case 1017:
case 1930:
case 1642:
case 3956:
case 995:
case 1384:
case 3250:
case 3743:
case 2110:
case 2720:
case 1236:
case 4037:
case 2185:
case 2509:
case 3808:
case 2453:
case 2829:
case 1300:
case 2145:
case 3528:
case 3900:
case 2747:
case 223:
case 3457:
case 179:
case 2762:
case 1503:
case 3261:
case 3984:
case 1459:
case 4:
case 2537:
case 464:
case 4009:
case 3494:
case 468:
case 3876:
case 3206:
case 987:
case 920:
case 3679:
case 1103:
case 3056:
case 3325:
case 2313:
case 4045:
case 241:
case 663:
case 4085:
case 68:
case 3268:
case 1416:
case 3000:
case 3133:
case 1295:
case 3521:
case 2545:
case 35:
case 3128:
case 2109:
case 2475:
case 2585:
case 2510:
case 187:
case 120:
case 1498:
case 2019:
case 2711:
case 2533:
case 3212:
case 3834:
case 2152:
case 1827:
case 2278:
case 3145:
case 21:
case 2528:
case 1988:
case 3453:
case 3829:
case 2250:
case 2743:
case 3110:
case 3720:
case 1948:
case 2457:
case 3348:
case 1804:
case 1274:
case 1840:
case 1041:
case 1524:
case 2261:
case 1749:
case 1815:
case 2944:
case 1081:
case 1880:
case 3747:
case 4033:
case 707:
case 2330:
case 796:
case 1539:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756904402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,];
var gg_b = "1756904402/";

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
