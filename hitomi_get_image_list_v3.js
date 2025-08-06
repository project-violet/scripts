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
case 73:
case 2506:
case 152:
case 719:
case 2775:
case 1428:
case 538:
case 3590:
case 2652:
case 1766:
case 1175:
case 1212:
case 1609:
case 2689:
case 2927:
case 2071:
case 1486:
case 3605:
case 3179:
case 79:
case 998:
case 408:
case 2424:
case 1362:
case 3493:
case 3852:
case 3075:
case 2601:
case 1681:
case 3593:
case 2327:
case 3771:
case 2524:
case 3371:
case 3836:
case 2727:
case 2402:
case 1482:
case 2531:
case 1216:
case 2975:
case 3203:
case 364:
case 3257:
case 1582:
case 3697:
case 1817:
case 802:
case 3200:
case 791:
case 1043:
case 2636:
case 924:
case 2274:
case 2296:
case 3237:
case 3027:
case 2848:
case 546:
case 67:
case 644:
case 3856:
case 77:
case 1366:
case 956:
case 578:
case 284:
case 3215:
case 339:
case 1969:
case 3314:
case 2659:
case 993:
case 3517:
case 3398:
case 422:
case 3882:
case 1651:
case 3264:
case 1436:
case 405:
case 995:
case 399:
case 2639:
case 1369:
case 533:
case 3914:
case 3347:
case 3544:
case 834:
case 4058:
case 1323:
case 933:
case 3859:
case 3998:
case 3365:
case 3747:
case 2098:
case 1589:
case 1723:
case 457:
case 1452:
case 874:
case 2169:
case 2409:
case 1552:
case 3176:
case 209:
case 2686:
case 3485:
case 2123:
case 828:
case 1532:
case 2120:
case 3714:
case 2065:
case 4063:
case 2813:
case 1161:
case 2047:
case 1401:
case 575:
case 2581:
case 1432:
case 379:
case 975:
case 382:
case 3886:
case 2304:
case 1767:
case 3749:
case 1908:
case 3370:
case 2553:
case 2507:
case 3973:
case 2453:
case 2892:
case 2167:
case 2926:
case 464:
case 2430:
case 2145:
case 2433:
case 2049:
case 2550:
case 3692:
case 238:
case 883:
case 1217:
case 3773:
case 584:
case 1188:
case 2874:
case 170:
case 2726:
case 2248:
case 278:
case 3837:
case 786:
case 3949:
case 2070:
case 3491:
case 118:
case 246:
case 1126:
case 210:
case 2657:
case 1945:
case 1683:
case 224:
case 2603:
case 2788:
case 3236:
case 1104:
case 2322:
case 1244:
case 2073:
case 2495:
case 1816:
case 3088:
case 2595:
case 1367:
case 1784:
case 885:
case 2704:
case 1564:
case 3282:
case 1557:
case 233:
case 3478:
case 2729:
case 600:
case 2763:
case 1354:
case 411:
case 700:
case 357:
case 2615:
case 3516:
case 1129:
case 3742:
case 2338:
case 4061:
case 347:
case 166:
case 3578:
case 1403:
case 2664:
case 3063:
case 1819:
case 1025:
case 3029:
case 1437:
case 1537:
case 2938:
case 767:
case 479:
case 2580:
case 3611:
case 2042:
case 3942:
case 2213:
case 3038:
case 3228:
case 439:
case 3512:
case 2758:
case 1653:
case 3177:
case 3286:
case 2963:
case 2134:
case 1077:
case 1633:
case 2046:
case 509:
case 3342:
case 113:
case 1650:
case 1921:
case 499:
case 909:
case 1293:
case 273:
case 1138:
case 3058:
case 1754:
case 888:
case 2363:
case 1727:
case 699:
case 587:
case 1897:
case 2482:
case 3617:
case 861:
case 1531:
case 987:
case 2216:
case 1975:
case 2762:
case 2040:
case 2459:
case 2966:
case 3283:
case 1502:
case 2582:
case 71:
case 2817:
case 639:
case 4045:
case 1274:
case 518:
case 4067:
case 1848:
case 1375:
case 570:
case 2366:
case 3062:
case 1551:
case 184:
case 3379:
case 1506:
case 252:
case 2586:
case 2962:
case 1775:
case 86:
case 3413:
case 1689:
case 782:
case 679:
case 467:
case 3513:
case 1406:
case 2486:
case 3685:
case 400:
case 1424:
case 990:
case 611:
case 2362:
case 3510:
case 1601:
case 2681:
case 4008:
case 3410:
case 3809:
case 2885:
case 1805:
case 2769:
case 3505:
case 1628:
case 1509:
case 1014:
case 2589:
case 39:
case 2893:
case 1169:
case 513:
case 2489:
case 3207:
case 3690:
case 3147:
case 1810:
case 2606:
case 3020:
case 1123:
case 820:
case 2532:
case 1065:
case 515:
case 915:
case 1813:
case 2161:
case 3250:
case 1047:
case 1481:
case 319:
case 2076:
case 2890:
case 2501:
case 1581:
case 1761:
case 2320:
case 2219:
case 2602:
case 391:
case 3448:
case 3548:
case 3994:
case 3976:
case 326:
case 1299:
case 2920:
case 3802:
case 3497:
case 2436:
case 4034:
case 2651:
case 1639:
case 849:
case 566:
case 2369:
case 20:
case 764:
case 859:
case 3394:
case 3597:
case 2323:
case 2217:
case 156:
case 3880:
case 2188:
case 1108:
case 1468:
case 1874:
case 3341:
case 1726:
case 2415:
case 3173:
case 1568:
case 367:
case 2515:
case 218:
case 146:
case 2126:
case 110:
case 3084:
case 2683:
case 1603:
case 2680:
case 4066:
case 2464:
case 2878:
case 1600:
case 757:
case 300:
case 657:
case 1637:
case 3170:
case 3941:
case 2816:
case 287:
case 1704:
case 647:
case 3411:
case 2767:
case 605:
case 1304:
case 1530:
case 705:
case 1988:
case 3149:
case 1407:
case 2041:
case 2285:
case 1926:
case 290:
case 1145:
case 942:
case 2984:
case 1049:
case 1388:
case 3281:
case 2308:
case 3067:
case 2812:
case 722:
case 1533:
case 952:
case 138:
case 1326:
case 454:
case 2158:
case 1213:
case 901:
case 491:
case 3777:
case 3850:
case 2321:
case 2607:
case 2653:
case 444:
case 3146:
case 1134:
case 426:
case 1963:
case 3206:
case 2633:
case 3592:
case 431:
case 1154:
case 2650:
case 2921:
case 173:
case 3807:
case 3492:
case 3853:
case 1329:
case 1210:
case 3325:
case 880:
case 2754:
case 3202:
case 1958:
case 3619:
case 1899:
case 3142:
case 1583:
case 1729:
case 133:
case 2557:
case 2354:
case 3725:
case 608:
case 3895:
case 708:
case 90:
case 2255:
case 266:
case 1811:
case 3691:
case 2403:
case 2163:
case 2457:
case 1480:
case 2400:
case 3251:
case 2160:
case 4023:
case 193:
case 2954:
case 4069:
case 2437:
case 3474:
case 419:
case 3574:
case 837:
case 1938:
case 1580:
case 2721:
case 2500:
case 3377:
case 386:
case 2334:
case 1042:
case 2740:
case 1535:
case 430:
case 2379:
case 3817:
case 2644:
case 2280:
case 1200:
case 3043:
case 1027:
case 1237:
case 881:
case 500:
case 812:
case 164:
case 900:
case 3966:
case 1203:
case 3582:
case 3278:
case 3844:
case 1648:
case 2743:
case 1555:
case 487:
case 2410:
case 1889:
case 1771:
case 2343:
case 2066:
case 2171:
case 3362:
case 1493:
case 1075:
case 1852:
case 3175:
case 3528:
case 3609:
case 1490:
case 342:
case 1605:
case 3586:
case 352:
case 1801:
case 2779:
case 3766:
case 3890:
case 3720:
case 3501:
case 179:
case 3532:
case 3624:
case 2023:
case 1714:
case 2233:
case 2069:
case 2372:
case 3076:
case 219:
case 3161:
case 3401:
case 1287:
case 2207:
case 3489:
case 1061:
case 2147:
case 1176:
case 3552:
case 2020:
case 1118:
case 466:
case 2165:
case 271:
case 2776:
case 1585:
case 3769:
case 111:
case 1765:
case 2972:
case 3589:
case 1613:
case 3893:
case 29:
case 3072:
case 1914:
case 2376:
case 1347:
case 2831:
case 30:
case 2597:
case 1859:
case 1882:
case 2635:
case 1264:
case 413:
case 2295:
case 2548:
case 3969:
case 3456:
case 784:
case 415:
case 3631:
case 684:
case 244:
case 27:
case 1517:
case 1965:
case 3291:
case 3320:
case 3835:
case 3602:
case 3219:
case 2448:
case 3556:
case 291:
case 2268:
case 387:
case 695:
case 1803:
case 1770:
case 836:
case 1236:
case 200:
case 3680:
case 3464:
case 3244:
case 1949:
case 3967:
case 267:
case 2084:
case 1519:
case 635:
case 3126:
case 318:
case 3945:
case 3708:
case 1591:
case 1773:
case 2678:
case 821:
case 3415:
case 1373:
case 2741:
case 330:
case 1232:
case 2045:
case 1201:
case 775:
case 1973:
case 2149:
case 1289:
case 3487:
case 2612:
case 3285:
case 673:
case 773:
case 3384:
case 858:
case 3767:
case 1749:
case 82:
case 1252:
case 3908:
case 1370:
case 3587:
case 2853:
case 40:
case 798:
case 99:
case 2830:
case 1058:
case 3754:
case 2325:
case 1342:
case 2592:
case 105:
case 3921:
case 3293:
case 315:
case 638:
case 919:
case 93:
case 1412:
case 53:
case 1177:
case 2206:
case 1286:
case 2925:
case 2850:
case 2777:
case 724:
case 991:
case 710:
case 2596:
case 954:
case 3721:
case 1346:
case 3891:
case 1611:
case 853:
case 97:
case 4018:
case 778:
case 944:
case 3400:
case 1063:
case 3819:
case 3235:
case 1239:
case 1029:
case 3437:
case 1815:
case 3695:
case 3954:
case 4094:
case 2868:
case 2474:
case 3129:
case 931:
case 366:
case 1946:
case 3934:
case 1259:
case 3163:
case 2619:
case 2202:
case 3557:
case 2142:
case 1864:
case 2725:
case 1416:
case 855:
case 3354:
case 1410:
case 2593:
case 2889:
case 2771:
case 1809:
case 3292:
case 832:
case 3805:
case 3632:
case 1343:
case 3424:
case 2075:
case 2852:
case 4073:
case 2493:
case 410:
case 3071:
case 446:
case 1943:
case 2179:
case 2605:
case 1685:
case 1340:
case 456:
case 3775:
case 3652:
case 1740:
case 1062:
case 1379:
case 3551:
case 2140:
case 2435:
case 1644:
case 3636:
case 1280:
case 3451:
case 3431:
case 3975:
case 3656:
case 2455:
case 508:
case 498:
case 2257:
case 264:
case 1283:
case 70:
case 2203:
case 60:
case 2143:
case 1979:
case 3502:
case 3727:
case 2371:
case 3402:
case 889:
case 2555:
case 2914:
case 473:
case 2347:
case 957:
case 557:
case 2365:
case 2998:
case 2882:
case 1635:
case 1497:
case 1802:
case 4046:
case 2264:
case 947:
case 299:
case 1295:
case 3961:
case 2314:
case 1548:
case 1994:
case 1976:
case 1918:
case 2965:
case 2398:
case 2517:
case 1772:
case 154:
case 475:
case 3682:
case 191:
case 2839:
case 1448:
case 2172:
case 2215:
case 3361:
case 2610:
case 435:
case 3581:
case 3761:
case 279:
case 2886:
case 282:
case 1806:
case 4042:
case 3120:
case 804:
case 922:
case 652:
case 1069:
case 3813:
case 503:
case 1693:
case 13:
case 3481:
case 2828:
case 119:
case 3409:
case 2287:
case 2176:
case 1147:
case 3810:
case 1690:
case 362:
case 2118:
case 1230:
case 3123:
case 505:
case 1776:
case 1794:
case 433:
case 1505:
case 2585:
case 1972:
case 3628:
case 211:
case 2692:
case 3550:
case 2373:
case 3533:
case 615:
case 715:
case 484:
case 3904:
case 3049:
case 2201:
case 3450:
case 1067:
case 2141:
case 3407:
case 3892:
case 1612:
case 2289:
case 3926:
case 816:
case 398:
case 850:
case 2749:
case 613:
case 666:
case 2349:
case 1008:
case 3704:
case 2803:
case 1883:
case 2857:
case 2236:
case 100:
case 3322:
case 1499:
case 3637:
case 829:
case 2674:
case 1941:
case 564:
case 3568:
case 1173:
case 2256:
case 167:
case 3070:
case 4071:
case 2004:
case 1084:
case 3788:
case 3657:
case 356:
case 2591:
case 3922:
case 2800:
case 1880:
case 3108:
case 3874:
case 378:
case 2837:
case 3248:
case 618:
case 939:
case 3760:
case 718:
case 91:
case 2346:
case 539:
case 51:
case 186:
case 2611:
case 3358:
case 1251:
case 2699:
case 4065:
case 393:
case 2063:
case 2239:
case 2029:
case 1496:
case 395:
case 2516:
case 1231:
case 409:
case 687:
case 2946:
case 2060:
case 3483:
case 1202:
case 2282:
case 3899:
case 3583:
case 2864:
case 333:
case 3763:
case 3615:
case 1895:
case 257:
case 2887:
case 3329:
case 911:
case 3210:
case 1830:
case 3363:
case 3960:
case 1034:
case 2342:
case 1224:
case 205:
case 1054:
case 2412:
case 3758:
case 2177:
case 868:
case 1146:
case 222:
case 1206:
case 2286:
case 3360:
case 979:
case 2942:
case 1777:
case 579:
case 2746:
case 3932:
case 2305:
case 1385:
case 3736:
case 3048:
case 2827:
case 3389:
case 2056:
case 3270:
case 1640:
case 1862:
case 2204:
case 3332:
case 114:
case 862:
case 2905:
case 1643:
case 228:
case 2226:
case 3989:
case 1717:
case 25:
case 3273:
case 809:
case 24:
case 2288:
case 274:
case 3301:
case 3952:
case 68:
case 2117:
case 234:
case 1866:
case 1498:
case 1414:
case 2875:
case 712:
case 159:
case 2348:
case 1514:
case 3732:
case 149:
case 1944:
case 3936:
case 1598:
case 294:
case 2418:
case 1245:
case 1679:
case 1465:
case 1105:
case 3109:
case 3675:
case 4074:
case 1447:
case 2494:
case 1081:
case 3569:
case 1785:
case 1547:
case 2397:
case 2222:
case 2518:
case 3871:
case 3336:
case 3359:
case 983:
case 1793:
case 2028:
case 3847:
case 2614:
case 2238:
case 583:
case 1869:
case 1355:
case 3661:
case 269:
case 3939:
case 3124:
case 1935:
case 1471:
case 1006:
case 202:
case 2086:
case 223:
case 3959:
case 3466:
case 1234:
case 2713:
case 416:
case 3728:
case 2665:
case 225:
case 2647:
case 1694:
case 2190:
case 2861:
case 161:
case 372:
case 3786:
case 3339:
case 1335:
case 3566:
case 450:
case 1820:
case 4011:
case 3386:
case 332:
case 1002:
case 2910:
case 1390:
case 1735:
case 1993:
case 429:
case 3328:
case 1221:
case 2313:
case 2059:
case 2440:
case 463:
case 3151:
case 3562:
case 2310:
case 3131:
case 2155:
case 1990:
case 1672:
case 2913:
case 3759:
case 1755:
case 3242:
case 2543:
case 3102:
case 54:
case 180:
case 3873:
case 974:
case 1312:
case 658:
case 528:
case 2670:
case 758:
case 95:
case 55:
case 1083:
case 2003:
case 72:
case 1080:
case 2425:
case 1778:
case 2392:
case 2037:
case 3096:
case 1912:
case 3688:
case 3870:
case 3703:
case 3757:
case 2116:
case 1262:
case 177:
case 875:
case 2178:
case 2804:
case 2525:
case 1845:
case 3357:
case 3303:
case 541:
case 1867:
case 941:
case 835:
case 796:
case 137:
case 1316:
case 951:
case 2996:
case 2974:
case 3900:
case 2822:
case 893:
case 1446:
case 3903:
case 636:
case 2275:
case 2112:
case 1916:
case 3337:
case 534:
case 2577:
case 934:
case 1546:
case 3534:
case 833:
case 1978:
case 1391:
case 1834:
case 645:
case 2911:
case 3846:
case 2541:
case 2261:
case 925:
case 2087:
case 2441:
case 2999:
case 2858:
case 1030:
case 1991:
case 492:
case 1223:
case 846:
case 1033:
case 902:
case 810:
case 3130:
case 3445:
case 2311:
case 824:
case 1050:
case 753:
case 653:
case 969:
case 643:
case 3567:
case 3787:
case 1919:
case 3658:
case 2399:
case 3545:
case 838:
case 660:
case 1068:
case 3764:
case 2829:
case 1570:
case 760:
case 2015:
case 2711:
case 3484:
case 3660:
case 106:
case 1199:
case 898:
case 2191:
case 2064:
case 3663:
case 3099:
case 1625:
case 1473:
case 1095:
case 3408:
case 1821:
case 489:
case 3168:
case 4010:
case 1791:
case 2119:
case 2860:
case 2642:
case 607:
case 3879:
case 2498:
case 1052:
case 259:
case 1875:
case 2009:
case 1089:
case 249:
case 3461:
case 772:
case 597:
case 1671:
case 1997:
case 2598:
case 2317:
case 789:
case 1418:
case 2245:
case 194:
case 3666:
case 2105:
case 1185:
case 2267:
case 3189:
case 2081:
case 1476:
case 141:
case 1705:
case 1948:
case 2547:
case 1594:
case 1032:
case 2344:
case 1397:
case 3709:
case 2917:
case 3843:
case 977:
case 453:
case 1305:
case 2385:
case 692:
case 3309:
case 1827:
case 1797:
case 1056:
case 3981:
case 4012:
case 2640:
case 2862:
case 1144:
case 443:
case 1036:
case 1748:
case 2717:
case 3909:
case 3156:
case 445:
case 732:
case 2148:
case 1472:
case 455:
case 3381:
case 174:
case 3840:
case 1117:
case 3662:
case 1540:
case 436:
case 2002:
case 3751:
case 1910:
case 2735:
case 2390:
case 2221:
case 1313:
case 3924:
case 1059:
case 906:
case 842:
case 3906:
case 1263:
case 3225:
case 496:
case 3702:
case 1039:
case 3427:
case 2672:
case 2393:
case 421:
case 26:
case 704:
case 1913:
case 852:
case 2755:
case 2571:
case 3894:
case 1614:
case 3331:
case 3724:
case 1193:
case 381:
case 2254:
case 102:
case 1086:
case 2935:
case 2471:
case 3620:
case 3302:
case 2234:
case 1713:
case 2024:
case 1665:
case 3277:
case 1479:
case 3623:
case 3931:
case 3475:
case 3093:
case 827:
case 3669:
case 2676:
case 125:
case 261:
case 3128:
case 1861:
case 476:
case 3706:
case 458:
case 2335:
case 1579:
case 1258:
case 665:
case 3383:
case 2867:
case 3438:
case 1974:
case 3538:
case 1996:
case 3980:
case 2378:
case 1792:
case 3558:
case 866:
case 4044:
case 2266:
case 3645:
case 345:
case 1649:
case 949:
case 3667:
case 1112:
case 355:
case 3841:
case 1374:
case 3380:
case 2712:
case 629:
case 1774:
case 3078:
case 188:
case 1992:
case 616:
case 740:
case 716:
case 2312:
case 3137:
case 750:
case 514:
case 2196:
case 3684:
case 3460:
case 920:
case 813:
case 3157:
case 3463:
case 1392:
case 1227:
case 1037:
case 3429:
case 1673:
case 2912:
case 1116:
case 277:
case 2262:
case 2884:
case 2442:
case 1178:
case 1804:
case 3825:
case 3019:
case 2111:
case 3795:
case 2068:
case 668:
case 3307:
case 3353:
case 2570:
case 3950:
case 3621:
case 3091:
case 3404:
case 3164:
case 3768:
case 2473:
case 3588:
case 3907:
case 2719:
case 5:
case 2821:
case 2573:
case 3488:
case 3115:
case 3333:
case 1119:
case 1860:
case 1642:
case 1911:
case 3877:
case 185:
case 3733:
case 1261:
case 3654:
case 1087:
case 1441:
case 2053:
case 1858:
case 2220:
case 4035:
case 2033:
case 2991:
case 1311:
case 2449:
case 3276:
case 1838:
case 3294:
case 3187:
case 2549:
case 870:
case 321:
case 3753:
case 2919:
case 3707:
case 553:
case 623:
case 3785:
case 3344:
case 854:
case 1789:
case 1523:
case 953:
case 2709:
case 1871:
case 3917:
case 3245:
case 1423:
case 943:
case 3465:
case 3105:
case 1109:
case 543:
case 3447:
case 831:
case 2461:
case 1181:
case 1732:
case 3944:
case 1005:
case 1936:
case 2879:
case 1701:
case 2132:
case 480:
case 1356:
case 955:
case 3414:
case 1952:
case 3208:
case 2840:
case 1332:
case 2044:
case 507:
case 314:
case 871:
case 3717:
case 1989:
case 1627:
case 907:
case 1273:
case 1270:
case 1352:
case 2981:
case 104:
case 3640:
case 2136:
case 3284:
case 3385:
case 1048:
case 1736:
case 1389:
case 3744:
case 1928:
case 3672:
case 36:
case 1759:
case 2731:
case 1462:
case 2225:
case 2906:
case 2159:
case 1562:
case 1131:
case 1782:
case 3221:
case 548:
case 2055:
case 774:
case 3:
case 674:
case 64:
case 576:
case 75:
case 958:
case 65:
case 92:
case 2751:
case 558:
case 3390:
case 628:
case 2128:
case 1010:
case 189:
case 1786:
case 2706:
case 1339:
case 3113:
case 3335:
case 2351:
case 3820:
case 1982:
case 1466:
case 2623:
case 1246:
case 1728:
case 2277:
case 2093:
case 2931:
case 1814:
case 3694:
case 2090:
case 3471:
case 406:
case 3935:
case 996:
case 641:
case 2302:
case 1382:
case 741:
case 3571:
case 651:
case 1865:
case 751:
case 3793:
case 2876:
case 694:
case 2724:
case 921:
case 3916:
case 1337:
case 3712:
case 1622:
case 414:
case 785:
case 2558:
case 3266:
case 685:
case 2667:
case 3316:
case 1454:
case 1937:
case 3641:
case 2012:
case 783:
case 2980:
case 3845:
case 1357:
case 886:
case 3867:
case 1554:
case 2438:
case 1688:
case 1870:
case 3262:
case 2563:
case 168:
case 1626:
case 260:
case 3542:
case 1183:
case 3716:
case 2429:
case 3778:
case 1074:
case 3912:
case 3174:
case 1421:
case 3808:
case 449:
case 207:
case 2684:
case 2460:
case 2560:
case 1737:
case 380:
case 2016:
case 1521:
case 2488:
case 3821:
case 2350:
case 2272:
case 276:
case 2115:
case 150:
case 2333:
case 1011:
case 4024:
case 1099:
case 1663:
case 58:
case 1508:
case 1629:
case 788:
case 3095:
case 688:
case 1195:
case 2950:
case 2091:
case 2404:
case 1842:
case 4006:
case 2164:
case 306:
case 2933:
case 2019:
case 617:
case 2795:
case 3111:
case 3068:
case 3570:
case 1764:
case 2353:
case 2307:
case 2395:
case 3549:
case 1567:
case 3854:
case 1364:
case 2422:
case 296:
case 2634:
case 2218:
case 1130:
case 1445:
case 2522:
case 3050:
case 2276:
case 2187:
case 1467:
case 981:
case 3269:
case 2995:
case 1150:
case 2368:
case 512:
case 3007:
case 1315:
case 4:
case 3391:
case 2877:
case 4002:
case 2733:
case 1214:
case 3472:
case 374:
case 2952:
case 1381:
case 34:
case 7:
case 2756:
case 3748:
case 328:
case 3036:
case 3905:
case 1909:
case 3572:
case 2989:
case 2273:
case 0:
case 3056:
case 2352:
case 76:
case 3204:
case 66:
case 3305:
case 2389:
case 3705:
case 2569:
case 3948:
case 81:
case 3222:
case 3032:
case 2789:
case 1709:
case 1666:
case 2752:
case 2675:
case 351:
case 2956:
case 4037:
case 3494:
case 3348:
case 899:
case 2181:
case 3997:
case 2936:
case 2005:
case 761:
case 4003:
case 1132:
case 1879:
case 2356:
case 3052:
case 1561:
case 1575:
case 1128:
case 2339:
case 2786:
case 1902:
case 3713:
case 2106:
case 759:
case 864:
case 1186:
case 659:
case 3665:
case 1277:
case 3479:
case 2728:
case 1475:
case 1931:
case 1669:
case 929:
case 563:
case 1093:
case 2814:
case 369:
case 2939:
case 181:
case 2661:
case 323:
case 302:
case 3710:
case 1951:
case 2382:
case 3238:
case 2847:
case 1876:
case 2013:
case 1724:
case 2759:
case 1527:
case 483:
case 1324:
case 2242:
case 3543:
case 1182:
case 3263:
case 1159:
case 292:
case 1225:
case 2562:
case 2782:
case 3313:
case 516:
case 1924:
case 3440:
case 3135:
case 940:
case 3260:
case 1306:
case 2386:
case 3540:
case 950:
case 2739:
case 1751:
case 620:
case 714:
case 606:
case 2757:
case 1608:
case 1529:
case 4032:
case 268:
case 2626:
case 904:
case 3425:
case 2183:
case 1463:
case 3037:
case 3392:
case 3673:
case 451:
case 4001:
case 2096:
case 1137:
case 3670:
case 2421:
case 2604:
case 2180:
case 1100:
case 1460:
case 3003:
case 3057:
case 1240:
case 3796:
case 434:
case 1560:
case 2737:
case 3826:
case 3992:
case 1016:
case 4052:
case 2700:
case 2873:
case 1780:
case 155:
case 857:
case 44:
case 474:
case 3396:
case 2300:
case 1458:
case 1279:
case 1558:
case 1983:
case 428:
case 1645:
case 2957:
case 3649:
case 847:
case 3112:
case 1667:
case 2454:
case 2937:
case 3974:
case 3996:
case 1980:
case 3822:
case 143:
case 2357:
case 153:
case 2554:
case 2849:
case 1438:
case 1730:
case 2915:
case 2567:
case 2364:
case 2658:
case 3399:
case 2545:
case 737:
case 2265:
case 3311:
case 1634:
case 2130:
case 1276:
case 2247:
case 3838:
case 1187:
case 2467:
case 1368:
case 3261:
case 3441:
case 3087:
case 2964:
case 4059:
case 2298:
case 572:
case 2846:
case 1877:
case 989:
case 385:
case 972:
case 1733:
case 1115:
case 3119:
case 932:
case 1526:
case 250:
case 3860:
case 3191:
case 3064:
case 148:
case 216:
case 240:
case 2663:
case 1588:
case 2987:
case 3711:
case 2195:
case 1950:
case 777:
case 1621:
case 992:
case 402:
case 1091:
case 1404:
case 2660:
case 1504:
case 2584:
case 1330:
case 3799:
case 4028:
case 3015:
case 2387:
case 1307:
case 2764:
case 3829:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754510401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,];
var gg_b = "1754510401/";

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
