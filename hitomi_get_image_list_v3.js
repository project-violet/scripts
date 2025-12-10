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
case 628:
case 3152:
case 258:
case 1199:
case 284:
case 4080:
case 320:
case 4082:
case 2166:
case 1151:
case 2587:
case 2825:
case 2423:
case 3939:
case 3603:
case 932:
case 578:
case 1421:
case 3589:
case 828:
case 1630:
case 2937:
case 20:
case 2144:
case 2995:
case 3207:
case 2001:
case 2357:
case 3065:
case 2481:
case 3782:
case 3359:
case 2738:
case 422:
case 1156:
case 964:
case 2783:
case 2161:
case 3174:
case 235:
case 2810:
case 716:
case 3628:
case 956:
case 414:
case 503:
case 1781:
case 542:
case 3391:
case 2006:
case 3780:
case 152:
case 1480:
case 892:
case 3812:
case 3738:
case 431:
case 287:
case 2782:
case 889:
case 3879:
case 3408:
case 335:
case 84:
case 3810:
case 3161:
case 3783:
case 689:
case 2628:
case 1160:
case 692:
case 739:
case 2780:
case 560:
case 4021:
case 2415:
case 2813:
case 2534:
case 3006:
case 358:
case 1575:
case 72:
case 3088:
case 2422:
case 4083:
case 3602:
case 2314:
case 1924:
case 650:
case 3166:
case 3825:
case 3587:
case 3847:
case 2603:
case 850:
case 2150:
case 417:
case 581:
case 1237:
case 1000:
case 2589:
case 1295:
case 3153:
case 453:
case 2396:
case 2631:
case 16:
case 2207:
case 763:
case 1601:
case 30:
case 2817:
case 2084:
case 2789:
case 2352:
case 2475:
case 1522:
case 3870:
case 870:
case 3819:
case 643:
case 520:
case 980:
case 1169:
case 437:
case 3366:
case 1489:
case 3344:
case 3521:
case 1775:
case 2196:
case 440:
case 1520:
case 1009:
case 2203:
case 3609:
case 2840:
case 2429:
case 961:
case 408:
case 1362:
case 1233:
case 723:
case 12:
case 3843:
case 1900:
case 39:
case 3037:
case 3200:
case 411:
case 3427:
case 1637:
case 1876:
case 1955:
case 2374:
case 4087:
case 3361:
case 3255:
case 3178:
case 2932:
case 260:
case 719:
case 45:
case 3988:
case 1902:
case 163:
case 3624:
case 3580:
case 172:
case 2157:
case 3607:
case 790:
case 2843:
case 2445:
case 1007:
case 2583:
case 2427:
case 3930:
case 868:
case 1192:
case 2037:
case 3231:
case 3842:
case 1727:
case 1508:
case 215:
case 3374:
case 2538:
case 1356:
case 100:
case 2988:
case 3404:
case 2526:
case 360:
case 3191:
case 1232:
case 1363:
case 3228:
case 3084:
case 3817:
case 2318:
case 558:
case 924:
case 3352:
case 1928:
case 1898:
case 3305:
case 2819:
case 3236:
case 2906:
case 1864:
case 2787:
case 3350:
case 3965:
case 1487:
case 1351:
case 2366:
case 1265:
case 2521:
case 4034:
case 2872:
case 3196:
case 2353:
case 165:
case 1093:
case 1827:
case 3742:
case 3476:
case 305:
case 446:
case 2952:
case 3918:
case 1845:
case 357:
case 744:
case 676:
case 1124:
case 313:
case 2512:
case 3235:
case 3306:
case 1935:
case 2441:
case 1741:
case 526:
case 2139:
case 3057:
case 1266:
case 876:
case 418:
case 2365:
case 1109:
case 3740:
case 986:
case 3944:
case 329:
case 3137:
case 968:
case 1253:
case 2692:
case 3953:
case 1244:
case 2754:
case 3333:
case 266:
case 371:
case 1470:
case 1419:
case 812:
case 1962:
case 2096:
case 1300:
case 254:
case 845:
case 4040:
case 3301:
case 288:
case 2446:
case 1355:
case 1261:
case 2256:
case 1472:
case 2974:
case 3961:
case 3260:
case 3773:
case 2719:
case 3669:
case 2770:
case 1798:
case 4042:
case 475:
case 1069:
case 3388:
case 2525:
case 2887:
case 612:
case 1764:
case 2014:
case 271:
case 1648:
case 3048:
case 3464:
case 2471:
case 106:
case 902:
case 4054:
case 943:
case 747:
case 1568:
case 730:
case 1473:
case 2301:
case 23:
case 1417:
case 1594:
case 1067:
case 796:
case 2549:
case 2260:
case 3184:
case 3974:
case 595:
case 2889:
case 1956:
case 1516:
case 2669:
case 3770:
case 1963:
case 3525:
case 970:
case 1614:
case 3299:
case 2693:
case 2476:
case 1252:
case 205:
case 4019:
case 627:
case 2918:
case 1999:
case 3091:
case 3512:
case 2235:
case 3905:
case 533:
case 1336:
case 1691:
case 1090:
case 3690:
case 2306:
case 2078:
case 3441:
case 3950:
case 861:
case 2513:
case 2057:
case 4072:
case 1804:
case 2966:
case 1250:
case 2740:
case 2195:
case 2137:
case 1776:
case 577:
case 1442:
case 1107:
case 2953:
case 1128:
case 3554:
case 706:
case 1967:
case 3710:
case 2660:
case 3267:
case 2061:
case 3543:
case 3656:
case 679:
case 449:
case 1458:
case 3663:
case 2880:
case 233:
case 1063:
case 3914:
case 196:
case 3339:
case 3712:
case 1477:
case 2758:
case 3165:
case 1248:
case 3996:
case 2411:
case 4025:
case 2337:
case 879:
case 2395:
case 4047:
case 1296:
case 2957:
case 1571:
case 3050:
case 571:
case 2133:
case 821:
case 3570:
case 2573:
case 2468:
case 21:
case 867:
case 53:
case 3130:
case 2053:
case 4012:
case 2517:
case 2494:
case 3384:
case 1449:
case 295:
case 1768:
case 3052:
case 3821:
case 3699:
case 2018:
case 3290:
case 3005:
case 1605:
case 3132:
case 2978:
case 621:
case 2697:
case 2635:
case 2725:
case 3957:
case 407:
case 2519:
case 566:
case 3133:
case 2651:
case 1666:
case 1644:
case 491:
case 144:
case 2959:
case 3573:
case 31:
case 928:
case 4058:
case 2292:
case 109:
case 3053:
case 2572:
case 782:
case 1993:
case 2699:
case 3293:
case 1155:
case 1618:
case 2052:
case 2821:
case 4013:
case 1278:
case 2991:
case 632:
case 1102:
case 3188:
case 3635:
case 2132:
case 2779:
case 1661:
case 2656:
case 3061:
case 2267:
case 1969:
case 3777:
case 1881:
case 1412:
case 3106:
case 3880:
case 1324:
case 4:
case 2663:
case 3713:
case 438:
case 3758:
case 656:
case 2339:
case 2712:
case 3411:
case 2838:
case 377:
case 664:
case 1808:
case 3542:
case 2527:
case 4022:
case 2392:
case 2545:
case 938:
case 1738:
case 822:
case 1481:
case 2665:
case 3606:
case 4020:
case 2036:
case 2426:
case 2781:
case 3160:
case 2284:
case 2438:
case 3811:
case 1810:
case 1408:
case 1879:
case 135:
case 3002:
case 193:
case 1602:
case 323:
case 3135:
case 290:
case 3868:
case 548:
case 3575:
case 3720:
case 2199:
case 158:
case 1655:
case 10:
case 1937:
case 742:
case 3601:
case 703:
case 1001:
case 36:
case 2421:
case 1600:
case 319:
case 3237:
case 991:
case 3816:
case 1209:
case 715:
case 1825:
case 1587:
case 2151:
case 1166:
case 2924:
case 2197:
case 653:
case 2688:
case 223:
case 698:
case 617:
case 3199:
case 1152:
case 1030:
case 26:
case 817:
case 3630:
case 2601:
case 1589:
case 2000:
case 2237:
case 1631:
case 1396:
case 3421:
case 539:
case 4008:
case 1150:
case 1603:
case 2722:
case 1939:
case 2816:
case 2633:
case 3151:
case 1348:
case 87:
case 3483:
case 52:
case 352:
case 3390:
case 2606:
case 1534:
case 3426:
case 1636:
case 631:
case 3781:
case 1877:
case 563:
case 44:
case 3036:
case 1628:
case 2160:
case 3028:
case 949:
case 3284:
case 904:
case 2393:
case 1174:
case 3156:
case 3192:
case 2695:
case 2876:
case 2637:
case 1930:
case 3007:
case 22:
case 811:
case 3581:
case 2362:
case 3639:
case 3841:
case 2009:
case 1734:
case 1203:
case 2288:
case 2515:
case 611:
case 160:
case 2729:
case 1582:
case 3745:
case 3508:
case 85:
case 3727:
case 1842:
case 2871:
case 640:
case 2169:
case 1236:
case 4045:
case 787:
case 1305:
case 2206:
case 1352:
case 1873:
case 3586:
case 1817:
case 402:
case 2489:
case 837:
case 443:
case 3265:
case 3487:
case 3523:
case 181:
case 1965:
case 1350:
case 3169:
case 590:
case 1787:
case 3522:
case 2167:
case 2586:
case 2928:
case 975:
case 2399:
case 4029:
case 2846:
case 248:
case 885:
case 2684:
case 1872:
case 339:
case 4004:
case 1353:
case 1366:
case 216:
case 2523:
case 2487:
case 3695:
case 997:
case 793:
case 918:
case 1037:
case 1095:
case 3201:
case 2230:
case 3362:
case 3233:
case 2639:
case 1157:
case 468:
case 2581:
case 4075:
case 758:
case 2841:
case 3009:
case 103:
case 2363:
case 3515:
case 1624:
case 70:
case 142:
case 363:
case 946:
case 200:
case 552:
case 1178:
case 1526:
case 834:
case 1255:
case 2356:
case 1361:
case 3193:
case 3955:
case 3417:
case 412:
case 3594:
case 1446:
case 1772:
case 544:
case 1330:
case 1096:
case 2300:
case 2419:
case 962:
case 2470:
case 3303:
case 4076:
case 1048:
case 2764:
case 3614:
case 1263:
case 2069:
case 2798:
case 3956:
case 1974:
case 726:
case 2355:
case 875:
case 1667:
case 2261:
case 2746:
case 3274:
case 525:
case 1441:
case 1690:
case 846:
case 3205:
case 3691:
case 3336:
case 1905:
case 1512:
case 1091:
case 1952:
case 3328:
case 3999:
case 4071:
case 2443:
case 2093:
case 265:
case 2218:
case 697:
case 618:
case 3107:
case 3442:
case 299:
case 3776:
case 3511:
case 1059:
case 3092:
case 818:
case 897:
case 1743:
case 774:
case 646:
case 3250:
case 3951:
case 3804:
case 2266:
case 801:
case 1139:
case 282:
case 1365:
case 1950:
case 2657:
case 3678:
case 3935:
case 530:
case 3997:
case 769:
case 1306:
case 2829:
case 71:
case 459:
case 3124:
case 2440:
case 1918:
case 95:
case 2999:
case 105:
case 2252:
case 1693:
case 3454:
case 3218:
case 3093:
case 399:
case 2776:
case 1953:
case 751:
case 2107:
case 3253:
case 2659:
case 908:
case 2511:
case 1137:
case 2092:
case 129:
case 1966:
case 1057:
case 3741:
case 733:
case 694:
case 2696:
case 3300:
case 2331:
case 2875:
case 4041:
case 3419:
case 3470:
case 206:
case 1471:
case 2963:
case 3302:
case 1388:
case 3069:
case 973:
case 894:
case 1260:
case 1961:
case 3261:
case 3472:
case 2274:
case 3746:
case 1549:
case 3960:
case 1053:
case 3546:
case 3653:
case 309:
case 2259:
case 1517:
case 3100:
case 11:
case 344:
case 998:
case 713:
case 1101:
case 3644:
case 3666:
case 3598:
case 3257:
case 2103:
case 151:
case 3823:
case 1188:
case 1697:
case 541:
case 729:
case 1416:
case 3447:
case 3618:
case 325:
case 2768:
case 2652:
case 3993:
case 2820:
case 2063:
case 133:
case 3541:
case 1880:
case 2214:
case 1106:
case 510:
case 1777:
case 247:
case 2056:
case 3661:
case 804:
case 2576:
case 2967:
case 604:
case 1395:
case 88:
case 3479:
case 97:
case 649:
case 479:
case 1758:
case 2477:
case 3309:
case 2815:
case 2413:
case 3063:
case 788:
case 2541:
case 1663:
case 3136:
case 4094:
case 2969:
case 3711:
case 914:
case 1656:
case 456:
case 638:
case 565:
case 3674:
case 1074:
case 3056:
case 1543:
case 1710:
case 766:
case 1554:
case 3576:
case 2479:
case 2808:
case 838:
case 6:
case 4016:
case 2785:
case 1838:
case 1996:
case 1826:
case 3477:
case 2062:
case 582:
case 1165:
case 1712:
case 2309:
case 3413:
case 3815:
case 396:
case 922:
case 855:
case 3259:
case 2546:
case 2644:
case 3992:
case 2886:
case 432:
case 1747:
case 3051:
case 1519:
case 1651:
case 3716:
case 2564:
case 1050:
case 1725:
case 2823:
case 3291:
case 1132:
case 1991:
case 691:
case 3605:
case 2447:
case 1290:
case 174:
case 3099:
case 3768:
case 225:
case 2155:
case 3794:
case 3449:
case 1384:
case 607:
case 2993:
case 3820:
case 585:
case 2110:
case 2179:
case 3083:
case 786:
case 925:
case 3342:
case 1683:
case 3537:
case 1509:
case 636:
case 2681:
case 1287:
case 3340:
case 562:
case 1626:
case 3436:
case 40:
case 4001:
case 1341:
case 1015:
case 836:
case 944:
case 398:
case 2082:
case 1185:
case 4033:
case 3428:
case 3038:
case 1432:
case 3622:
case 2125:
case 1851:
case 3733:
case 3204:
case 3850:
case 2147:
case 2584:
case 2372:
case 3149:
case 2686:
case 4006:
case 3852:
case 2818:
case 3431:
case 3317:
case 2245:
case 534:
case 3620:
case 1346:
case 3229:
case 3403:
case 2732:
case 0:
case 3788:
case 1929:
case 322:
case 3866:
case 1234:
case 1703:
case 2850:
case 3934:
case 3147:
case 487:
case 3402:
case 192:
case 2204:
case 3372:
case 3730:
case 3455:
case 3853:
case 27:
case 4065:
case 1086:
case 1945:
case 2431:
case 3227:
case 55:
case 2620:
case 743:
case 14:
case 2317:
case 314:
case 702:
case 1897:
case 930:
case 1835:
case 1433:
case 3370:
case 66:
case 1507:
case 3110:
case 2874:
case 3989:
case 420:
case 3861:
case 2595:
case 2342:
case 1111:
case 2537:
case 4032:
case 2083:
case 3080:
case 1680:
case 1081:
case 823:
case 3539:
case 573:
case 2026:
case 2340:
case 150:
case 2436:
case 2615:
case 1406:
case 540:
case 3354:
case 1008:
case 1376:
case 217:
case 3343:
case 1682:
case 819:
case 3082:
case 3645:
case 2921:
case 639:
case 2220:
case 1437:
case 385:
case 3379:
case 1027:
case 3310:
case 3878:
case 1923:
case 3223:
case 941:
case 170:
case 2891:
case 4084:
case 3739:
case 2604:
case 2358:
case 240:
case 906:
case 1634:
case 74:
case 3857:
case 2222:
case 102:
case 362:
case 143:
case 2795:
case 2737:
case 237:
case 1707:
case 2859:
case 517:
case 211:
case 3532:
case 2215:
case 3347:
case 2926:
case 2848:
case 1908:
case 208:
case 1282:
case 82:
case 2675:
case 334:
case 1531:
case 2117:
case 3089:
case 1689:
case 460:
case 1394:
case 3784:
case 2087:
case 3281:
case 863:
case 2814:
case 1280:
case 1869:
case 1981:
case 1503:
case 2532:
case 311:
case 982:
case 3926:
case 4095:
case 1502:
case 186:
case 1226:
case 3848:
case 3349:
case 1484:
case 1555:
case 1075:
case 3938:
case 2208:
case 1146:
case 403:
case 514:
case 1500:
case 442:
case 2089:
case 1867:
case 2784:
case 3501:
case 2530:
case 3533:
case 2980:
case 1198:
case 415:
case 2119:
case 728:
case 1164:
case 672:
case 3142:
case 3921:
case 3407:
case 2379:
case 2310:
case 1221:
case 2627:
case 848:
case 1890:
case 2565:
case 3313:
case 616:
case 3377:
case 1029:
case 2223:
case 1004:
case 478:
case 262:
case 3506:
case 3222:
case 2143:
case 2286:
case 3737:
case 1385:
case 648:
case 337:
case 1279:
case 1911:
case 2073:
case 2544:
case 732:
case 2017:
case 3189:
case 2646:
case 4091:
case 3979:
case 3910:
case 865:
case 900:
case 2913:
case 1071:
case 3550:
case 1323:
case 1551:
case 3019:
case 3070:
case 2977:
case 176:
case 4059:
case 1212:
case 201:
case 1672:
case 2467:
case 3072:
case 538:
case 2518:
case 1386:
case 1599:
case 2839:
case 591:
case 488:
case 3134:
case 1563:
case 1247:
case 1478:
case 2757:
case 2490:
case 916:
case 1654:
case 3676:
case 3895:
case 3493:
case 2949:
case 1076:
case 145:
case 756:
case 507:
case 1792:
case 3382:
case 1643:
case 3759:
case 3043:
case 2561:
case 3574:
case 2338:
case 948:
case 3294:
case 1968:
case 2492:
case 4014:
case 2383:
case 2042:
case 1145:
case 1824:
case 3380:
case 1790:
case 2947:
case 1640:
case 641:
case 1491:
case 2134:
case 43:
case 3839:
case 806:
case 2216:
case 1104:
case 1315:
case 3949:
case 2054:
case 2837:
case 2895:
case 471:
case 2043:
case 939:
case 2759:
case 2382:
case 294:
case 1459:
case 3492:
case 2268:
case 1642:
case 283:
case 1129:
case 841:
case 3778:
case 2791:
case 1562:
case 3073:
case 549:
case 1673:
case 1496:
case 721:
case 3884:
case 3664:
case 1277:
case 1448:
case 1213:
case 3977:
case 767:
case 963:
case 1769:
case 405:
case 3566:
case 2019:
case 2070:
case 3187:
case 3958:
case 1535:
case 301:
case 1597:
case 1414:
case 161:
case 3467:
case 92:
case 1985:
case 318:
case 4057:
case 3518:
case 3:
case 433:
case 2596:
case 2668:
case 847:
case 3718:
case 3121:
case 249:
case 2548:
case 1450:
case 696:
case 2705:
case 3832:
case 2888:
case 1803:
case 1405:
case 3940:
case 1569:
case 2616:
case 2497:
case 1941:
case 2833:
case 1240:
case 896:
case 630:
case 2801:
case 2954:
case 3499:
case 2943:
case 780:
case 2591:
case 1115:
case 1658:
case 2012:
case 3058:
case 1304:
case 41:
case 3126:
case 2334:
case 3578:
case 391:
case 3865:
case 2460:
case 919:
case 4066:
case 3138:
case 3685:
case 2972:
case 96:
case 167:
case 3183:
case 2611:
case 1828:
case 3973:
case 1273:
case 761:
case 3917:
case 1760:
case 2010:
case 594:
case 1946:
case 2079:
case 3298:
case 1613:
case 727:
case 1677:
case 2970:
case 2919:
case 495:
case 1998:
case 2462:
case 936:
case 1612:
case 3012:
case 3334:
case 2126:
case 2865:
case 3972:
case 2685:
case 809:
case 3182:
case 255:
case 844:
case 1272:
case 1592:
case 3559:
case 1345:
case 825:
case 1011:
case 2761:
case 1756:
case 3611:
case 2246:
case 3010:
case 1327:
case 3079:
case 644:
case 4005:
case 776:
case 1610:
case 1763:
case 1219:
case 2557:
case 2298:
case 474:
case 2264:
case 3462:
case 3596:
case 164:
case 3668:
case 3752:
case 3389:
case 1444:
case 1094:
case 3694:
case 1855:
case 1453:
case 745:
case 156:
case 1123:
case 546:
case 2451:
case 952:
case 2832:
case 1751:
case 3047:
case 2241:
case 2940:
case 3025:
case 3497:
case 1625:
case 3435:
case 597:
case 3954:
case 426:
case 3801:
case 1976:
case 2753:
case 38:
case 1418:
case 1800:
case 1254:
case 3276:
case 2744:
case 1844:
case 568:
case 1584:
case 1372:
case 3116:
case 392:
case 1402:
case 785:
case 2432:
case 2851:
case 2022:
case 586:
case 1319:
case 1370:
case 2398:
case 1623:
case 3433:
case 2020:
case 1245:
case 34:
case 4036:
case 2346:
case 2430:
case 3927:
case 1227:
case 1400:
case 1818:
case 1681:
case 1539:
case 2863:
case 2465:
case 3111:
case 2683:
case 974:
case 490:
case 3289:
case 858:
case 1861:
case 3728:
case 1179:
case 3507:
case 2638:
case 658:
case 2975:
case 1343:
case 4003:
case 684:
case 1354:
case 80:
case 2015:
case 1112:
case 2524:
case 350:
case 3862:
case 3287:
case 1113:
case 2736:
case 1177:
case 3863:
case 3465:
case 820:
case 570:
case 2111:
case 1537:
case 2289:
case 423:
case 3975:
case 969:
case 1428:
case 3185:
case 2376:
case 198:
case 117:
case 3524:
case 1615:
case 3015:
case 153:
case 2406:
case 2862:
case 502:
case 1026:
case 620:
case 543:
case 3700:
case 2086:
case 773:
case 977:
case 131:
case 1850:
case 2116:
case 3432:
case 1622:
case 2234:
case 3929:
case 1788:
case 737:
case 1403:
case 1805:
case 2433:
case 2371:
case 1229:
case 2897:
case 3346:
case 2927:
case 1317:
case 2168:
case 687:
case 2945:
case 1431:
case 1373:
case 3621:
case 2194:
case 740:
case 3899:
case 1675:
case 589:
case 4009:
case 1938:
case 3238:
case 2282:
case 108:
case 1848:
case 3226:
case 3915:
case 42:
case 2316:
case 1588:
case 1926:
case 592:
case 111:
case 2503:
case 2981:
case 2869:
case 860:
case 1087:
case 717:
case 1814:
case 798:
case 3687:
case 1983:
case 15:
case 2394:
case 1173:
case 3867:
case 4024:
case 2368:
case 2531:
case 463:
case 3283:
case 54:
case 2689:
case 1891:
case 270:
case 77:
case 1313:
case 2495:
case 2893:
case 2437:
case 1921:
case 1220:
case 2311:
case 3892:
case 2986:
case 1859:
case 1737:
case 3385:
case 1795:
case 2634:
case 243:
case 1604:
case 3141:
case 439:
case 448:
case 1223:
case 2439:
case 3923:
case 2890:
case 1409:
case 1565:
case 1379:
case 3893:
case 3437:
case 678:
case 1645:
case 1154:
case 3176:
case 2892:
case 3707:
case 1286:
case 528:
case 954:
case 162:
case 2709:
case 3536:
case 1739:
case 1312:
case 1982:
case 472:
case 3282:
case 2484:
case 2555:
case 3908:
case 2238:
case 2502:
case 2226:
case 4007:
case 3316:
case 3981:
case 3503:
case 3869:
case 3171:
case 842:
case 1170:
case 1281:
case 1784:
case 400:
case 3394:
case 3689:
case 3368:
case 815:
case 3531:
case 2500:
case 134:
case 3807:
case 978:
case 2792:
case 1338:
case 2556:
case 1561:
case 888:
case 2654:
case 2308:
case 2076:
case 866:
case 1757:
case 2478:
case 2809:
case 2247:
case 3315:
case 3041:
case 2563:
case 2225:
case 212:
case 2916:
case 1326:
case 532:
case 380:
case 2824:
case 2790:
case 3129:
case 738:
case 4069:
case 224:
case 3459:
case 688:
case 903:
case 556:
case 1566:
case 465:
case 4093:
case 2619:
case 3213:
case 2670:
case 3064:
case 755:
case 3277:
case 2071:
case 146:
case 1646:
case 1017:
case 3320:
case 791:
case 2767:
case 1553:
case 1321:
case 3496:
case 1073:
case 2386:
case 1518:
case 197:
case 118:
case 1285:
case 2599:
case 99:
case 2672:
case 3985:
case 327:
case 1467:
case 3258:
case 276:
case 3322:
case 3551:
case 960:
case 1714:
case 2277:
case 3767:
case 2046:
case 1979:
case 1189:
case 259:
case 805:
case 629:
case 3210:
case 3279:
case 605:
case 1552:
case 1796:
case 657:
case 1072:
case 2175:
case 2597:
case 2535:
case 261:
case 4092:
case 1748:
case 1505:
case 1469:
case 3643:
case 406:
case 3792:
case 1054:
case 345:
case 3076:
case 1676:
case 1895:
case 1837:
case 3654:
case 521:
case 1925:
case 1216:
case 871:
case 3809:
case 2041:
case 2315:
case 3563:
case 1134:
case 1947:
case 3225:
case 312:
case 3916:
case 4067:
case 280:
case 2562:
case 2129:
case 1380:
case 183:
case 3824:
case 3145:
case 324:
case 2642:
case 441:
case 3127:
case 3968:
case 63:
case 2459:
case 3461:
case 3272:
case 2474:
case 3108:
case 267:
case 1460:
case 2085:
case 869:
case 221:
case 2658:
case 2115:
case 651:
case 3612:
case 1970:
case 2677:
case 1462:
case 1180:
case 3971:
case 1806:
case 2613:
case 3181:
case 3610:
case 61:
case 1079:
case 3327:
case 1774:
case 2828:
case 669:
case 1559:
case 3592:
case 3466:
case 3123:
case 833:
case 2735:
case 1548:
case 3855:
case 677:
case 1694:
case 3094:
case 104:
case 2242:
case 1389:
case 3444:
case 1668:
case 1596:
case 364:
case 4063:
case 2452:
case 1276:
case 1943:
case 877:
case 3418:
case 3567:
case 3243:
case 18:
case 3976:
case 279:
case 783:
case 1954:
case 1833:
case 1750:
case 2240:
case 2122:
case 3016:
case 2569:
case 3647:
case 794:
case 2405:
case 1047:
case 561:
case 3751:
case 2466:
case 1451:
case 2123:
case 626:
case 3735:
case 1942:
case 2094:
case 2453:
case 2855:
case 1718:
case 2799:
case 2800:
case 3375:
case 2418:
case 1744:
case 379:
case 1049:
case 1830:
case 138:
case 2567:
case 3649:
case 1753:
case 775:
case 3240:
case 2625:
case 1241:
case 3569:
case 3803:
case 2647:
case 2108:
case 90:
case 367:
case 107:
case 1456:
case 3474:
case 674:
case 1865:
case 1463:
case 2590:
case 444:
case 409:
case 2612:
case 321:
case 3115:
case 3998:
case 1077:
case 1264:
case 3329:
case 993:
case 2219:
case 1557:
case 2181:
case 2763:
case 2971:
case 1298:
case 425:
case 3273:
case 3760:
case 2011:
case 3217:
case 958:
case 2592:
case 874:
case 3828:
case 1183:
case 524:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1765389601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,];
var gg_b = "1765389601/";

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
