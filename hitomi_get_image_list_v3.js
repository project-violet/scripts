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
case 3119:
case 3564:
case 833:
case 2258:
case 1488:
case 3167:
case 3677:
case 1145:
case 150:
case 2079:
case 2298:
case 2521:
case 560:
case 1761:
case 946:
case 3774:
case 3504:
case 3886:
case 2753:
case 268:
case 3107:
case 599:
case 1264:
case 3022:
case 3249:
case 1571:
case 4025:
case 2934:
case 3988:
case 467:
case 566:
case 1519:
case 2437:
case 1164:
case 3149:
case 3233:
case 3512:
case 1142:
case 1451:
case 2727:
case 1115:
case 1370:
case 426:
case 3835:
case 1928:
case 2403:
case 1491:
case 1245:
case 2784:
case 782:
case 3030:
case 1777:
case 2876:
case 2335:
case 3219:
case 975:
case 1533:
case 1212:
case 2978:
case 1843:
case 53:
case 1994:
case 77:
case 526:
case 427:
case 632:
case 3101:
case 1423:
case 3649:
case 2908:
case 3538:
case 1392:
case 1954:
case 228:
case 2584:
case 145:
case 2806:
case 1707:
case 360:
case 1940:
case 2187:
case 1238:
case 3454:
case 1300:
case 3277:
case 43:
case 3440:
case 3161:
case 399:
case 2658:
case 3306:
case 3494:
case 2124:
case 3923:
case 2527:
case 366:
case 2017:
case 3667:
case 176:
case 3619:
case 3997:
case 3916:
case 1138:
case 3574:
case 327:
case 510:
case 28:
case 3704:
case 1983:
case 1355:
case 2553:
case 157:
case 3607:
case 170:
case 2431:
case 218:
case 2009:
case 1561:
case 3410:
case 2287:
case 2318:
case 0:
case 417:
case 1749:
case 1416:
case 3742:
case 204:
case 1914:
case 2833:
case 3947:
case 3700:
case 813:
case 693:
case 1965:
case 3319:
case 1695:
case 1576:
case 2220:
case 2807:
case 2618:
case 3068:
case 2381:
case 3752:
case 36:
case 3276:
case 1799:
case 2023:
case 2819:
case 3307:
case 3414:
case 1270:
case 144:
case 2097:
case 3666:
case 745:
case 3699:
case 1315:
case 2580:
case 678:
case 1962:
case 1652:
case 4008:
case 588:
case 17:
case 1342:
case 1660:
case 954:
case 662:
case 3659:
case 3402:
case 983:
case 3176:
case 3956:
case 1364:
case 3606:
case 3371:
case 2358:
case 2648:
case 2286:
case 336:
case 902:
case 1821:
case 2120:
case 1902:
case 3755:
case 394:
case 3462:
case 1417:
case 2429:
case 488:
case 3555:
case 3199:
case 3824:
case 3166:
case 1374:
case 1192:
case 3159:
case 287:
case 1152:
case 1441:
case 892:
case 2861:
case 612:
case 2635:
case 2620:
case 56:
case 3887:
case 3472:
case 3941:
case 591:
case 2485:
case 1255:
case 3361:
case 337:
case 2922:
case 1100:
case 1893:
case 42:
case 2436:
case 777:
case 1599:
case 750:
case 1566:
case 848:
case 1827:
case 1195:
case 2686:
case 388:
case 863:
case 1411:
case 2248:
case 3259:
case 31:
case 756:
case 1884:
case 1506:
case 2877:
case 2118:
case 1260:
case 536:
case 437:
case 1776:
case 622:
case 3078:
case 594:
case 1292:
case 3500:
case 2171:
case 2951:
case 3463:
case 3624:
case 2267:
case 1937:
case 4041:
case 216:
case 2991:
case 443:
case 913:
case 472:
case 1326:
case 3011:
case 644:
case 2835:
case 3403:
case 1121:
case 2820:
case 1653:
case 2545:
case 1075:
case 162:
case 1478:
case 67:
case 2233:
case 2376:
case 552:
case 1558:
case 3793:
case 2988:
case 4011:
case 372:
case 1627:
case 2886:
case 3332:
case 854:
case 1221:
case 3753:
case 220:
case 2504:
case 3041:
case 2677:
case 2515:
case 1380:
case 3258:
case 2832:
case 3386:
case 2119:
case 1724:
case 2564:
case 226:
case 2201:
case 1293:
case 2410:
case 2483:
case 1895:
case 1002:
case 318:
case 3431:
case 2957:
case 2177:
case 2818:
case 2261:
case 874:
case 1587:
case 2574:
case 38:
case 1184:
case 2619:
case 84:
case 1758:
case 3069:
case 3593:
case 3017:
case 2667:
case 352:
case 1062:
case 3224:
case 301:
case 3866:
case 2923:
case 1892:
case 1408:
case 3527:
case 1005:
case 543:
case 948:
case 2306:
case 299:
case 2494:
case 3348:
case 3473:
case 2161:
case 682:
case 3968:
case 568:
case 3859:
case 295:
case 963:
case 217:
case 2745:
case 871:
case 1973:
case 1153:
case 1065:
case 2538:
case 2366:
case 1621:
case 2946:
case 1014:
case 1227:
case 4056:
case 48:
case 112:
case 3539:
case 840:
case 2462:
case 405:
case 2450:
case 538:
case 1213:
case 2755:
case 294:
case 758:
case 3135:
case 3286:
case 2490:
case 236:
case 409:
case 1815:
case 3358:
case 2795:
case 1586:
case 1718:
case 846:
case 2659:
case 2176:
case 3057:
case 4046:
case 2858:
case 1143:
case 2969:
case 2792:
case 1243:
case 3526:
case 3867:
case 480:
case 305:
case 2752:
case 26:
case 2760:
case 3618:
case 2465:
case 2068:
case 1845:
case 1054:
case 3186:
case 3807:
case 1748:
case 4016:
case 486:
case 677:
case 1226:
case 2570:
case 2947:
case 1180:
case 2881:
case 650:
case 2008:
case 855:
case 657:
case 3632:
case 2500:
case 338:
case 670:
case 3051:
case 2299:
case 1639:
case 2475:
case 2911:
case 3482:
case 1548:
case 1838:
case 1327:
case 3925:
case 1735:
case 2552:
case 793:
case 3248:
case 1982:
case 1425:
case 3686:
case 3726:
case 1384:
case 487:
case 586:
case 1680:
case 1613:
case 237:
case 509:
case 3713:
case 3485:
case 2034:
case 3088:
case 1929:
case 2361:
case 2106:
case 1786:
case 2472:
case 2941:
case 2887:
case 3635:
case 649:
case 1393:
case 22:
case 1422:
case 3739:
case 847:
case 3429:
case 2555:
case 1732:
case 3387:
case 2824:
case 4083:
case 2345:
case 2655:
case 3226:
case 3094:
case 1543:
case 2073:
case 752:
case 1220:
case 532:
case 1807:
case 1235:
case 3054:
case 2706:
case 704:
case 3520:
case 718:
case 831:
case 1023:
case 1819:
case 620:
case 1867:
case 2447:
case 1526:
case 3321:
case 2692:
case 1097:
case 4040:
case 1513:
case 1580:
case 890:
case 1871:
case 907:
case 3143:
case 3239:
case 2315:
case 2950:
case 3804:
case 2342:
case 2652:
case 3083:
case 3718:
case 2990:
case 2031:
case 2821:
case 1135:
case 1286:
case 3864:
case 2600:
case 834:
case 1398:
case 667:
case 2469:
case 3842:
case 2304:
case 3213:
case 3126:
case 660:
case 3985:
case 3643:
case 1429:
case 4028:
case 203:
case 3422:
case 1:
case 1739:
case 3393:
case 187:
case 1861:
case 906:
case 2441:
case 25:
case 666:
case 2479:
case 1635:
case 2295:
case 2853:
case 699:
case 3786:
case 3929:
case 1088:
case 2893:
case 1922:
case 2100:
case 1713:
case 897:
case 3613:
case 2599:
case 2063:
case 1436:
case 2827:
case 3384:
case 627:
case 2566:
case 1989:
case 2559:
case 2411:
case 3720:
case 1248:
case 829:
case 2884:
case 1925:
case 3838:
case 989:
case 743:
case 2776:
case 2506:
case 2252:
case 1482:
case 3936:
case 1051:
case 3639:
case 985:
case 2292:
case 1632:
case 2037:
case 478:
case 1386:
case 90:
case 2839:
case 3380:
case 3072:
case 4075:
case 3684:
case 2761:
case 1298:
case 2638:
case 1041:
case 984:
case 2215:
case 3339:
case 738:
case 953:
case 1332:
case 256:
case 2264:
case 66:
case 2029:
case 2242:
case 1793:
case 3558:
case 1934:
case 2164:
case 1437:
case 3693:
case 787:
case 2519:
case 2142:
case 2567:
case 362:
case 1281:
case 2451:
case 3478:
case 3963:
case 378:
case 3653:
case 3343:
case 2370:
case 493:
case 2104:
case 1784:
case 3326:
case 981:
case 1876:
case 2507:
case 1198:
case 808:
case 3937:
case 1335:
case 1463:
case 1158:
case 2212:
case 3870:
case 2843:
case 312:
case 2733:
case 2642:
case 2360:
case 1047:
case 2352:
case 3800:
case 1908:
case 62:
case 593:
case 128:
case 1584:
case 3621:
case 4050:
case 2954:
case 3153:
case 1806:
case 4044:
case 358:
case 637:
case 422:
case 2238:
case 3860:
case 3852:
case 1348:
case 839:
case 2719:
case 1899:
case 2767:
case 2446:
case 3005:
case 1866:
case 3408:
case 1593:
case 2501:
case 2395:
case 2771:
case 3758:
case 18:
case 1056:
case 2138:
case 3931:
case 3090:
case 4014:
case 2645:
case 1553:
case 2355:
case 2983:
case 973:
case 3002:
case 118:
case 1431:
case 861:
case 3895:
case 2457:
case 1009:
case 3253:
case 322:
case 1318:
case 458:
case 89:
case 3127:
case 2497:
case 3293:
case 104:
case 2416:
case 2842:
case 1462:
case 3600:
case 1755:
case 717:
case 795:
case 1444:
case 3469:
case 136:
case 1909:
case 1606:
case 1371:
case 1176:
case 1349:
case 3031:
case 3990:
case 1659:
case 1402:
case 1898:
case 3660:
case 441:
case 853:
case 2083:
case 2010:
case 3409:
case 3652:
case 130:
case 760:
case 1917:
case 2239:
case 2143:
case 344:
case 3692:
case 4073:
case 1666:
case 3447:
case 2243:
case 2139:
case 1307:
case 668:
case 3799:
case 191:
case 1333:
case 1276:
case 672:
case 2535:
case 1068:
case 643:
case 2845:
case 55:
case 1465:
case 2748:
case 3706:
case 2040:
case 3965:
case 3073:
case 914:
case 3312:
case 2113:
case 1881:
case 2180:
case 1700:
case 908:
case 1570:
case 2226:
case 1008:
case 727:
case 1500:
case 898:
case 3037:
case 1475:
case 720:
case 3252:
case 3884:
case 2838:
case 2489:
case 3003:
case 964:
case 1560:
case 2720:
case 2982:
case 1552:
case 2735:
case 1206:
case 57:
case 2430:
case 188:
case 726:
case 2028:
case 3559:
case 3827:
case 3200:
case 3566:
case 1592:
case 939:
case 2613:
case 1377:
case 544:
case 3599:
case 3063:
case 137:
case 382:
case 2929:
case 3255:
case 4037:
case 1887:
case 1106:
case 842:
case 2786:
case 2518:
case 716:
case 35:
case 3479:
case 601:
case 3441:
case 961:
case 4063:
case 1301:
case 2393:
case 1979:
case 628:
case 1166:
case 2422:
case 3192:
case 710:
case 541:
case 1824:
case 99:
case 1199:
case 1267:
case 680:
case 1171:
case 3843:
case 2937:
case 3507:
case 1991:
case 3777:
case 1661:
case 456:
case 2326:
case 2121:
case 686:
case 3674:
case 1835:
case 2653:
case 110:
case 3370:
case 3567:
case 3451:
case 262:
case 2963:
case 2075:
case 3826:
case 1149:
case 3164:
case 1376:
case 1601:
case 576:
case 450:
case 3813:
case 3242:
case 2558:
case 990:
case 1249:
case 807:
case 2787:
case 1107:
case 2598:
case 3215:
case 969:
case 996:
case 2313:
case 350:
case 1677:
case 2434:
case 3085:
case 965:
case 3488:
case 3549:
case 1564:
case 549:
case 1119:
case 4082:
case 76:
case 2127:
case 1742:
case 13:
case 2524:
case 1764:
case 222:
case 2253:
case 1483:
case 3457:
case 2002:
case 370:
case 806:
case 1607:
case 638:
case 3274:
case 357:
case 1715:
case 2587:
case 1261:
case 3910:
case 3355:
case 1177:
case 2184:
case 1704:
case 2090:
case 3501:
case 1916:
case 1619:
case 1997:
case 3771:
case 3395:
case 2758:
case 800:
case 2062:
case 445:
case 915:
case 166:
case 736:
case 1923:
case 1494:
case 457:
case 556:
case 3719:
case 925:
case 199:
case 1671:
case 1161:
case 2852:
case 1277:
case 1440:
case 2284:
case 929:
case 160:
case 3707:
case 2973:
case 730:
case 2065:
case 2153:
case 3940:
case 889:
case 3577:
case 2621:
case 550:
case 6:
case 3174:
case 1366:
case 3954:
case 577:
case 2193:
case 1101:
case 2800:
case 3664:
case 885:
case 687:
case 3733:
case 3360:
case 3642:
case 3994:
case 3582:
case 2868:
case 2211:
case 1448:
case 1589:
case 2959:
case 2346:
case 845:
case 2669:
case 400:
case 2400:
case 2966:
case 3067:
case 1185:
case 2999:
case 264:
case 235:
case 2714:
case 1894:
case 2141:
case 1282:
case 406:
case 507:
case 723:
case 2906:
case 2765:
case 1525:
case 1530:
case 4019:
case 1418:
case 1182:
case 876:
case 300:
case 2241:
case 489:
case 4067:
case 2397:
case 1229:
case 485:
case 3585:
case 2357:
case 2762:
case 1522:
case 306:
case 932:
case 857:
case 2750:
case 2455:
case 1136:
case 2744:
case 4007:
case 3071:
case 1004:
case 3918:
case 4033:
case 2790:
case 1810:
case 3125:
case 2495:
case 2279:
case 1074:
case 2209:
case 2087:
case 585:
case 763:
case 3888:
case 3439:
case 877:
case 3729:
case 3001:
case 4077:
case 224:
case 1432:
case 589:
case 1939:
case 3480:
case 856:
case 1486:
case 3625:
case 3061:
case 3334:
case 500:
case 646:
case 2679:
case 3891:
case 1725:
case 1363:
case 3077:
case 3426:
case 1685:
case 2196:
case 2878:
case 3851:
case 1943:
case 221:
case 2514:
case 407:
case 506:
case 1629:
case 2470:
case 640:
case 1926:
case 2775:
case 3920:
case 3782:
case 1337:
case 3935:
case 2109:
case 2641:
case 2351:
case 3987:
case 1953:
case 1385:
case 1173:
case 2510:
case 2583:
case 671:
case 922:
case 2086:
case 3531:
case 3108:
case 1993:
case 1424:
case 1663:
case 4076:
case 85:
case 373:
case 1637:
case 2651:
case 1329:
case 2257:
case 1487:
case 3322:
case 1603:
case 1231:
case 215:
case 2540:
case 2977:
case 2157:
case 2825:
case 1984:
case 148:
case 2197:
case 64:
case 2223:
case 1778:
case 958:
case 163:
case 3737:
case 1070:
case 2594:
case 1927:
case 3325:
case 3330:
case 2688:
case 1875:
case 3634:
case 1273:
case 442:
case 912:
case 2020:
case 3484:
case 2035:
case 453:
case 841:
case 1768:
case 2528:
case 3059:
case 1203:
case 2291:
case 1631:
case 1060:
case 2347:
case 602:
case 2657:
case 3563:
case 3099:
case 381:
case 2919:
case 2697:
case 2412:
case 1578:
case 1263:
case 573:
case 40:
case 978:
case 2794:
case 3537:
case 1814:
case 3773:
case 2907:
case 2740:
case 962:
case 3503:
case 2048:
case 1865:
case 2754:
case 683:
case 1921:
case 3809:
case 2396:
case 4066:
case 481:
case 2404:
case 2317:
case 87:
case 4059:
case 1163:
case 3234:
case 3608:
case 2949:
case 3817:
case 1850:
case 1534:
case 2442:
case 3958:
case 269:
case 3869:
case 296:
case 2623:
case 2464:
case 3998:
case 651:
case 1890:
case 1103:
case 2191:
case 3668:
case 598:
case 2018:
case 3495:
case 1831:
case 2130:
case 3279:
case 903:
case 4081:
case 822:
case 508:
case 1756:
case 3058:
case 2071:
case 1605:
case 3762:
case 206:
case 1717:
case 174:
case 2585:
case 521:
case 1175:
case 775:
case 2222:
case 2049:
case 1709:
case 1995:
case 3572:
case 663:
case 461:
case 3141:
case 3609:
case 3452:
case 339:
case 3460:
case 1511:
case 3906:
case 3081:
case 49:
case 3714:
case 511:
case 740:
case 3492:
case 364:
case 858:
case 1900:
case 335:
case 3705:
case 3696:
case 1662:
case 1340:
case 2067:
case 524:
case 3999:
case 1650:
case 3617:
case 3575:
case 1644:
case 3669:
case 2823:
case 3966:
case 2019:
case 2308:
case 1690:
case 3959:
case 3346:
case 746:
case 2582:
case 1960:
case 1406:
case 3211:
case 1952:
case 3109:
case 941:
case 2920:
case 1102:
case 308:
case 2935:
case 1476:
case 2622:
case 3505:
case 314:
case 151:
case 2443:
case 3247:
case 561:
case 1863:
case 3169:
case 1328:
case 1144:
case 1205:
case 2736:
case 4087:
case 1837:
case 321:
case 3514:
case 2426:
case 1162:
case 3196:
case 1150:
case 3117:
case 2851:
case 3878:
case 862:
case 3565:
case 424:
case 1672:
case 1084:
case 3156:
case 1190:
case 1803:
case 2061:
case 1509:
case 3611:
case 2334:
case 1779:
case 759:
case 207:
case 2630:
case 1244:
case 97:
case 311:
case 755:
case 2932:
case 3296:
case 564:
case 1262:
case 3024:
case 2480:
case 1250:
case 1569:
case 1093:
case 324:
case 1114:
case 3562:
case 2888:
case 2439:
case 3147:
case 1675:
case 421:
case 3209:
case 3087:
case 1165:
case 893:
case 613:
case 1741:
case 1202:
case 2689:
case 298:
case 3020:
case 155:
case 3035:
case 3728:
case 497:
case 1294:
case 2634:
case 2325:
case 569:
case 1523:
case 2763:
case 2737:
case 3594:
case 329:
case 1751:
case 2076:
case 3825:
case 590:
case 325:
case 3830:
case 3540:
case 2573:
case 1791:
case 1375:
case 3977:
case 1110:
case 397:
case 3257:
case 1283:
case 4035:
case 2924:
case 3341:
case 1039:
case 319:
case 242:
case 3216:
case 3032:
case 273:
case 3297:
case 2493:
case 1080:
case 1829:
case 425:
case 1372:
case 1194:
case 2108:
case 1516:
case 1788:
case 3901:
case 3822:
case 3379:
case 2531:
case 1154:
case 3086:
case 1974:
case 2841:
case 2987:
case 1140:
case 3583:
case 3510:
case 3415:
case 140:
case 3018:
case 2731:
case 2856:
case 334:
case 1757:
case 365:
case 3783:
case 3191:
case 2869:
case 950:
case 977:
case 3464:
case 4048:
case 1449:
case 3623:
case 3309:
case 2178:
case 3151:
case 2817:
case 1797:
case 3442:
case 2958:
case 284:
case 1964:
case 1390:
case 529:
case 1471:
case 1694:
case 253:
case 2234:
case 390:
case 956:
case 1362:
case 525:
case 1344:
case 3369:
case 1654:
case 3048:
case 496:
case 3754:
case 597:
case 1228:
case 1305:
case 1591:
case 1419:
case 519:
case 3412:
case 2981:
case 1467:
case 434:
case 1433:
case 2066:
case 3697:
case 490:
case 1365:
case 2278:
case 2563:
case 1723:
case 1610:
case 3657:
case 3291:
case 1314:
case 1407:
case 689:
case 1583:
case 3461:
case 3140:
case 721:
case 3974:
case 575:
case 347:
case 4043:
case 1146:
case 3597:
case 2734:
case 685:
case 1379:
case 2993:
case 3516:
case 3788:
case 1822:
case 2663:
case 579:
case 3194:
case 3080:
case 3013:
case 292:
case 2637:
case 1032:
case 1297:
case 3401:
case 119:
case 927:
case 3885:
case 3210:
case 2487:
case 2329:
case 1961:
case 1691:
case 197:
case 115:
case 714:
case 3791:
case 1977:
case 1157:
case 3183:
case 1540:
case 966:
case 125:
case 248:
case 999:
case 2984:
case 724:
case 1197:
case 3546:
case 2778:
case 1223:
case 2508:
case 1594:
case 917:
case 3836:
case 2382:
case 600:
case 1246:
case 2927:
case 3294:
case 3026:
case 1688:
case 1728:
case 3477:
case 2273:
case 3882:
case 3240:
case 711:
case 1035:
case 355:
case 3254:
case 540:
case 1889:
case 1438:
case 1291:
case 1528:
case 2768:
case 1657:
case 3683:
case 3945:
case 1347:
case 2060:
case 3723:
case 3433:
case 2237:
case 1697:
case 379:
case 2092:
case 1616:
case 2805:
case 3467:
case 2708:
case 805:
case 2814:
case 79:
case 3419:
case 2000:
case 131:
case 3591:
case 3228:
case 3305:
case 1740:
case 809:
case 2865:
case 3654:
case 886:
case 2498:
case 1317:
case 1404:
case 479:
case 1396:
case 3694:
case 2055:
case 2163:
case 3471:
case 3390:
case 346:
case 1646:
case 475:
case 1356:
case 1151:
case 2534:
case 223:
case 2850:
case 169:
case 1442:
case 880:
case 3588:
case 3716:
case 1309:
case 3449:
case 2137:
case 3302:
case 1710:
case 1783:
case 2103:
case 2890:
case 134:
case 926:
case 1211:
case 3172:
case 2448:
case 1868:
case 3690:
case 1179:
case 1656:
case 3992:
case 1400:
case 1669:
case 828:
case 1617:
case 3650:
case 1575:
case 44:
case 1705:
case 790:
case 2185:
case 3340:
case 583:
case 135:
case 1808:
case 1492:
case 164:
case 3466:
case 3900:
case 734:
case 3275:
case 1714:
case 1081:
case 2129:
case 769:
case 642:
case 3511:
case 1906:
case 1460:
case 2840:
case 2282:
case 2530:
case 801:
case 796:
case 3602:
case 1572:
case 2418:
case 3665:
case 852:
case 1702:
case 3579:
case 1397:
case 3995:
case 471:
case 1316:
case 3709:
case 3614:
case 2331:
case 88:
case 1647:
case 374:
case 1762:
case 1455:
case 92:
case 1790:
case 3272:
case 2810:
case 2004:
case 804:
case 19:
case 3202:
case 729:
case 233:
case 994:
case 1087:
case 1209:
case 3165:
case 3675:
case 1834:
case 3517:
case 4084:
case 2722:
case 302:
case 1562:
case 2980:
case 1147:
case 571:
case 1544:
case 3569:
case 383:
case 3250:
case 2939:
case 3262:
case 3244:
case 354:
case 1269:
case 868:
case 872:
case 930:
case 1611:
case 4027:
case 3779:
case 1388:
case 451:
case 2420:
case 3711:
case 2038:
case 3803:
case 1679:
case 1156:
case 1976:
case 1565:
case 3150:
case 1117:
case 3970:
case 1196:
case 121:
case 1514:
case 3837:
case 3144:
case 3863:
case 1470:
case 2303:
case 715:
case 1391:
case 797:
case 3027:
case 1505:
case 114:
case 2337:
case 108:
case 1351:
case 3265:
case 1484:
case 255:
case 661:
case 198:
case 2882:
case 3273:
case 3568:
case 2477:
case 3336:
case 2294:
case 3875:
case 1634:
case 928:
case 1763:
case 2523:
case 1330:
case 1208:
case 3927:
case 81:
case 1325:
case 363:
case 3070:
case 2836:
case 1427:
case 3508:
case 1389:
case 348:
case 1076:
case 901:
case 1703:
case 2375:
case 2791:
case 1811:
case 1268:
case 837:
case 952:
case 1322:
case 2283:
case 3872:
case 2210:
case 2039:
case 639:
case 142:
case 98:
case 3637:
case 1493:
case 2401:
case 3424:
case 3663:
case 2194:
case 448:
case 2829:
case 513:
case 3734:
case 1108:
case 2516:
case 247:
case 2628:
case 4070:
case 463:
case 1841:
case 240:
case 1731:
case 4000:
case 2904:
case 1421:
case 3890:
case 10:
case 614:
case 894:
case 3137:
case 2449:
case 3844:
case 1869:
case 2302:
case 3534:
case 1178:
case 2797:
case 2588:
case 785:
case 246:
case 2390:
case 563:
case 4060:
case 2964:
case 1608:
case 4052:
case 184:
case 153:
case 3055:
case 3163:
case 2915:
case 789:
case 548:
case 4092:
case 830:
case 972:
case 3095:
case 2654:
case 621:
case 3921:
case 2344:
case 1006:
case 891:
case 2591:
case 1503:
case 1773:
case 423:
case 86:
case 2419:
case 2551:
case 3578:
case 1134:
case 1981:
case 1847:
case 181:
case 3237:
case 2433:
case 1066:
case 3092:
case 3805:
case 1563:
case 2723:
case 2365:
case 700:
case 4095:
case 2683:
case 2610:
case 1059:
case 3203:
case 3631:
case 624:
case 3768:
case 1125:
case 1918:
case 3810:
case 2756:
case 987:
case 3285:
case 1897:
case 2717:
case 3522:
case 2955:
case 2310:
case 3229:
case 274:
case 625:
case 3064:
case 2995:
case 4012:
case 1189:
case 3015:
case 629:
case 3182:
case 866:
case 1289:
case 899:
case 619:
case 1948:
case 2275:
case 1368:
case 697:
case 817:
case 4004:
case 895:
case 70:
case 2466:
case 1033:
case 2900:
case 2650:
case 271:
case 3012:
case 2340:
case 2992:
case 2690:
case 1230:
case 4042:
case 784:
case 3589:
case 1308:
case 2394:
case 2172:
case 4064:
case 938:
case 3045:
case 2960:
case 742:
case 669:
case 1378:
case 3789:
case 1935:
case 2476:
case 1920:
case 665:
case 634:
case 1622:
case 2027:
case 2863:
case 1443:
case 2837:
case 433:
case 905:
case 810:
case 2162:
case 1426:
case 2547:
case 4074:
case 3730:
case 1077:
case 3038:
case 3420:
case 1891:
case 2779:
case 2509:
case 2290:
case 3486:
case 631:
case 1932:
case 1785:
case 798:
case 254:
case 2244:
case 2250:
case 820:
case 3636:
case 2093:
case 2569:
case 3432:
case 2517:
case 1888:
case 202:
case 3913:
case 4038:
case 2596:
case 2053:
case 3682:
case 1986:
case 1689:
case 826:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743246002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,];
var gg_b = "1743246002/";

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
