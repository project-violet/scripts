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
case 229:
case 3246:
case 1144:
case 4052:
case 3478:
case 1438:
case 893:
case 1931:
case 1341:
case 3067:
case 235:
case 3111:
case 511:
case 1200:
case 3000:
case 2438:
case 828:
case 2768:
case 3492:
case 3772:
case 1312:
case 645:
case 521:
case 471:
case 2925:
case 3649:
case 2614:
case 1353:
case 3323:
case 4043:
case 2297:
case 2989:
case 978:
case 1223:
case 1742:
case 109:
case 255:
case 1236:
case 3480:
case 82:
case 2004:
case 367:
case 3446:
case 1686:
case 2041:
case 3033:
case 1197:
case 2997:
case 3758:
case 3872:
case 3341:
case 238:
case 2240:
case 1318:
case 1099:
case 146:
case 495:
case 2612:
case 2679:
case 231:
case 1868:
case 1453:
case 2177:
case 1502:
case 1252:
case 1757:
case 3213:
case 1119:
case 1308:
case 3427:
case 1473:
case 2340:
case 206:
case 3674:
case 1241:
case 3285:
case 3554:
case 3961:
case 1087:
case 2070:
case 3284:
case 3185:
case 1955:
case 693:
case 3773:
case 3577:
case 251:
case 3775:
case 2425:
case 3692:
case 2128:
case 622:
case 1474:
case 1278:
case 3728:
case 2010:
case 4050:
case 3102:
case 2235:
case 509:
case 2872:
case 3766:
case 805:
case 2965:
case 3328:
case 2788:
case 2722:
case 1627:
case 4060:
case 327:
case 36:
case 3042:
case 840:
case 127:
case 3749:
case 1454:
case 3510:
case 3363:
case 3618:
case 578:
case 1982:
case 2990:
case 786:
case 3997:
case 2751:
case 2693:
case 856:
case 2100:
case 2414:
case 4035:
case 3356:
case 436:
case 2437:
case 3891:
case 2397:
case 1248:
case 1373:
case 1798:
case 2351:
case 2443:
case 2577:
case 907:
case 2462:
case 3965:
case 1375:
case 2615:
case 1171:
case 1467:
case 1730:
case 3507:
case 3701:
case 2035:
case 3035:
case 2043:
case 3332:
case 2494:
case 1744:
case 945:
case 1832:
case 1207:
case 625:
case 1997:
case 2124:
case 925:
case 2505:
case 3085:
case 74:
case 1355:
case 2780:
case 1505:
case 3204:
case 3247:
case 474:
case 2979:
case 1761:
case 2460:
case 2899:
case 3908:
case 263:
case 1685:
case 2234:
case 2028:
case 269:
case 1362:
case 149:
case 1729:
case 850:
case 3496:
case 1595:
case 1379:
case 2575:
case 443:
case 3226:
case 3844:
case 3287:
case 3990:
case 3987:
case 1284:
case 1833:
case 4019:
case 3631:
case 1258:
case 2566:
case 1251:
case 3392:
case 3151:
case 504:
case 594:
case 3845:
case 382:
case 290:
case 3406:
case 1911:
case 859:
case 887:
case 523:
case 1271:
case 541:
case 3403:
case 557:
case 225:
case 1045:
case 3793:
case 1131:
case 1074:
case 2417:
case 493:
case 2400:
case 1861:
case 1429:
case 1881:
case 1425:
case 4015:
case 422:
case 524:
case 2264:
case 3340:
case 634:
case 3934:
case 101:
case 3933:
case 2941:
case 1174:
case 1609:
case 2230:
case 2526:
case 3141:
case 297:
case 1978:
case 124:
case 2534:
case 2373:
case 1487:
case 1714:
case 3103:
case 2717:
case 1870:
case 2866:
case 2804:
case 1817:
case 2677:
case 3473:
case 708:
case 4080:
case 304:
case 701:
case 760:
case 1947:
case 3851:
case 3034:
case 1940:
case 3629:
case 897:
case 299:
case 1508:
case 271:
case 1039:
case 3118:
case 1293:
case 665:
case 790:
case 2244:
case 3852:
case 1313:
case 930:
case 2120:
case 1934:
case 3694:
case 3295:
case 2501:
case 1388:
case 472:
case 278:
case 878:
case 1018:
case 2112:
case 3335:
case 343:
case 3842:
case 3860:
case 1562:
case 971:
case 1033:
case 1189:
case 1159:
case 1409:
case 125:
case 3443:
case 2557:
case 906:
case 2025:
case 1741:
case 2239:
case 1793:
case 401:
case 1498:
case 2038:
case 2271:
case 3040:
case 3302:
case 3827:
case 1208:
case 3474:
case 3236:
case 2145:
case 2654:
case 3621:
case 559:
case 2623:
case 742:
case 2507:
case 352:
case 3977:
case 2146:
case 2370:
case 1918:
case 3523:
case 1830:
case 4074:
case 2099:
case 3422:
case 1561:
case 4037:
case 1605:
case 330:
case 2422:
case 1893:
case 1533:
case 582:
case 1521:
case 247:
case 2155:
case 1024:
case 2182:
case 1204:
case 534:
case 1193:
case 1648:
case 3780:
case 3628:
case 2593:
case 1262:
case 991:
case 2272:
case 2943:
case 2968:
case 2393:
case 3220:
case 239:
case 3214:
case 1309:
case 914:
case 285:
case 3813:
case 1889:
case 2251:
case 407:
case 3444:
case 2761:
case 3853:
case 200:
case 2765:
case 3532:
case 2862:
case 2652:
case 1876:
case 4038:
case 2224:
case 3854:
case 2367:
case 1140:
case 1096:
case 2662:
case 2186:
case 3602:
case 1126:
case 4049:
case 2969:
case 1953:
case 2503:
case 4075:
case 2970:
case 3639:
case 3408:
case 2433:
case 2165:
case 1299:
case 2358:
case 549:
case 1088:
case 956:
case 881:
case 201:
case 2514:
case 1226:
case 2201:
case 1846:
case 170:
case 3503:
case 3269:
case 3311:
case 1120:
case 2756:
case 38:
case 2030:
case 1553:
case 3556:
case 3833:
case 1783:
case 3178:
case 1511:
case 1440:
case 1182:
case 726:
case 4009:
case 3752:
case 3818:
case 3552:
case 2303:
case 2538:
case 3457:
case 2618:
case 3402:
case 1410:
case 171:
case 3583:
case 3588:
case 134:
case 3996:
case 3706:
case 1529:
case 1758:
case 618:
case 2996:
case 1847:
case 2497:
case 1633:
case 653:
case 2583:
case 1160:
case 2954:
case 3397:
case 2887:
case 2928:
case 2759:
case 2428:
case 226:
case 135:
case 97:
case 47:
case 140:
case 68:
case 3324:
case 2659:
case 2278:
case 2740:
case 166:
case 3930:
case 1587:
case 320:
case 818:
case 989:
case 2977:
case 2632:
case 3072:
case 2553:
case 3929:
case 3124:
case 1279:
case 2843:
case 2102:
case 3370:
case 3668:
case 2588:
case 2890:
case 1514:
case 2430:
case 2696:
case 3451:
case 2875:
case 2077:
case 305:
case 187:
case 1754:
case 1272:
case 1925:
case 1286:
case 1243:
case 2706:
case 211:
case 1492:
case 916:
case 724:
case 62:
case 138:
case 466:
case 3550:
case 2431:
case 2998:
case 2806:
case 2074:
case 4021:
case 1971:
case 1693:
case 1825:
case 868:
case 2166:
case 1799:
case 2578:
case 2447:
case 1424:
case 1322:
case 1991:
case 3771:
case 1094:
case 1349:
case 3485:
case 2117:
case 797:
case 317:
case 1389:
case 646:
case 1726:
case 3045:
case 2366:
case 1042:
case 2328:
case 563:
case 514:
case 1969:
case 67:
case 222:
case 198:
case 3711:
case 1336:
case 1670:
case 371:
case 3928:
case 2638:
case 1663:
case 3738:
case 2411:
case 2059:
case 2410:
case 1806:
case 839:
case 351:
case 2669:
case 4020:
case 1199:
case 765:
case 3075:
case 2885:
case 1989:
case 3690:
case 3407:
case 137:
case 2356:
case 616:
case 2245:
case 478:
case 2915:
case 3850:
case 2079:
case 199:
case 295:
case 277:
case 1801:
case 1303:
case 508:
case 2220:
case 736:
case 2403:
case 3046:
case 1121:
case 286:
case 3030:
case 2951:
case 2080:
case 4001:
case 3709:
case 3070:
case 3869:
case 1894:
case 3957:
case 1848:
case 3985:
case 2094:
case 1062:
case 301:
case 3271:
case 1679:
case 3342:
case 2223:
case 2710:
case 1281:
case 372:
case 2892:
case 3558:
case 1073:
case 1451:
case 3973:
case 3598:
case 513:
case 3435:
case 1865:
case 2287:
case 2056:
case 2544:
case 3941:
case 592:
case 638:
case 3821:
case 1938:
case 900:
case 1720:
case 2660:
case 1750:
case 2319:
case 522:
case 2642:
case 2762:
case 245:
case 1173:
case 1812:
case 1001:
case 2374:
case 4089:
case 938:
case 2015:
case 2381:
case 220:
case 2512:
case 2829:
case 2296:
case 1029:
case 2396:
case 2158:
case 3334:
case 2320:
case 2111:
case 2978:
case 3935:
case 699:
case 2424:
case 2386:
case 1488:
case 213:
case 139:
case 435:
case 2406:
case 503:
case 3203:
case 1999:
case 402:
case 1063:
case 581:
case 1921:
case 197:
case 2523:
case 1717:
case 77:
case 2752:
case 310:
case 115:
case 123:
case 967:
case 608:
case 3538:
case 2143:
case 2298:
case 2562:
case 2394:
case 2908:
case 580:
case 2537:
case 3472:
case 1643:
case 168:
case 3104:
case 1287:
case 1626:
case 3383:
case 2065:
case 1399:
case 1201:
case 607:
case 311:
case 689:
case 1646:
case 3595:
case 3873:
case 35:
case 337:
case 2258:
case 2515:
case 378:
case 3599:
case 3301:
case 3464:
case 2830:
case 1637:
case 1888:
case 3388:
case 3477:
case 3044:
case 3681:
case 664:
case 3900:
case 1124:
case 3922:
case 2480:
case 1759:
case 3292:
case 1408:
case 3529:
case 612:
case 3889:
case 3862:
case 3149:
case 2253:
case 2741:
case 3964:
case 3157:
case 1035:
case 731:
case 3677:
case 1594:
case 2949:
case 2436:
case 605:
case 3879:
case 3627:
case 527:
case 1469:
case 3893:
case 341:
case 1274:
case 1811:
case 3660:
case 195:
case 1524:
case 3375:
case 2197:
case 3087:
case 1873:
case 2550:
case 2078:
case 695:
case 10:
case 801:
case 2434:
case 1238:
case 1239:
case 3745:
case 1740:
case 1046:
case 1932:
case 1237:
case 46:
case 318:
case 3645:
case 1513:
case 2771:
case 133:
case 1688:
case 1194:
case 350:
case 3729:
case 1998:
case 56:
case 102:
case 2268:
case 1552:
case 2103:
case 1900:
case 1423:
case 3763:
case 3253:
case 98:
case 3147:
case 2349:
case 2871:
case 315:
case 2312:
case 2680:
case 2809:
case 1572:
case 3129:
case 2061:
case 1981:
case 1736:
case 3003:
case 2446:
case 3892:
case 1719:
case 2837:
case 3747:
case 3017:
case 781:
case 1038:
case 3943:
case 3367:
case 1701:
case 614:
case 3199:
case 3505:
case 3322:
case 1263:
case 2825:
case 661:
case 2233:
case 3224:
case 3800:
case 3197:
case 1658:
case 2322:
case 2389:
case 3083:
case 1590:
case 943:
case 3610:
case 2627:
case 4002:
case 1968:
case 2378:
case 921:
case 3022:
case 1117:
case 842:
case 2824:
case 1699:
case 3276:
case 1244:
case 3714:
case 947:
case 409:
case 725:
case 952:
case 2586:
case 3657:
case 3371:
case 2133:
case 1340:
case 2203:
case 2323:
case 1364:
case 3849:
case 1479:
case 2011:
case 3782:
case 823:
case 3482:
case 589:
case 2689:
case 532:
case 3052:
case 2057:
case 3913:
case 1267:
case 768:
case 3142:
case 3585:
case 680:
case 2922:
case 2635:
case 1326:
case 957:
case 599:
case 3241:
case 604:
case 1417:
case 2841:
case 3192:
case 440:
case 2750:
case 2609:
case 1891:
case 577:
case 3152:
case 588:
case 2634:
case 3947:
case 2787:
case 2882:
case 936:
case 64:
case 536:
case 583:
case 3216:
case 3061:
case 3731:
case 2567:
case 3116:
case 2791:
case 1988:
case 1209:
case 3415:
case 1778:
case 2894:
case 2800:
case 3094:
case 2606:
case 2715:
case 2797:
case 2716:
case 3209:
case 2040:
case 1013:
case 3025:
case 1177:
case 500:
case 2958:
case 411:
case 3861:
case 750:
case 3630:
case 2113:
case 1466:
case 1751:
case 1776:
case 3807:
case 1413:
case 1903:
case 1265:
case 3591:
case 3979:
case 332:
case 1713:
case 293:
case 3258:
case 910:
case 3109:
case 2354:
case 3774:
case 3400:
case 2066:
case 1512:
case 2420:
case 3313:
case 841:
case 4017:
case 3082:
case 69:
case 1004:
case 3667:
case 366:
case 953:
case 3411:
case 4056:
case 431:
case 1735:
case 542:
case 890:
case 3885:
case 417:
case 3428:
case 3187:
case 2884:
case 3696:
case 556:
case 2419:
case 3754:
case 1195:
case 9:
case 1395:
case 2912:
case 2763:
case 1810:
case 2724:
case 3673:
case 545:
case 1608:
case 178:
case 1212:
case 1844:
case 2093:
case 3043:
case 3705:
case 1384:
case 1910:
case 902:
case 2003:
case 1869:
case 924:
case 1184:
case 6:
case 3350:
case 4024:
case 2688:
case 392:
case 2924:
case 1484:
case 3321:
case 1560:
case 704:
case 399:
case 1712:
case 3515:
case 1128:
case 3537:
case 3512:
case 3298:
case 2307:
case 26:
case 223:
case 1378:
case 2860:
case 2937:
case 1229:
case 348:
case 3988:
case 3144:
case 3265:
case 1612:
case 1478:
case 1338:
case 974:
case 1958:
case 3870:
case 2089:
case 3337:
case 116:
case 2664:
case 1428:
case 2695:
case 3974:
case 3469:
case 3942:
case 3294:
case 3071:
case 2987:
case 2444:
case 2668:
case 1556:
case 2095:
case 617:
case 481:
case 1394:
case 60:
case 3263:
case 2956:
case 1528:
case 2334:
case 153:
case 1826:
case 3009:
case 700:
case 1516:
case 2060:
case 2214:
case 684:
case 2991:
case 1774:
case 1370:
case 3819:
case 562:
case 2369:
case 57:
case 1592:
case 3484:
case 1296:
case 2907:
case 2008:
case 2152:
case 3455:
case 3803:
case 1545:
case 2279:
case 3536:
case 2743:
case 596:
case 2456:
case 3825:
case 376:
case 3687:
case 2392:
case 2193:
case 866:
case 3279:
case 1432:
case 2039:
case 832:
case 669:
case 972:
case 2629:
case 3906:
case 3207:
case 99:
case 3359:
case 1402:
case 590:
case 1162:
case 3887:
case 3164:
case 3522:
case 1532:
case 3521:
case 966:
case 2633:
case 3399:
case 1386:
case 2086:
case 1181:
case 800:
case 3138:
case 2440:
case 2200:
case 2286:
case 1680:
case 2001:
case 2913:
case 2826:
case 3744:
case 3336:
case 3146:
case 1915:
case 610:
case 2870:
case 553:
case 2299:
case 1137:
case 1465:
case 2687:
case 3200:
case 2720:
case 1709:
case 3634:
case 3683:
case 3133:
case 1311:
case 2170:
case 2470:
case 3882:
case 3597:
case 381:
case 2237:
case 412:
case 2819:
case 3608:
case 3868:
case 3846:
case 3740:
case 1805:
case 3453:
case 2604:
case 1591:
case 3976:
case 3380:
case 2317:
case 3619:
case 520:
case 1420:
case 1804:
case 3347:
case 2658:
case 1950:
case 3038:
case 959:
case 3318:
case 2510:
case 2183:
case 3434:
case 3053:
case 862:
case 984:
case 279:
case 3542:
case 2976:
case 3008:
case 1178:
case 3741:
case 1756:
case 769:
case 3884:
case 3871:
case 668:
case 810:
case 228:
case 3459:
case 2435:
case 992:
case 3643:
case 3389:
case 2811:
case 1246:
case 1041:
case 3210:
case 2359:
case 1183:
case 864:
case 3666:
case 1356:
case 1858:
case 2036:
case 629:
case 782:
case 89:
case 2172:
case 119:
case 551:
case 3651:
case 95:
case 1619:
case 1864:
case 613:
case 1301:
case 3168:
case 4069:
case 475:
case 2876:
case 3566:
case 754:
case 3894:
case 3587:
case 4092:
case 2208:
case 2042:
case 2546:
case 2548:
case 1937:
case 3593:
case 3613:
case 2591:
case 3465:
case 12:
case 322:
case 1853:
case 1984:
case 1217:
case 31:
case 1434:
case 1748:
case 1166:
case 415:
case 3073:
case 2167:
case 827:
case 1359:
case 2071:
case 2326:
case 2301:
case 3093:
case 2281:
case 3572:
case 2805:
case 467:
case 917:
case 2048:
case 833:
case 202:
case 942:
case 1625:
case 3958:
case 2308:
case 1331:
case 1872:
case 1912:
case 347:
case 1071:
case 985:
case 3790:
case 2020:
case 1795:
case 1482:
case 3946:
case 2115:
case 1037:
case 3410:
case 1551:
case 4081:
case 3494:
case 63:
case 530:
case 1069:
case 2194:
case 258:
case 3108:
case 2243:
case 1669:
case 1324:
case 2263:
case 2559:
case 2552:
case 2053:
case 4087:
case 1110:
case 3576:
case 1070:
case 1976:
case 1435:
case 779:
case 275:
case 3580:
case 2202:
case 1218:
case 2091:
case 1097:
case 1196:
case 692:
case 91:
case 132:
case 2139:
case 2345:
case 2390:
case 2794:
case 3654:
case 2000:
case 3540:
case 3899:
case 857:
case 368:
case 3386:
case 1628:
case 2384:
case 1718:
case 3671:
case 1339:
case 167:
case 744:
case 1579:
case 1917:
case 2520:
case 2666:
case 1896:
case 2801:
case 2656:
case 331:
case 3329:
case 2266:
case 3219:
case 2936:
case 3488:
case 2445:
case 3012:
case 2793:
case 1187:
case 996:
case 3110:
case 172:
case 1056:
case 266:
case 3682:
case 406:
case 1444:
case 1380:
case 2475:
case 3172:
case 3927:
case 798:
case 1715:
case 787:
case 3222:
case 918:
case 1228:
case 3836:
case 2327:
case 2221:
case 1723:
case 954:
case 660:
case 1831:
case 3315:
case 3162:
case 219:
case 2017:
case 4082:
case 1048:
case 888:
case 34:
case 990:
case 2451:
case 1994:
case 3416:
case 1123:
case 4048:
case 2380:
case 1985:
case 2273:
case 2673:
case 3611:
case 488:
case 898:
case 369:
case 1348:
case 3993:
case 2007:
case 3895:
case 2465:
case 2232:
case 316:
case 776:
case 688:
case 349:
case 1789:
case 1904:
case 3789:
case 2574:
case 770:
case 979:
case 3293:
case 651:
case 162:
case 1005:
case 193:
case 2993:
case 672:
case 208:
case 339:
case 151:
case 2962:
case 845:
case 1781:
case 3921:
case 1008:
case 3483:
case 335:
case 2238:
case 324:
case 397:
case 3381:
case 2098:
case 1234:
case 3535:
case 586:
case 1422:
case 2150:
case 3074:
case 3902:
case 3255:
case 2849:
case 844:
case 4054:
case 2153:
case 2346:
case 3090:
case 4042:
case 2897:
case 3737:
case 3508:
case 1491:
case 2217:
case 418:
case 1106:
case 860:
case 453:
case 2492:
case 27:
case 3951:
case 710:
case 1695:
case 3686:
case 3792:
case 676:
case 3470:
case 319:
case 2160:
case 334:
case 1564:
case 180:
case 2707:
case 267:
case 2161:
case 3307:
case 1710:
case 789:
case 748:
case 1635:
case 3225:
case 389:
case 232:
case 240:
case 4068:
case 2072:
case 3101:
case 2429:
case 1092:
case 3809:
case 1586:
case 677:
case 155:
case 1623:
case 96:
case 1875:
case 2773:
case 2276:
case 650:
case 2836:
case 1412:
case 1256:
case 3911:
case 1477:
case 2739:
case 2888:
case 2595:
case 2935:
case 1768:
case 1644:
case 1393:
case 4011:
case 1404:
case 1863:
case 2261:
case 3557:
case 19:
case 855:
case 1078:
case 3290:
case 108:
case 1317:
case 2674:
case 1222:
case 3254:
case 926:
case 3581:
case 1021:
case 1924:
case 393:
case 160:
case 1363:
case 1681:
case 3191:
case 294:
case 1277:
case 3374:
case 191:
case 3926:
case 2442:
case 414:
case 920:
case 3663:
case 2686:
case 3796:
case 600:
case 3909:
case 3689:
case 1452:
case 4057:
case 218:
case 1230:
case 3636:
case 3883:
case 3120:
case 3970:
case 2101:
case 2796:
case 194:
case 1009:
case 3466:
case 433:
case 32:
case 1923:
case 1235:
case 3065:
case 1822:
case 1132:
case 2728:
case 973:
case 131:
case 658:
case 3975:
case 3054:
case 2704:
case 3607:
case 5:
case 2855:
case 4007:
case 691:
case 3326:
case 3344:
case 2062:
case 1192:
case 484:
case 476:
case 2502:
case 3519:
case 2779:
case 2848:
case 880:
case 1321:
case 2861:
case 555:
case 3644:
case 811:
case 1118:
case 1941:
case 1134:
case 3600:
case 1142:
case 3968:
case 587:
case 1568:
case 1980:
case 2769:
case 1589:
case 2516:
case 2883:
case 3420:
case 2377:
case 1135:
case 24:
case 574:
case 1884:
case 749:
case 3826:
case 1610:
case 2649:
case 2772:
case 1344:
case 3155:
case 1225:
case 759:
case 3614:
case 3002:
case 3777:
case 2097:
case 1834:
case 4065:
case 2189:
case 2306:
case 756:
case 3647:
case 3205:
case 3:
case 3795:
case 2363:
case 941:
case 3642:
case 3527:
case 4004:
case 2967:
case 2840:
case 106:
case 395:
case 3719:
case 3460:
case 1607:
case 662:
case 3857:
case 673:
case 1698:
case 1133:
case 1360:
case 686:
case 3560:
case 181:
case 2963:
case 1169:
case 3139:
case 1857:
case 2934:
case 3822:
case 2407:
case 3140:
case 1247:
case 432:
case 76:
case 3563:
case 421:
case 3757:
case 17:
case 1871:
case 2090:
case 1897:
case 4028:
case 3475:
case 1164:
case 3186:
case 1652:
case 620:
case 4073:
case 1599:
case 264:
case 2257:
case 2868:
case 2073:
case 3514:
case 2013:
case 314:
case 2551:
case 321:
case 1543:
case 3664:
case 3160:
case 3237:
case 3810:
case 2568:
case 3650:
case 654:
case 1530:
case 3131:
case 3132:
case 2265:
case 1147:
case 1808:
case 3275:
case 637:
case 2218:
case 2723:
case 3066:
case 3490:
case 1213:
case 2184:
case 774:
case 1814:
case 889:
case 87:
case 3429:
case 1792:
case 1598:
case 2216:
case 2313:
case 3423:
case 281:
case 1972:
case 564:
case 775:
case 204:
case 3981:
case 949:
case 2178:
case 723:
case 795:
case 1304:
case 836:
case 3048:
case 2110:
case 1224:
case 3130:
case 2587:
case 2199:
case 2022:
case 3742:
case 1333:
case 505:
case 1017:
case 391:
case 1860:
case 66:
case 1739:
case 1531:
case 3260:
case 2620:
case 3409:
case 1952:
case 2132:
case 1268:
case 3609:
case 2628:
case 929:
case 1285:
case 3173:
case 2314:
case 164:
case 1055:
case 1057:
case 1882:
case 1716:
case 1773:
case 678:
case 2881:
case 3516:
case 1485:
case 1537:
case 2204:
case 784:
case 1503:
case 3567:
case 487:
case 152:
case 3084:
case 3016:
case 1733:
case 2810:
case 1449:
case 3739:
case 3251:
case 1887:
case 1656:
case 1153:
case 1065:
case 4018:
case 3991:
case 179:
case 3959:
case 510:
case 1350:
case 2896:
case 3526:
case 1816:
case 33:
case 1068:
case 1054:
case 3461:
case 763:
case 291:
case 1497:
case 1948:
case 1396:
case 2454:
case 1639:
case 1829:
case 224:
case 674:
case 2690:
case 988:
case 1006:
case 1456:
case 526:
case 576:
case 3189:
case 1890:
case 3486:
case 2683:
case 2058:
case 262:
case 1935:
case 652:
case 2168:
case 2808:
case 359:
case 2333:
case 425:
case 547:
case 1139:
case 1053:
case 1898:
case 2737:
case 2344:
case 4055:
case 2944:
case 1198:
case 2368:
case 3698:
case 1892:
case 983:
case 3296:
case 1616:
case 4079:
case 853:
case 344:
case 2554:
case 3655:
case 485:
case 2441:
case 1332:
case 1603:
case 884:
case 848:
case 3761:
case 1901:
case 3051:
case 1098:
case 1600:
case 3437:
case 1582:
case 3829:
case 496:
case 2726:
case 2665:
case 3863:
case 3010:
case 1615:
case 2982:
case 663:
case 2561:
case 3442:
case 3387:
case 2648:
case 1448:
case 1661:
case 923:
case 3735:
case 593:
case 721:
case 1249:
case 2052:
case 2209:
case 480:
case 2159:
case 2624:
case 1585:
case 3543:
case 3983:
case 3722:
case 2959:
case 270:
case 3447:
case 300:
case 1450:
case 3904:
case 15:
case 2914:
case 3920:
case 2404:
case 872:
case 242:
case 2972:
case 2114:
case 1335:
case 2459:
case 2847:
case 1886:
case 642:
case 993:
case 3626:
case 519:
case 2971:
case 2927:
case 2777:
case 3148:
case 328:
case 3578:
case 1542:
case 1571:
case 1138:
case 2845:
case 2879:
case 1161:
case 80:
case 767:
case 2646:
case 1419:
case 1257:
case 3880:
case 3395:
case 420:
case 809:
case 3500:
case 1802:
case 2457:
case 2729:
case 3306:
case 1922:
case 274:
case 2045:
case 3086:
case 3995:
case 690:
case 183:
case 3493:
case 1283:
case 2361:
case 3096:
case 404:
case 3112:
case 1880:
case 2416:
case 3291:
case 2337:
case 3081:
case 1841:
case 2496:
case 105:
case 3018:
case 2817:
case 28:
case 1840:
case 1885:
case 3589:
case 3145:
case 3969:
case 306:
case 1158:
case 3458:
case 722:
case 730:
case 2450:
case 3956:
case 4093:
case 1678:
case 3127:
case 2024:
case 1570:
case 1866:
case 1642:
case 3596:
case 706:
case 719:
case 591:
case 388:
case 569:
case 1577:
case 3721:
case 1089:
case 3704:
case 3814:
case 3767:
case 1426:
case 176:
case 85:
case 3875:
case 1397:
case 1113:
case 2974:
case 2236:
case 2131:
case 3126:
case 1489:
case 575:
case 3718:
case 3553:
case 188:
case 3119:
case 71:
case 2399:
case 502:
case 2961:
case 3125:
case 1767:
case 1002:
case 1165:
case 3867:
case 2418:
case 3007:
case 546:
case 442:
case 1629:
case 1305:
case 2903:
case 640:
case 1219:
case 803:
case 3449:
case 2560:
case 1815:
case 745:
case 1725:
case 380:
case 3606:
case 3817:
case 81:
case 2068:
case 3331:
case 709:
case 2154:
case 3779:
case 1819:
case 1650:
case 3555:
case 2992:
case 1689:
case 865:
case 333:
case 2105:
case 3534:
case 2468:
case 1979:
case 4053:
case 3231:
case 3750:
case 2123:
case 1797:
case 3746:
case 1112:
case 820:
case 3317:
case 2653:
case 2603:
case 3357:
case 2088:
case 37:
case 1874:
case 2650:
case 169:
case 3524:
case 3327:
case 1254:
case 1148:
case 2405:
case 681:
case 1382:
case 2227:
case 2905:
case 867:
case 3520:
case 2231:
case 3417:
case 1168:
case 2597:
case 2225:
case 1043:
case 3362:
case 1854:
case 445:
case 490:
case 3776:
case 2531:
case 3390:
case 3700:
case 2712:
case 764:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1654984801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,];
var gg_b = "1654984801/";

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
