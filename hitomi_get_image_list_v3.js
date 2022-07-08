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
case 1763:
case 2270:
case 3936:
case 3886:
case 3923:
case 3103:
case 1570:
case 1592:
case 3072:
case 1634:
case 1170:
case 3084:
case 1304:
case 2271:
case 2017:
case 3008:
case 863:
case 1838:
case 1354:
case 3264:
case 20:
case 620:
case 1114:
case 1142:
case 2195:
case 4060:
case 3663:
case 2679:
case 1212:
case 2042:
case 1922:
case 1503:
case 2431:
case 614:
case 2929:
case 887:
case 1905:
case 1944:
case 3963:
case 224:
case 1843:
case 2908:
case 2441:
case 2997:
case 2152:
case 2510:
case 2820:
case 3126:
case 3024:
case 2092:
case 523:
case 2435:
case 2003:
case 2987:
case 860:
case 1602:
case 1692:
case 2700:
case 2137:
case 2305:
case 4072:
case 3876:
case 3545:
case 2549:
case 2935:
case 3509:
case 3477:
case 2312:
case 2616:
case 93:
case 933:
case 705:
case 3750:
case 1344:
case 879:
case 920:
case 1629:
case 556:
case 731:
case 546:
case 2345:
case 648:
case 1319:
case 3047:
case 3981:
case 3013:
case 1412:
case 3453:
case 2881:
case 384:
case 1744:
case 1094:
case 2178:
case 903:
case 2690:
case 1886:
case 3028:
case 2168:
case 3747:
case 2239:
case 1284:
case 1437:
case 1693:
case 1189:
case 2901:
case 3493:
case 2749:
case 187:
case 418:
case 2359:
case 1327:
case 617:
case 3902:
case 158:
case 2673:
case 1500:
case 542:
case 1674:
case 4000:
case 142:
case 3098:
case 2503:
case 3883:
case 2833:
case 32:
case 1617:
case 2851:
case 2902:
case 2044:
case 2716:
case 1496:
case 1941:
case 3211:
case 2648:
case 1796:
case 2732:
case 1259:
case 521:
case 278:
case 1930:
case 3288:
case 2036:
case 2709:
case 3953:
case 3777:
case 2803:
case 1541:
case 2903:
case 3375:
case 1162:
case 3376:
case 1070:
case 1604:
case 544:
case 1929:
case 2829:
case 1147:
case 1058:
case 3573:
case 3467:
case 3147:
case 1066:
case 3852:
case 561:
case 2119:
case 1231:
case 371:
case 2649:
case 2627:
case 2773:
case 2670:
case 1649:
case 2343:
case 143:
case 3281:
case 2731:
case 486:
case 1980:
case 1646:
case 3196:
case 841:
case 84:
case 3193:
case 2155:
case 2719:
case 3283:
case 3120:
case 3361:
case 2304:
case 2530:
case 3720:
case 36:
case 1835:
case 3255:
case 2517:
case 155:
case 3065:
case 2060:
case 3199:
case 3711:
case 232:
case 2647:
case 2575:
case 1952:
case 3214:
case 348:
case 1997:
case 3106:
case 545:
case 75:
case 3140:
case 3505:
case 3476:
case 2236:
case 2213:
case 983:
case 1650:
case 1562:
case 2180:
case 1668:
case 374:
case 1133:
case 2277:
case 750:
case 1504:
case 250:
case 1670:
case 776:
case 1771:
case 2660:
case 1936:
case 2225:
case 2932:
case 3241:
case 4028:
case 1468:
case 3682:
case 3014:
case 141:
case 1701:
case 820:
case 4057:
case 2091:
case 3070:
case 1469:
case 3729:
case 2577:
case 373:
case 3712:
case 984:
case 3820:
case 2490:
case 3161:
case 732:
case 1379:
case 992:
case 2525:
case 3717:
case 2175:
case 1569:
case 1750:
case 1263:
case 901:
case 540:
case 1540:
case 2767:
case 1395:
case 3247:
case 417:
case 1640:
case 2025:
case 515:
case 1639:
case 2763:
case 1743:
case 226:
case 2787:
case 1519:
case 2948:
case 2565:
case 3859:
case 1737:
case 3755:
case 3654:
case 2497:
case 3920:
case 4053:
case 3291:
case 3798:
case 2327:
case 2408:
case 510:
case 1830:
case 3348:
case 4042:
case 27:
case 2232:
case 2897:
case 1191:
case 1891:
case 680:
case 180:
case 2795:
case 2007:
case 411:
case 800:
case 2035:
case 2659:
case 3670:
case 2021:
case 1481:
case 585:
case 1474:
case 66:
case 2862:
case 854:
case 3668:
case 799:
case 1978:
case 3137:
case 3384:
case 3609:
case 1558:
case 2591:
case 3779:
case 3149:
case 2837:
case 1190:
case 3816:
case 1628:
case 2552:
case 2005:
case 3547:
case 3715:
case 1054:
case 3146:
case 3877:
case 2722:
case 2923:
case 223:
case 514:
case 3433:
case 3002:
case 2416:
case 2867:
case 2927:
case 1009:
case 2868:
case 2087:
case 1039:
case 1001:
case 3051:
case 1005:
case 2637:
case 2050:
case 767:
case 3974:
case 1987:
case 2656:
case 811:
case 1138:
case 2582:
case 2395:
case 1269:
case 1360:
case 559:
case 2038:
case 3380:
case 62:
case 1446:
case 205:
case 2322:
case 3928:
case 2252:
case 42:
case 270:
case 2386:
case 1966:
case 4076:
case 2294:
case 2981:
case 3337:
case 1511:
case 461:
case 3796:
case 1179:
case 3690:
case 629:
case 1362:
case 1352:
case 477:
case 2265:
case 345:
case 3320:
case 2970:
case 3519:
case 3160:
case 3945:
case 2023:
case 3173:
case 3628:
case 138:
case 809:
case 2967:
case 2259:
case 2797:
case 2358:
case 2468:
case 3756:
case 1741:
case 2688:
case 1654:
case 3761:
case 2741:
case 2401:
case 3580:
case 1031:
case 3582:
case 3050:
case 2193:
case 3243:
case 2606:
case 1365:
case 1946:
case 2812:
case 798:
case 526:
case 2589:
case 3123:
case 2654:
case 2328:
case 2930:
case 2177:
case 3409:
case 3413:
case 2804:
case 1336:
case 2302:
case 2687:
case 636:
case 2909:
case 2429:
case 3643:
case 3486:
case 2384:
case 10:
case 1237:
case 665:
case 923:
case 2127:
case 3418:
case 3803:
case 3810:
case 4003:
case 2282:
case 119:
case 2922:
case 503:
case 3088:
case 3874:
case 3832:
case 618:
case 616:
case 555:
case 71:
case 2541:
case 1261:
case 2708:
case 4049:
case 2159:
case 474:
case 3664:
case 872:
case 69:
case 1497:
case 1878:
case 3327:
case 1240:
case 214:
case 4013:
case 2821:
case 696:
case 3942:
case 3562:
case 1986:
case 1418:
case 3523:
case 2600:
case 3917:
case 714:
case 728:
case 2234:
case 2504:
case 1810:
case 762:
case 1879:
case 3907:
case 1718:
case 2075:
case 846:
case 3915:
case 2980:
case 1056:
case 682:
case 2028:
case 259:
case 1092:
case 3681:
case 2428:
case 1402:
case 1798:
case 3083:
case 2001:
case 909:
case 3938:
case 4062:
case 3139:
case 3251:
case 2775:
case 3858:
case 349:
case 538:
case 749:
case 2369:
case 3828:
case 2183:
case 1265:
case 1420:
case 3794:
case 2323:
case 3186:
case 3015:
case 2711:
case 1517:
case 22:
case 3485:
case 966:
case 2142:
case 479:
case 3893:
case 2352:
case 492:
case 2422:
case 562:
case 891:
case 2557:
case 3250:
case 2031:
case 351:
case 3594:
case 1752:
case 3208:
case 2442:
case 830:
case 2439:
case 2666:
case 2426:
case 2197:
case 2842:
case 1844:
case 304:
case 2959:
case 3237:
case 960:
case 932:
case 2936:
case 1064:
case 1768:
case 3117:
case 1004:
case 3504:
case 263:
case 720:
case 3903:
case 751:
case 1777:
case 3754:
case 9:
case 1228:
case 1721:
case 1239:
case 2218:
case 1534:
case 2638:
case 2999:
case 4065:
case 1953:
case 3518:
case 3835:
case 2631:
case 3491:
case 1029:
case 2469:
case 592:
case 366:
case 3148:
case 3829:
case 1198:
case 2313:
case 2882:
case 3228:
case 3833:
case 570:
case 881:
case 2969:
case 2188:
case 1299:
case 2641:
case 467:
case 1859:
case 353:
case 4068:
case 1423:
case 3212:
case 154:
case 3570:
case 3204:
case 38:
case 4030:
case 3398:
case 88:
case 3555:
case 1665:
case 1120:
case 1206:
case 3163:
case 2608:
case 1390:
case 3645:
case 2273:
case 1204:
case 2931:
case 3457:
case 2169:
case 3933:
case 3790:
case 1556:
case 625:
case 1522:
case 3745:
case 1334:
case 724:
case 1961:
case 1612:
case 1479:
case 2554:
case 29:
case 2506:
case 392:
case 442:
case 3737:
case 1509:
case 2847:
case 3821:
case 1195:
case 1180:
case 378:
case 2636:
case 2813:
case 1089:
case 2403:
case 3673:
case 368:
case 1432:
case 1350:
case 1947:
case 1367:
case 3202:
case 1182:
case 201:
case 3991:
case 939:
case 572:
case 1553:
case 2667:
case 2527:
case 1816:
case 303:
case 3867:
case 3010:
case 804:
case 662:
case 567:
case 3941:
case 1963:
case 146:
case 3029:
case 2834:
case 3904:
case 3292:
case 222:
case 3581:
case 2545:
case 2182:
case 2058:
case 3286:
case 892:
case 964:
case 2567:
case 1353:
case 2392:
case 1384:
case 435:
case 1979:
case 533:
case 1671:
case 3576:
case 2971:
case 652:
case 375:
case 1776:
case 2830:
case 2607:
case 3012:
case 3399:
case 413:
case 3169:
case 851:
case 1040:
case 1227:
case 3848:
case 2129:
case 2246:
case 1099:
case 511:
case 2988:
case 2346:
case 3856:
case 3935:
case 2532:
case 2887:
case 2405:
case 1090:
case 2414:
case 3260:
case 2474:
case 1254:
case 835:
case 624:
case 1618:
case 4019:
case 3312:
case 1723:
case 2456:
case 3154:
case 1954:
case 2528:
case 588:
case 2857:
case 876:
case 1852:
case 2049:
case 674:
case 1185:
case 1842:
case 972:
case 1124:
case 2424:
case 1194:
case 4055:
case 1257:
case 743:
case 1706:
case 1530:
case 1110:
case 3677:
case 342:
case 4081:
case 1811:
case 1220:
case 2996:
case 3610:
case 1444:
case 382:
case 1512:
case 2814:
case 2361:
case 3080:
case 3846:
case 2828:
case 2184:
case 3649:
case 49:
case 645:
case 400:
case 3138:
case 3954:
case 1753:
case 2451:
case 3855:
case 2365:
case 177:
case 3589:
case 2434:
case 144:
case 1742:
case 3501:
case 2559:
case 2163:
case 2332:
case 1062:
case 3165:
case 2713:
case 3037:
case 3597:
case 2493:
case 1331:
case 2546:
case 3322:
case 3174:
case 2979:
case 2643:
case 3973:
case 73:
case 3671:
case 3934:
case 3827:
case 1243:
case 3565:
case 3629:
case 3726:
case 3891:
case 736:
case 3706:
case 2151:
case 2016:
case 3793:
case 2164:
case 3811:
case 637:
case 454:
case 245:
case 2505:
case 1872:
case 3785:
case 1447:
case 1725:
case 1975:
case 203:
case 2975:
case 1060:
case 3454:
case 314:
case 1109:
case 2208:
case 2905:
case 2192:
case 2081:
case 702:
case 1484:
case 63:
case 3775:
case 655:
case 3708:
case 333:
case 2375:
case 1685:
case 306:
case 347:
case 3499:
case 1828:
case 1683:
case 2131:
case 3056:
case 3578:
case 1410:
case 1863:
case 598:
case 3825:
case 197:
case 114:
case 2540:
case 2212:
case 3391:
case 3625:
case 3048:
case 3086:
case 2101:
case 1301:
case 2455:
case 3367:
case 3887:
case 818:
case 3487:
case 2477:
case 2984:
case 1860:
case 827:
case 3480:
case 1813:
case 2757:
case 282:
case 1359:
case 56:
case 409:
case 3150:
case 341:
case 2761:
case 654:
case 1209:
case 3632:
case 1676:
case 320:
case 2500:
case 3842:
case 3634:
case 1681:
case 3030:
case 3583:
case 111:
case 1548:
case 2029:
case 1662:
case 3656:
case 1096:
case 369:
case 2632:
case 600:
case 1782:
case 3552:
case 3982:
case 683:
case 2457:
case 3637:
case 1918:
case 2982:
case 1226:
case 89:
case 430:
case 4089:
case 3503:
case 878:
case 3743:
case 852:
case 3248:
case 2419:
case 3687:
case 2669:
case 2452:
case 58:
case 3567:
case 4024:
case 3111:
case 3724:
case 3405:
case 1711:
case 1661:
case 2710:
case 1525:
case 1653:
case 2331:
case 3249:
case 2524:
case 2678:
case 4052:
case 1546:
case 2751:
case 3564:
case 3985:
case 13:
case 136:
case 1600:
case 1518:
case 2253:
case 945:
case 4027:
case 3865:
case 3427:
case 1323:
case 3004:
case 3921:
case 3530:
case 1831:
case 1970:
case 1664:
case 959:
case 1278:
case 2055:
case 3763:
case 2250:
case 1781:
case 2110:
case 1103:
case 602:
case 3760:
case 1822:
case 1260:
case 494:
case 4007:
case 3841:
case 2628:
case 691:
case 888:
case 843:
case 2818:
case 1337:
case 2859:
case 2024:
case 227:
case 3732:
case 3187:
case 605:
case 91:
case 534:
case 4074:
case 3660:
case 3025:
case 2:
case 3432:
case 2200:
case 3780:
case 3053:
case 836:
case 1858:
case 3952:
case 344:
case 867:
case 3976:
case 2303:
case 252:
case 3759:
case 1458:
case 502:
case 3218:
case 3513:
case 3765:
case 2977:
case 2701:
case 3350:
case 2885:
case 491:
case 709:
case 845:
case 2034:
case 4005:
case 383:
case 3624:
case 2266:
case 2957:
case 1238:
case 2965:
case 2531:
case 3799:
case 4071:
case 437:
case 3335:
case 1529:
case 3572:
case 2447:
case 3424:
case 370:
case 1175:
case 2595:
case 123:
case 3797:
case 290:
case 3685:
case 2019:
case 2875:
case 1272:
case 3666:
case 466:
case 325:
case 3922:
case 3324:
case 11:
case 2014:
case 3551:
case 1538:
case 2062:
case 2668:
case 2425:
case 3972:
case 2027:
case 1129:
case 3319:
case 3684:
case 517:
case 842:
case 4067:
case 1818:
case 110:
case 3439:
case 2483:
case 441:
case 1837:
case 607:
case 2852:
case 1738:
case 3278:
case 2499:
case 577:
case 1820:
case 425:
case 999:
case 2714:
case 4090:
case 1700:
case 2815:
case 2056:
case 1166:
case 78:
case 2568:
case 3293:
case 3303:
case 1375:
case 322:
case 249:
case 3189:
case 3109:
case 360:
case 2596:
case 3318:
case 1510:
case 2662:
case 1294:
case 1014:
case 2350:
case 2326:
case 522:
case 2251:
case 2609:
case 1434:
case 1876:
case 898:
case 3709:
case 2770:
case 4085:
case 2090:
case 3866:
case 2045:
case 1171:
case 1253:
case 2284:
case 1502:
case 1069:
case 3603:
case 2707:
case 1448:
case 3332:
case 3834:
case 635:
case 2998:
case 604:
case 23:
case 1394:
case 3069:
case 735:
case 3298:
case 3844:
case 1719:
case 3692:
case 1409:
case 884:
case 2004:
case 2496:
case 387:
case 2537:
case 3401:
case 3000:
case 2725:
case 819:
case 1363:
case 4035:
case 3908:
case 1101:
case 3596:
case 2297:
case 3910:
case 911:
case 1760:
case 3512:
case 1057:
case 3112:
case 4069:
case 733:
case 1619:
case 233:
case 1973:
case 810:
case 1317:
case 1116:
case 1575:
case 1836:
case 1799:
case 1172:
case 601:
case 787:
case 1445:
case 734:
case 3550:
case 3074:
case 3479:
case 2116:
case 1651:
case 1730:
case 3232:
case 3840:
case 2072:
case 2470:
case 493:
case 1233:
case 3041:
case 3125:
case 1061:
case 3064:
case 337:
case 729:
case 3749:
case 3222:
case 1082:
case 4020:
case 3097:
case 1038:
case 3944:
case 857:
case 1078:
case 2592:
case 745:
case 2810:
case 2174:
case 1427:
case 2843:
case 1898:
case 1682:
case 2360:
case 2010:
case 669:
case 1833:
case 3438:
case 1632:
case 1224:
case 3279:
case 1994:
case 1576:
case 1745:
case 2736:
case 3885:
case 2219:
case 132:
case 3824:
case 1273:
case 3741:
case 2113:
case 2300:
case 2781:
case 2756:
case 3484:
case 737:
case 2626:
case 3604:
case 1808:
case 912:
case 3558:
case 2002:
case 3343:
case 3949:
case 1229:
case 1335:
case 1075:
case 3727:
case 3617:
case 748:
case 3116:
case 4014:
case 1667:
case 2849:
case 3392:
case 216:
case 2123:
case 2702:
case 2112:
case 2257:
case 2117:
case 0:
case 488:
case 597:
case 3172:
case 221:
case 507:
case 1731:
case 1271:
case 3155:
case 3094:
case 1663:
case 803:
case 2835:
case 3043:
case 3764:
case 2114:
case 1296:
case 1483:
case 1431:
case 406:
case 1140:
case 2526:
case 2879:
case 3055:
case 2744:
case 3537:
case 3001:
case 1694:
case 53:
case 2203:
case 2966:
case 3045:
case 1214:
case 1443:
case 1638:
case 98:
case 4029:
case 362:
case 1291:
case 3369:
case 3694:
case 950:
case 465:
case 1985:
case 913:
case 2147:
case 3463:
case 692:
case 288:
case 1698:
case 3697:
case 725:
case 1495:
case 1499:
case 2793:
case 826:
case 1491:
case 3382:
case 2672:
case 1588:
case 1697:
case 294:
case 2436:
case 3783:
case 773:
case 2584:
case 1672:
case 926:
case 1610:
case 675:
case 116:
case 219:
case 1774:
case 543:
case 1430:
case 1550:
case 3203:
case 608:
case 2314:
case 3490:
case 2624:
case 451:
case 3770:
case 2880:
case 1972:
case 1117:
case 2717:
case 3536:
case 3057:
case 2069:
case 3700:
case 622:
case 246:
case 673:
case 1144:
case 3662:
case 1537:
case 236:
case 3168:
case 284:
case 1935:
case 1759:
case 2904:
case 1105:
case 3940:
case 1086:
case 3315:
case 202:
case 2370:
case 3238:
case 3579:
case 1845:
case 439:
case 1258:
case 2464:
case 3360:
case 2135:
case 298:
case 2800:
case 1401:
case 4018:
case 3805:
case 1595:
case 3129:
case 858:
case 2973:
case 1625:
case 1895:
case 661:
case 3181:
case 47:
case 379:
case 998:
case 1146:
case 1761:
case 868:
case 2074:
case 3636:
case 2915:
case 2783:
case 1118:
case 2645:
case 1976:
case 3807:
case 3733:
case 365:
case 2479:
case 1887:
case 3647:
case 2642:
case 1136:
case 3544:
case 3121:
case 2115:
case 581:
case 1249:
case 1552:
case 2378:
case 1250:
case 1441:
case 3559:
case 399:
case 1322:
case 3115:
case 3093:
case 1196:
case 987:
case 3265:
case 3379:
case 3607:
case 3452:
case 4010:
case 2083:
case 1326:
case 4009:
case 1275:
case 2210:
case 2564:
case 1145:
case 1724:
case 1801:
case 1755:
case 2223:
case 650:
case 3420:
case 2585:
case 1580:
case 813:
case 200:
case 2103:
case 1492:
case 619:
case 229:
case 2022:
case 1035:
case 3955:
case 2255:
case 2460:
case 2634:
case 424:
case 2597:
case 2478:
case 1848:
case 1779:
case 19:
case 3584:
case 778:
case 2509:
case 3184:
case 1817:
case 2844:
case 2400:
case 564:
case 3481:
case 64:
case 1524:
case 649:
case 3374:
case 394:
case 4045:
case 3421:
case 3308:
case 3892:
case 563:
case 3532:
case 553:
case 2472:
case 3925:
case 4012:
case 1098:
case 927:
case 3964:
case 3170:
case 1487:
case 2333:
case 3079:
case 2430:
case 2958:
case 46:
case 2488:
case 2096:
case 2387:
case 3969:
case 1983:
case 3049:
case 3272:
case 3686:
case 3557:
case 386:
case 1174:
case 3185:
case 660:
case 405:
case 3498:
case 4047:
case 1862:
case 346:
case 1167:
case 2340:
case 1310:
case 3751:
case 1382:
case 794:
case 904:
case 1478:
case 188:
case 145:
case 3948:
case 2226:
case 516:
case 2311:
case 2786:
case 599:
case 1417:
case 2906:
case 3740:
case 1677:
case 3034:
case 1288:
case 2476:
case 1690:
case 1764:
case 1081:
case 364:
case 3396:
case 2548:
case 942:
case 3431:
case 220:
case 2593:
case 248:
case 2276:
case 2224:
case 3099:
case 1874:
case 1389:
case 164:
case 865:
case 1696:
case 3108:
case 814:
case 3240:
case 2729:
case 2928:
case 1255:
case 2130:
case 30:
case 3443:
case 363:
case 1675:
case 1829:
case 1097:
case 3042:
case 96:
case 334:
case 3300:
case 2291:
case 3166:
case 1201:
case 3713:
case 265:
case 3710:
case 1841:
case 2293:
case 937:
case 2874:
case 3616:
case 225:
case 1656:
case 1494:
case 2556:
case 51:
case 275:
case 121:
case 3771:
case 1981:
case 4046:
case 3019:
case 3800:
case 1993:
case 218:
case 3556:
case 90:
case 2026:
case 2743:
case 3145:
case 2630:
case 812:
case 3472:
case 2247:
case 2513:
case 771:
case 2809:
case 2032:
case 3896:
case 1161:
case 518:
case 4059:
case 1489:
case 3066:
case 3744:
case 1076:
case 2243:
case 2319:
case 3302:
case 831:
case 1347:
case 3307:
case 902:
case 33:
case 3269:
case 4050:
case 1699:
case 3895:
case 37:
case 698:
case 869:
case 1892:
case 2437:
case 2143:
case 1037:
case 668:
case 2913:
case 178:
case 2790:
case 2149:
case 173:
case 1712:
case 3680:
case 3365:
case 2949:
case 1424:
case 919:
case 497:
case 3353:
case 3388:
case 3913:
case 530:
case 1578:
case 1033:
case 2683:
case 1308:
case 2066:
case 870:
case 3860:
case 15:
case 956:
case 2576:
case 824:
case 1022:
case 3225:
case 3723:
case 3701:
case 4011:
case 3951:
case 922:
case 3023:
case 3058:
case 97:
case 3406:
case 2254:
case 1823:
case 2750:
case 3130:
case 3107:
case 172:
case 2189:
case 1192:
case 3521:
case 885:
case 713:
case 1516:
case 2264:
case 2954:
case 195:
case 634:
case 1926:
case 286:
case 3233:
case 2160:
case 1461:
case 240:
case 2718:
case 287:
case 3929:
case 1964:
case 1834:
case 3864:
case 1893:
case 1658:
case 3515:
case 3500:
case 2482:
case 1652:
case 4004:
case 1002:
case 727:
case 2494:
case 2777:
case 3635:
case 531:
case 4091:
case 1048:
case 3924:
case 1758:
case 452:
case 3857:
case 1042:
case 621:
case 1486:
case 838:
case 2762:
case 3631:
case 2536:
case 1920:
case 2167:
case 2570:
case 3474:
case 1287:
case 676:
case 130:
case 3704:
case 875:
case 401:
case 697:
case 295:
case 3295:
case 2801:
case 2964:
case 1222:
case 2760:
case 1934:
case 3040:
case 1790:
case 3658:
case 3650:
case 1583:
case 565:
case 2030:
case 2802:
case 2362:
case 3179:
case 2397:
case 958:
case 1956:
case 422:
case 3368:
case 632:
case 4031:
case 2348:
case 2106:
case 2889:
case 968:
case 2594:
case 980:
case 326:
case 1168:
case 688:
case 207:
case 3301:
case 3153:
case 1328:
case 3691:
case 1958:
case 3355:
case 3331:
case 2661:
case 2522:
case 4073:
case 2006:
case 1679:
case 2209:
case 2917:
case 1560:
case 2053:
case 1904:
case 3621:
case 1050:
case 412:
case 3730:
case 3235:
case 1577:
case 2102:
case 1422:
case 117:
case 550:
case 715:
case 687:
case 3773:
case 3104:
case 2309:
case 1928:
case 434:
case 1312:
case 1150:
case 3447:
case 3968:
case 206:
case 302:
case 2033:
case 1024:
case 3459:
case 1244:
case 1726:
case 3587:
case 1814:
case 975:
case 3124:
case 951:
case 1666:
case 1292:
case 429:
case 1436:
case 1871:
case 3470:
case 198:
case 3128:
case 1313:
case 3026:
case 3993:
case 2095:
case 3839:
case 2544:
case 191:
case 1797:
case 1242:
case 1888:
case 3897:
case 3444:
case 1493:
case 2916:
case 3539:
case 1127:
case 2413:
case 3758:
case 3325:
case 2507:
case 1772:
case 1727:
case 1400:
case 2139:
case 1971:
case 2893:
case 3132:
case 3428:
case 262:
case 428:
case 1720:
case 3244:
case 3119:
case 1635:
case 1137:
case 789:
case 1215:
case 1290:
case 1015:
case 2292:
case 1091:
case 3245:
case 3909:
case 3742:
case 2704:
case 4084:
case 1008:
case 2321:
case 3061:
case 2228:
case 593:
case 3753:
case 163:
case 3809:
case 2974:
case 3441:
case 1113:
case 1459:
case 3875:
case 28:
case 936:
case 1807:
case 2047:
case 3171:
case 3226:
case 2748:
case 339:
case 204:
case 1803:
case 1902:
case 591:
case 260:
case 2692:
case 52:
case 3366:
case 1942:
case 1011:
case 473:
case 1213:
case 4048:
case 2853:
case 2068:
case 148:
case 677:
case 525:
case 2166:
case 1073:
case 343:
case 569:
case 3085:
case 1318:
case 3674:
case 1285:
case 2869:
case 1923:
case 2639:
case 2986:
case 961:
case 2940:
case 1329:
case 3003:
case 1438:
case 664:
case 3688:
case 3102:
case 234:
case 3813:
case 3946:
case 578:
case 3489:
case 419:
case 1864:
case 273:
case 1164:
case 499:
case 2052:
case 3082:
case 2041:
case 3873:
case 3190:
case 2268:
case 1606:
case 3507:
case 308:
case 2515:
case 3280:
case 397:
case 3998:
case 1477:
case 2186:
case 3912:
case 505:
case 1373:
case 150:
case 1549:
case 2407:
case 3134:
case 1462:
case 2846:
case 4026:
case 2206:
case 1740:
case 2754:
case 3092:
case 1839:
case 1393:
case 447:
case 2791:
case 1925:
case 402:
case 2280:
case 3947:
case 160:
case 3930:
case 3482:
case 2433:
case 3987:
case 1868:
case 2337:
case 1044:
case 712:
case 1088:
case 4051:
case 1959:
case 4025:
case 2759:
case 2924:
case 3071:
case 1386:
case 2427:
case 2728:
case 644:
case 832:
case 2141:
case 31:
case 990:
case 856:
case 3271:
case 816:
case 886:
case 4017:
case 2894:
case 280:
case 2520:
case 2566:
case 1648:
case 2330:
case 1775:
case 1380:
case 1593:
case 628:
case 3847:
case 1746:
case 3242:
case 3256:
case 2663:
case 3309:
case 890:
case 3478:
case 2918:
case 2122:
case 3669:
case 420:
case 1155:
case 2615:
case 1757:
case 1793:
case 2150:
case 3585:
case 4044:
case 1107:
case 788:
case 92:
case 3721:
case 1707:
case 2884:
case 478:
case 2064:
case 1416:
case 613:
case 1620:
case 2242:
case 897:
case 928:
case 1256:
case 3646:
case 1949:
case 1059:
case 1021:
case 1559:
case 3678:
case 1924:
case 99:
case 4054:
case 3333:
case 738:
case 955:
case 508:
case 1027:
case 828:
case 35:
case 2553:
case 1366:
case 1049:
case 48:
case 443:
case 3739:
case 3087:
case 171:
case 3430:
case 3566:
case 1911:
case 292:
case 185:
case 3767:
case 3888:
case 1485:
case 3854:
case 3967:
case 1246:
case 2727:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1657288801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,];
var gg_b = "1657288801/";

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
