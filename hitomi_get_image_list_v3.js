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
case 3788:
case 3063:
case 1635:
case 1050:
case 47:
case 1453:
case 286:
case 3151:
case 2785:
case 688:
case 619:
case 1848:
case 3306:
case 2362:
case 900:
case 1703:
case 2888:
case 1817:
case 3274:
case 1014:
case 780:
case 3885:
case 2670:
case 3487:
case 723:
case 4070:
case 1174:
case 935:
case 1435:
case 3660:
case 1258:
case 3781:
case 23:
case 1837:
case 2096:
case 3107:
case 3326:
case 3158:
case 102:
case 2264:
case 2469:
case 277:
case 1521:
case 1242:
case 832:
case 2881:
case 2191:
case 2113:
case 1557:
case 3679:
case 1792:
case 2073:
case 1508:
case 1723:
case 782:
case 1512:
case 1320:
case 1712:
case 1442:
case 308:
case 792:
case 397:
case 1523:
case 2883:
case 3674:
case 2981:
case 1386:
case 1592:
case 1458:
case 1235:
case 2016:
case 3783:
case 2176:
case 66:
case 729:
case 3135:
case 1843:
case 741:
case 2464:
case 2269:
case 71:
case 1349:
case 3985:
case 3166:
case 1642:
case 2102:
case 3474:
case 1019:
case 1215:
case 1952:
case 2118:
case 3075:
case 1266:
case 3287:
case 2988:
case 743:
case 547:
case 1179:
case 790:
case 1658:
case 3260:
case 1451:
case 698:
case 3061:
case 2585:
case 611:
case 2389:
case 2664:
case 4064:
case 3588:
case 296:
case 4082:
case 3153:
case 357:
case 752:
case 3016:
case 1923:
case 2380:
case 1808:
case 2068:
case 904:
case 1169:
case 1238:
case 3464:
case 2581:
case 104:
case 1633:
case 1992:
case 3482:
case 468:
case 834:
case 1541:
case 801:
case 2367:
case 1491:
case 1413:
case 1304:
case 1010:
case 3270:
case 1293:
case 1340:
case 2260:
case 3131:
case 3377:
case 1552:
case 1797:
case 3585:
case 1801:
case 2061:
case 412:
case 1903:
case 1517:
case 750:
case 1655:
case 396:
case 2153:
case 1030:
case 1945:
case 2588:
case 1828:
case 658:
case 3102:
case 448:
case 725:
case 2075:
case 3118:
case 3036:
case 1613:
case 3988:
case 2287:
case 1691:
case 1202:
case 49:
case 133:
case 2115:
case 1218:
case 3888:
case 1329:
case 1622:
case 3198:
case 428:
case 2274:
case 2479:
case 3670:
case 1298:
case 2487:
case 1611:
case 1693:
case 2063:
case 1676:
case 1717:
case 1928:
case 770:
case 1845:
case 3785:
case 1431:
case 3362:
case 3384:
case 1505:
case 765:
case 436:
case 809:
case 2679:
case 4079:
case 615:
case 2372:
case 1602:
case 2142:
case 4087:
case 1309:
case 3073:
case 2687:
case 1213:
case 1493:
case 1411:
case 287:
case 1476:
case 33:
case 3155:
case 1957:
case 1921:
case 2107:
case 1892:
case 2583:
case 1908:
case 3264:
case 3282:
case 108:
case 2541:
case 3712:
case 3523:
case 197:
case 3757:
case 908:
case 2010:
case 2304:
case 2743:
case 2491:
case 1367:
case 680:
case 2705:
case 2211:
case 3721:
case 2340:
case 2276:
case 719:
case 2923:
case 669:
case 3627:
case 2169:
case 1783:
case 3941:
case 2455:
case 3843:
case 2238:
case 3937:
case 1135:
case 231:
case 2857:
case 464:
case 4033:
case 2992:
case 2633:
case 1166:
case 3642:
case 1985:
case 2548:
case 3495:
case 3349:
case 3215:
case 1075:
case 3701:
case 1474:
case 1279:
case 2832:
case 4091:
case 2691:
case 156:
case 3266:
case 2202:
case 3728:
case 3179:
case 3503:
case 3917:
case 2218:
case 3451:
case 621:
case 2797:
case 3825:
case 649:
case 3253:
case 2801:
case 2903:
case 2655:
case 2231:
case 4055:
case 654:
case 2030:
case 1153:
case 471:
case 2828:
case 3607:
case 3251:
case 1063:
case 674:
case 61:
case 451:
case 1788:
case 2447:
case 3227:
case 3050:
case 479:
case 2431:
case 1151:
case 3848:
case 1306:
case 3925:
case 2752:
case 2329:
case 3344:
case 3703:
case 4022:
case 3295:
case 517:
case 3817:
case 1479:
case 3014:
case 3997:
case 3501:
case 1487:
case 692:
case 1885:
case 2525:
case 3174:
case 1056:
case 2611:
case 2418:
case 2748:
case 976:
case 4093:
case 4011:
case 3943:
case 485:
case 2476:
case 3837:
case 1781:
case 2957:
case 3435:
case 3653:
case 1107:
case 1326:
case 74:
case 798:
case 2912:
case 2255:
case 1583:
case 866:
case 707:
case 239:
case 302:
case 2505:
case 690:
case 3242:
case 2737:
case 453:
case 3557:
case 987:
case 1142:
case 4002:
case 2291:
case 3508:
case 2213:
case 1687:
case 2309:
case 3320:
case 2741:
case 4018:
case 2090:
case 3512:
case 2344:
case 684:
case 3329:
case 867:
case 2817:
case 706:
case 3402:
case 3525:
case 3298:
case 2501:
case 3418:
case 3748:
case 3932:
case 2852:
case 3676:
case 4035:
case 3803:
case 2635:
case 2453:
case 3845:
case 200:
case 3447:
case 186:
case 3431:
case 1785:
case 3597:
case 652:
case 442:
case 2848:
case 2925:
case 475:
case 1881:
case 3737:
case 1191:
case 1113:
case 3505:
case 3422:
case 4015:
case 3543:
case 2615:
case 847:
case 2792:
case 3213:
case 3309:
case 3602:
case 3618:
case 3411:
case 80:
case 2258:
case 3476:
case 2034:
case 3647:
case 3892:
case 2905:
case 977:
case 650:
case 2653:
case 3921:
case 3059:
case 3438:
case 3631:
case 3912:
case 3255:
case 93:
case 339:
case 462:
case 516:
case 177:
case 505:
case 1138:
case 4051:
case 2235:
case 3276:
case 1016:
case 3812:
case 420:
case 4027:
case 1176:
case 3455:
case 331:
case 670:
case 2805:
case 3992:
case 1482:
case 304:
case 1464:
case 2442:
case 2712:
case 3222:
case 3541:
case 3170:
case 1193:
case 1111:
case 827:
case 3304:
case 3743:
case 3491:
case 3413:
case 1122:
case 2386:
case 2592:
case 3537:
case 2721:
case 3340:
case 3293:
case 645:
case 672:
case 3552:
case 4058:
case 2658:
case 3801:
case 2253:
case 3247:
case 1585:
case 3517:
case 1389:
case 1664:
case 422:
case 3433:
case 196:
case 3548:
case 2495:
case 499:
case 2349:
case 2642:
case 2897:
case 3324:
case 3725:
case 2266:
case 3202:
case 715:
case 1988:
case 532:
case 3691:
case 2503:
case 481:
case 2179:
case 1567:
case 3699:
case 3392:
case 128:
case 2022:
case 603:
case 2540:
case 2337:
case 18:
case 3614:
case 318:
case 928:
case 1656:
case 98:
case 2093:
case 2011:
case 561:
case 1663:
case 2076:
case 360:
case 2986:
case 70:
case 858:
case 1381:
case 2165:
case 279:
case 590:
case 3700:
case 3345:
case 3499:
case 1989:
case 3303:
case 3744:
case 1079:
case 3219:
case 3414:
case 1275:
case 1862:
case 1087:
case 1884:
case 1977:
case 3175:
case 2018:
case 541:
case 2136:
case 1119:
case 1456:
case 3634:
case 1463:
case 393:
case 2317:
case 3829:
case 1261:
case 2031:
case 2352:
case 617:
case 4059:
case 806:
case 3161:
case 767:
case 439:
case 2230:
case 362:
case 815:
case 1263:
case 3332:
case 2397:
case 1461:
case 3824:
case 1506:
case 320:
case 3163:
case 4054:
case 2900:
case 264:
case 404:
case 2033:
case 1150:
case 3095:
case 2325:
case 1962:
case 3299:
case 3494:
case 3301:
case 1074:
case 3419:
case 3749:
case 3156:
case 1475:
case 2724:
case 273:
case 3328:
case 549:
case 2610:
case 4010:
case 1889:
case 3500:
case 1256:
case 1114:
case 1383:
case 2920:
case 259:
case 878:
case 523:
case 3840:
case 2630:
case 4030:
case 3007:
case 271:
case 2509:
case 3042:
case 1846:
case 399:
case 3312:
case 3619:
case 3321:
case 2410:
case 2091:
case 2013:
case 2740:
case 948:
case 2704:
case 381:
case 1572:
case 1767:
case 3357:
case 3786:
case 2299:
case 2301:
case 1906:
case 3325:
case 3724:
case 1436:
case 2214:
case 2749:
case 2156:
case 2328:
case 3610:
case 3529:
case 373:
case 2544:
case 572:
case 255:
case 1478:
case 2332:
case 2051:
case 1562:
case 3849:
case 220:
case 3397:
case 632:
case 1584:
case 2824:
case 3654:
case 283:
case 395:
case 2163:
case 3430:
case 2042:
case 3509:
case 2694:
case 2308:
case 4094:
case 2619:
case 2520:
case 2312:
case 1190:
case 1926:
case 3305:
case 3740:
case 3013:
case 3290:
case 82:
case 2357:
case 605:
case 2786:
case 1678:
case 2234:
case 1416:
case 1746:
case 1159:
case 545:
case 3920:
case 2909:
case 3055:
case 15:
case 1972:
case 3259:
case 2007:
case 2804:
case 3196:
case 371:
case 1867:
case 3630:
case 1465:
case 1872:
case 351:
case 2239:
case 2434:
case 1216:
case 525:
case 1967:
case 17:
case 2650:
case 3165:
case 1496:
case 400:
case 3116:
case 3254:
case 1069:
case 97:
case 2809:
case 914:
case 2168:
case 242:
case 9:
case 616:
case 2586:
case 1826:
case 3022:
case 898:
case 3504:
case 4014:
case 3540:
case 3337:
case 3171:
case 766:
case 435:
case 289:
case 1473:
case 3011:
case 1980:
case 811:
case 3709:
case 293:
case 3800:
case 385:
case 4034:
case 3047:
case 1589:
case 1130:
case 2450:
case 813:
case 1762:
case 1784:
case 402:
case 2161:
case 1385:
case 3949:
case 2924:
case 552:
case 2499:
case 2294:
case 2700:
case 2015:
case 353:
case 2744:
case 2219:
case 3524:
case 2066:
case 3002:
case 3348:
case 3136:
case 3690:
case 647:
case 1051:
case 1332:
case 3263:
case 457:
case 3506:
case 2562:
case 2584:
case 1027:
case 1824:
case 3461:
case 1250:
case 183:
case 60:
case 2789:
case 3150:
case 920:
case 1929:
case 1301:
case 1299:
case 2906:
case 368:
case 1095:
case 955:
case 54:
case 1156:
case 2436:
case 3877:
case 1419:
case 3889:
case 155:
case 2671:
case 507:
case 2746:
case 1439:
case 667:
case 513:
case 1058:
case 717:
case 3661:
case 3780:
case 2296:
case 884:
case 922:
case 1840:
case 25:
case 3134:
case 2064:
case 701:
case 2465:
case 199:
case 1308:
case 1042:
case 4036:
case 1520:
case 2636:
case 1312:
case 981:
case 2926:
case 999:
case 2471:
case 2678:
case 4078:
case 1357:
case 3572:
case 328:
case 1586:
case 989:
case 2110:
case 1392:
case 918:
case 872:
case 189:
case 3946:
case 1323:
case 2271:
case 1239:
case 2154:
case 3381:
case 3268:
case 2967:
case 1650:
case 2:
case 2496:
case 486:
case 709:
case 865:
case 3580:
case 960:
case 894:
case 2265:
case 175:
case 519:
case 1015:
case 3079:
case 2236:
case 3087:
case 2673:
case 3862:
case 1066:
case 3194:
case 1549:
case 3456:
case 3119:
case 3977:
case 1634:
case 0:
case 2696:
case 3388:
case 2130:
case 1829:
case 2762:
case 2784:
case 1161:
case 1924:
case 2663:
case 4063:
case 1076:
case 3872:
case 3154:
case 3:
case 314:
case 37:
case 882:
case 1165:
case 1254:
case 2139:
case 2580:
case 337:
case 1038:
case 3265:
case 3069:
case 3546:
case 1504:
case 2772:
case 1022:
case 3826:
case 28:
case 1540:
case 476:
case 626:
case 1210:
case 2946:
case 854:
case 2656:
case 3980:
case 3271:
case 1011:
case 730:
case 2463:
case 1317:
case 2060:
case 3589:
case 1047:
case 1031:
case 1352:
case 3784:
case 985:
case 1659:
case 3577:
case 2706:
case 880:
case 1230:
case 3236:
case 2079:
case 1178:
case 2275:
case 1729:
case 3806:
case 1348:
case 2194:
case 1002:
case 638:
case 1524:
case 3673:
case 1690:
case 953:
case 2456:
case 487:
case 2962:
case 1325:
case 268:
case 3436:
case 2877:
case 2475:
case 2199:
case 1098:
case 2889:
case 1610:
case 3478:
case 2114:
case 843:
case 3616:
case 3584:
case 4068:
case 1397:
case 2461:
case 2668:
case 3777:
case 1900:
case 164:
case 210:
case 2150:
case 1033:
case 3665:
case 1430:
case 829:
case 1509:
case 1173:
case 248:
case 2675:
case 841:
case 1013:
case 1410:
case 456:
case 2767:
case 1343:
case 3471:
case 1290:
case 3746:
case 3159:
case 863:
case 3416:
case 212:
case 4061:
case 506:
case 2468:
case 1259:
case 1454:
case 959:
case 1886:
case 1196:
case 171:
case 3867:
case 553:
case 2355:
case 3534:
case 241:
case 3307:
case 3342:
case 4024:
case 2624:
case 585:
case 178:
case 2590:
case 1120:
case 1272:
case 3486:
case 384:
case 2313:
case 3854:
case 3057:
case 3220:
case 263:
case 2043:
case 2710:
case 417:
case 1680:
case 3351:
case 1761:
case 2184:
case 2097:
case 2894:
case 3106:
case 1563:
case 1206:
case 2333:
case 868:
case 3001:
case 2424:
case 3395:
case 2025:
case 3794:
case 1374:
case 551:
case 3200:
case 3599:
case 2604:
case 4004:
case 1667:
case 3830:
case 290:
case 3686:
case 4040:
case 2640:
case 3514:
case 243:
case 3045:
case 2224:
case 2850:
case 280:
case 3249:
case 106:
case 3714:
case 3315:
case 3003:
case 1379:
case 4009:
case 1387:
case 1756:
case 1149:
case 3366:
case 2302:
case 2048:
case 1575:
case 2318:
case 2814:
case 1978:
case 2017:
case 2347:
case 1626:
case 2189:
case 2530:
case 604:
case 1088:
case 2899:
case 1936:
case 2919:
case 2331:
case 1561:
case 836:
case 3644:
case 3092:
case 2322:
case 958:
case 1965:
case 2629:
case 1186:
case 2510:
case 633:
case 2037:
case 2834:
case 564:
case 158:
case 2041:
case 1267:
case 2204:
case 595:
case 2393:
case 2311:
case 3420:
case 2240:
case 1280:
case 2554:
case 221:
case 777:
case 372:
case 573:
case 828:
case 249:
case 2146:
case 270:
case 1277:
case 599:
case 2353:
case 3189:
case 3530:
case 3052:
case 1975:
case 1856:
case 96:
case 3919:
case 1289:
case 3994:
case 1484:
case 369:
case 380:
case 2714:
case 2045:
case 3429:
case 776:
case 3850:
case 1863:
case 245:
case 2315:
case 2799:
case 3302:
case 1124:
case 3048:
case 1961:
case 522:
case 2594:
case 3609:
case 323:
case 2335:
case 1796:
case 3554:
case 1565:
case 2910:
case 2890:
case 555:
case 272:
case 107:
case 94:
case 1516:
case 349:
case 3759:
case 3146:
case 1369:
case 1684:
case 294:
case 520:
case 2644:
case 2092:
case 2167:
case 3037:
case 1571:
case 2954:
case 1140:
case 814:
case 8:
case 3204:
case 3409:
case 2286:
case 87:
case 3790:
case 382:
case 3041:
case 3939:
case 3240:
case 1773:
case 3393:
case 2420:
case 2023:
case 4049:
case 2649:
case 392:
case 708:
case 593:
case 3590:
case 3391:
case 3313:
case 3043:
case 2854:
case 2057:
case 2172:
case 635:
case 1677:
case 2990:
case 252:
case 575:
case 2739:
case 1446:
case 1765:
case 2534:
case 3355:
case 341:
case 329:
case 2126:
case 919:
case 1689:
case 2719:
case 2395:
case 1736:
case 2244:
case 1861:
case 3229:
case 3424:
case 2200:
case 2794:
case 4086:
case 2830:
case 2686:
case 1778:
case 2599:
case 3604:
case 3950:
case 3398:
case 542:
case 1963:
case 343:
case 756:
case 1956:
case 3819:
case 1477:
case 591:
case 2032:
case 602:
case 3894:
case 1646:
case 2327:
case 3162:
case 3914:
case 589:
case 1489:
case 1284:
case 518:
case 1262:
case 250:
case 3333:
case 306:
case 1249:
case 1045:
case 3379:
case 2863:
case 2578:
case 1003:
case 213:
case 145:
case 3387:
case 1519:
case 55:
case 1620:
case 893:
case 3575:
case 2277:
case 170:
case 3088:
case 3763:
case 3626:
case 447:
case 970:
case 657:
case 3936:
case 3561:
case 2484:
case 3406:
case 2462:
case 2085:
case 842:
case 194:
case 1167:
case 3965:
case 1644:
case 1092:
case 165:
case 3472:
case 2571:
case 1954:
case 2370:
case 3267:
case 2968:
case 860:
case 358:
case 3916:
case 965:
case 2773:
case 1023:
case 1420:
case 972:
case 1910:
case 2246:
case 891:
case 172:
case 1539:
case 2516:
case 739:
case 2662:
case 3606:
case 3568:
case 2369:
case 2684:
case 3873:
case 4077:
case 1990:
case 2677:
case 22:
case 3226:
case 219:
case 2716:
case 1739:
case 3871:
case 704:
case 1534:
case 2596:
case 2382:
case 899:
case 4089:
case 1307:
case 686:
case 1810:
case 2573:
case 822:
case 984:
case 1649:
case 1012:
case 3120:
case 378:
case 1021:
case 3996:
case 1172:
case 1057:
case 3761:
case 1351:
case 3836:
case 4046:
case 950:
case 677:
case 3563:
case 63:
case 1550:
case 150:
case 2262:
case 1719:
case 2736:
case 1001:
case 2861:
case 3374:
case 883:
case 1794:
case 2778:
case 820:
case 3667:
case 1028:
case 3144:
case 537:
case 925:
case 3100:
case 871:
case 192:
case 844:
case 3573:
case 3868:
case 1590:
case 278:
case 2120:
case 1839:
case 2865:
case 2996:
case 859:
case 1313:
case 163:
case 1710:
case 676:
case 941:
case 974:
case 2768:
case 91:
case 2083:
case 2226:
case 388:
case 11:
case 2871:
case 3596:
case 1754:
case 1424:
case 1229:
case 3861:
case 2556:
case 943:
case 895:
case 4067:
case 1604:
case 2144:
case 3778:
case 143:
case 215:
case 2680:
case 58:
case 1819:
case 4080:
case 2836:
case 3875:
case 3646:
case 1162:
case 873:
case 1097:
case 1894:
case 2563:
case 1730:
case 161:
case 2206:
case 3284:
case 1999:
case 3489:
case 2978:
case 969:
case 2088:
case 1899:
case 548:
case 2936:
case 1919:
case 3856:
case 1052:
case 1331:
case 1177:
case 3975:
case 169:
case 3085:
case 3484:
case 1994:
case 3289:
case 466:
case 313:
case 3863:
case 923:
case 2149:
case 3124:
case 1048:
case 1302:
case 697:
case 3536:
case 885:
case 1376:
case 921:
case 2971:
case 1554:
case 2081:
case 702:
case 1338:
case 307:
case 121:
case 954:
case 3684:
case 1759:
case 2606:
case 149:
case 982:
case 3104:
case 446:
case 1510:
case 656:
case 2186:
case 1629:
case 3571:
case 1037:
case 879:
case 2472:
case 1790:
case 182:
case 510:
case 3370:
case 2267:
case 1393:
case 1311:
case 3773:
case 2916:
case 1401:
case 1608:
case 916:
case 1394:
case 1049:
case 1931:
case 53:
case 1203:
case 2336:
case 1621:
case 2378:
case 1657:
case 2960:
case 2152:
case 3683:
case 42:
case 488:
case 3361:
case 3560:
case 764:
case 1188:
case 795:
case 1898:
case 614:
case 1553:
case 6:
case 1292:
case 1408:
case 2141:
case 2570:
case 3123:
case 3067:
case 3864:
case 2371:
case 2137:
case 1855:
case 1339:
case 2316:
case 1632:
case 3080:
case 3483:
case 2569:
case 2046:
case 3970:
case 3368:
case 1758:
case 227:
case 1707:
case 2782:
case 1535:
case 1813:
case 1891:
case 1181:
case 2365:
case 46:
case 3283:
case 1913:
case 2564:
case 1735:
case 932:
case 751:
case 1183:
case 247:
case 2769:
case 724:
case 1558:
case 3870:
case 779:
case 132:
case 2685:
case 366:
case 3121:
case 3982:
case 1208:
case 1645:
case 2105:
case 2143:
case 1876:
case 1955:
case 1212:
case 3108:
case 1221:
case 2373:
case 3112:
case 1257:
case 2770:
case 3363:
case 411:
case 1232:
case 3760:
case 3488:
case 1998:
case 3681:
case 1818:
case 1551:
case 835:
case 267:
case 2197:
case 930:
case 2084:
case 753:
case 1847:
case 1044:
case 105:
case 1314:
case 1000:
case 1228:
case 800:
case 3101:
case 3356:
case 905:
case 1831:
case 3787:
case 1623:
case 839:
case 1907:
case 1591:
case 2121:
case 2072:
case 3143:
case 668:
case 1793:
case 789:
case 2283:
case 30:
case 610:
case 3582:
case 2026:
case 909:
case 2481:
case 2688:
case 4088:
case 1359:
case 347:
case 3769:
case 1652:
case 109:
case 2870:
case 1738:
case 556:
case 246:
case 1225:
case 1853:
case 1029:
case 775:
case 3860:
case 69:
case 2101:
case 1448:
case 458:
case 648:
case 2574:
case 1702:
case 2787:
case 3879:
case 1747:
case 2488:
case 508:
case 762:
case 367:
case 3974:
case 1731:
case 3062:
case 3485:
case 1866:
case 1531:
case 833:
case 3152:
case 3874:
case 2288:
case 1497:
case 1895:
case 1966:
case 3117:
case 587:
case 783:
case 1547:
case 1502:
case 1425:
case 1024:
case 2587:
case 3148:
case 1827:
case 1851:
case 903:
case 478:
case 1518:
case 3336:
case 3378:
case 2579:
case 901:
case 576:
case 3569:
case 3046:
case 934:
case 2281:
case 3782:
case 917:
case 327:
case 101:
case 3365:
case 134:
case 1237:
case 799:
case 1593:
case 2864:
case 1004:
case 636:
case 1807:
case 2882:
case 1241:
case 1522:
case 3137:
case 415:
case 887:
case 2617:
case 2555:
case 7:
case 3334:
case 1026:
case 664:
case 1481:
case 3991:
case 1688:
case 3811:
case 3558:
case 3893:
case 2359:
case 2652:
case 533:
case 737:
case 469:
case 3208:
case 2591:
case 2907:
case 3645:
case 480:
case 166:
case 3212:
case 1072:
case 2437:
case 3876:
case 2009:
case 2711:
case 2648:
case 966:
case 2441:
case 3838:
case 1112:
case 423:
case 3423:
case 2958:
case 3257:
case 3753:
case 2747:
case 3232:
case 1363:
case 2297:
case 2533:
case 2452:
case 3818:
case 3551:
case 659:
case 2731:
case 3802:
case 2995:
case 449:
case 3847:
case 3692:
case 2225:
case 3933:
case 146:
case 2029:
case 3399:
case 3715:
case 3000:
case 305:
case 2637:
case 482:
case 1101:
case 3595:
case 2702:
case 3766:
case 531:
case 3623:
case 1787:
case 1356:
case 3566:
case 3049:
case 2502:
case 3394:
case 3401:
case 1587:
case 2827:
case 3608:
case 3612:
case 2248:
case 3833:
case 3428:
case 2953:
case 539:
case 463:
case 1103:
case 4043:
case 2531:
case 3727:
case 1683:
case 3918:
case 2217:
case 1288:
case 2497:
case 856:
case 2966:
case 2895:
case 441:
case 474:
case 2733:
case 3898:
case 1969:
case 3601:
case 138:
case 4025:
case 3292:
case 3938:
case 2237:
case 3412:
case 2511:
case 2004:
case 2310:
case 3628:
case 1067:
case 1882:
case 938:
case 2405:
case 490:
case 3855:
case 2443:
case 2713:
case 443:
case 2935:
case 1483:
case 3993:
case 217:
case 3339:
case 2538:
case 3758:
case 2842:
case 2697:
case 3707:
case 75:
case 3181:
case 3922:
case 2755:
case 1874:
case 2432:
case 3531:
case 2727:
case 452:
case 642:
case 3185:
case 710:
case 3252:
case 3330:
case 3547:
case 1285:
case 2553:
case 2898:
case 4008:
case 2245:
case 3024:
case 896:
case 2608:
case 1148:
case 3502:
case 3425:
case 4012:
case 1336:
case 2795:
case 2319:
case 2203:
case 3953:
case 502:
case 3605:
case 2833:
case 2515:
case 2657:
case 1960:
case 303:
case 1316:
case 3538:
case 927:
case 712:
case 662:
case 3842:
case 2758:
case 693:
case 301:
case 1764:
case 1782:
case 2535:
case 3354:
case 2813:
case 450:
case 2181:
case 2922:
case 2292:
case 4001:
case 1570:
case 2408:
case 1141:
case 3858:
case 3237:
case 748:
case 425:
case 2742:
case 3522:
case 3807:
case 2457:
case 857:
case 1371:
case 2855:
case 2492:
case 78:
case 3907:
case 3513:
case 655:
case 3722:
case 4003:
case 2876:
case 3648:
case 3205:
case 1373:
case 83:
case 3958:
case 1770:
case 2334:
case 3555:
case 470:
case 1396:
case 2735:
case 1582:
case 2183:
case 1769:
case 90:
case 2811:
case 2558:
case 3942:
case 1685:
case 3598:
case 2692:
case 2044:
case 2933:
case 205:
case 2403:
case 2000:
case 2314:
case 3927:
case 886:
case 3718:
case 3641:
case 2595:
case 3448:
case 2831:
case 4023:
case 3702:
case 2766:
case 3951:
case 3747:
case 1879:
case 2998:
case 1974:
case 3452:
case 3866:
case 1062:
case 1084:
case 1887:
case 3731:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760666401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,];
var gg_b = "1760666401/";

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
