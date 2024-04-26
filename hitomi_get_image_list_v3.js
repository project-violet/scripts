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
var o = 0;
switch (g) {
case 2633:
case 2879:
case 2505:
case 1638:
case 3485:
case 3525:
case 1435:
case 192:
case 3136:
case 1314:
case 3890:
case 626:
case 3760:
case 3720:
case 3975:
case 3189:
case 291:
case 1429:
case 2390:
case 2298:
case 480:
case 1606:
case 1707:
case 3282:
case 2798:
case 1655:
case 2470:
case 3985:
case 2132:
case 3165:
case 1806:
case 3649:
case 960:
case 4080:
case 699:
case 3846:
case 592:
case 1488:
case 1194:
case 2326:
case 2279:
case 2111:
case 2269:
case 2484:
case 980:
case 2292:
case 876:
case 388:
case 2239:
case 2344:
case 1193:
case 3470:
case 1471:
case 128:
case 3796:
case 1356:
case 3208:
case 3264:
case 506:
case 2565:
case 3775:
case 794:
case 3119:
case 1162:
case 1374:
case 164:
case 1216:
case 540:
case 1720:
case 789:
case 3233:
case 470:
case 2933:
case 2598:
case 3665:
case 2969:
case 3320:
case 594:
case 2638:
case 3020:
case 1990:
case 650:
case 2320:
case 717:
case 1391:
case 2959:
case 284:
case 4040:
case 3468:
case 1341:
case 1003:
case 3322:
case 2825:
case 1011:
case 3654:
case 3847:
case 693:
case 2994:
case 1691:
case 653:
case 541:
case 3121:
case 2362:
case 1166:
case 1887:
case 191:
case 1016:
case 2654:
case 1908:
case 3611:
case 1381:
case 3696:
case 1330:
case 1920:
case 3825:
case 3974:
case 1112:
case 1075:
case 3240:
case 2618:
case 2384:
case 1467:
case 3617:
case 1914:
case 1702:
case 1454:
case 2203:
case 32:
case 1266:
case 1846:
case 608:
case 3918:
case 2240:
case 2315:
case 1711:
case 3664:
case 676:
case 1854:
case 38:
case 841:
case 1889:
case 1595:
case 2785:
case 271:
case 1531:
case 307:
case 1779:
case 2039:
case 1594:
case 1541:
case 940:
case 1334:
case 499:
case 2383:
case 3679:
case 2958:
case 135:
case 3005:
case 409:
case 2594:
case 3502:
case 3700:
case 1573:
case 2217:
case 2796:
case 2154:
case 2948:
case 1232:
case 572:
case 2138:
case 4045:
case 216:
case 1694:
case 2581:
case 2989:
case 2336:
case 74:
case 590:
case 2010:
case 3977:
case 684:
case 2668:
case 2734:
case 2442:
case 297:
case 2085:
case 55:
case 1773:
case 48:
case 3330:
case 3734:
case 131:
case 2510:
case 905:
case 3352:
case 3123:
case 2890:
case 2238:
case 3626:
case 1600:
case 3955:
case 1339:
case 3555:
case 1831:
case 1501:
case 3684:
case 3460:
case 2097:
case 3614:
case 1608:
case 343:
case 720:
case 930:
case 1654:
case 2219:
case 3706:
case 103:
case 2091:
case 1090:
case 2354:
case 2194:
case 1246:
case 3097:
case 88:
case 947:
case 2462:
case 2083:
case 3703:
case 3380:
case 1382:
case 1403:
case 739:
case 2447:
case 2960:
case 1453:
case 910:
case 3636:
case 850:
case 593:
case 421:
case 2121:
case 1592:
case 2987:
case 2624:
case 4042:
case 610:
case 1625:
case 79:
case 814:
case 59:
case 1452:
case 2209:
case 585:
case 2019:
case 844:
case 790:
case 1408:
case 3059:
case 630:
case 1058:
case 1079:
case 1786:
case 3491:
case 3030:
case 1124:
case 3034:
case 3476:
case 2177:
case 426:
case 2482:
case 2408:
case 3257:
case 1524:
case 2655:
case 863:
case 3968:
case 1387:
case 2935:
case 279:
case 2202:
case 427:
case 3513:
case 377:
case 2417:
case 3482:
case 3500:
case 3844:
case 1909:
case 2687:
case 3334:
case 704:
case 543:
case 3970:
case 3239:
case 2372:
case 1201:
case 1433:
case 1906:
case 2841:
case 3961:
case 1203:
case 1621:
case 3550:
case 3075:
case 3952:
case 322:
case 2077:
case 2318:
case 3129:
case 1742:
case 117:
case 1062:
case 4005:
case 2906:
case 3172:
case 2294:
case 437:
case 1375:
case 1952:
case 3586:
case 805:
case 1626:
case 955:
case 1590:
case 3771:
case 1294:
case 119:
case 123:
case 1198:
case 64:
case 2724:
case 3411:
case 4074:
case 1253:
case 3090:
case 205:
case 557:
case 2473:
case 802:
case 3040:
case 2263:
case 1955:
case 4061:
case 4058:
case 424:
case 2136:
case 1335:
case 2907:
case 2152:
case 3445:
case 3917:
case 4062:
case 3292:
case 871:
case 41:
case 3187:
case 2178:
case 2376:
case 1353:
case 4030:
case 3058:
case 1679:
case 842:
case 3956:
case 3308:
case 2211:
case 383:
case 2550:
case 35:
case 1235:
case 2017:
case 1289:
case 2665:
case 788:
case 218:
case 3892:
case 1321:
case 425:
case 1884:
case 3089:
case 325:
case 1745:
case 2727:
case 2304:
case 315:
case 990:
case 2401:
case 2165:
case 1948:
case 2899:
case 894:
case 1463:
case 1870:
case 2753:
case 432:
case 4006:
case 1486:
case 3573:
case 3571:
case 1792:
case 3434:
case 435:
case 2715:
case 3179:
case 554:
case 456:
case 2412:
case 3200:
case 2008:
case 3437:
case 125:
case 268:
case 1074:
case 2439:
case 2351:
case 3141:
case 2548:
case 2522:
case 2944:
case 3417:
case 872:
case 2602:
case 507:
case 1998:
case 2834:
case 1930:
case 2938:
case 1191:
case 1649:
case 3385:
case 1775:
case 771:
case 223:
case 1991:
case 261:
case 57:
case 2561:
case 3773:
case 1056:
case 321:
case 1336:
case 1604:
case 2636:
case 3427:
case 18:
case 3522:
case 2936:
case 695:
case 2224:
case 2634:
case 760:
case 194:
case 2333:
case 2204:
case 2087:
case 2163:
case 333:
case 1871:
case 2180:
case 3783:
case 1377:
case 3547:
case 1405:
case 2141:
case 472:
case 3168:
case 2557:
case 2585:
case 2114:
case 2646:
case 3763:
case 1882:
case 3725:
case 2986:
case 2148:
case 2293:
case 259:
case 2020:
case 2440:
case 998:
case 1145:
case 954:
case 2775:
case 1154:
case 1669:
case 1468:
case 683:
case 1844:
case 1445:
case 3965:
case 2830:
case 2732:
case 2910:
case 2855:
case 1864:
case 1128:
case 4031:
case 3791:
case 1588:
case 2853:
case 2642:
case 3492:
case 2142:
case 1613:
case 2494:
case 2248:
case 1943:
case 1774:
case 3520:
case 2094:
case 1709:
case 858:
case 2193:
case 3217:
case 1894:
case 2717:
case 314:
case 143:
case 4044:
case 3588:
case 3751:
case 3110:
case 3357:
case 669:
case 2942:
case 3762:
case 1148:
case 1456:
case 2526:
case 746:
case 2156:
case 1557:
case 3453:
case 178:
case 2688:
case 509:
case 601:
case 3702:
case 3231:
case 3564:
case 2002:
case 3749:
case 3234:
case 2107:
case 2001:
case 3635:
case 332:
case 1178:
case 3969:
case 3260:
case 819:
case 744:
case 2873:
case 2073:
case 2693:
case 1900:
case 3699:
case 3193:
case 2698:
case 3096:
case 2972:
case 2469:
case 2489:
case 488:
case 992:
case 3404:
case 4023:
case 687:
case 3267:
case 1553:
case 3228:
case 1800:
case 105:
case 3084:
case 2128:
case 1812:
case 3972:
case 3804:
case 3687:
case 2131:
case 3304:
case 1913:
case 2892:
case 523:
case 28:
case 3153:
case 2973:
case 202:
case 356:
case 3245:
case 2498:
case 1568:
case 913:
case 1276:
case 3692:
case 3512:
case 638:
case 1614:
case 3397:
case 1677:
case 2896:
case 1120:
case 3517:
case 3881:
case 3258:
case 1521:
case 2381:
case 2196:
case 1569:
case 3353:
case 3503:
case 2391:
case 404:
case 1076:
case 3272:
case 3396:
case 847:
case 2139:
case 511:
case 1366:
case 312:
case 713:
case 591:
case 1623:
case 2707:
case 3518:
case 2725:
case 2052:
case 3682:
case 3618:
case 3045:
case 1559:
case 3241:
case 1927:
case 1650:
case 935:
case 3817:
case 4025:
case 2649:
case 3883:
case 670:
case 145:
case 3062:
case 2133:
case 2117:
case 190:
case 1250:
case 3429:
case 99:
case 2691:
case 972:
case 1686:
case 716:
case 169:
case 2173:
case 3313:
case 505:
case 1986:
case 3673:
case 3528:
case 1406:
case 3653:
case 1697:
case 3805:
case 3498:
case 1130:
case 2057:
case 2480:
case 3814:
case 2682:
case 822:
case 2207:
case 1795:
case 1558:
case 3441:
case 1751:
case 1818:
case 3544:
case 1307:
case 395:
case 3539:
case 1018:
case 3623:
case 868:
case 3471:
case 54:
case 2680:
case 2502:
case 2476:
case 628:
case 3752:
case 3070:
case 3024:
case 4048:
case 3694:
case 58:
case 3946:
case 116:
case 2918:
case 1448:
case 3984:
case 3999:
case 439:
case 402:
case 3247:
case 2677:
case 3166:
case 4007:
case 3131:
case 2409:
case 3481:
case 147:
case 3516:
case 403:
case 112:
case 2711:
case 708:
case 1214:
case 711:
case 1976:
case 3108:
case 3563:
case 2357:
case 2172:
case 1696:
case 3662:
case 1275:
case 236:
case 2037:
case 272:
case 3280:
case 491:
case 1031:
case 1119:
case 380:
case 3808:
case 3428:
case 171:
case 3909:
case 3831:
case 1372:
case 2452:
case 1526:
case 3744:
case 600:
case 3933:
case 1267:
case 3603:
case 3826:
case 1245:
case 3341:
case 688:
case 1972:
case 3178:
case 2865:
case 3730:
case 1507:
case 2577:
case 2378:
case 324:
case 2956:
case 3195:
case 2658:
case 68:
case 4009:
case 865:
case 3824:
case 2160:
case 2481:
case 3126:
case 3924:
case 183:
case 3220:
case 775:
case 3710:
case 3082:
case 1544:
case 285:
case 1551:
case 3620:
case 29:
case 928:
case 2659:
case 2221:
case 3281:
case 2719:
case 3164:
case 3903:
case 1299:
case 1394:
case 2380:
case 299:
case 547:
case 6:
case 1014:
case 1027:
case 1419:
case 2541:
case 3319:
case 1086:
case 2413:
case 2112:
case 2397:
case 1268:
case 3371:
case 2684:
case 1402:
case 577:
case 3993:
case 1048:
case 1628:
case 1255:
case 4060:
case 1002:
case 1919:
case 1370:
case 2394:
case 602:
case 2941:
case 1094:
case 379:
case 2951:
case 2782:
case 3577:
case 3028:
case 2046:
case 1865:
case 2926:
case 1395:
case 549:
case 1109:
case 2005:
case 2267:
case 515:
case 2490:
case 2041:
case 3809:
case 2006:
case 2153:
case 1444:
case 973:
case 2232:
case 348:
case 39:
case 144:
case 3625:
case 3870:
case 2676:
case 3797:
case 568:
case 1698:
case 3683:
case 2427:
case 1369:
case 2563:
case 2106:
case 3338:
case 961:
case 142:
case 1971:
case 1045:
case 2818:
case 2171:
case 1587:
case 2414:
case 1392:
case 1301:
case 1683:
case 3871:
case 3002:
case 707:
case 1224:
case 301:
case 2313:
case 2971:
case 3600:
case 4004:
case 1753:
case 2760:
case 163:
case 826:
case 3366:
case 1180:
case 1346:
case 2236:
case 3767:
case 2093:
case 2535:
case 3770:
case 221:
case 4072:
case 1799:
case 2411:
case 3689:
case 1833:
case 1591:
case 595:
case 293:
case 2886:
case 1269:
case 326:
case 1956:
case 588:
case 3203:
case 1059:
case 397:
case 1093:
case 1988:
case 2348:
case 1728:
case 1477:
case 3076:
case 3064:
case 3655:
case 2495:
case 2800:
case 908:
case 2575:
case 1987:
case 7:
case 2862:
case 3052:
case 1182:
case 1735:
case 1589:
case 2851:
case 2109:
case 724:
case 2056:
case 2399:
case 1796:
case 294:
case 3305:
case 1689:
case 1525:
case 161:
case 3911:
case 2988:
case 2552:
case 118:
case 995:
case 3526:
case 479:
case 2280:
case 2140:
case 3671:
case 567:
case 2493:
case 2078:
case 3423:
case 3978:
case 2786:
case 1141:
case 1890:
case 2976:
case 3081:
case 888:
case 1077:
case 2255:
case 95:
case 52:
case 4095:
case 2345:
case 393:
case 1135:
case 1794:
case 2346:
case 1668:
case 241:
case 4047:
case 773:
case 224:
case 492:
case 1132:
case 3562:
case 2784:
case 4093:
case 486:
case 2062:
case 1460:
case 2448:
case 3340:
case 4082:
case 2234:
case 1272:
case 2716:
case 231:
case 3810:
case 2231:
case 1902:
case 1687:
case 3099:
case 538:
case 4088:
case 2266:
case 3105:
case 1676:
case 1767:
case 4035:
case 2124:
case 2509:
case 991:
case 3554:
case 394:
case 1984:
case 750:
case 2520:
case 3574:
case 3942:
case 2361:
case 323:
case 1184:
case 2705:
case 458:
case 1684:
case 451:
case 410:
case 4016:
case 1860:
case 1312:
case 694:
case 3182:
case 1054:
case 2403:
case 286:
case 1743:
case 2168:
case 778:
case 1538:
case 290:
case 2840:
case 3781:
case 3873:
case 3389:
case 1816:
case 3569:
case 3443:
case 1832:
case 2340:
case 4:
case 2453:
case 2213:
case 661:
case 3095:
case 3937:
case 2297:
case 1053:
case 2889:
case 811:
case 2445:
case 2254:
case 1251:
case 2201:
case 436:
case 166:
case 2504:
case 3431:
case 1875:
case 339:
case 2434:
case 1923:
case 772:
case 1067:
case 3719:
case 420:
case 2118:
case 2435:
case 2780:
case 566:
case 329:
case 987:
case 1161:
case 2558:
case 1532:
case 3531:
case 2275:
case 2685:
case 1044:
case 2571:
case 924:
case 2632:
case 1428:
case 3101:
case 3438:
case 1279:
case 738:
case 2512:
case 1562:
case 3659:
case 1928:
case 27:
case 152:
case 2622:
case 1945:
case 1982:
case 1357:
case 330:
case 803:
case 2053:
case 80:
case 4021:
case 405:
case 85:
case 365:
case 2964:
case 407:
case 2746:
case 3886:
case 3372:
case 706:
case 2360:
case 1295:
case 292:
case 401:
case 3242:
case 3323:
case 3210:
case 763:
case 659:
case 3022:
case 518:
case 839:
case 900:
case 1615:
case 2410:
case 877:
case 186:
case 1527:
case 1157:
case 3578:
case 3447:
case 2067:
case 674:
case 3789:
case 431:
case 3454:
case 611:
case 222:
case 3862:
case 3475:
case 3409:
case 2549:
case 2919:
case 3293:
case 124:
case 2739:
case 672:
case 3733:
case 133:
case 525:
case 258:
case 150:
case 1165:
case 666:
case 637:
case 1804:
case 2272:
case 213:
case 2967:
case 4012:
case 53:
case 2400:
case 2672:
case 3173:
case 1122:
case 1337:
case 3560:
case 3901:
case 1977:
case 2246:
case 801:
case 2667:
case 1179:
case 3896:
case 881:
case 3299:
case 1060:
case 2592:
case 3551:
case 3226:
case 2225:
case 3587:
case 1:
case 1609:
case 3450:
case 1879:
case 2871:
case 4015:
case 3995:
case 3950:
case 3743:
case 2652:
case 1842:
case 429:
case 3645:
case 2564:
case 3261:
case 2170:
case 4063:
case 3057:
case 1068:
case 2393:
case 1298:
case 804:
case 1327:
case 1091:
case 1478:
case 1798:
case 3093:
case 2098:
case 3223:
case 3865:
case 808:
case 2803:
case 1361:
case 2730:
case 885:
case 2021:
case 2738:
case 950:
case 3236:
case 463:
case 642:
case 274:
case 2949:
case 1117:
case 698:
case 1897:
case 3872:
case 2472:
case 1746:
case 371:
case 3250:
case 926:
case 1574:
case 612:
case 667:
case 3360:
case 2161:
case 2316:
case 1645:
case 823:
case 994:
case 98:
case 3175:
case 3926:
case 574:
case 4020:
case 3790:
case 3298:
case 1631:
case 2827:
case 1757:
case 2626:
case 1049:
case 895:
case 3125:
case 3624:
case 2049:
case 1876:
case 3596:
case 639:
case 3375:
case 1921:
case 195:
case 1663:
case 2466:
case 1348:
case 4056:
case 1085:
case 1857:
case 3317:
case 305:
case 2607:
case 375:
case 941:
case 179:
case 3943:
case 873:
case 3874:
case 2000:
case 467:
case 1529:
case 922:
case 452:
case 571:
case 3930:
case 999:
case 184:
case 2645:
case 3094:
case 1953:
case 1039:
case 2367:
case 949:
case 4043:
case 2617:
case 2012:
case 3740:
case 533:
case 2883:
case 3670:
case 664:
case 2589:
case 2105:
case 5:
case 3048:
case 2686:
case 3312:
case 1843:
case 2366:
case 126:
case 2233:
case 106:
case 1262:
case 2186:
case 2913:
case 2416:
case 3100:
case 1450:
case 2322:
case 832:
case 1038:
case 2096:
case 138:
case 1801:
case 2870:
case 66:
case 263:
case 250:
case 3919:
case 2788:
case 2568:
case 901:
case 1778:
case 1936:
case 912:
case 1808:
case 573:
case 1495:
case 2794:
case 3612:
case 1423:
case 1431:
case 1922:
case 1242:
case 1646:
case 938:
case 475:
case 2586:
case 3501:
case 2820:
case 2126:
case 679:
case 353:
case 454:
case 1487:
case 3821:
case 89:
case 1830:
case 2731:
case 3748:
case 2338:
case 701:
case 228:
case 2149:
case 3246:
case 1051:
case 821:
case 2455:
case 2299:
case 756:
case 3898:
case 1230:
case 3853:
case 1951:
case 2644:
case 2155:
case 1939:
case 3935:
case 2669:
case 1134:
case 2501:
case 2436:
case 3538:
case 3009:
case 2852:
case 2735:
case 2728:
case 340:
case 1564:
case 3154:
case 3996:
case 551:
case 1015:
case 1736:
case 3549:
case 350:
case 70:
case 917:
case 942:
case 2084:
case 92:
case 1616:
case 3269:
case 3561:
case 3973:
case 2777:
case 1028:
case 146:
case 1642:
case 129:
case 3155:
case 1540:
case 3757:
case 1518:
case 1579:
case 160:
case 3073:
case 3668:
case 3314:
case 441:
case 3536:
case 4029:
case 3651:
case 2075:
case 3422:
case 3458:
case 740:
case 1950:
case 1602:
case 3122:
case 3632:
case 1634:
case 3802:
case 524:
case 2007:
case 3133:
case 2704:
case 2166:
case 277:
case 155:
case 734:
case 596:
case 3991:
case 3843:
case 620:
case 382:
case 154:
case 3721:
case 700:
case 1571:
case 807:
case 3894:
case 3041:
case 3120:
case 797:
case 3201:
case 1415:
case 2656:
case 2023:
case 2241:
case 1211:
case 3147:
case 82:
case 91:
case 3863:
case 1947:
case 2358:
case 3838:
case 3860:
case 3581:
case 2291:
case 3003:
case 2850:
case 2074:
case 702:
case 12:
case 23:
case 1783:
case 3691:
case 758:
case 153:
case 2420:
case 193:
case 310:
case 3807:
case 1868:
case 4054:
case 3128:
case 2742:
case 634:
case 2608:
case 2150:
case 1903:
case 2872:
case 1089:
case 3407:
case 3213:
case 2454:
case 1008:
case 3803:
case 1176:
case 1610:
case 1186:
case 4057:
case 3728:
case 647:
case 256:
case 1169:
case 2843:
case 2120:
case 3546:
case 3401:
case 2282:
case 605:
case 3867:
case 3015:
case 981:
case 1603:
case 3979:
case 2108:
case 741:
case 719:
case 874:
case 2424:
case 766:
case 1371:
case 1293:
case 1212:
case 1210:
case 1739:
case 2887:
case 2781:
case 643:
case 3643:
case 1758:
case 3176:
case 1257:
case 3019:
case 2223:
case 3677:
case 398:
case 86:
case 966:
case 200:
case 1688:
case 1790:
case 1259:
case 1674:
case 1410:
case 3378:
case 1601:
case 2395:
case 4019:
case 725:
case 1449:
case 1869:
case 1768:
case 3018:
case 453:
case 891:
case 466:
case 3750:
case 3622:
case 2867:
case 892:
case 1189:
case 1706:
case 883:
case 247:
case 2425:
case 3294:
case 2260:
case 976:
case 3904:
case 4051:
case 1555:
case 2210:
case 1700:
case 2429:
case 2169:
case 3764:
case 2295:
case 2035:
case 102:
case 3505:
case 1020:
case 2463:
case 3822:
case 838:
case 1376:
case 1065:
case 623:
case 2237:
case 1961:
case 4071:
case 1061:
case 4022:
case 1104:
case 3592:
case 1244:
case 400:
case 3259:
case 840:
case 4052:
case 11:
case 3567:
case 3987:
case 3688:
case 522:
case 3205:
case 1254:
case 539:
case 3038:
case 2776:
case 1917:
case 359:
case 3833:
case 3637:
case 341:
case 1850:
case 465:
case 3885:
case 2814:
case 3533:
case 757:
case 2998:
case 1052:
case 718:
case 3483:
case 2284:
case 3007:
case 1907:
case 1034:
case 2192:
case 1665:
case 3161:
case 776:
case 1828:
case 2606:
case 2040:
case 812:
case 90:
case 3379:
case 1344:
case 1098:
case 204:
case 1264:
case 3209:
case 1103:
case 1681:
case 2968:
case 3927:
case 416:
case 2226:
case 1167:
case 4073:
case 2127:
case 2983:
case 411:
case 483:
case 2950:
case 3953:
case 3146:
case 4086:
case 3300:
case 2134:
case 1769:
case 3142:
case 1222:
case 1498:
case 2863:
case 3109:
case 606:
case 948:
case 87:
case 3229:
case 1858:
case 3079:
case 3114:
case 278:
case 2864:
case 2619:
case 3349:
case 3815:
case 2815:
case 3202:
case 2402:
case 909:
case 3266:
case 30:
case 3083:
case 2694:
case 4008:
case 1416:
case 2894:
case 1744:
case 1722:
case 869:
case 1252:
case 3801:
case 793:
case 658:
case 2312:
case 3582:
case 1635:
case 2100:
case 227:
case 2009:
case 2599:
case 327:
case 1598:
case 2831:
case 3834:
case 2089:
case 1384:
case 882:
case 3333:
case 537:
case 3990:
case 1898:
case 77:
case 2370:
case 2341:
case 2615:
case 1227:
case 3350:
case 9:
case 830:
case 1866:
case 20:
case 2045:
case 1803:
case 1156:
case 3593:
case 2714:
case 1274:
case 182:
case 2426:
case 726:
case 1570:
case 412:
case 3818:
case 899:
case 287:
case 2243:
case 1550:
case 2216:
case 14:
case 1819:
case 851:
case 768:
case 1962:
case 589:
case 3912:
case 735:
case 1236:
case 2914:
case 72:
case 3348:
case 2076:
case 651:
case 1667:
case 1893:
case 3672:
case 3657:
case 2387:
case 181:
case 3451:
case 519:
case 563:
case 1105:
case 1785:
case 3309:
case 936:
case 167:
case 1218:
case 1240:
case 2433:
case 3800:
case 824:
case 1164:
case 1542:
case 2805:
case 1373:
case 2736:
case 2722:
case 4083:
case 542:
case 1560:
case 1010:
case 25:
case 2915:
case 4094:
case 1629:
case 1446:
case 4059:
case 3414:
case 2842:
case 1516:
case 2249:
case 3855:
case 3301:
case 2629:
case 3851:
case 1047:
case 3869:
case 2752:
case 3055:
case 1993:
case 2460:
case 3116:
case 3580:
case 1727:
case 2146:
case 3356:
case 2538:
case 3115:
case 2450:
case 584:
case 232:
case 1618:
case 2641:
case 2729:
case 1966:
case 423:
case 158:
case 3212:
case 2996:
case 3633:
case 3032:
case 576:
case 76:
case 833:
case 1994:
case 3628:
case 3066:
case 2576:
case 1836:
case 473:
case 1228:
case 3997:
case 3469:
case 357:
case 715:
case 921:
case 3576:
case 2406:
case 2920:
case 3368:
case 1793:
case 2768:
case 1292:
case 3163:
case 2025:
case 2821:
case 252:
case 1701:
case 3836:
case 2679:
case 1313:
case 2262:
case 2015:
case 2817:
case 3060:
case 225:
case 367:
case 1624:
case 496:
case 1021:
case 1685:
case 2741:
case 2467:
case 2866:
case 449:
case 609:
case 2945:
case 1417:
case 2187:
case 1108:
case 1465:
case 3111:
case 3819:
case 2545:
case 50:
case 1037:
case 2065:
case 1713:
case 2700:
case 1672:
case 1261:
case 2593:
case 1740:
case 1776:
case 829:
case 967:
case 1504:
case 469:
case 722:
case 1092:
case 1811:
case 1656:
case 3861:
case 2422:
case 2847:
case 1657:
case 1217:
case 3705:
case 1129:
case 1534:
case 1171:
case 2955:
case 1340:
case 2630:
case 1820:
case 3459:
case 1644:
case 1099:
case 1282:
case 3693:
case 1506:
case 2981:
case 3472:
case 3426:
case 1670:
case 2230:
case 47:
case 1071:
case 1705:
case 813:
case 62:
case 3776:
case 2444:
case 2175:
case 1306:
case 1716:
case 1748:
case 1572:
case 2766:
case 1622:
case 3478:
case 1725:
case 1946:
case 3835:
case 782:
case 288:
case 3387:
case 3049:
case 806:
case 3053:
case 4053:
case 24:
case 3036:
case 3113:
case 1851:
case 15:
case 114:
case 1813:
case 2553:
case 562:
case 2567:
case 207:
case 1937:
case 2443:
case 1721:
case 189:
case 2055:
case 1862:
case 1514:
case 10:
case 157:
case 668:
case 3384:
case 1554:
case 953:
case 2590:
case 1957:
case 3737:
case 2580:
case 2066:
case 273:
case 3183:
case 1659:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1714122001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,];
var gg_b = "1714122001/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
