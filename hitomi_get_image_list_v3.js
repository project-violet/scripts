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
case 1054:
case 3477:
case 3162:
case 1950:
case 3933:
case 887:
case 1328:
case 1009:
case 1444:
case 1976:
case 272:
case 3666:
case 1498:
case 3730:
case 886:
case 1753:
case 2489:
case 3676:
case 3172:
case 3031:
case 2284:
case 1416:
case 3650:
case 3467:
case 3165:
case 1633:
case 2357:
case 3715:
case 2648:
case 1300:
case 2880:
case 3236:
case 3189:
case 3902:
case 1896:
case 2167:
case 4032:
case 2717:
case 2472:
case 2034:
case 822:
case 46:
case 2930:
case 1605:
case 3281:
case 2465:
case 2462:
case 198:
case 1337:
case 2475:
case 3905:
case 2733:
case 4010:
case 1106:
case 2912:
case 3707:
case 2757:
case 3315:
case 1241:
case 544:
case 164:
case 952:
case 800:
case 249:
case 558:
case 2637:
case 1879:
case 3262:
case 1001:
case 1353:
case 3603:
case 1869:
case 3272:
case 733:
case 3095:
case 423:
case 1728:
case 3788:
case 2541:
case 3039:
case 2436:
case 4076:
case 394:
case 3312:
case 3484:
case 408:
case 455:
case 3307:
case 2267:
case 1424:
case 3632:
case 1460:
case 467:
case 1348:
case 650:
case 3181:
case 1910:
case 2988:
case 3752:
case 3825:
case 1737:
case 3136:
case 579:
case 1229:
case 1999:
case 380:
case 3610:
case 1456:
case 2529:
case 3699:
case 1394:
case 319:
case 1932:
case 281:
case 3516:
case 2277:
case 3635:
case 3957:
case 1046:
case 1470:
case 311:
case 3596:
case 289:
case 1314:
case 1479:
case 1208:
case 438:
case 3007:
case 2520:
case 3690:
case 84:
case 3518:
case 728:
case 3619:
case 33:
case 52:
case 2397:
case 2125:
case 3280:
case 210:
case 353:
case 2836:
case 769:
case 1264:
case 2427:
case 2574:
case 516:
case 377:
case 2986:
case 2017:
case 3138:
case 683:
case 2508:
case 830:
case 2693:
case 3425:
case 2002:
case 1301:
case 1053:
case 1485:
case 3127:
case 297:
case 1726:
case 2242:
case 2438:
case 4059:
case 1443:
case 1542:
case 1140:
case 3012:
case 3561:
case 2283:
case 202:
case 1709:
case 3422:
case 590:
case 1634:
case 847:
case 3483:
case 1844:
case 1174:
case 718:
case 150:
case 1746:
case 3445:
case 37:
case 1911:
case 2225:
case 2601:
case 2995:
case 3052:
case 2889:
case 3582:
case 336:
case 220:
case 1714:
case 1164:
case 1496:
case 3088:
case 3558:
case 1028:
case 2872:
case 2142:
case 664:
case 2540:
case 3678:
case 1968:
case 3659:
case 1354:
case 315:
case 4051:
case 3227:
case 1287:
case 3604:
case 3739:
case 29:
case 2183:
case 1697:
case 2587:
case 1000:
case 3569:
case 1326:
case 3792:
case 1701:
case 2145:
case 1978:
case 1959:
case 3890:
case 2110:
case 3128:
case 3819:
case 2512:
case 564:
case 158:
case 269:
case 3505:
case 2135:
case 1375:
case 2973:
case 2921:
case 1230:
case 2291:
case 2809:
case 228:
case 2132:
case 4067:
case 2023:
case 1591:
case 3100:
case 663:
case 2963:
case 2681:
case 1365:
case 859:
case 2854:
case 2413:
case 675:
case 1212:
case 3749:
case 789:
case 1155:
case 980:
case 2316:
case 1624:
case 3684:
case 1207:
case 2949:
case 61:
case 1457:
case 447:
case 1660:
case 702:
case 2398:
case 3763:
case 3956:
case 3113:
case 2893:
case 3329:
case 1389:
case 3851:
case 179:
case 2096:
case 2428:
case 491:
case 1781:
case 3410:
case 2344:
case 2266:
case 3306:
case 1576:
case 2507:
case 3020:
case 1080:
case 3924:
case 3294:
case 797:
case 1984:
case 446:
case 1670:
case 3960:
case 2103:
case 3435:
case 1532:
case 3916:
case 3153:
case 720:
case 635:
case 3557:
case 1765:
case 2069:
case 2356:
case 1288:
case 1644:
case 2929:
case 2299:
case 2058:
case 1775:
case 1510:
case 2689:
case 1762:
case 3476:
case 3667:
case 495:
case 218:
case 2232:
case 2448:
case 3200:
case 2360:
case 1535:
case 907:
case 101:
case 3213:
case 968:
case 2672:
case 1255:
case 348:
case 142:
case 2744:
case 562:
case 2665:
case 44:
case 2082:
case 2552:
case 62:
case 3148:
case 3237:
case 598:
case 2085:
case 2555:
case 616:
case 3363:
case 1252:
case 2675:
case 2798:
case 906:
case 929:
case 1038:
case 992:
case 2716:
case 2043:
case 867:
case 412:
case 3073:
case 3021:
case 1551:
case 550:
case 921:
case 2796:
case 937:
case 3114:
case 2894:
case 131:
case 1036:
case 2718:
case 3645:
case 3720:
case 936:
case 3642:
case 2159:
case 2343:
case 1833:
case 3971:
case 3293:
case 1983:
case 866:
case 1661:
case 2401:
case 2385:
case 2104:
case 3534:
case 2251:
case 257:
case 3146:
case 2369:
case 2056:
case 2586:
case 2771:
case 48:
case 1805:
case 2908:
case 424:
case 3049:
case 1590:
case 3101:
case 605:
case 2974:
case 400:
case 3404:
case 1327:
case 393:
case 3387:
case 2070:
case 1192:
case 1195:
case 3918:
case 2024:
case 2290:
case 2920:
case 4022:
case 2060:
case 2358:
case 1286:
case 3996:
case 1139:
case 3468:
case 3340:
case 3214:
case 1658:
case 2837:
case 1089:
case 4045:
case 2268:
case 2743:
case 86:
case 2016:
case 4083:
case 499:
case 422:
case 2987:
case 184:
case 911:
case 1504:
case 3419:
case 12:
case 3193:
case 3320:
case 2318:
case 25:
case 2627:
case 116:
case 749:
case 3958:
case 2409:
case 2278:
case 2044:
case 1568:
case 2940:
case 1685:
case 2361:
case 1062:
case 3625:
case 781:
case 3982:
case 1292:
case 3832:
case 2539:
case 3109:
case 925:
case 851:
case 2800:
case 1857:
case 414:
case 2638:
case 3787:
case 261:
case 1727:
case 1239:
case 2828:
case 813:
case 3985:
case 1925:
case 1295:
case 2371:
case 1131:
case 3899:
case 1434:
case 2769:
case 1682:
case 857:
case 481:
case 3583:
case 3053:
case 2261:
case 1523:
case 1571:
case 1392:
case 1030:
case 2091:
case 3187:
case 560:
case 865:
case 266:
case 140:
case 3726:
case 787:
case 1015:
case 1884:
case 3824:
case 2719:
case 873:
case 3860:
case 3545:
case 935:
case 3443:
case 2179:
case 2849:
case 2158:
case 2311:
case 1012:
case 3140:
case 3870:
case 3754:
case 2993:
case 2223:
case 255:
case 3856:
case 208:
case 1561:
case 1395:
case 267:
case 1422:
case 3709:
case 1596:
case 92:
case 3458:
case 111:
case 2909:
case 176:
case 3479:
case 3314:
case 984:
case 917:
case 3793:
case 2368:
case 2440:
case 2863:
case 2050:
case 1518:
case 1690:
case 2954:
case 722:
case 13:
case 607:
case 3274:
case 223:
case 449:
case 692:
case 1280:
case 3990:
case 153:
case 2487:
case 3264:
case 3469:
case 971:
case 2296:
case 2926:
case 2821:
case 2873:
case 2914:
case 724:
case 1088:
case 3496:
case 1579:
case 78:
case 434:
case 1659:
case 3968:
case 3354:
case 2420:
case 700:
case 2161:
case 3418:
case 1227:
case 1997:
case 1739:
case 593:
case 2390:
case 2032:
case 1331:
case 2171:
case 4034:
case 2527:
case 2319:
case 3000:
case 26:
case 2474:
case 963:
case 3326:
case 2279:
case 2258:
case 694:
case 1668:
case 2408:
case 3240:
case 2901:
case 1585:
case 1483:
case 712:
case 3174:
case 3844:
case 2282:
case 137:
case 2704:
case 2639:
case 680:
case 2538:
case 1611:
case 1445:
case 926:
case 3816:
case 251:
case 2196:
case 2243:
case 3911:
case 909:
case 472:
case 2285:
case 3898:
case 3461:
case 619:
case 3393:
case 2829:
case 2351:
case 1052:
case 2692:
case 2820:
case 611:
case 2864:
case 2612:
case 942:
case 3129:
case 2953:
case 168:
case 2766:
case 1355:
case 63:
case 1281:
case 3991:
case 107:
case 3221:
case 4057:
case 3273:
case 2776:
case 3602:
case 3093:
case 192:
case 106:
case 1352:
case 653:
case 2630:
case 49:
case 2441:
case 2615:
case 3748:
case 383:
case 2536:
case 2750:
case 4:
case 2144:
case 625:
case 3054:
case 1524:
case 730:
case 3249:
case 2270:
case 640:
case 1845:
case 1175:
case 2335:
case 1388:
case 2256:
case 1883:
case 3976:
case 3026:
case 3498:
case 3861:
case 1730:
case 2791:
case 1676:
case 2429:
case 3966:
case 2090:
case 1031:
case 1842:
case 1172:
case 2994:
case 2224:
case 803:
case 3416:
case 2607:
case 3300:
case 1570:
case 979:
case 3424:
case 3577:
case 2216:
case 1632:
case 3348:
case 4005:
case 637:
case 3121:
case 3843:
case 1752:
case 2928:
case 3014:
case 2298:
case 441:
case 621:
case 1544:
case 2068:
case 3999:
case 3229:
case 1136:
case 3456:
case 1610:
case 2688:
case 1755:
case 3206:
case 2059:
case 3882:
case 2244:
case 1699:
case 3394:
case 3932:
case 119:
case 3567:
case 3046:
case 1957:
case 497:
case 2900:
case 3163:
case 1635:
case 636:
case 2004:
case 1315:
case 2156:
case 4017:
case 958:
case 905:
case 552:
case 3858:
case 3353:
case 944:
case 3001:
case 1262:
case 2572:
case 3149:
case 1330:
case 2391:
case 2840:
case 2170:
case 410:
case 1603:
case 2565:
case 2463:
case 238:
case 2937:
case 3869:
case 2124:
case 2575:
case 2473:
case 1788:
case 2160:
case 3903:
case 3728:
case 489:
case 2735:
case 2011:
case 1312:
case 770:
case 194:
case 2887:
case 188:
case 1209:
case 382:
case 2526:
case 1459:
case 1478:
case 2745:
case 3618:
case 3590:
case 1254:
case 3192:
case 1387:
case 2664:
case 193:
case 3519:
case 2812:
case 3195:
case 2554:
case 3231:
case 2980:
case 4082:
case 1996:
case 943:
case 3286:
case 2830:
case 1891:
case 375:
case 896:
case 3623:
case 2593:
case 2495:
case 295:
case 1961:
case 418:
case 2197:
case 3081:
case 3551:
case 1021:
case 2322:
case 3817:
case 537:
case 2439:
case 4058:
case 950:
case 1114:
case 4079:
case 3942:
case 331:
case 1645:
case 841:
case 3036:
case 1411:
case 1720:
case 4069:
case 778:
case 1850:
case 1774:
case 2807:
case 57:
case 1642:
case 3338:
case 3833:
case 3983:
case 1708:
case 1293:
case 1923:
case 1971:
case 3661:
case 1534:
case 2492:
case 3747:
case 1876:
case 230:
case 335:
case 3062:
case 1201:
case 1154:
case 1740:
case 820:
case 160:
case 3075:
case 540:
case 1109:
case 291:
case 2342:
case 1041:
case 3857:
case 3511:
case 3727:
case 3239:
case 2345:
case 3925:
case 3072:
case 1810:
case 2501:
case 2383:
case 390:
case 403:
case 1899:
case 3065:
case 1622:
case 3682:
case 1214:
case 576:
case 1969:
case 3347:
case 3658:
case 1803:
case 2725:
case 2852:
case 3559:
case 1490:
case 2067:
case 648:
case 428:
case 2927:
case 384:
case 317:
case 53:
case 1419:
case 2134:
case 738:
case 1374:
case 4061:
case 2077:
case 3380:
case 1193:
case 1320:
case 89:
case 371:
case 553:
case 1364:
case 316:
case 1597:
case 8:
case 577:
case 2514:
case 1006:
case 3155:
case 3207:
case 767:
case 2367:
case 3624:
case 2233:
case 3660:
case 755:
case 1074:
case 3457:
case 1763:
case 3047:
case 3389:
case 1329:
case 379:
case 1721:
case 1773:
case 3656:
case 214:
case 3576:
case 1306:
case 3550:
case 1020:
case 519:
case 3736:
case 1294:
case 2548:
case 1064:
case 1533:
case 1435:
case 1890:
case 2042:
case 1341:
case 1128:
case 3215:
case 344:
case 4044:
case 2936:
case 2784:
case 1819:
case 2886:
case 305:
case 152:
case 693:
case 1505:
case 45:
case 3230:
case 2981:
case 723:
case 3372:
case 299:
case 2455:
case 1502:
case 433:
case 2157:
case 2621:
case 3365:
case 1749:
case 2045:
case 1213:
case 962:
case 154:
case 1804:
case 4024:
case 342:
case 148:
case 76:
case 568:
case 2962:
case 3405:
case 4060:
case 1859:
case 1321:
case 1148:
case 2975:
case 1237:
case 2972:
case 983:
case 592:
case 3402:
case 2025:
case 2430:
case 506:
case 1491:
case 2965:
case 4070:
case 200:
case 2513:
case 3897:
case 2102:
case 3532:
case 465:
case 881:
case 3130:
case 1087:
case 457:
case 3765:
case 473:
case 1228:
case 1998:
case 2606:
case 1466:
case 3510:
case 3775:
case 3112:
case 2629:
case 2407:
case 713:
case 1450:
case 212:
case 3977:
case 1200:
case 874:
case 2257:
case 1332:
case 2031:
case 3549:
case 608:
case 3284:
case 512:
case 1994:
case 2467:
case 2650:
case 3648:
case 2570:
case 1019:
case 667:
case 1260:
case 385:
case 2556:
case 2730:
case 1791:
case 1429:
case 918:
case 3702:
case 2917:
case 1256:
case 2524:
case 2477:
case 3907:
case 4037:
case 2933:
case 666:
case 1948:
case 2175:
case 1335:
case 1441:
case 3733:
case 4028:
case 844:
case 3912:
case 58:
case 1536:
case 524:
case 1144:
case 292:
case 206:
case 2352:
case 3475:
case 3521:
case 1630:
case 2905:
case 858:
case 805:
case 2902:
case 1116:
case 1953:
case 3167:
case 159:
case 2355:
case 1766:
case 3034:
case 623:
case 3930:
case 3465:
case 4000:
case 3915:
case 1612:
case 1864:
case 2236:
case 2189:
case 3436:
case 294:
case 1011:
case 2312:
case 3827:
case 332:
case 1124:
case 2095:
case 1421:
case 1710:
case 1473:
case 349:
case 1572:
case 2092:
case 2330:
case 1391:
case 1170:
case 1840:
case 1565:
case 1463:
case 2275:
case 2315:
case 3757:
case 1156:
case 1913:
case 969:
case 1449:
case 219:
case 4053:
case 2516:
case 3277:
case 1900:
case 2635:
case 2957:
case 1004:
case 2610:
case 651:
case 3628:
case 1688:
case 1059:
case 587:
case 1703:
case 2825:
case 3988:
case 586:
case 2544:
case 1068:
case 1376:
case 1216:
case 3267:
case 277:
case 95:
case 1926:
case 3734:
case 1547:
case 1066:
case 1359:
case 3881:
case 1143:
case 1378:
case 3125:
case 1185:
case 4001:
case 2280:
case 310:
case 752:
case 1304:
case 1487:
case 1580:
case 1050:
case 863:
case 3520:
case 2007:
case 1631:
case 1954:
case 659:
case 3122:
case 3033:
case 123:
case 3397:
case 1182:
case 1909:
case 211:
case 389:
case 276:
case 1686:
case 1440:
case 1076:
case 1863:
case 108:
case 2561:
case 1223:
case 302:
case 81:
case 2422:
case 3005:
case 547:
case 2339:
case 1179:
case 341:
case 831:
case 1311:
case 2012:
case 591:
case 2015:
case 2884:
case 3242:
case 826:
case 3693:
case 1261:
case 3002:
case 2392:
case 1091:
case 4046:
case 809:
case 166:
case 1118:
case 3601:
case 4054:
case 1351:
case 2582:
case 3889:
case 2052:
case 530:
case 835:
case 2442:
case 957:
case 3939:
case 304:
case 1243:
case 2238:
case 2147:
case 2877:
case 2611:
case 1538:
case 2445:
case 2543:
case 2055:
case 890:
case 1759:
case 3992:
case 113:
case 2569:
case 3862:
case 3614:
case 2792:
case 1258:
case 3145:
case 1408:
case 2668:
case 1123:
case 1032:
case 2331:
case 1171:
case 462:
case 884:
case 54:
case 16:
case 748:
case 3057:
case 1319:
case 1711:
case 1420:
case 816:
case 871:
case 215:
case 498:
case 1161:
case 2227:
case 2997:
case 1464:
case 2604:
case 39:
case 3646:
case 1035:
case 2558:
case 2088:
case 3142:
case 1269:
case 3540:
case 3:
case 3413:
case 3770:
case 3854:
case 3515:
case 0:
case 4089:
case 776:
case 932:
case 2749:
case 538:
case 1455:
case 328:
case 1553:
case 3132:
case 3023:
case 3071:
case 199:
case 3530:
case 1621:
case 42:
case 2253:
case 3061:
case 753:
case 369:
case 2403:
case 471:
case 1663:
case 3135:
case 3291:
case 3921:
case 1831:
case 2341:
case 3110:
case 3760:
case 883:
case 2128:
case 3199:
case 1936:
case 2020:
case 4062:
case 435:
case 2294:
case 630:
case 2064:
case 4075:
case 2960:
case 2533:
case 3096:
case 2410:
case 3398:
case 2113:
case 2956:
case 974:
case 186:
case 2851:
case 695:
case 1594:
case 3250:
case 3949:
case 1367:
case 1233:
case 303:
case 490:
case 4065:
case 2248:
case 2667:
case 737:
case 2450:
case 3324:
case 1257:
case 4081:
case 3448:
case 985:
case 3588:
case 3058:
case 431:
case 4036:
case 2040:
case 721:
case 1629:
case 3210:
case 3069:
case 2228:
case 1606:
case 3299:
case 3929:
case 409:
case 1839:
case 2153:
case 1102:
case 2916:
case 3191:
case 2557:
case 482:
case 1415:
case 1641:
case 18:
case 3716:
case 3166:
case 1117:
case 2194:
case 3662:
case 1025:
case 3814:
case 2729:
case 934:
case 3453:
case 1430:
case 2868:
case 715:
case 3675:
case 2363:
case 248:
case 3672:
case 559:
case 1537:
case 3150:
case 2321:
case 1022:
case 3665:
case 3552:
case 3082:
case 2148:
case 2213:
case 3941:
case 3846:
case 475:
case 2804:
case 2923:
case 1325:
case 3385:
case 1492:
case 2534:
case 2063:
case 3251:
case 2146:
case 2774:
case 920:
case 2642:
case 3848:
case 3178:
case 687:
case 2114:
case 3894:
case 1439:
case 2764:
case 2411:
case 2683:
case 1495:
case 2021:
case 1322:
case 356:
case 3382:
case 1234:
case 3647:
case 3358:
case 401:
case 3853:
case 1509:
case 3379:
case 2891:
case 2468:
case 3761:
case 1815:
case 1554:
case 1084:
case 3024:
case 442:
case 699:
case 622:
case 3920:
case 3290:
case 3219:
case 768:
case 56:
case 3964:
case 1742:
case 3531:
case 2101:
case 3680:
case 706:
case 1620:
case 792:
case 3974:
case 2404:
case 99:
case 1526:
case 3586:
case 2209:
case 1947:
case 3723:
case 4038:
case 3908:
case 2979:
case 3396:
case 3782:
case 910:
case 1514:
case 1722:
case 3278:
case 3044:
case 2006:
case 68:
case 3940:
case 3454:
case 405:
case 600:
case 1687:
case 2364:
case 3627:
case 3151:
case 3743:
case 1546:
case 333:
case 1297:
case 3098:
case 1486:
case 170:
case 3426:
case 1725:
case 2308:
case 555:
case 850:
case 2810:
case 1501:
case 3371:
case 567:
case 147:
case 3769:
case 2622:
case 996:
case 361:
case 4047:
case 2126:
case 2943:
case 3211:
case 1938:
case 902:
case 3539:
case 1342:
case 2109:
case 997:
case 3800:
case 3638:
case 3361:
case 3595:
case 146:
case 2451:
case 566:
case 102:
case 3223:
case 3993:
case 1283:
case 355:
case 308:
case 2856:
case 367:
case 2709:
case 3849:
case 779:
case 561:
case 947:
case 3158:
case 141:
case 480:
case 3311:
case 2870:
case 2754:
case 2140:
case 3719:
case 946:
case 2860:
case 672:
case 2443:
case 2545:
case 1002:
case 2053:
case 2301:
case 3261:
case 3091:
case 991:
case 366:
case 2726:
case 3547:
case 1734:
case 1986:
case 3296:
case 3873:
case 3821:
case 3359:
case 3066:
case 1508:
case 888:
case 1654:
case 1931:
case 55:
case 2919:
case 2264:
case 3304:
case 1427:
case 3580:
case 3954:
case 533:
case 970:
case 3182:
case 323:
case 1033:
case 2458:
case 189:
case 2479:
case 3368:
case 3440:
case 494:
case 3076:
case 2326:
case 1614:
case 1862:
case 2701:
case 701:
case 3408:
case 3841:
case 3171:
case 3390:
case 1183:
case 2697:
case 2000:
case 742:
case 3319:
case 3474:
case 1057:
case 1587:
case 407:
case 36:
case 1480:
case 3161:
case 649:
case 2418:
case 492:
case 2287:
case 3464:
case 406:
case 3035:
case 3914:
case 3269:
case 3010:
case 1142:
case 1872:
case 1540:
case 2461:
case 145:
case 3285:
case 2898:
case 1995:
case 1601:
case 860:
case 3768:
case 2037:
case 2120:
case 1889:
case 2164:
case 557:
case 1797:
case 351:
case 3196:
case 573:
case 1939:
case 3243:
case 104:
case 2911:
case 4086:
case 3639:
case 2746:
case 3538:
case 2108:
case 995:
case 4031:
case 3695:
case 2471:
case 3759:
case 2174:
case 1334:
case 556:
case 3282:
case 3806:
case 250:
case 313:
case 1733:
case 3441:
case 4088:
case 3615:
case 2748:
case 283:
case 3536:
case 2106:
case 1912:
case 782:
case 924:
case 3776:
case 2602:
case 1177:
case 298:
case 2337:
case 98:
case 1521:
case 3051:
case 2263:
case 3581:
case 3808:
case 610:
case 3630:
case 852:
case 3953:
case 3116:
case 1472:
case 1717:
case 1034:
case 1465:
case 1930:
case 2221:
case 3820:
case 775:
case 2313:
case 689:
case 1915:
case 3864:
case 3612:
case 1549:
case 3090:
case 3224:
case 3607:
case 2416:
case 1284:
case 4055:
case 2633:
case 696:
case 3260:
case 3019:
case 1648:
case 2026:
case 2861:
case 185:
case 2498:
case 421:
case 1489:
case 912:
case 1702:
case 2753:
case 3429:
case 2966:
case 3256:
case 47:
case 2871:
case 1705:
case 2444:
case 378:
case 2054:
case 726:
case 1694:
case 1907:
case 2249:
case 3270:
case 4052:
case 3449:
case 2394:
case 1277:
case 181:
case 425:
case 645:
case 2163:
case 735:
case 2470:
case 440:
case 3004:
case 4015:
case 1317:
case 1529:
case 3589:
case 2882:
case 3366:
case 3244:
case 1988:
case 2014:
case 3068:
case 2737:
case 4012:
case 1506:
case 2229:
case 3376:
case 1267:
case 2424:
case 3350:
case 174:
case 1838:
case 1600:
case 1097:
case 2173:
case 2843:
case 2121:
case 411:
case 476:
case 1613:
case 854:
case 1436:
case 72:
case 4007:
case 2869:
case 3124:
case 1184:
case 3799:
case 3473:
case 3421:
case 1952:
case 848:
case 2728:
case 2858:
case 1302:
case 2001:
case 771:
case 3572:
case 2879:
case 2149:
case 3170:
case 3840:
case 3391:
case 3565:
case 1757:
case 477:
case 2700:
case 3156:
case 2241:
case 6:
case 3732:
case 264:
case 1358:
case 1647:
case 96:
case 1853:
case 2286:
case 3608:
case 876:
case 3830:
case 275:
case 2195:
case 3554:
case 3815:
case 1290:
case 1920:
case 3980:
case 1219:
case 762:
case 3742:
case 2497:
case 669:
case 2618:
case 2590:
case 3620:
case 853:
case 798:
case 1446:
case 3664:
case 1070:
case 59:
case 3812:
case 1369:
case 3947:
case 1586:
case 3526:
case 2696:
case 2805:
case 877:
case 5:
case 2983:
case 209:
case 545:
case 1401:
case 2661:
case 165:
case 825:
case 2747:
case 520:
case 3492:
case 951:
case 1104:
case 157:
case 4087:
case 1251:
case 3807:
case 173:
case 2945:
case 1178:
case 1343:
case 2833:
case 1159:
case 1894:
case 3439:
case 913:
case 231:
case 2036:
case 4040:
case 2780:
case 2671:
case 2623:
case 3495:
case 395:
case 2551:
case 2081:
case 1382:
case 156:
case 3197:
case 2817:
case 3322:
case 227:
case 21:
case 603:
case 3234:
case 2295:
case 502:
case 618:
case 2131:
case 290:
case 1592:
case 1769:
case 2682:
case 596:
case 4074:
case 161:
case 2727:
case 541:
case 2186:
case 1211:
case 3938:
case 955:
case 3345:
case 391:
case 2643:
case 2857:
case 1638:
case 1800:
case 2511:
case 1361:
case 2062:
case 836:
case 1595:
case 1779:
case 597:
case 346:
case 2922:
case 1396:
case 3514:
case 3722:
case 3855:
case 2669:
case 1782:
case 1278:
case 1940:
case 2380:
case 3077:
case 1813:
case 815:
case 271:
case 1627:
case 510:
case 1204:
case 15:
case 1743:
case 3067:
case 2738:
case 1016:
case 3927:
case 1987:
case 217:
case 3546:
case 22:
case 3134:
case 370:
case 923:
case 3486:
case 1098:
case 2658:
case 2347:
case 1837:
case 2089:
case 3725:
case 3640:
case 2080:
case 3377:
case 3649:
case 2736:
case 581:
case 657:
case 3548:
case 2152:
case 1096:
case 3488:
case 4041:
case 2781:
case 2656:
case 387:
case 2576:
case 314:
case 1266:
case 1398:
case 2389:
case 2566:
case 386:
case 1276:
case 279:
case 3594:
case 1949:
case 574:
case 1316:
case 1250:
case 2624:
case 103:
case 2457:
case 2660:
case 1515:
case 1770:
case 2212:
case 1636:
case 938:
case 3045:
case 532:
case 807:
case 399:
case 1071:
case 2372:
case 322:
case 1132:
case 1023:
case 1963:
case 3673:
case 3205:
case 1756:
case 1061:
case 3202:
case 2362:
case 3886:
case 258:
case 205:
case 169:
case 1135:
case 3663:
case 2375:
case 892:
case 1921:
case 1291:
case 3981:
case 1110:
case 3042:
case 3831:
case 244:
case 3784:
case 1199:
case 4006:
case 3415:
case 3641:
case 1716:
case 3767:
case 38:
case 3117:
case 324:
case 1166:
case 2897:
case 239:
case 2402:
case 1453:
case 1085:
case 2789:
case 3025:
case 1798:
case 2252:
case 65:
case 300:
case 1675:
case 242:
case 1672:
case 2255:
case 1150:
case 3537:
case 743:
case 1665:
case 3022:
case 633:
case 3975:
case 894:
case 201:
case 1176:
case 1846:
case 3412:
case 3777:
case 3407:
case 750:
case 1324:
case 3384:
case 312:
case 1232:
case 2977:
case 118:
case 1360:
case 3257:
case 4021:
case 3105:
case 2535:
case 880:
case 1588:
case 585:
case 1079:
case 1801:
case 2510:
case 1906:
case 3892:
case 2762:
case 1210:
case 1356:
case 2288:
case 2417:
case 3606:
case 2772:
case 1929:
case 1299:
case 2644:
case 978:
case 2532:
case 1494:
case 1235:
case 819:
case 1370:
case 1191:
case 2027:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751320802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,];
var gg_b = "1751320802/";

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
