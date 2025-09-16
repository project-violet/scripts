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
case 3442:
case 1293:
case 804:
case 985:
case 1039:
case 819:
case 2010:
case 746:
case 1200:
case 1503:
case 66:
case 1202:
case 2199:
case 199:
case 3440:
case 3804:
case 742:
case 733:
case 1338:
case 1711:
case 2348:
case 1902:
case 3764:
case 129:
case 3394:
case 4039:
case 3289:
case 3495:
case 2535:
case 499:
case 2576:
case 2524:
case 1693:
case 3091:
case 3816:
case 2564:
case 2655:
case 62:
case 3141:
case 613:
case 651:
case 2246:
case 2122:
case 2160:
case 2882:
case 1936:
case 1975:
case 2880:
case 4044:
case 1341:
case 1556:
case 2718:
case 2331:
case 2377:
case 20:
case 2851:
case 1675:
case 2383:
case 1194:
case 3157:
case 1067:
case 1336:
case 304:
case 2631:
case 3317:
case 560:
case 3780:
case 3100:
case 1466:
case 1641:
case 1869:
case 3401:
case 2231:
case 3818:
case 71:
case 228:
case 4027:
case 1241:
case 2983:
case 681:
case 91:
case 1709:
case 1459:
case 2582:
case 1941:
case 2704:
case 2454:
case 2948:
case 472:
case 2355:
case 2876:
case 1302:
case 923:
case 1300:
case 1845:
case 1571:
case 1938:
case 139:
case 3136:
case 2864:
case 2248:
case 3175:
case 3694:
case 1238:
case 480:
case 993:
case 1657:
case 1803:
case 1890:
case 3389:
case 955:
case 1892:
case 763:
case 1257:
case 3294:
case 176:
case 63:
case 1763:
case 847:
case 180:
case 3451:
case 1396:
case 2873:
case 2127:
case 3949:
case 3861:
case 595:
case 2887:
case 3210:
case 287:
case 3249:
case 2691:
case 3513:
case 2370:
case 511:
case 271:
case 3610:
case 553:
case 3649:
case 2372:
case 3150:
case 3480:
case 2089:
case 565:
case 1726:
case 2991:
case 83:
case 3152:
case 647:
case 3665:
case 2686:
case 3447:
case 1998:
case 3625:
case 2343:
case 146:
case 3634:
case 1298:
case 999:
case 877:
case 2416:
case 1423:
case 3196:
case 1907:
case 4084:
case 2840:
case 2404:
case 502:
case 1698:
case 2819:
case 3925:
case 506:
case 39:
case 446:
case 3934:
case 3265:
case 32:
case 1607:
case 3579:
case 2519:
case 2542:
case 1530:
case 1307:
case 1110:
case 4015:
case 1099:
case 1532:
case 1112:
case 851:
case 1149:
case 813:
case 939:
case 2943:
case 1650:
case 1281:
case 455:
case 123:
case 1652:
case 1398:
case 2605:
case 493:
case 2595:
case 163:
case 1768:
case 3719:
case 776:
case 1015:
case 1897:
case 1553:
case 3476:
case 3435:
case 264:
case 3740:
case 3325:
case 308:
case 3031:
case 2643:
case 1950:
case 1808:
case 780:
case 33:
case 1411:
case 3424:
case 423:
case 155:
case 972:
case 2905:
case 1952:
case 86:
case 3048:
case 3198:
case 1022:
case 604:
case 2418:
case 583:
case 1060:
case 619:
case 1296:
case 41:
case 3312:
case 3349:
case 1996:
case 377:
case 2670:
case 3310:
case 2761:
case 89:
case 1165:
case 2391:
case 4020:
case 1125:
case 4022:
case 11:
case 2270:
case 1134:
case 3813:
case 2972:
case 2094:
case 2587:
case 257:
case 2988:
case 1273:
case 1572:
case 605:
case 2914:
case 1588:
case 3796:
case 2179:
case 1987:
case 1570:
case 2606:
case 1973:
case 3359:
case 958:
case 1287:
case 3374:
case 2063:
case 167:
case 1687:
case 2596:
case 4004:
case 2154:
case 1673:
case 3071:
case 3037:
case 206:
case 295:
case 2807:
case 2550:
case 2552:
case 3733:
case 2630:
case 2767:
case 373:
case 3668:
case 3781:
case 1995:
case 2727:
case 3628:
case 454:
case 2953:
case 2009:
case 1219:
case 3844:
case 3750:
case 622:
case 3268:
case 2232:
case 2113:
case 1240:
case 626:
case 2397:
case 3402:
case 3752:
case 2930:
case 692:
case 211:
case 1919:
case 3567:
case 1695:
case 349:
case 1174:
case 154:
case 1886:
case 2653:
case 2932:
case 1940:
case 2833:
case 2353:
case 317:
case 3544:
case 3457:
case 1843:
case 1395:
case 2608:
case 184:
case 1586:
case 4018:
case 679:
case 47:
case 3867:
case 283:
case 2297:
case 1805:
case 1340:
case 3368:
case 901:
case 2330:
case 2507:
case 2744:
case 2850:
case 1319:
case 2598:
case 484:
case 1765:
case 2420:
case 2997:
case 3029:
case 1018:
case 2208:
case 17:
case 701:
case 524:
case 3441:
case 1373:
case 3666:
case 1591:
case 3045:
case 2739:
case 1710:
case 873:
case 3659:
case 1888:
case 788:
case 3926:
case 1870:
case 912:
case 3274:
case 3966:
case 3226:
case 437:
case 3092:
case 3090:
case 2285:
case 2499:
case 3974:
case 3003:
case 712:
case 2802:
case 1434:
case 1376:
case 1335:
case 1021:
case 2345:
case 1061:
case 2958:
case 2800:
case 2762:
case 289:
case 2720:
case 1364:
case 1425:
case 2258:
case 2722:
case 14:
case 3738:
case 366:
case 2390:
case 322:
case 2303:
case 954:
case 4021:
case 1247:
case 2237:
case 326:
case 1947:
case 3006:
case 754:
case 3562:
case 1548:
case 3263:
case 2538:
case 3560:
case 2118:
case 3223:
case 1846:
case 3609:
case 1978:
case 1531:
case 3124:
case 158:
case 2875:
case 2836:
case 727:
case 1280:
case 1583:
case 3884:
case 832:
case 1251:
case 836:
case 3741:
case 2439:
case 967:
case 3209:
case 2715:
case 1412:
case 2028:
case 1449:
case 3736:
case 2256:
case 937:
case 2104:
case 2784:
case 4054:
case 866:
case 2629:
case 3899:
case 737:
case 416:
case 1378:
case 2841:
case 1163:
case 2575:
case 1351:
case 4079:
case 1877:
case 2269:
case 1546:
case 1123:
case 1831:
case 3008:
case 822:
case 896:
case 1883:
case 3147:
case 3097:
case 3584:
case 112:
case 3309:
case 1924:
case 3178:
case 1235:
case 4013:
case 3702:
case 3182:
case 3860:
case 2945:
case 3211:
case 3822:
case 3820:
case 1976:
case 1264:
case 379:
case 1848:
case 2603:
case 1935:
case 2292:
case 290:
case 1789:
case 1109:
case 336:
case 1624:
case 2203:
case 2502:
case 3433:
case 332:
case 2066:
case 3151:
case 343:
case 3323:
case 2467:
case 2992:
case 220:
case 528:
case 2903:
case 1029:
case 2786:
case 601:
case 1438:
case 37:
case 3725:
case 936:
case 736:
case 3319:
case 2679:
case 4029:
case 3586:
case 1798:
case 2654:
case 2279:
case 4069:
case 897:
case 2534:
case 2114:
case 1544:
case 2979:
case 3494:
case 291:
case 854:
case 1119:
case 1092:
case 1539:
case 2130:
case 612:
case 1003:
case 2213:
case 1140:
case 616:
case 1090:
case 2549:
case 1926:
case 1274:
case 2913:
case 3872:
case 2791:
case 688:
case 261:
case 1259:
case 4092:
case 3710:
case 1045:
case 337:
case 3749:
case 4003:
case 2321:
case 3712:
case 3201:
case 2477:
case 215:
case 400:
case 540:
case 3591:
case 1441:
case 3373:
case 1666:
case 3673:
case 1366:
case 2313:
case 2047:
case 1326:
case 1037:
case 3417:
case 1475:
case 3016:
case 2772:
case 1374:
case 3687:
case 4058:
case 2661:
case 2446:
case 367:
case 2770:
case 2812:
case 3004:
case 2849:
case 2221:
case 884:
case 327:
case 4037:
case 1839:
case 2:
case 3287:
case 2810:
case 4071:
case 1359:
case 3572:
case 3570:
case 397:
case 3588:
case 1796:
case 3695:
case 926:
case 3919:
case 2051:
case 1968:
case 1527:
case 922:
case 1928:
case 149:
case 3174:
case 3242:
case 3126:
case 1268:
case 1844:
case 1400:
case 1750:
case 2834:
case 1402:
case 1228:
case 2455:
case 2185:
case 3166:
case 992:
case 3619:
case 766:
case 1781:
case 1668:
case 762:
case 449:
case 1628:
case 2080:
case 3295:
case 966:
case 2082:
case 1815:
case 1584:
case 312:
case 3883:
case 1147:
case 2137:
case 2517:
case 1309:
case 2171:
case 2918:
case 388:
case 3123:
case 3877:
case 3546:
case 1899:
case 3382:
case 84:
case 3378:
case 2472:
case 2746:
case 2488:
case 4008:
case 2470:
case 3079:
case 301:
case 1481:
case 244:
case 67:
case 3624:
case 1611:
case 2894:
case 2443:
case 3109:
case 132:
case 3664:
case 1085:
case 3013:
case 3347:
case 3555:
case 1822:
case 684:
case 443:
case 1211:
case 2001:
case 1860:
case 3264:
case 179:
case 1820:
case 3976:
case 1793:
case 717:
case 1180:
case 2405:
case 3276:
case 2755:
case 1182:
case 3235:
case 2304:
case 1498:
case 2129:
case 1562:
case 816:
case 3947:
case 1520:
case 466:
case 1223:
case 654:
case 2169:
case 1522:
case 812:
case 1560:
case 949:
case 1407:
case 126:
case 1923:
case 2073:
case 162:
case 492:
case 2748:
case 2904:
case 2486:
case 3425:
case 773:
case 2616:
case 1014:
case 3335:
case 1663:
case 3434:
case 3376:
case 3855:
case 973:
case 2087:
case 3410:
case 2192:
case 2019:
case 3951:
case 1032:
case 2040:
case 3412:
case 2190:
case 582:
case 2777:
case 3251:
case 570:
case 518:
case 2731:
case 545:
case 2318:
case 210:
case 667:
case 1741:
case 3682:
case 3278:
case 2145:
case 4032:
case 1884:
case 1515:
case 1053:
case 1176:
case 3583:
case 3282:
case 3111:
case 3978:
case 3980:
case 3846:
case 697:
case 3709:
case 2215:
case 2052:
case 1005:
case 1818:
case 1401:
case 1751:
case 781:
case 2699:
case 3241:
case 419:
case 3829:
case 2509:
case 3426:
case 1778:
case 1780:
case 1043:
case 829:
case 1782:
case 2299:
case 899:
case 977:
case 2081:
case 3067:
case 203:
case 3375:
case 2615:
case 3027:
case 3336:
case 2999:
case 119:
case 73:
case 1994:
case 1070:
case 2662:
case 1747:
case 376:
case 3638:
case 3257:
case 1389:
case 2622:
case 93:
case 2771:
case 2563:
case 1175:
case 623:
case 2220:
case 2523:
case 2146:
case 2222:
case 2811:
case 2260:
case 1694:
case 2096:
case 2920:
case 3938:
case 256:
case 3300:
case 3600:
case 245:
case 72:
case 1989:
case 270:
case 578:
case 3602:
case 1141:
case 1816:
case 1495:
case 92:
case 3837:
case 286:
case 2453:
case 2703:
case 2183:
case 369:
case 350:
case 1724:
case 3338:
case 2360:
case 3711:
case 96:
case 1689:
case 2322:
case 1764:
case 3902:
case 4091:
case 3039:
case 399:
case 3503:
case 646:
case 2315:
case 1487:
case 2729:
case 3556:
case 2684:
case 1086:
case 2769:
case 872:
case 3975:
case 0:
case 2007:
case 913:
case 1217:
case 447:
case 2098:
case 3275:
case 4086:
case 2984:
case 3529:
case 1518:
case 1138:
case 3569:
case 13:
case 355:
case 3808:
case 3950:
case 3952:
case 1464:
case 2191:
case 1719:
case 672:
case 363:
case 3768:
case 1742:
case 1854:
case 1435:
case 676:
case 1476:
case 1334:
case 3252:
case 2267:
case 639:
case 515:
case 240:
case 3650:
case 2227:
case 3652:
case 3933:
case 2492:
case 2568:
case 1795:
case 3530:
case 561:
case 3307:
case 393:
case 2753:
case 4083:
case 3233:
case 3112:
case 2490:
case 3099:
case 3532:
case 1813:
case 3134:
case 1521:
case 477:
case 1561:
case 2874:
case 31:
case 181:
case 3125:
case 833:
case 1312:
case 1107:
case 2339:
case 3506:
case 1773:
case 1048:
case 2038:
case 3022:
case 3726:
case 1478:
case 4055:
case 2105:
case 2785:
case 1152:
case 1482:
case 58:
case 451:
case 863:
case 1649:
case 1612:
case 3774:
case 2143:
case 3759:
case 3409:
case 2526:
case 1212:
case 1133:
case 1513:
case 823:
case 3396:
case 2939:
case 1451:
case 1181:
case 214:
case 2574:
case 574:
case 1912:
case 1265:
case 1934:
case 4046:
case 1579:
case 3607:
case 2708:
case 3352:
case 2828:
case 46:
case 19:
case 2244:
case 3350:
case 2075:
case 1634:
case 2327:
case 3907:
case 3423:
case 629:
case 3508:
case 42:
case 1196:
case 1554:
case 1447:
case 3084:
case 3597:
case 346:
case 2437:
case 699:
case 2471:
case 5:
case 3207:
case 907:
case 2781:
case 513:
case 1379:
case 3630:
case 3767:
case 273:
case 174:
case 3898:
case 3550:
case 1078:
case 707:
case 3807:
case 395:
case 1743:
case 1082:
case 2733:
case 353:
case 3308:
case 3930:
case 1051:
case 18:
case 3230:
case 365:
case 2400:
case 3009:
case 1834:
case 4082:
case 2402:
case 2752:
case 1455:
case 1705:
case 1185:
case 3533:
case 835:
case 1812:
case 883:
case 3606:
case 1849:
case 1221:
case 3214:
case 56:
case 1810:
case 431:
case 3179:
case 2796:
case 1197:
case 2366:
case 3154:
case 1047:
case 3906:
case 2326:
case 59:
case 2071:
case 2475:
case 3206:
case 3614:
case 2436:
case 1108:
case 1788:
case 131:
case 1770:
case 491:
case 161:
case 2259:
case 1153:
case 3314:
case 3415:
case 1076:
case 2674:
case 3896:
case 1024:
case 3011:
case 115:
case 148:
case 2959:
case 2441:
case 1064:
case 895:
case 2666:
case 461:
case 2092:
case 2539:
case 2003:
case 2140:
case 2974:
case 2090:
case 1549:
case 811:
case 2926:
case 53:
case 4024:
case 415:
case 448:
case 200:
case 508:
case 865:
case 3985:
case 1913:
case 1791:
case 2827:
case 1565:
case 2173:
case 3697:
case 2798:
case 2056:
case 1654:
case 1525:
case 15:
case 3353:
case 3121:
case 1114:
case 3833:
case 2707:
case 2457:
case 3161:
case 3997:
case 3598:
case 1106:
case 1954:
case 2438:
case 3460:
case 45:
case 659:
case 3208:
case 581:
case 1254:
case 2328:
case 3297:
case 3744:
case 3908:
case 7:
case 4042:
case 1145:
case 2884:
case 2515:
case 2053:
case 2135:
case 2176:
case 3799:
case 9:
case 2609:
case 205:
case 410:
case 478:
case 2164:
case 3836:
case 1491:
case 3356:
case 1192:
case 1019:
case 4095:
case 931:
case 2030:
case 602:
case 1042:
case 1783:
case 606:
case 3028:
case 731:
case 1318:
case 2909:
case 3329:
case 1748:
case 3762:
case 625:
case 2311:
case 266:
case 2738:
case 3722:
case 3671:
case 3258:
case 1616:
case 1204:
case 974:
case 1594:
case 107:
case 3345:
case 2263:
case 292:
case 611:
case 1604:
case 653:
case 2520:
case 296:
case 3118:
case 78:
case 330:
case 3538:
case 2560:
case 3303:
case 1916:
case 3390:
case 222:
case 2963:
case 3392:
case 4087:
case 2757:
case 2407:
case 226:
case 547:
case 2822:
case 75:
case 2211:
case 3838:
case 635:
case 504:
case 279:
case 519:
case 683:
case 2793:
case 1589:
case 2911:
case 95:
case 3059:
case 2450:
case 2180:
case 360:
case 1405:
case 243:
case 3467:
case 3645:
case 4001:
case 144:
case 3903:
case 359:
case 3074:
case 3026:
case 3337:
case 1894:
case 3292:
case 1443:
case 232:
case 3290:
case 2085:
case 3066:
case 3502:
case 2899:
case 3784:
case 761:
case 889:
case 1488:
case 1470:
case 715:
case 748:
case 2097:
case 2815:
case 2584:
case 830:
case 2147:
case 3656:
case 1137:
case 1517:
case 3536:
case 3575:
case 3841:
case 2496:
case 3269:
case 909:
case 3882:
case 3946:
case 3880:
case 3878:
case 1098:
case 1984:
case 1148:
case 2518:
case 3160:
case 3034:
case 2487:
case 1809:
case 2157:
case 1729:
case 592:
case 596:
case 30:
case 338:
case 2617:
case 2724:
case 1360:
case 470:
case 418:
case 634:
case 1322:
case 868:
case 1362:
case 3010:
case 1745:
case 1430:
case 3049:
case 2804:
case 1432:
case 3199:
case 482:
case 3255:
case 2776:
case 841:
case 1823:
case 1177:
case 1511:
case 145:
case 118:
case 170:
case 898:
case 2289:
case 2394:
case 3847:
case 1183:
case 828:
case 182:
case 1790:
case 1563:
case 1262:
case 3864:
case 1408:
case 1523:
case 1146:
case 1222:
case 1811:
case 740:
case 1260:
case 775:
case 1920:
case 3184:
case 3948:
case 3835:
case 1960:
case 156:
case 1922:
case 694:
case 3479:
case 1620:
case 2504:
case 452:
case 1660:
case 456:
case 2389:
case 664:
case 3677:
case 4050:
case 368:
case 3631:
case 2317:
case 1155:
case 3413:
case 1081:
case 204:
case 1999:
case 219:
case 1050:
case 1215:
case 532:
case 2005:
case 3283:
case 2818:
case 4081:
case 2751:
case 3277:
case 3983:
case 1699:
case 1915:
case 334:
case 3416:
case 1075:
case 2634:
case 1327:
case 1036:
case 2046:
case 1644:
case 3779:
case 3686:
case 2665:
case 26:
case 1471:
case 3895:
case 3343:
case 982:
case 4075:
case 3286:
case 4036:
case 2934:
case 857:
case 986:
case 1188:
case 1708:
case 2225:
case 1944:
case 1170:
case 718:
case 770:
case 782:
case 3986:
case 2965:
case 970:
case 29:
case 1868:
case 3842:
case 786:
case 824:
case 1093:
case 1239:
case 1143:
case 3887:
case 1526:
case 1000:
case 2861:
case 2212:
case 1002:
case 2821:
case 1566:
case 2249:
case 2910:
case 2451:
case 2181:
case 2701:
case 894:
case 114:
case 2949:
case 3873:
case 2912:
case 2478:
case 4000:
case 2150:
case 2480:
case 1105:
case 4002:
case 3388:
case 864:
case 3291:
case 638:
case 2612:
case 409:
case 3721:
case 3672:
case 2349:
case 2310:
case 903:
case 3688:
case 4057:
case 277:
case 834:
case 3670:
case 1339:
case 517:
case 2773:
case 641:
case 2048:
case 1038:
case 703:
case 2813:
case 3972:
case 3970:
case 1826:
case 3272:
case 3391:
case 628:
case 3573:
case 1186:
case 4038:
case 3288:
case 3943:
case 140:
case 175:
case 3605:
case 4041:
case 324:
case 887:
case 1492:
case 1568:
case 3519:
case 394:
case 1753:
case 752:
case 1927:
case 2077:
case 3643:
case 475:
case 208:
case 3905:
case 1344:
case 1667:
case 3595:
case 1730:
case 2854:
case 2740:
case 2435:
case 2083:
case 1627:
case 871:
case 2476:
case 2334:
case 3662:
case 3620:
case 272:
case 2890:
case 512:
case 764:
case 3771:
case 2892:
case 3660:
case 3737:
case 2763:
case 2723:
case 280:
case 1835:
case 1704:
case 1948:
case 1454:
case 1355:
case 3920:
case 3922:
case 2300:
case 2537:
case 2845:
case 2393:
case 2571:
case 3960:
case 2938:
case 239:
case 3220:
case 1248:
case 3563:
case 640:
case 1824:
case 3811:
case 3222:
case 3146:
case 3758:
case 3408:
case 2657:
case 2869:
case 1277:
case 128:
case 501:
case 3915:
case 2829:
case 2459:
case 1931:
case 1977:
case 1582:
case 3215:
case 818:
case 870:
case 303:
case 3081:
case 1346:
case 428:
case 2856:
case 2375:
case 498:
case 3509:
case 3384:
case 2466:
case 2641:
case 3033:
case 3684:
case 1065:
case 2341:
case 3729:
case 1718:
case 1331:
case 138:
case 1851:
case 3769:
case 2636:
case 3315:
case 2675:
case 1383:
case 2194:
case 1646:
case 1461:
case 2044:
case 3809:
case 2529:
case 3148:
case 3098:
case 2236:
case 2569:
case 1122:
case 1246:
case 1160:
case 609:
case 40:
case 852:
case 1882:
case 4034:
case 2936:
case 787:
case 3007:
case 2837:
case 2545:
case 4010:
case 2871:
case 1535:
case 3790:
case 4012:
case 1115:
case 3453:
case 3131:
case 2600:
case 3511:
case 345:
case 1524:
case 1564:
case 1655:
case 2602:
case 3430:
case 2293:
case 3745:
case 2592:
case 2039:
case 2200:
case 1199:
case 299:
case 803:
case 2590:
case 2858:
case 3322:
case 2338:
case 3360:
case 558:
case 2993:
case 1348:
case 1955:
case 734:
case 1573:
case 1272:
case 3874:
case 728:
case 2514:
case 3866:
case 2134:
case 798:
case 1094:
case 1587:
case 157:
case 3057:
case 2062:
case 2020:
case 1418:
case 741:
case 3038:
case 1721:
case 2996:
case 1670:
case 3859:
case 1688:
case 457:
case 2681:
case 1595:
case 2768:
case 3344:
case 3627:
case 2728:
case 494:
case 3732:
case 1643:
case 1386:
case 3191:
case 293:
case 1139:
case 2981:
case 652:
case 809:
case 1243:
case 3492:
case 1540:
case 2112:
case 2233:
case 3528:
case 3403:
case 194:
case 2149:
case 656:
case 464:
case 340:
case 375:
case 2650:
case 3267:
case 124:
case 3227:
case 1605:
case 1754:
case 1404:
case 1840:
case 2352:
case 686:
case 3828:
case 3797:
case 2698:
case 2350:
case 1819:
case 3244:
case 3868:
case 3172:
case 567:
case 3944:
case 2084:
case 1686:
case 2998:
case 2333:
case 2207:
case 527:
case 3437:
case 2463:
case 3036:
case 3075:
case 134:
case 2381:
case 233:
case 2508:
case 597:
case 2907:
case 3644:
case 3639:
case 1370:
case 171:
case 554:
case 2774:
case 1089:
case 3559:
case 938:
case 1991:
case 1713:
case 3105:
case 471:
case 1873:
case 1127:
case 3574:
case 3526:
case 3000:
case 2759:
case 3143:
case 187:
case 3239:
case 3093:
case 2585:
case 1691:
case 3002:
case 875:
case 2870:
case 3791:
case 2872:
case 1985:
case 3130:
case 563:
case 391:
case 2128:
case 1285:
case 3549:
case 1499:
case 3512:
case 3431:
case 3024:
case 1011:
case 3064:
case 2373:
case 1685:
case 2591:
case 593:
case 361:
case 3361:
case 2710:
case 2712:
case 1314:
case 3153:
case 3483:
case 2734:
case 2340:
case 3254:
case 1507:
case 920:
case 1744:
case 1908:
case 2319:
case 3448:
case 3954:
case 2765:
case 3786:
case 2725:
case 1460:
case 27:
case 1121:
case 1353:
case 3979:
case 760:
case 1161:
case 2843:
case 284:
case 3565:
case 1697:
case 2586:
case 8:
case 35:
case 1881:
case 3525:
case 960:
case 183:
case 1230:
case 2126:
case 1113:
case 2240:
case 1533:
case 3354:
case 3455:
case 3834:
case 730:
case 1930:
case 38:
case 111:
case 2919:
case 3825:
case 2695:
case 891:
case 2886:
case 3865:
case 2940:
case 2489:
case 3743:
case 2295:
case 1550:
case 3078:
case 1552:
case 989:
case 607:
case 815:
case 1767:
case 2642:
case 411:
case 453:
case 2619:
case 1727:
case 861:
case 1898:
case 2640:
case 789:
case 1063:
case 1614:
case 3772:
case 610:
case 678:
case 1023:
case 3770:
case 3661:
case 331:
case 3446:
case 1596:
case 2687:
case 3788:
case 3313:
case 2673:
case 1385:
case 102:
case 2417:
case 2273:
case 2572:
case 3921:
case 1914:
case 4023:
case 1179:
case 533:
case 2987:
case 585:
case 2004:
case 542:
case 85:
case 3812:
case 227:
case 546:
case 1593:
case 4059:
case 1857:
case 2109:
case 3894:
case 2624:
case 1500:
case 1337:
case 2013:
case 2347:
case 1502:
case 810:
case 878:
case 2664:
case 1467:
case 1992:
case 1990:
case 1427:
case 159:
case 2635:
case 983:
case 160:
case 1059:
case 490:
case 3589:
case 2924:
case 1245:
case 935:
case 4026:
case 2964:
case 2276:
case 3001:
case 1838:
case 2224:
case 1945:
case 735:
case 1692:
case 2264:
case 1690:
case 4074:
case 1603:
case 1575:
case 1536:
case 2546:
case 1269:
case 3218:
case 288:
case 1656:
case 572:
case 3918:
case 3171:
case 576:
case 1969:
case 615:
case 648:
case 3472:
case 807:
case 3488:
case 3746:
case 1104:
case 1784:
case 1956:
case 661:
case 1629:
case 2382:
case 2717:
case 1669:
case 2680:
case 3731:
case 2251:
case 2678:
case 3777:
case 2682:
case 844:
case 2951:
case 3019:
case 706:
case 3192:
case 3190:
case 1028:
case 3783:
case 2449:
case 2577:
case 550:
case 3491:
case 529:
case 2982:
case 3095:
case 2282:
case 1799:
case 2583:
case 4028:
case 6:
case 1303:
case 3916:
case 2247:
case 1237:
case 911:
case 3889:
case 1392:
case 3604:
case 489:
case 2548:
case 1937:
case 2855:
case 2434:
case 3616:
case 1893:
case 3087:
case 1958:
case 3156:
case 1762:
case 189:
case 1258:
case 1722:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758006002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,];
var gg_b = "1758006002/";

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
