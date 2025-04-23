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
case 4037:
case 25:
case 4041:
case 2088:
case 508:
case 3870:
case 3864:
case 1078:
case 2500:
case 131:
case 3699:
case 2442:
case 1061:
case 249:
case 1383:
case 3929:
case 3528:
case 3197:
case 644:
case 1825:
case 1998:
case 92:
case 2748:
case 574:
case 3468:
case 1054:
case 3794:
case 3199:
case 3851:
case 3471:
case 2373:
case 3723:
case 1597:
case 570:
case 1691:
case 3453:
case 3873:
case 996:
case 2503:
case 2633:
case 3613:
case 1228:
case 2906:
case 380:
case 933:
case 640:
case 3297:
case 91:
case 234:
case 2392:
case 2133:
case 2540:
case 2045:
case 2364:
case 2402:
case 3720:
case 183:
case 1152:
case 1380:
case 1916:
case 1477:
case 3914:
case 2489:
case 368:
case 1921:
case 1513:
case 2934:
case 2010:
case 3030:
case 2269:
case 443:
case 3605:
case 1406:
case 2267:
case 1043:
case 88:
case 1135:
case 759:
case 821:
case 1434:
case 1396:
case 2421:
case 122:
case 2656:
case 1989:
case 3323:
case 2977:
case 10:
case 534:
case 2416:
case 3394:
case 691:
case 1987:
case 2348:
case 872:
case 270:
case 1635:
case 3188:
case 3808:
case 4022:
case 2979:
case 2578:
case 1942:
case 274:
case 1040:
case 845:
case 3288:
case 3848:
case 1545:
case 352:
case 973:
case 2894:
case 3145:
case 4074:
case 3205:
case 785:
case 3033:
case 112:
case 2823:
case 686:
case 2669:
case 2862:
case 549:
case 1003:
case 3444:
case 811:
case 2169:
case 2770:
case 3320:
case 107:
case 3645:
case 3981:
case 2256:
case 679:
case 162:
case 1318:
case 2522:
case 431:
case 2898:
case 2750:
case 105:
case 2925:
case 3742:
case 4061:
case 2276:
case 2304:
case 2462:
case 1041:
case 589:
case 3844:
case 2195:
case 3980:
case 4054:
case 2768:
case 787:
case 3316:
case 3082:
case 646:
case 2771:
case 3321:
case 386:
case 1781:
case 1355:
case 847:
case 3009:
case 391:
case 1686:
case 2558:
case 3049:
case 236:
case 555:
case 2753:
case 2011:
case 2816:
case 3031:
case 458:
case 3836:
case 1327:
case 1186:
case 1001:
case 1806:
case 2560:
case 84:
case 2065:
case 2574:
case 2295:
case 3184:
case 3804:
case 3983:
case 2420:
case 483:
case 3586:
case 3398:
case 1172:
case 1457:
case 2109:
case 2889:
case 2704:
case 2249:
case 1617:
case 668:
case 4043:
case 3975:
case 3342:
case 3226:
case 1619:
case 3572:
case 1224:
case 471:
case 1690:
case 2231:
case 2107:
case 2802:
case 2350:
case 143:
case 2182:
case 1117:
case 340:
case 2609:
case 1812:
case 1381:
case 1755:
case 3918:
case 4000:
case 2539:
case 3853:
case 1190:
case 422:
case 3473:
case 1119:
case 703:
case 2371:
case 3721:
case 593:
case 2682:
case 2368:
case 2736:
case 3517:
case 3716:
case 2537:
case 1219:
case 2647:
case 732:
case 2631:
case 3611:
case 1565:
case 3626:
case 2501:
case 344:
case 1217:
case 2649:
case 499:
case 684:
case 1425:
case 1332:
case 1058:
case 3798:
case 1193:
case 3302:
case 3126:
case 2131:
case 2207:
case 1729:
case 1124:
case 3524:
case 1272:
case 3996:
case 1511:
case 2149:
case 898:
case 1727:
case 915:
case 1526:
case 4003:
case 2444:
case 1427:
case 1968:
case 1215:
case 308:
case 3167:
case 83:
case 922:
case 3256:
case 1766:
case 1338:
case 1950:
case 850:
case 4086:
case 1725:
case 3669:
case 1091:
case 1896:
case 3385:
case 1261:
case 2033:
case 584:
case 2205:
case 2394:
case 415:
case 3416:
case 3773:
case 518:
case 636:
case 580:
case 2885:
case 3421:
case 2105:
case 1875:
case 3578:
case 1455:
case 2808:
case 962:
case 2188:
case 370:
case 837:
case 693:
case 3348:
case 3561:
case 1678:
case 568:
case 2932:
case 173:
case 2535:
case 3269:
case 999:
case 3010:
case 1818:
case 3099:
case 3515:
case 1759:
case 2362:
case 2404:
case 1115:
case 823:
case 912:
case 3097:
case 3370:
case 3402:
case 12:
case 2552:
case 490:
case 2113:
case 3045:
case 3133:
case 2955:
case 102:
case 3934:
case 1200:
case 1533:
case 2914:
case 3489:
case 1603:
case 3785:
case 3351:
case 2299:
case 2453:
case 2069:
case 4093:
case 756:
case 1883:
case 3708:
case 3392:
case 801:
case 357:
case 1432:
case 882:
case 931:
case 218:
case 2067:
case 655:
case 1143:
case 877:
case 546:
case 1035:
case 2528:
case 1600:
case 1481:
case 2197:
case 228:
case 4072:
case 676:
case 2723:
case 2851:
case 2471:
case 3543:
case 16:
case 1944:
case 3130:
case 2927:
case 958:
case 3088:
case 1880:
case 1643:
case 4017:
case 196:
case 11:
case 2699:
case 1359:
case 689:
case 3005:
case 3500:
case 2213:
case 2864:
case 3233:
case 4090:
case 2450:
case 2111:
case 3842:
case 3282:
case 389:
case 3147:
case 1379:
case 3207:
case 1948:
case 2126:
case 1549:
case 2302:
case 2470:
case 2798:
case 1601:
case 579:
case 1480:
case 3744:
case 3209:
case 3149:
case 2593:
case 2665:
case 2389:
case 2524:
case 2996:
case 65:
case 125:
case 376:
case 2868:
case 1239:
case 3631:
case 777:
case 875:
case 2165:
case 3084:
case 1312:
case 1086:
case 1241:
case 1237:
case 1101:
case 2492:
case 2265:
case 2918:
case 1483:
case 3938:
case 2095:
case 1201:
case 355:
case 3609:
case 240:
case 3541:
case 115:
case 3537:
case 3736:
case 3368:
case 1734:
case 1139:
case 2721:
case 3682:
case 3607:
case 2473:
case 1985:
case 1637:
case 1507:
case 1639:
case 3350:
case 3107:
case 3231:
case 3247:
case 3887:
case 2572:
case 2226:
case 2342:
case 77:
case 1973:
case 3295:
case 3065:
case 1222:
case 3574:
case 1576:
case 539:
case 1777:
case 190:
case 481:
case 1658:
case 2586:
case 3420:
case 2702:
case 402:
case 1779:
case 467:
case 1174:
case 2049:
case 3558:
case 2408:
case 2684:
case 835:
case 670:
case 1712:
case 2836:
case 2047:
case 3957:
case 3011:
case 3816:
case 3676:
case 1093:
case 2485:
case 2321:
case 286:
case 1496:
case 1334:
case 2007:
case 3423:
case 2082:
case 1258:
case 3494:
case 750:
case 3336:
case 1163:
case 46:
case 2980:
case 2009:
case 1970:
case 2448:
case 3695:
case 674:
case 3966:
case 3276:
case 1829:
case 73:
case 1663:
case 41:
case 279:
case 2742:
case 3750:
case 433:
case 3522:
case 1274:
case 2284:
case 3195:
case 1017:
case 3304:
case 1771:
case 3496:
case 1423:
case 3258:
case 848:
case 1336:
case 1494:
case 430:
case 724:
case 788:
case 3072:
case 2355:
case 1966:
case 3992:
case 394:
case 1276:
case 449:
case 1898:
case 3019:
case 1750:
case 2039:
case 3274:
case 3827:
case 753:
case 3122:
case 4088:
case 2286:
case 2846:
case 760:
case 1295:
case 3346:
case 3973:
case 543:
case 2327:
case 3777:
case 2001:
case 764:
case 2806:
case 1176:
case 1420:
case 2438:
case 3160:
case 3418:
case 4045:
case 2329:
case 3475:
case 1558:
case 714:
case 2686:
case 720:
case 2732:
case 193:
case 457:
case 3712:
case 1011:
case 3093:
case 136:
case 1821:
case 1026:
case 2755:
case 1938:
case 816:
case 3141:
case 155:
case 2812:
case 2117:
case 470:
case 1537:
case 315:
case 1368:
case 1736:
case 3139:
case 1371:
case 2190:
case 1607:
case 3641:
case 1704:
case 2617:
case 2457:
case 3706:
case 866:
case 3507:
case 1802:
case 1350:
case 3639:
case 1182:
case 1247:
case 2224:
case 2690:
case 1231:
case 1107:
case 341:
case 3908:
case 2459:
case 2293:
case 1842:
case 1207:
case 3379:
case 1147:
case 940:
case 897:
case 3948:
case 2058:
case 3549:
case 2526:
case 505:
case 795:
case 2923:
case 3746:
case 2272:
case 2962:
case 1501:
case 2693:
case 176:
case 4013:
case 3239:
case 2624:
case 2219:
case 1631:
case 826:
case 1084:
case 3101:
case 3086:
case 939:
case 2217:
case 1649:
case 1748:
case 3530:
case 3035:
case 3600:
case 2383:
case 512:
case 2128:
case 2597:
case 1946:
case 2796:
case 36:
case 1543:
case 599:
case 709:
case 1130:
case 507:
case 3100:
case 1088:
case 3357:
case 562:
case 15:
case 3643:
case 396:
case 1442:
case 2061:
case 149:
case 2866:
case 1630:
case 2291:
case 3359:
case 1500:
case 918:
case 231:
case 980:
case 2078:
case 1364:
case 1402:
case 641:
case 381:
case 1487:
case 1540:
case 2479:
case 984:
case 367:
case 1133:
case 302:
case 665:
case 2513:
case 2921:
case 3200:
case 4065:
case 1489:
case 571:
case 2916:
case 2477:
case 3603:
case 2380:
case 3936:
case 317:
case 4011:
case 258:
case 1633:
case 615:
case 4026:
case 716:
case 436:
case 1503:
case 1785:
case 1230:
case 3904:
case 134:
case 3103:
case 1392:
case 3883:
case 1708:
case 79:
case 2775:
case 157:
case 20:
case 1416:
case 1656:
case 1773:
case 814:
case 2396:
case 558:
case 1578:
case 1348:
case 170:
case 2902:
case 3615:
case 1561:
case 864:
case 3678:
case 1820:
case 690:
case 2838:
case 1269:
case 1515:
case 946:
case 3115:
case 3556:
case 2406:
case 3757:
case 1097:
case 2780:
case 2003:
case 108:
case 3971:
case 3567:
case 262:
case 2318:
case 489:
case 3338:
case 694:
case 1770:
case 3254:
case 853:
case 1667:
case 3950:
case 4084:
case 748:
case 1308:
case 174:
case 1792:
case 2942:
case 299:
case 2375:
case 3091:
case 1669:
case 3261:
case 888:
case 3278:
case 212:
case 810:
case 1894:
case 1013:
case 3290:
case 3219:
case 1868:
case 1076:
case 1451:
case 1871:
case 225:
case 3962:
case 3217:
case 2881:
case 2101:
case 2237:
case 452:
case 2312:
case 778:
case 1850:
case 2549:
case 1302:
case 1470:
case 3058:
case 1464:
case 1798:
case 3124:
case 2379:
case 3466:
case 2531:
case 3272:
case 1524:
case 1996:
case 1665:
case 1389:
case 3923:
case 3511:
case 3727:
case 3994:
case 2507:
case 2706:
case 3457:
case 976:
case 1975:
case 3293:
case 3063:
case 3459:
case 2908:
case 265:
case 241:
case 3619:
case 3224:
case 2639:
case 2832:
case 140:
case 3920:
case 2137:
case 2141:
case 1590:
case 3381:
case 1519:
case 989:
case 1095:
case 1265:
case 1918:
case 3119:
case 3190:
case 2734:
case 2139:
case 1721:
case 869:
case 1684:
case 418:
case 3732:
case 191:
case 3686:
case 1408:
case 515:
case 2475:
case 622:
case 1485:
case 2158:
case 4069:
case 2814:
case 2674:
case 2660:
case 2024:
case 60:
case 565:
case 3186:
case 3327:
case 2777:
case 819:
case 1804:
case 2973:
case 2346:
case 541:
case 2779:
case 2174:
case 1398:
case 671:
case 1702:
case 892:
case 2658:
case 993:
case 1742:
case 305:
case 662:
case 294:
case 3041:
case 3286:
case 2017:
case 2951:
case 829:
case 2122:
case 751:
case 1844:
case 2827:
case 2306:
case 612:
case 1980:
case 1316:
case 2258:
case 2496:
case 2334:
case 1007:
case 2622:
case 3781:
case 428:
case 2072:
case 1448:
case 2964:
case 2970:
case 56:
case 2725:
case 2052:
case 444:
case 1288:
case 3545:
case 3040:
case 527:
case 1205:
case 1145:
case 2278:
case 1033:
case 2091:
case 2896:
case 146:
case 3446:
case 2968:
case 3003:
case 2215:
case 2427:
case 851:
case 2766:
case 1645:
case 2429:
case 3318:
case 362:
case 2567:
case 2759:
case 719:
case 1535:
case 439:
case 2678:
case 1932:
case 567:
case 792:
case 502:
case 2556:
case 52:
case 2115:
case 1362:
case 581:
case 1404:
case 2953:
case 3396:
case 1885:
case 1245:
case 3434:
case 2414:
case 3989:
case 322:
case 2178:
case 2161:
case 1394:
case 769:
case 1436:
case 3635:
case 3987:
case 1808:
case 3000:
case 2455:
case 1069:
case 1299:
case 4031:
case 4047:
case 1613:
case 3228:
case 180:
case 491:
case 118:
case 1297:
case 2640:
case 3412:
case 2325:
case 3775:
case 4049:
case 2883:
case 2366:
case 202:
case 1955:
case 800:
case 267:
case 3859:
case 3479:
case 22:
case 1591:
case 3477:
case 3857:
case 3916:
case 168:
case 2533:
case 3921:
case 2200:
case 2357:
case 1697:
case 2240:
case 2880:
case 1864:
case 233:
case 804:
case 1213:
case 2359:
case 3291:
case 3061:
case 1610:
case 1699:
case 479:
case 128:
case 2600:
case 2481:
case 1197:
case 4009:
case 2035:
case 2530:
case 3510:
case 2203:
case 2143:
case 3599:
case 1927:
case 878:
case 1110:
case 3054:
case 1468:
case 26:
case 1794:
case 4007:
case 1056:
case 1471:
case 227:
case 1723:
case 1538:
case 3740:
case 2675:
case 2752:
case 2025:
case 1608:
case 1369:
case 3138:
case 789:
case 1733:
case 2854:
case 2118:
case 1108:
case 587:
case 3080:
case 545:
case 1248:
case 448:
case 2618:
case 232:
case 377:
case 2878:
case 900:
case 776:
case 2196:
case 834:
case 3361:
case 2463:
case 2059:
case 3548:
case 1285:
case 1845:
case 755:
case 2275:
case 1148:
case 2926:
case 3743:
case 3931:
case 572:
case 2911:
case 2057:
case 3354:
case 37:
case 4016:
case 1901:
case 2696:
case 1356:
case 2965:
case 521:
case 2422:
case 3700:
case 3083:
case 1648:
case 3166:
case 1411:
case 323:
case 3259:
case 1164:
case 1651:
case 466:
case 1170:
case 3625:
case 1963:
case 1692:
case 3075:
case 3257:
case 1566:
case 3828:
case 1020:
case 736:
case 4087:
case 1670:
case 354:
case 3018:
case 951:
case 635:
case 1922:
case 3666:
case 337:
case 1273:
case 4089:
case 793:
case 2401:
case 49:
case 3125:
case 3551:
case 120:
case 1960:
case 2183:
case 1974:
case 3573:
case 3225:
case 2441:
case 3343:
case 3417:
case 188:
case 3976:
case 1292:
case 3659:
case 4042:
case 1330:
case 3761:
case 426:
case 363:
case 874:
case 3490:
case 261:
case 3419:
case 2280:
case 3715:
case 1958:
case 2735:
case 3157:
case 4:
case 497:
case 2683:
case 3300:
case 1023:
case 3266:
case 3891:
case 1673:
case 1094:
case 1813:
case 3754:
case 3159:
case 1270:
case 808:
case 33:
case 1264:
case 3491:
case 1331:
case 3179:
case 63:
case 1347:
case 1413:
case 1250:
case 708:
case 1579:
case 598:
case 495:
case 1349:
case 1961:
case 2587:
case 3452:
case 969:
case 247:
case 1512:
case 650:
case 1915:
case 2839:
case 3819:
case 1098:
case 3758:
case 2403:
case 3677:
case 1954:
case 2841:
case 2281:
case 2046:
case 148:
case 2317:
case 2443:
case 770:
case 906:
case 1865:
case 3969:
case 3337:
case 1497:
case 836:
case 2801:
case 3212:
case 2006:
case 3571:
case 3428:
case 1171:
case 1650:
case 1168:
case 1410:
case 893:
case 637:
case 1499:
case 3763:
case 2372:
case 2681:
case 2945:
case 1795:
case 3277:
case 1309:
case 1668:
case 24:
case 3824:
case 623:
case 1826:
case 3279:
case 2034:
case 1307:
case 1150:
case 3893:
case 3014:
case 1382:
case 1144:
case 2598:
case 2127:
case 464:
case 1749:
case 1204:
case 2999:
case 54:
case 2910:
case 3146:
case 2012:
case 3206:
case 3374:
case 1747:
case 3360:
case 2997:
case 1376:
case 2255:
case 1089:
case 3646:
case 734:
case 1644:
case 420:
case 19:
case 3701:
case 1087:
case 1002:
case 3358:
case 2629:
case 2214:
case 342:
case 1900:
case 682:
case 1445:
case 3234:
case 2079:
case 855:
case 3363:
case 1136:
case 677:
case 2719:
case 2478:
case 2790:
case 1940:
case 3134:
case 1405:
case 3739:
case 876:
case 2155:
case 585:
case 3606:
case 730:
case 488:
case 3737:
case 4062:
case 3741:
case 2614:
case 1707:
case 2229:
case 298:
case 4023:
case 3634:
case 1506:
case 1636:
case 749:
case 4094:
case 2454:
case 1903:
case 1104:
case 3435:
case 2227:
case 1244:
case 2415:
case 2655:
case 1395:
case 3886:
case 197:
case 453:
case 2157:
case 3735:
case 1409:
case 23:
case 4068:
case 914:
case 2754:
case 4071:
case 2891:
case 2266:
case 2417:
case 2343:
case 2225:
case 846:
case 2573:
case 1397:
case 1788:
case 2657:
case 577:
case 3183:
case 2419:
case 2490:
case 361:
case 1705:
case 263:
case 250:
case 1399:
case 852:
case 685:
case 1986:
case 2761:
case 2659:
case 2666:
case 2018:
case 2592:
case 2828:
case 582:
case 2551:
case 2303:
case 3401:
case 3680:
case 3283:
case 3843:
case 138:
case 2493:
case 924:
case 988:
case 3391:
case 910:
case 1580:
case 2424:
case 64:
case 1431:
case 223:
case 2340:
case 2257:
case 2564:
case 1449:
case 2570:
case 3180:
case 3800:
case 2625:
case 1623:
case 3696:
case 739:
case 4036:
case 3335:
case 2083:
case 523:
case 2700:
case 1495:
case 1194:
case 2548:
case 1710:
case 3059:
case 469:
case 995:
case 880:
case 303:
case 201:
case 3523:
case 2931:
case 1924:
case 1388:
case 1596:
case 2947:
case 3926:
case 740:
case 3275:
case 4004:
case 554:
case 563:
case 2585:
case 2703:
case 744:
case 550:
case 2909:
case 3458:
case 828:
case 884:
case 2638:
case 3296:
case 2486:
case 53:
case 1518:
case 3815:
case 1990:
case 3460:
case 3474:
case 1713:
case 2138:
case 698:
case 1120:
case 406:
case 1917:
case 1476:
case 1051:
case 1856:
case 3454:
case 1068:
case 3874:
case 2634:
case 1621:
case 398:
case 1456:
case 1071:
case 3614:
case 3229:
case 451:
case 3772:
case 2435:
case 2739:
case 3114:
case 3858:
case 3478:
case 1116:
case 275:
case 632:
case 2737:
case 2536:
case 1991:
case 2606:
case 728:
case 3913:
case 2933:
case 3155:
case 2701:
case 3077:
case 3627:
case 535:
case 780:
case 438:
case 3255:
case 3863:
case 2234:
case 3079:
case 1221:
case 997:
case 3629:
case 2358:
case 603:
case 2206:
case 768:
case 3012:
case 1384:
case 2146:
case 2032:
case 1529:
case 839:
case 3822:
case 926:
case 909:
case 2930:
case 3127:
case 4085:
case 2544:
case 1198:
case 1527:
case 1053:
case 3997:
case 400:
case 359:
case 2277:
case 1289:
case 1849:
case 192:
case 2055:
case 3400:
case 3945:
case 4073:
case 2893:
case 2279:
case 948:
case 1831:
case 1287:
case 1847:
case 119:
case 1202:
case 3801:
case 1004:
case 2969:
case 2337:
case 2568:
case 3443:
case 3317:
case 1430:
case 891:
case 556:
case 2339:
case 1581:
case 3390:
case 2890:
case 1935:
case 4070:
case 2819:
case 3839:
case 661:
case 746:
case 1532:
case 2029:
case 2679:
case 347:
case 478:
case 3132:
case 1689:
case 3046:
case 2112:
case 752:
case 1044:
case 2027:
case 2553:
case 3403:
case 1311:
case 2774:
case 3324:
case 3988:
case 2179:
case 2760:
case 2491:
case 106:
case 4051:
case 1102:
case 611:
case 1882:
case 404:
case 2452:
case 3786:
case 1189:
case 3905:
case 2098:
case 3935:
case 3602:
case 2915:
case 1839:
case 3532:
case 147:
case 4066:
case 2512:
case 712:
case 3365:
case 248:
case 3689:
case 526:
case 2954:
case 3433:
case 707:
case 1589:
case 2250:
case 2331:
case 5:
case 2413:
case 1324:
case 2653:
case 3187:
case 3326:
case 2577:
case 329:
case 3242:
case 3102:
case 4025:
case 651:
case 1786:
case 1632:
case 1440:
case 2579:
case 566:
case 1542:
case 2309:
case 2795:
case 3849:
case 3289:
case 2150:
case 2382:
case 2671:
case 2826:
case 1034:
case 3847:
case 3831:
case 3036:
case 2016:
case 319:
case 14:
case 1232:
case 1181:
case 2497:
case 4057:
case 1801:
case 1006:
case 516:
case 2865:
case 70:
case 3430:
case 3642:
case 2168:
case 4059:
case 369:
case 2499:
case 59:
case 2650:
case 722:
case 1319:
case 29:
case 3765:
case 3221:
case 758:
case 1079:
case 2087:
case 2236:
case 3928:
case 600:
case 3467:
case 1910:
case 843:
case 1598:
case 2144:
case 1127:
case 1386:
case 3895:
case 2749:
case 2204:
case 2376:
case 2943:
case 3198:
case 3527:
case 783:
case 48:
case 3711:
case 2747:
case 1724:
case 3616:
case 3068:
case 1454:
case 956:
case 2903:
case 3298:
case 2636:
case 2782:
case 0:
case 1614:
case 3876:
case 731:
case 411:
case 3456:
case 3071:
case 2:
case 942:
case 2395:
case 297:
case 604:
case 1655:
case 1415:
case 1227:
case 2709:
case 2940:
case 2405:
case 3121:
case 1858:
case 1719:
case 1114:
case 1790:
case 487:
case 226:
case 3952:
case 1516:
case 678:
case 1717:
case 2604:
case 2534:
case 1155:
case 378:
case 2185:
case 3294:
case 2805:
case 588:
case 3070:
case 3575:
case 510:
case 3223:
case 1296:
case 3972:
case 831:
case 295:
case 1025:
case 1520:
case 1675:
case 304:
case 901:
case 2939:
case 3919:
case 553:
case 1460:
case 1118:
case 2733:
case 2937:
case 3856:
case 1965:
case 1696:
case 3694:
case 44:
case 2901:
case 459:
case 3162:
case 3867:
case 883:
case 3495:
case 1059:
case 3799:
case 2285:
case 3710:
case 2845:
case 2730:
case 514:
case 3123:
case 1196:
case 3797:
case 3924:
case 3388:
case 3596:
case 2148:
case 1594:
case 2208:
case 3993:
case 3830:
case 669:
case 2922:
case 2664:
case 2151:
case 2525:
case 1401:
case 4077:
case 93:
case 913:
case 2465:
case 1843:
case 1283:
case 2164:
case 2170:
case 3580:
case 3085:
case 1391:
case 2426:
case 3313:
case 619:
case 2333:
case 2411:
case 963:
case 871:
case 264:
case 1800:
case 692:
case 2963:
case 3008:
case 3409:
case 2958:
case 1735:
case 2559:
case 807:
case 3048:
case 954:
case 2094:
case 2813:
case 629:
case 2756:
case 111:
case 3407:
case 2673:
case 3482:
case 812:
case 288:
case 224:
case 1441:
case 923:
case 2960:
case 3788:
case 1328:
case 3705:
case 3986:
case 187:
case 2330:
case 145:
case 326:
case 2952:
case 3136:
case 2116:
case 3042:
case 309:
case 727:
case 2121:
case 1739:
case 1134:
case 3940:
case 825:
case 1606:
case 1536:
case 2991:
case 1737:
case 2876:
case 2456:
case 2071:
case 3782:
case 3636:
case 2298:
case 3709:
case 3244:
case 506:
case 1435:
case 1886:
case 397:
case 1081:
case 1106:
case 3204:
case 4075:
case 3144:
case 519:
case 1032:
case 2529:
case 865:
case 2384:
case 1146:
case 767:
case 3731:
case 592:
case 1374:
case 2711:
case 2198:
case 1544:
case 366:
case 2527:
case 2469:
case 72:
case 2726:
case 781:
case 1646:
case 998:
case 815:
case 3644:
case 156:
case 1701:
case 569:
case 454:
case 3236:
case 3087:
case 316:
case 437:
case 3900:
case 3865:
case 1969:
case 1341:
case 3650:
case 401:
case 3171:
case 1339:
case 1967:
case 3499:
case 3168:
case 269:
case 2430:
case 482:
case 3253:
case 4083:
case 1722:
case 2849:
case 947:
case 292:
case 3811:
case 2036:
case 1824:
case 2287:
case 2847:
case 3307:
case 1279:
case 3021:
case 3382:
case 1014:
case 1893:
case 2102:
case 2882:
case 2242:
case 3776:
case 2807:
case 3347:
case 1179:
case 1760:
case 3250:
case 2311:
case 2433:
case 3579:
case 2189:
case 894:
case 1177:
case 653:
case 3512:
case 477:
case 2532:
case 1029:
case 3153:
case 2935:
case 2687:
case 3098:
case 1819:
case 959:
case 3954:
case 94:
case 2044:
case 1553:
case 688:
case 1112:
case 610:
case 2365:
case 1956:
case 2788:
case 3974:
case 3960:
case 921:
case 3062:
case 324:
case 1976:
case 3292:
case 1417:
case 310:
case 1343:
case 1761:
case 475:
case 150:
case 2399:
case 3251:
case 2310:
case 2705:
case 163:
case 2583:
case 1419:
case 1778:
case 3173:
case 578:
case 3559:
case 360:
case 2409:
case 4081:
case 1300:
case 2482:
case 3023:
case 113:
case 3673:
case 1096:
case 794:
case 1754:
case 3264:
case 123:
case 3411:
case 1424:
case 2447:
case 2313:
case 2431:
case 2085:
case 790:
case 3426:
case 1259:
case 3769:
case 3164:
case 3651:
case 500:
case 2008:
case 873:
case 1625:
case 1564:
case 945:
case 364:
case 2449:
case 1570:
case 3566:
case 1340:
case 3767:
case 3525:
case 1592:
case 3151:
case 3664:
case 154:
case 2745:
case 3810:
case 1666:
case 3899:
case 1018:
case 911:
case 3897:
case 2305:
case 1378:
case 616:
case 435:
case 3730:
case 182:
case 1361:
case 2194:
case 3845:
case 3285:
case 817:
case 3148:
case 2662:
case 2388:
case 1947:
case 2797:
case 1354:
case 765:
case 3901:
case 2220:
case 1238:
case 2073:
case 4014:
case 3356:
case 666:
case 741:
case 2623:
case 4055:
case 1083:
case 1700:
case 1315:
case 200:
case 2162:
case 3648:
case 2990:
case 1835:
case 81:
case 2092:
case 833:
case 6:
case 395:
case 2262:
case 2476:
case 2856:
case 3941:
case 3369:
case 551:
case 1138:
case 2713:
case 1585:
case 3888:
case 3108:
case 1080:
case 827:
case 1907:
case 86:
case 2345:
case 609:
case 1909:
case 725:
case 2070:
case 1508:
case 2294:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745373601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,];
var gg_b = "1745373601/";

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
