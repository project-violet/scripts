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


gg = { m: function(g) {
var o = 1;
switch (g) {
case 845:
case 2646:
case 3843:
case 2260:
case 3251:
case 3780:
case 1721:
case 589:
case 4039:
case 4087:
case 3716:
case 3391:
case 703:
case 2171:
case 1351:
case 1974:
case 1297:
case 268:
case 3904:
case 1415:
case 2356:
case 3930:
case 4030:
case 1260:
case 115:
case 3496:
case 3996:
case 1606:
case 3791:
case 35:
case 4009:
case 910:
case 2344:
case 4006:
case 71:
case 2304:
case 2525:
case 1816:
case 946:
case 1357:
case 2188:
case 1390:
case 1979:
case 3015:
case 1746:
case 3460:
case 3612:
case 905:
case 3767:
case 943:
case 1277:
case 1088:
case 2346:
case 1587:
case 1794:
case 1223:
case 2749:
case 684:
case 2057:
case 2204:
case 2384:
case 2862:
case 2092:
case 1149:
case 2400:
case 593:
case 2635:
case 3588:
case 3980:
case 1375:
case 2959:
case 1692:
case 3681:
case 3526:
case 3019:
case 2656:
case 1208:
case 939:
case 3188:
case 3613:
case 4076:
case 1144:
case 193:
case 872:
case 2978:
case 737:
case 2034:
case 3897:
case 1933:
case 3801:
case 56:
case 1980:
case 2440:
case 1521:
case 2744:
case 1004:
case 1538:
case 2957:
case 3831:
case 707:
case 3728:
case 792:
case 2709:
case 2567:
case 342:
case 646:
case 1478:
case 1513:
case 565:
case 971:
case 3956:
case 1647:
case 3184:
case 2257:
case 1475:
case 3813:
case 1165:
case 551:
case 537:
case 2616:
case 1050:
case 1973:
case 1879:
case 34:
case 2947:
case 4001:
case 526:
case 3233:
case 2865:
case 1569:
case 2808:
case 299:
case 2202:
case 3077:
case 2584:
case 3935:
case 1905:
case 1866:
case 985:
case 3279:
case 562:
case 3514:
case 480:
case 3428:
case 2414:
case 2642:
case 1514:
case 3593:
case 805:
case 2174:
case 1182:
case 2994:
case 3305:
case 3857:
case 580:
case 2251:
case 873:
case 3192:
case 2370:
case 3478:
case 1789:
case 2353:
case 3334:
case 436:
case 2843:
case 3167:
case 2173:
case 1160:
case 120:
case 3304:
case 2763:
case 188:
case 1850:
case 1842:
case 2389:
case 491:
case 1031:
case 2376:
case 314:
case 1295:
case 136:
case 3242:
case 1991:
case 4037:
case 296:
case 563:
case 131:
case 1391:
case 1524:
case 1916:
case 1592:
case 3348:
case 17:
case 1653:
case 1674:
case 837:
case 3214:
case 1487:
case 2730:
case 922:
case 3508:
case 2850:
case 4059:
case 54:
case 4032:
case 1432:
case 2479:
case 958:
case 167:
case 4060:
case 2082:
case 3727:
case 3018:
case 3739:
case 3342:
case 1027:
case 1398:
case 148:
case 1664:
case 368:
case 489:
case 2965:
case 741:
case 3193:
case 1928:
case 1640:
case 2165:
case 938:
case 3340:
case 14:
case 1287:
case 1676:
case 404:
case 2112:
case 290:
case 3535:
case 2601:
case 2995:
case 1631:
case 2690:
case 3020:
case 2632:
case 3583:
case 3341:
case 252:
case 1358:
case 965:
case 2241:
case 1827:
case 3244:
case 3507:
case 3643:
case 3576:
case 1477:
case 2631:
case 2336:
case 2378:
case 3195:
case 2548:
case 2550:
case 1402:
case 1899:
case 3534:
case 3433:
case 2140:
case 1361:
case 3741:
case 3747:
case 2769:
case 3523:
case 3685:
case 1777:
case 196:
case 1431:
case 1483:
case 2904:
case 882:
case 206:
case 1346:
case 2832:
case 311:
case 302:
case 320:
case 2003:
case 834:
case 2297:
case 3166:
case 3804:
case 2283:
case 3718:
case 1607:
case 3349:
case 3440:
case 1302:
case 2872:
case 952:
case 3413:
case 3361:
case 4061:
case 4000:
case 3855:
case 2243:
case 315:
case 1696:
case 880:
case 1791:
case 916:
case 1578:
case 604:
case 2985:
case 3028:
case 1151:
case 748:
case 3399:
case 539:
case 2552:
case 2697:
case 1320:
case 189:
case 977:
case 1629:
case 3849:
case 313:
case 1682:
case 4016:
case 1648:
case 649:
case 3174:
case 3335:
case 3333:
case 100:
case 2404:
case 2508:
case 3441:
case 3943:
case 457:
case 1012:
case 352:
case 4036:
case 895:
case 3097:
case 2587:
case 4018:
case 3600:
case 659:
case 3502:
case 1122:
case 3205:
case 2816:
case 221:
case 231:
case 2418:
case 3458:
case 2618:
case 2680:
case 2451:
case 1787:
case 1852:
case 309:
case 3515:
case 423:
case 1185:
case 294:
case 1840:
case 974:
case 3406:
case 1624:
case 1556:
case 2940:
case 1015:
case 3090:
case 3486:
case 3398:
case 1567:
case 2166:
case 1923:
case 990:
case 1572:
case 3474:
case 3099:
case 2608:
case 2320:
case 1566:
case 3777:
case 3331:
case 3332:
case 2681:
case 129:
case 3603:
case 2844:
case 3200:
case 2526:
case 180:
case 416:
case 3027:
case 293:
case 876:
case 3263:
case 2271:
case 3744:
case 3343:
case 717:
case 1711:
case 1906:
case 2762:
case 3045:
case 3703:
case 176:
case 3621:
case 220:
case 1105:
case 243:
case 1479:
case 3885:
case 1312:
case 3803:
case 3317:
case 2293:
case 2187:
case 1940:
case 2278:
case 582:
case 1701:
case 2931:
case 3484:
case 3410:
case 2776:
case 1815:
case 2817:
case 2591:
case 1698:
case 2306:
case 105:
case 289:
case 2295:
case 1635:
case 1124:
case 2590:
case 3547:
case 4019:
case 2826:
case 2002:
case 1425:
case 4073:
case 747:
case 1765:
case 631:
case 1743:
case 451:
case 3472:
case 2513:
case 3401:
case 1684:
case 2178:
case 777:
case 3003:
case 2138:
case 275:
case 1811:
case 2382:
case 3149:
case 2861:
case 1090:
case 3751:
case 966:
case 2475:
case 2258:
case 119:
case 3285:
case 2581:
case 3910:
case 460:
case 3485:
case 3302:
case 1522:
case 2004:
case 3834:
case 3955:
case 3653:
case 1863:
case 780:
case 2332:
case 2421:
case 1547:
case 1769:
case 503:
case 3768:
case 415:
case 3143:
case 2111:
case 402:
case 1508:
case 374:
case 3307:
case 4092:
case 2791:
case 2597:
case 2236:
case 2308:
case 3299:
case 383:
case 617:
case 2948:
case 234:
case 1525:
case 3555:
case 244:
case 530:
case 1038:
case 972:
case 3687:
case 3408:
case 3948:
case 2441:
case 1324:
case 291:
case 1835:
case 2049:
case 3375:
case 3936:
case 3626:
case 20:
case 1785:
case 2323:
case 832:
case 3905:
case 2805:
case 3944:
case 1855:
case 1264:
case 1199:
case 529:
case 3710:
case 3216:
case 241:
case 601:
case 788:
case 295:
case 937:
case 3798:
case 1288:
case 2263:
case 2310:
case 2704:
case 2828:
case 2250:
case 1565:
case 709:
case 3539:
case 3108:
case 2961:
case 2706:
case 2094:
case 3786:
case 2668:
case 1814:
case 917:
case 2413:
case 1552:
case 3518:
case 790:
case 1982:
case 3887:
case 3456:
case 754:
case 3966:
case 66:
case 1577:
case 3185:
case 2438:
case 1910:
case 1897:
case 755:
case 165:
case 3491:
case 1156:
case 842:
case 508:
case 274:
case 504:
case 1755:
case 596:
case 3436:
case 1748:
case 501:
case 1139:
case 1212:
case 3325:
case 718:
case 1017:
case 240:
case 4035:
case 2562:
case 2713:
case 2643:
case 655:
case 3158:
case 269:
case 3411:
case 2362:
case 3103:
case 3975:
case 398:
case 3875:
case 3150:
case 2225:
case 3016:
case 264:
case 1531:
case 874:
case 422:
case 2708:
case 192:
case 378:
case 2333:
case 3607:
case 2674:
case 652:
case 2326:
case 1091:
case 413:
case 1220:
case 1612:
case 3209:
case 2588:
case 967:
case 10:
case 2716:
case 3901:
case 2063:
case 2655:
case 2316:
case 3692:
case 512:
case 2800:
case 2062:
case 1602:
case 2715:
case 420:
case 1161:
case 270:
case 172:
case 427:
case 2445:
case 1672:
case 1779:
case 3719:
case 3766:
case 864:
case 97:
case 1296:
case 1860:
case 1722:
case 3223:
case 998:
case 612:
case 324:
case 516:
case 247:
case 394:
case 22:
case 823:
case 1619:
case 1810:
case 3654:
case 980:
case 1075:
case 1117:
case 1132:
case 502:
case 2253:
case 499:
case 222:
case 3974:
case 542:
case 2375:
case 3442:
case 2399:
case 744:
case 976:
case 3051:
case 609:
case 675:
case 2312:
case 185:
case 2507:
case 685:
case 3254:
case 3532:
case 2219:
case 2393:
case 1387:
case 3947:
case 3520:
case 1623:
case 3926:
case 3371:
case 2884:
case 3946:
case 3273:
case 2182:
case 611:
case 1885:
case 2908:
case 2145:
case 2607:
case 511:
case 3537:
case 1135:
case 2811:
case 4057:
case 2823:
case 3057:
case 3453:
case 1042:
case 500:
case 2696:
case 2728:
case 3795:
case 3802:
case 1136:
case 4088:
case 273:
case 1372:
case 735:
case 169:
case 2633:
case 67:
case 1119:
case 1638:
case 1086:
case 2436:
case 1249:
case 390:
case 4093:
case 1553:
case 3155:
case 2718:
case 2939:
case 1966:
case 804:
case 666:
case 1889:
case 4058:
case 440:
case 2903:
case 2109:
case 992:
case 3301:
case 1900:
case 3294:
case 1429:
case 1869:
case 1555:
case 147:
case 3344:
case 2991:
case 2703:
case 925:
case 2964:
case 2495:
case 58:
case 2124:
case 2867:
case 1945:
case 1651:
case 3512:
case 150:
case 803:
case 934:
case 3322:
case 3660:
case 1575:
case 2542:
case 2474:
case 2532:
case 288:
case 2700:
case 3893:
case 2999:
case 2934:
case 3579:
case 65:
case 370:
case 2558:
case 1534:
case 1278:
case 2551:
case 2351:
case 3418:
case 3616:
case 809:
case 1152:
case 3127:
case 2106:
case 1512:
case 3524:
case 3373:
case 3270:
case 997:
case 2636:
case 2927:
case 3536:
case 3641:
case 3231:
case 2500:
case 1129:
case 2397:
case 1316:
case 2314:
case 3284:
case 1269:
case 263:
case 3095:
case 3938:
case 1126:
case 3682:
case 594:
case 2264:
case 3006:
case 1053:
case 78:
case 921:
case 1978:
case 639:
case 1362:
case 2157:
case 2831:
case 3264:
case 1729:
case 284:
case 933:
case 3070:
case 514:
case 941:
case 3426:
case 3147:
case 3666:
case 114:
case 1995:
case 1396:
case 945:
case 82:
case 585:
case 468:
case 2753:
case 3448:
case 3711:
case 3969:
case 2859:
case 3894:
case 3841:
case 2390:
case 548:
case 51:
case 1380:
case 2683:
case 3745:
case 1355:
case 2712:
case 1246:
case 335:
case 1851:
case 906:
case 1376:
case 2163:
case 2039:
case 236:
case 2059:
case 2869:
case 638:
case 355:
case 995:
case 2215:
case 957:
case 2921:
case 2154:
case 843:
case 481:
case 3005:
case 2814:
case 891:
case 2088:
case 3493:
case 1526:
case 140:
case 2720:
case 3386:
case 1706:
case 3235:
case 1032:
case 1506:
case 1600:
case 1925:
case 113:
case 338:
case 86:
case 1195:
case 2130:
case 1092:
case 901:
case 2457:
case 3868:
case 3742:
case 524:
case 91:
case 1036:
case 3118:
case 1753:
case 2242:
case 2933:
case 3715:
case 1857:
case 2553:
case 821:
case 2302:
case 1071:
case 1008:
case 3734:
case 403:
case 564:
case 3182:
case 2007:
case 1922:
case 1035:
case 1098:
case 479:
case 106:
case 3032:
case 1652:
case 2244:
case 716:
case 2037:
case 2554:
case 3890:
case 816:
case 3190:
case 2549:
case 2820:
case 2787:
case 1412:
case 1359:
case 2509:
case 1854:
case 2103:
case 446:
case 3369:
case 2918:
case 1723:
case 341:
case 409:
case 2449:
case 559:
case 3764:
case 1153:
case 2128:
case 1944:
case 1695:
case 3230:
case 960:
case 333:
case 1693:
case 2013:
case 3054:
case 2038:
case 3490:
case 2586:
case 2605:
case 3782:
case 3591:
case 3069:
case 3570:
case 3683:
case 3463:
case 3198:
case 3833:
case 879:
case 776:
case 155:
case 0:
case 507:
case 2876:
case 348:
case 3842:
case 2439:
case 3763:
case 2543:
case 249:
case 163:
case 2783:
case 1308:
case 3954:
case 2810:
case 1581:
case 2761:
case 2126:
case 1662:
case 2318:
case 3094:
case 3922:
case 575:
case 3899:
case 2208:
case 535:
case 1673:
case 230:
case 3388:
case 930:
case 3271:
case 2287:
case 3111:
case 359:
case 3705:
case 184:
case 800:
case 1172:
case 1490:
case 354:
case 1215:
case 3345:
case 902:
case 513:
case 3859:
case 1299:
case 3370:
case 380:
case 3696:
case 3883:
case 3552:
case 701:
case 2073:
case 1750:
case 464:
case 1439:
case 2387:
case 1133:
case 3808:
case 3314:
case 1762:
case 2342:
case 763:
case 836:
case 2866:
case 1596:
case 15:
case 229:
case 1349:
case 2341:
case 3023:
case 1445:
case 3116:
case 2481:
case 2033:
case 3430:
case 334:
case 4007:
case 4078:
case 2677:
case 227:
case 3258:
case 2116:
case 4066:
case 1170:
case 3226:
case 1143:
case 112:
case 2044:
case 791:
case 2518:
case 1495:
case 2006:
case 625:
case 2042:
case 3062:
case 1497:
case 3991:
case 406:
case 3355:
case 441:
case 1597:
case 1213:
case 1111:
case 3219:
case 1689:
case 2797:
case 724:
case 3697:
case 568:
case 2799:
case 3339:
case 1447:
case 3611:
case 2262:
case 3013:
case 3565:
case 3566:
case 1414:
case 3079:
case 3206:
case 92:
case 996:
case 2012:
case 1708:
case 645:
case 3793:
case 72:
case 3189:
case 498:
case 382:
case 3879:
case 472:
case 3452:
case 2621:
case 2779:
case 1310:
case 3144:
case 2229:
case 2401:
case 3287:
case 544:
case 1403:
case 3651:
case 1173:
case 94:
case 3313:
case 1985:
case 1834:
case 2471:
case 525:
case 3594:
case 3101:
case 3372:
case 4054:
case 577:
case 3134:
case 2574:
case 3140:
case 1274:
case 1540:
case 2857:
case 1622:
case 1451:
case 2079:
case 1:
case 3082:
case 50:
case 2649:
case 2673:
case 1385:
case 1955:
case 3072:
case 2372:
case 46:
case 3000:
case 2624:
case 2657:
case 2416:
case 918:
case 1356:
case 1399:
case 2824:
case 1961:
case 214:
case 505:
case 3664:
case 80:
case 1720:
case 2469:
case 2380:
case 2210:
case 1778:
case 3010:
case 600:
case 3025:
case 2048:
case 1148:
case 1350:
case 52:
case 3667:
case 3068:
case 2936:
case 1710:
case 146:
case 865:
case 2169:
case 1605:
case 827:
case 811:
case 4008:
case 3164:
case 2847:
case 408:
case 1154:
case 1719:
case 3688:
case 1767:
case 4045:
case 1867:
case 3721:
case 182:
case 855:
case 3960:
case 1256:
case 235:
case 1911:
case 2629:
case 3760:
case 2110:
case 3522:
case 3558:
case 2923:
case 2846:
case 1768:
case 3380:
case 2198:
case 947:
case 1725:
case 3153:
case 376:
case 137:
case 213:
case 4049:
case 438:
case 2430:
case 2640:
case 1882:
case 3196:
case 799:
case 3623:
case 459:
case 3454:
case 1039:
case 797:
case 1230:
case 2764:
case 2766:
case 4056:
case 2885:
case 1993:
case 2960:
case 3521:
case 2391:
case 2220:
case 2580:
case 1830:
case 2840:
case 2272:
case 2354:
case 1107:
case 520:
case 3821:
case 1240:
case 2467:
case 2952:
case 3730:
case 197:
case 927:
case 1167:
case 1360:
case 3320:
case 1239:
case 2754:
case 607:
case 12:
case 2077:
case 1368:
case 2538:
case 3724:
case 1972:
case 2492:
case 177:
case 1760:
case 3619:
case 3622:
case 1169:
case 1590:
case 3794:
case 1503:
case 267:
case 829:
case 3197:
case 1946:
case 1761:
case 3434:
case 2782:
case 3420:
case 3168:
case 1784:
case 3861:
case 2029:
case 1804:
case 3989:
case 3228:
case 190:
case 3689:
case 3135:
case 73:
case 833:
case 877:
case 2775:
case 3172:
case 2733:
case 1846:
case 2623:
case 822:
case 3776:
case 2155:
case 1881:
case 2958:
case 3729:
case 2741:
case 2506:
case 3041:
case 3026:
case 1844:
case 3470:
case 3352:
case 3993:
case 3598:
case 2627:
case 2602:
case 25:
case 2355:
case 419:
case 1013:
case 1462:
case 133:
case 2722:
case 3586:
case 2104:
case 93:
case 2036:
case 3595:
case 900:
case 1421:
case 1845:
case 3624:
case 3241:
case 3412:
case 1383:
case 3580:
case 1971:
case 1688:
case 1536:
case 3277:
case 1841:
case 1454:
case 1943:
case 256:
case 2914:
case 2395:
case 1594:
case 3814:
case 2600:
case 1061:
case 1614:
case 367:
case 11:
case 2180:
case 1109:
case 3255:
case 3061:
case 586:
case 363:
case 3631:
case 3133:
case 1951:
case 3038:
case 1452:
case 3645:
case 3568:
case 1206:
case 64:
case 3414:
case 2731:
case 2589:
case 134:
case 102:
case 1354:
case 2529:
case 3106:
case 3154:
case 553:
case 3:
case 1987:
case 2231:
case 2727:
case 1365:
case 223:
case 1634:
case 940:
case 2476:
case 1802:
case 745:
case 1585:
case 968:
case 3965:
case 1660:
case 3078:
case 3636:
case 431:
case 2517:
case 4069:
case 569:
case 2860:
case 3151:
case 412:
case 899:
case 3324:
case 3761:
case 425:
case 1043:
case 3945:
case 970:
case 2878:
case 3446:
case 3824:
case 1157:
case 678:
case 3240:
case 1037:
case 590:
case 773:
case 2291:
case 1902:
case 1858:
case 2093:
case 689:
case 2091:
case 981:
case 2485:
case 1537:
case 63:
case 3187:
case 830:
case 437:
case 1539:
case 3690:
case 2465:
case 3819:
case 3093:
case 1485:
case 98:
case 3357:
case 1254:
case 536:
case 2409:
case 3381:
case 6:
case 2058:
case 681:
case 1819:
case 1339:
case 449:
case 2900:
case 3957:
case 1870:
case 731:
case 1913:
case 1759:
case 1505:
case 2017:
case 3655:
case 428:
case 2955:
case 2557:
case 794:
case 16:
case 1671:
case 2184:
case 1030:
case 691:
case 3963:
case 2592:
case 1908:
case 1868:
case 677:
case 1797:
case 587:
case 1659:
case 1915:
case 1763:
case 2863:
case 226:
case 3449:
case 3480:
case 181:
case 3731:
case 1413:
case 1821:
case 3224:
case 904:
case 871:
case 101:
case 2107:
case 2493:
case 349:
case 278:
case 2023:
case 1187:
case 279:
case 1074:
case 3199:
case 1470:
case 2612:
case 1561:
case 160:
case 1959:
case 353:
case 4020:
case 696:
case 3816:
case 3845:
case 2203:
case 32:
case 2196:
case 2644:
case 3065:
case 389:
case 1060:
case 104:
case 2568:
case 3366:
case 55:
case 807:
case 392:
case 2665:
case 1056:
case 1266:
case 2795:
case 1507:
case 1112:
case 2168:
case 969:
case 729:
case 3104:
case 1981:
case 1686:
case 3173:
case 838:
case 2429:
case 2637:
case 1833:
case 4003:
case 875:
case 3713:
case 1469:
case 178:
case 218:
case 1171:
case 60:
case 2080:
case 3609:
case 2136:
case 1140:
case 3805:
case 212:
case 1290:
case 1829:
case 2144:
case 2768:
case 2149:
case 3283:
case 204:
case 2143:
case 3997:
case 319:
case 3723:
case 2074:
case 95:
case 3378:
case 2868:
case 1251:
case 2945:
case 3177:
case 1474:
case 1443:
case 3937:
case 1630:
case 2153:
case 3822:
case 632:
case 215:
case 4053:
case 4:
case 3779:
case 1583:
case 770:
case 388:
case 3498:
case 2877:
case 2161:
case 1120:
case 851:
case 3275:
case 2625:
case 1438:
case 1918:
case 3379:
case 1921:
case 1781:
case 125:
case 1670:
case 2796:
case 3811:
case 1903:
case 1836:
case 603:
case 2377:
case 2177:
case 1216:
case 225:
case 1198:
case 4043:
case 3110:
case 1279:
case 1492:
case 3964:
case 3306:
case 1066:
case 2534:
case 506:
case 1418:
case 2830:
case 2905:
case 2313:
case 1573:
case 2758:
case 1218:
case 2127:
case 282:
case 2555:
case 2699:
case 647:
case 1657:
case 3438:
case 2069:
case 1317:
case 1073:
case 3085:
case 8:
case 3835:
case 2454:
case 81:
case 1616:
case 2887:
case 4034:
case 2172:
case 2041:
case 1817:
case 1046:
case 2240:
case 3618:
case 3469:
case 2938:
case 999:
case 2638:
case 1593:
case 2714:
case 1896:
case 2279:
case 2298:
case 2925:
case 3679:
case 1704:
case 3867:
case 2996:
case 1085:
case 2571:
case 1820:
case 1315:
case 3291:
case 1047:
case 1341:
case 2578:
case 3561:
case 1683:
case 47:
case 3059:
case 656:
case 2515:
case 1766:
case 3527:
case 3148:
case 3605:
case 495:
case 3858:
case 606:
case 331:
case 1343:
case 2385:
case 251:
case 2338:
case 1424:
case 1102:
case 1247:
case 3499:
case 3972:
case 346:
case 1374:
case 2022:
case 3817:
case 3121:
case 3293:
case 667:
case 3970:
case 1377:
case 1620:
case 1159:
case 881:
case 452:
case 3826:
case 953:
case 298:
case 1756:
case 3156:
case 844:
case 1576:
case 1691:
case 2137:
case 3459:
case 7:
case 3221:
case 3171:
case 1480:
case 1717:
case 145:
case 3765:
case 2015:
case 186:
case 1678:
case 761:
case 2645:
case 534:
case 3707:
case 1322:
case 1087:
case 2325:
case 1636:
case 579:
case 1134:
case 1875:
case 4005:
case 1070:
case 2563:
case 2531:
case 2216:
case 1329:
case 1353:
case 1168:
case 1379:
case 3132:
case 3096:
case 3597:
case 2032:
case 3311:
case 2328:
case 1738:
case 1009:
case 1969:
case 789:
case 1560:
case 1189:
case 2503:
case 407:
case 2570:
case 3778:
case 3569:
case 2928:
case 1775:
case 719:
case 1382:
case 3239:
case 2489:
case 619:
case 369:
case 2183:
case 405:
case 1146:
case 2317:
case 411:
case 253:
case 1610:
case 179:
case 1523:
case 3280:
case 2005:
case 3644:
case 3516:
case 693:
case 2818:
case 558:
case 956:
case 3329:
case 2935:
case 3298:
case 2577:
case 680:
case 343:
case 782:
case 4002:
case 2085:
case 1101:
case 3262:
case 276:
case 87:
case 1994:
case 913:
case 3884:
case 2598:
case 3323:
case 2564:
case 1818:
case 1023:
case 1992:
case 4024:
case 3828:
case 261:
case 591:
case 1957:
case 3874:
case 1609:
case 2594:
case 1137:
case 3035:
case 3120:
case 3553:
case 3921:
case 4077:
case 3047:
case 322:
case 3584:
case 3984:
case 1422:
case 3040:
case 1094:
case 200:
case 1960:
case 340:
case 2480:
case 3204:
case 784:
case 2675:
case 1554:
case 3563:
case 4013:
case 2615:
case 175:
case 1128:
case 2774:
case 1363:
case 1481:
case 3268:
case 894:
case 2974:
case 2028:
case 2223:
case 3086:
case 308:
case 2956:
case 572:
case 1300:
case 3752:
case 2963:
case 1963:
case 28:
case 858:
case 103:
case 721:
case 1685:
case 2917:
case 2723:
case 2462:
case 749:
case 2530:
case 3387:
case 1736:
case 752:
case 3076:
case 739:
case 1243:
case 2197:
case 1645:
case 1790:
case 1917:
case 1975:
case 2051:
case 826:
case 3012:
case 2396:
case 2065:
case 650:
case 3708:
case 2604:
case 1876:
case 835:
case 3389:
case 1758:
case 1628:
case 2456:
case 2254:
case 4094:
case 1245:
case 2527:
case 1942:
case 1229:
case 1196:
case 38:
case 2281:
case 2970:
case 3257:
case 2511:
case 662:
case 3895:
case 810:
case 242:
case 2407:
case 2536:
case 3046:
case 2081:
case 3892:
case 2641:
case 2619:
case 3979:
case 3052:
case 1642:
case 1952:
case 3657:
case 1163:
case 1150:
case 1453:
case 2583:
case 1907:
case 2248:
case 1633:
case 867:
case 1707:
case 2200:
case 3129:
case 552:
case 3582:
case 1494:
case 578:
case 2499:
case 3455:
case 3866:
case 2425:
case 207:
case 3201:
case 3870:
case 2520:
case 2076:
case 292:
case 1268:
case 1416:
case 2466:
case 3675:
case 467:
case 2482:
case 1849:
case 3376:
case 3971:
case 3888:
case 2170:
case 2452:
case 2926:
case 2501:
case 1930:
case 714:
case 191:
case 1392:
case 3967:
case 1806:
case 3891:
case 2919:
case 1809:
case 3488:
case 138:
case 1386:
case 3338:
case 1690:
case 1058:
case 2064:
case 1026:
case 1718:
case 365:
case 3581:
case 2388:
case 1712:
case 3337:
case 4012:
case 3634:
case 2282:
case 2864:
case 1774:
case 1221:
case 1890:
case 2483:
case 1253:
case 3088:
case 725:
case 1345:
case 1108:
case 3670:
case 3112:
case 1504:
case 2119:
case 3647:
case 2541:
case 3002:
case 2348:
case 3961:
case 2276:
case 2983:
case 769:
case 1325:
case 1501:
case 814:
case 494:
case 373:
case 1164:
case 1716:
case 2324:
case 1805:
case 2026:
case 785:
case 1977:
case 1932:
case 4086:
case 286:
case 168:
case 429:
case 1118:
case 1327:
case 3100:
case 2545:
case 396:
case 1441:
case 260:
case 2822:
case 3274:
case 3818:
case 1242:
case 2807:
case 3374:
case 1934:
case 1176:
case 3114:
case 1263:
case 3159:
case 493:
case 3487:
case 1202:
case 1210:
case 861:
case 2533:
case 2569:
case 3823:
case 90:
case 1735:
case 978:
case 2394:
case 4047:
case 1886:
case 1384:
case 3637:
case 3632:
case 1546:
case 3757:
case 541:
case 1848:
case 3509:
case 1776:
case 433:
case 3362:
case 1726:
case 694:
case 1912:
case 2408:
case 153:
case 2573:
case 1005:
case 1649:
case 584:
case 1728:
case 1545:
case 30:
case 3246:
case 2739:
case 2373:
case 1832:
case 547:
case 2497:
case 2364:
case 3770:
case 771:
case 1236:
case 3548:
case 1549:
case 793:
case 3573:
case 772:
case 2717:
case 920:
case 3042:
case 2420:
case 679:
case 2486:
case 1426:
case 2547:
case 23:
case 2693:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1663095601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,];
var gg_b = "1663095601/";

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
