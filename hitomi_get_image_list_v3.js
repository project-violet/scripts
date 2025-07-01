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
case 401:
case 908:
case 2320:
case 1452:
case 984:
case 1103:
case 228:
case 2913:
case 2668:
case 1345:
case 276:
case 531:
case 3365:
case 733:
case 1409:
case 546:
case 115:
case 1495:
case 2412:
case 224:
case 904:
case 1953:
case 988:
case 481:
case 244:
case 3516:
case 3238:
case 2212:
case 609:
case 335:
case 2599:
case 1697:
case 830:
case 1715:
case 2792:
case 3185:
case 578:
case 2206:
case 3778:
case 2989:
case 4082:
case 1165:
case 2505:
case 2182:
case 519:
case 3966:
case 2691:
case 2970:
case 1986:
case 526:
case 1209:
case 1623:
case 1528:
case 3040:
case 3774:
case 239:
case 2142:
case 1022:
case 574:
case 1734:
case 3371:
case 2836:
case 2949:
case 3145:
case 689:
case 1274:
case 3071:
case 2981:
case 1273:
case 1696:
case 1624:
case 3233:
case 3304:
case 3616:
case 971:
case 3340:
case 1201:
case 2450:
case 644:
case 3967:
case 478:
case 3602:
case 1597:
case 1360:
case 1947:
case 1831:
case 289:
case 322:
case 1410:
case 3659:
case 1628:
case 1523:
case 3379:
case 305:
case 823:
case 2336:
case 611:
case 2935:
case 1972:
case 3290:
case 676:
case 1954:
case 1180:
case 2176:
case 3160:
case 3065:
case 1085:
case 4076:
case 628:
case 1179:
case 703:
case 1210:
case 2564:
case 783:
case 2125:
case 2250:
case 624:
case 1401:
case 3929:
case 581:
case 431:
case 4025:
case 2862:
case 1473:
case 2914:
case 2407:
case 3600:
case 1320:
case 854:
case 3342:
case 326:
case 2474:
case 485:
case 3993:
case 9:
case 1668:
case 535:
case 567:
case 378:
case 111:
case 2171:
case 176:
case 769:
case 2385:
case 374:
case 2478:
case 422:
case 3684:
case 1664:
case 2495:
case 3382:
case 858:
case 3927:
case 2953:
case 1362:
case 2295:
case 3930:
case 1212:
case 2524:
case 3611:
case 1989:
case 2165:
case 3825:
case 2697:
case 3076:
case 3519:
case 4065:
case 653:
case 1182:
case 3712:
case 1505:
case 2986:
case 2596:
case 3706:
case 2528:
case 2623:
case 3377:
case 1142:
case 3876:
case 3255:
case 139:
case 2331:
case 3556:
case 3025:
case 1949:
case 2252:
case 331:
case 2274:
case 148:
case 1337:
case 346:
case 301:
case 950:
case 253:
case 2273:
case 2696:
case 1207:
case 1037:
case 3077:
case 2322:
case 1450:
case 2031:
case 2987:
case 3376:
case 975:
case 2339:
case 1941:
case 2523:
case 1336:
case 3588:
case 690:
case 435:
case 2972:
case 4079:
case 1568:
case 3998:
case 4008:
case 3842:
case 3082:
case 2954:
case 1820:
case 4080:
case 2790:
case 2108:
case 3544:
case 3975:
case 1918:
case 585:
case 2179:
case 2401:
case 4040:
case 1020:
case 3750:
case 3926:
case 1407:
case 1914:
case 2473:
case 3643:
case 1121:
case 4027:
case 2389:
case 254:
case 3153:
case 2127:
case 2499:
case 30:
case 2370:
case 3903:
case 668:
case 1847:
case 299:
case 1087:
case 258:
case 3067:
case 3971:
case 2349:
case 2263:
case 1428:
case 3459:
case 3690:
case 815:
case 2841:
case 2937:
case 3534:
case 2920:
case 2463:
case 712:
case 1872:
case 863:
case 2313:
case 1552:
case 1574:
case 1595:
case 3829:
case 3965:
case 1224:
case 3216:
case 1985:
case 969:
case 7:
case 2018:
case 3321:
case 1601:
case 2506:
case 3202:
case 2299:
case 2814:
case 1166:
case 4030:
case 2035:
case 2205:
case 1072:
case 2607:
case 1509:
case 2962:
case 4069:
case 1296:
case 1673:
case 2813:
case 11:
case 1372:
case 3251:
case 994:
case 2468:
case 1223:
case 180:
case 853:
case 2161:
case 3217:
case 2711:
case 2291:
case 456:
case 1573:
case 566:
case 1358:
case 2507:
case 491:
case 3187:
case 2464:
case 1717:
case 1695:
case 2606:
case 4061:
case 1129:
case 3158:
case 2889:
case 347:
case 264:
case 2748:
case 1497:
case 2784:
case 2126:
case 3417:
case 3904:
case 1387:
case 1922:
case 143:
case 1960:
case 2700:
case 3066:
case 1086:
case 33:
case 2175:
case 1132:
case 658:
case 3908:
case 3979:
case 2788:
case 699:
case 750:
case 2089:
case 2936:
case 97:
case 3330:
case 2121:
case 3419:
case 452:
case 2496:
case 3369:
case 2047:
case 1127:
case 2887:
case 2424:
case 1783:
case 2346:
case 158:
case 2087:
case 2847:
case 2931:
case 3283:
case 2428:
case 1349:
case 1263:
case 473:
case 1841:
case 1920:
case 447:
case 3942:
case 1014:
case 3555:
case 3898:
case 1313:
case 680:
case 1835:
case 2872:
case 1818:
case 2759:
case 595:
case 933:
case 3256:
case 2058:
case 2574:
case 2985:
case 1169:
case 2224:
case 1512:
case 3705:
case 3189:
case 2595:
case 848:
case 3075:
case 1506:
case 1130:
case 4066:
case 1205:
case 2072:
case 3219:
case 3826:
case 1814:
case 58:
case 2296:
case 2673:
case 3327:
case 1607:
case 2054:
case 839:
case 2509:
case 630:
case 2652:
case 1757:
case 3400:
case 2674:
case 738:
case 2354:
case 2053:
case 2223:
case 1468:
case 3375:
case 3655:
case 983:
case 3394:
case 903:
case 3093:
case 3692:
case 1507:
case 2358:
case 4067:
case 2678:
case 3827:
case 734:
case 1612:
case 889:
case 2167:
case 3791:
case 1013:
case 2501:
case 3869:
case 164:
case 1264:
case 2129:
case 2497:
case 3361:
case 1550:
case 1194:
case 1748:
case 3764:
case 2046:
case 1870:
case 3114:
case 243:
case 3248:
case 4029:
case 462:
case 3976:
case 771:
case 2423:
case 3457:
case 1700:
case 3288:
case 1070:
case 573:
case 2846:
case 4032:
case 2939:
case 1198:
case 729:
case 3030:
case 3200:
case 3118:
case 1341:
case 1788:
case 1175:
case 2132:
case 3244:
case 3069:
case 325:
case 3338:
case 486:
case 3521:
case 820:
case 803:
case 541:
case 1309:
case 743:
case 536:
case 3629:
case 302:
case 3203:
case 909:
case 3334:
case 271:
case 2513:
case 2777:
case 1672:
case 2420:
case 1703:
case 3271:
case 406:
case 1374:
case 2155:
case 1928:
case 3959:
case 514:
case 2742:
case 1810:
case 249:
case 688:
case 1245:
case 2050:
case 604:
case 521:
case 1138:
case 1010:
case 2999:
case 4092:
case 3667:
case 579:
case 3195:
case 1687:
case 700:
case 3178:
case 234:
case 3090:
case 2192:
case 3785:
case 3566:
case 1996:
case 2262:
case 1586:
case 2681:
case 288:
case 3408:
case 204:
case 112:
case 1547:
case 3479:
case 2436:
case 35:
case 638:
case 1923:
case 3480:
case 1646:
case 1310:
case 1439:
case 976:
case 3917:
case 3440:
case 2670:
case 634:
case 2991:
case 3666:
case 193:
case 928:
case 2689:
case 479:
case 3567:
case 1133:
case 2964:
case 2806:
case 948:
case 1052:
case 3838:
case 436:
case 1373:
case 3529:
case 1653:
case 2307:
case 3722:
case 1878:
case 3204:
case 3333:
case 3815:
case 1301:
case 3621:
case 3280:
case 1572:
case 3015:
case 1554:
case 160:
case 1078:
case 332:
case 3760:
case 2776:
case 3208:
case 3110:
case 2006:
case 944:
case 2613:
case 833:
case 3532:
case 3739:
case 972:
case 2873:
case 1807:
case 3482:
case 45:
case 1306:
case 1614:
case 56:
case 3626:
case 275:
case 2801:
case 3694:
case 314:
case 3527:
case 2658:
case 2553:
case 859:
case 3392:
case 116:
case 545:
case 3277:
case 171:
case 2771:
case 2231:
case 1513:
case 3675:
case 2445:
case 321:
case 1420:
case 2352:
case 497:
case 2703:
case 2672:
case 660:
case 768:
case 1237:
case 2073:
case 3242:
case 1220:
case 1155:
case 341:
case 1641:
case 2546:
case 502:
case 2134:
case 336:
case 3720:
case 1549:
case 3477:
case 2647:
case 612:
case 2431:
case 2924:
case 2285:
case 3112:
case 1589:
case 1782:
case 432:
case 3762:
case 2010:
case 1999:
case 2115:
case 4038:
case 3919:
case 582:
case 3661:
case 3282:
case 104:
case 425:
case 1541:
case 2923:
case 3957:
case 915:
case 2439:
case 4033:
case 2:
case 293:
case 1991:
case 1350:
case 2686:
case 1581:
case 3911:
case 3630:
case 3669:
case 306:
case 2587:
case 3150:
case 3984:
case 869:
case 2558:
case 3627:
case 2373:
case 2740:
case 675:
case 1725:
case 3892:
case 2878:
case 3526:
case 650:
case 597:
case 2572:
case 2260:
case 1535:
case 963:
case 1968:
case 3598:
case 3693:
case 260:
case 2190:
case 3736:
case 758:
case 445:
case 2780:
case 4090:
case 3900:
case 1613:
case 1236:
case 1006:
case 307:
case 1328:
case 875:
case 370:
case 259:
case 1097:
case 3851:
case 298:
case 1446:
case 3571:
case 1639:
case 120:
case 1823:
case 2891:
case 1023:
case 2143:
case 1324:
case 183:
case 355:
case 3753:
case 1622:
case 1486:
case 2305:
case 3051:
case 1396:
case 1253:
case 2489:
case 968:
case 551:
case 3565:
case 2912:
case 4019:
case 461:
case 3938:
case 2289:
case 753:
case 1766:
case 1116:
case 3786:
case 3124:
case 2068:
case 3196:
case 2769:
case 1909:
case 2270:
case 596:
case 2562:
case 1978:
case 2119:
case 4056:
case 1159:
case 1952:
case 1545:
case 772:
case 1974:
case 313:
case 2364:
case 2063:
case 1973:
case 3787:
case 496:
case 2662:
case 2281:
case 812:
case 1685:
case 3197:
case 561:
case 3429:
case 1901:
case 1287:
case 2368:
case 32:
case 954:
case 1645:
case 1151:
case 392:
case 2620:
case 2435:
case 2863:
case 1454:
case 893:
case 3123:
case 3990:
case 1560:
case 2005:
case 2235:
case 2441:
case 3580:
case 3671:
case 1096:
case 1828:
case 4044:
case 2637:
case 3772:
case 4088:
case 3002:
case 2218:
case 2100:
case 269:
case 2536:
case 34:
case 3802:
case 3317:
case 1487:
case 1258:
case 3229:
case 3816:
case 715:
case 365:
case 4084:
case 2794:
case 1028:
case 3059:
case 2148:
case 3758:
case 860:
case 1793:
case 2328:
case 3577:
case 2097:
case 2531:
case 1636:
case 396:
case 3356:
case 2660:
case 900:
case 923:
case 2446:
case 3293:
case 351:
case 3676:
case 1091:
case 2823:
case 1183:
case 203:
case 1537:
case 1891:
case 3057:
case 1470:
case 2486:
case 980:
case 2622:
case 816:
case 3625:
case 633:
case 194:
case 1489:
case 829:
case 2253:
case 2721:
case 3469:
case 3811:
case 2396:
case 617:
case 2585:
case 2995:
case 3427:
case 2453:
case 1906:
case 2766:
case 1864:
case 507:
case 1730:
case 4016:
case 1068:
case 709:
case 1119:
case 3582:
case 44:
case 3789:
case 3105:
case 570:
case 2286:
case 1769:
case 2909:
case 4002:
case 3992:
case 3493:
case 2246:
case 1520:
case 834:
case 3542:
case 3749:
case 67:
case 3048:
case 4059:
case 555:
case 1249:
case 3844:
case 3383:
case 1413:
case 3800:
case 2974:
case 1156:
case 407:
case 1364:
case 3083:
case 3426:
case 1907:
case 3261:
case 3682:
case 2117:
case 4017:
case 804:
case 2685:
case 2287:
case 2901:
case 3348:
case 217:
case 1111:
case 3741:
case 537:
case 2247:
case 565:
case 2645:
case 739:
case 1418:
case 640:
case 3642:
case 1241:
case 4051:
case 3498:
case 3883:
case 3344:
case 748:
case 3298:
case 1235:
case 1005:
case 2560:
case 620:
case 2732:
case 1775:
case 2254:
case 1637:
case 728:
case 2539:
case 1188:
case 3718:
case 2828:
case 2096:
case 3677:
case 1798:
case 2323:
case 3357:
case 1144:
case 2631:
case 1218:
case 1100:
case 169:
case 3856:
case 3275:
case 711:
case 3525:
case 233:
case 3714:
case 1950:
case 2028:
case 724:
case 683:
case 2397:
case 3461:
case 52:
case 1214:
case 3226:
case 767:
case 2083:
case 735:
case 2843:
case 498:
case 3973:
case 991:
case 2682:
case 3117:
case 2494:
case 1665:
case 1197:
case 956:
case 3685:
case 3287:
case 3458:
case 4091:
case 85:
case 2348:
case 1267:
case 2781:
case 3247:
case 2475:
case 2642:
case 2300:
case 1123:
case 2043:
case 2883:
case 2344:
case 37:
case 1671:
case 1580:
case 3560:
case 2019:
case 1351:
case 2168:
case 3732:
case 3254:
case 651:
case 1859:
case 3828:
case 3096:
case 1772:
case 2735:
case 3447:
case 4068:
case 2357:
case 1016:
case 1603:
case 14:
case 3631:
case 3910:
case 1754:
case 333:
case 3824:
case 1467:
case 1816:
case 3258:
case 3487:
case 2164:
case 1059:
case 137:
case 1504:
case 165:
case 2461:
case 3729:
case 3522:
case 1503:
case 3328:
case 1359:
case 2011:
case 2577:
case 296:
case 3531:
case 2356:
case 2676:
case 2293:
case 2857:
case 2713:
case 303:
case 3639:
case 742:
case 155:
case 383:
case 1316:
case 3023:
case 1604:
case 1221:
case 1640:
case 2430:
case 2319:
case 1051:
case 882:
case 187:
case 2469:
case 3721:
case 3585:
case 3102:
case 966:
case 2230:
case 2000:
case 1124:
case 2770:
case 3116:
case 2884:
case 2269:
case 2427:
case 86:
case 3453:
case 1196:
case 757:
case 469:
case 2582:
case 1266:
case 2789:
case 3978:
case 1915:
case 3286:
case 559:
case 3246:
case 845:
case 1934:
case 2542:
case 722:
case 2955:
case 2048:
case 3159:
case 705:
case 2800:
case 1384:
case 1843:
case 3364:
case 1682:
case 2787:
case 1426:
case 2933:
case 2665:
case 886:
case 1494:
case 98:
case 1348:
case 3761:
case 420:
case 483:
case 4023:
case 90:
case 1388:
case 22:
case 3418:
case 2432:
case 1498:
case 3241:
case 3620:
case 3435:
case 731:
case 2747:
case 3863:
case 1344:
case 1883:
case 995:
case 1043:
case 2351:
case 1019:
case 719:
case 2990:
case 1576:
case 2671:
case 2580:
case 3441:
case 2859:
case 517:
case 3188:
case 1168:
case 3144:
case 1357:
case 2016:
case 3099:
case 1275:
case 1856:
case 2232:
case 2002:
case 3218:
case 3100:
case 1294:
case 962:
case 2317:
case 774:
case 1525:
case 2802:
case 687:
case 440:
case 2229:
case 2467:
case 3391:
case 3184:
case 2816:
case 3726:
case 3794:
case 1311:
case 2059:
case 3148:
case 2504:
case 1226:
case 3481:
case 1819:
case 2758:
case 3449:
case 1577:
case 2679:
case 3793:
case 2503:
case 927:
case 3213:
case 2851:
case 1676:
case 1356:
case 2017:
case 3537:
case 1857:
case 3143:
case 2316:
case 1057:
case 2604:
case 2302:
case 2753:
case 3399:
case 2640:
case 3470:
case 665:
case 3305:
case 2051:
case 1430:
case 540:
case 287:
case 1227:
case 3912:
case 2938:
case 3864:
case 3906:
case 1427:
case 1343:
case 503:
case 2124:
case 2786:
case 1044:
case 1770:
case 3068:
case 841:
case 1088:
case 93:
case 2196:
case 1992:
case 3562:
case 1789:
case 2266:
case 613:
case 1582:
case 3119:
case 1749:
case 1542:
case 2128:
case 1048:
case 1888:
case 433:
case 2746:
case 3249:
case 4028:
case 3363:
case 3064:
case 3156:
case 1800:
case 3547:
case 1390:
case 1951:
case 1480:
case 2957:
case 762:
case 3310:
case 974:
case 416:
case 393:
case 3:
case 429:
case 1666:
case 1440:
case 2911:
case 926:
case 4007:
case 3997:
case 2669:
case 206:
case 82:
case 3587:
case 3052:
case 2225:
case 2150:
case 795:
case 3558:
case 3895:
case 2627:
case 1529:
case 931:
case 3740:
case 1815:
case 2892:
case 3809:
case 1333:
case 1204:
case 1034:
case 1240:
case 3301:
case 4050:
case 3222:
case 70:
case 2988:
case 3779:
case 3260:
case 3572:
case 3708:
case 865:
case 1280:
case 2598:
case 2855:
case 1834:
case 3078:
case 2736:
case 360:
case 3239:
case 1279:
case 2900:
case 710:
case 1739:
case 2575:
case 3852:
case 981:
case 3873:
case 1338:
case 404:
case 125:
case 1521:
case 2626:
case 807:
case 375:
case 1465:
case 2694:
case 1833:
case 538:
case 3658:
case 1315:
case 3309:
case 2277:
case 182:
case 3771:
case 1033:
case 218:
case 1632:
case 3445:
case 887:
case 2737:
case 73:
case 2593:
case 1271:
case 3352:
case 855:
case 2442:
case 3672:
case 901:
case 279:
case 1959:
case 2242:
case 3546:
case 1471:
case 3134:
case 1745:
case 236:
case 1174:
case 1403:
case 2720:
case 3647:
case 2477:
case 3245:
case 1152:
case 686:
case 1916:
case 3285:
case 3687:
case 1195:
case 2569:
case 2762:
case 3138:
case 3115:
case 516:
case 1785:
case 1178:
case 3765:
case 571:
case 529:
case 4006:
case 1566:
case 2661:
case 2282:
case 388:
case 2408:
case 2951:
case 66:
case 25:
case 1476:
case 475:
case 645:
case 3670:
case 3350:
case 4001:
case 1561:
case 2101:
case 1630:
case 297:
case 1911:
case 106:
case 4073:
case 1669:
case 2567:
case 1984:
case 1594:
case 2838:
case 1627:
case 3812:
case 3307:
case 2034:
case 2204:
case 3725:
case 2815:
case 3514:
case 625:
case 2240:
case 1526:
case 2621:
case 1598:
case 1693:
case 2280:
case 3535:
case 1988:
case 2015:
case 4010:
case 2279:
case 2110:
case 2038:
case 3006:
case 967:
case 935:
case 1944:
case 5:
case 412:
case 225:
case 3807:
case 851:
case 2338:
case 2521:
case 1626:
case 3614:
case 3462:
case 1943:
case 922:
case 2465:
case 99:
case 2629:
case 202:
case 2033:
case 2203:
case 2334:
case 282:
case 316:
case 1737:
case 3618:
case 3513:
case 957:
case 4:
case 1355:
case 329:
case 1983:
case 3635:
case 3420:
case 1698:
case 2271:
case 179:
case 3007:
case 3237:
case 1242:
case 2959:
case 575:
case 2745:
case 4074:
case 2890:
case 65:
case 2403:
case 26:
case 349:
case 3050:
case 3850:
case 942:
case 1530:
case 550:
case 1762:
case 2902:
case 4009:
case 697:
case 2667:
case 4078:
case 460:
case 1112:
case 2178:
case 334:
case 1919:
case 2090:
case 2109:
case 2566:
case 1661:
case 3262:
case 31:
case 2398:
case 2400:
case 1723:
case 152:
case 3674:
case 3354:
case 1147:
case 3053:
case 380:
case 564:
case 1634:
case 2893:
case 1217:
case 458:
case 2692:
case 3358:
case 1797:
case 1615:
case 951:
case 300:
case 323:
case 3717:
case 1638:
case 2484:
case 127:
case 2211:
case 3167:
case 745:
case 2791:
case 173:
case 3501:
case 822:
case 4081:
case 2284:
case 725:
case 147:
case 1158:
case 3497:
case 2361:
case 842:
case 2830:
case 3046:
case 3886:
case 343:
case 3922:
case 1367:
case 2248:
case 3387:
case 3347:
case 782:
case 2457:
case 2288:
case 13:
case 691:
case 3939:
case 2200:
case 1979:
case 1908:
case 2768:
case 3132:
case 1451:
case 3510:
case 195:
case 3121:
case 2861:
case 1153:
case 3424:
case 10:
case 1903:
case 2456:
case 2977:
case 18:
case 3610:
case 3931:
case 3847:
case 256:
case 110:
case 1459:
case 4013:
case 4049:
case 554:
case 3228:
case 1534:
case 2483:
case 1146:
case 2555:
case 75:
case 2393:
case 3759:
case 1728:
case 2094:
case 867:
case 2875:
case 1029:
case 3945:
case 330:
case 162:
case 2189:
case 2705:
case 1032:
case 2894:
case 1321:
case 3072:
case 2219:
case 3166:
case 2826:
case 3716:
case 1724:
case 558:
case 961:
case 3296:
case 2327:
case 3353:
case 2799:
case 3702:
case 1515:
case 3509:
case 599:
case 468:
case 3054:
case 1400:
case 987:
case 2723:
case 3813:
case 662:
case 2147:
case 1444:
case 736:
case 3468:
case 3318:
case 1893:
case 2332:
case 955:
case 1375:
case 2217:
case 3711:
case 1394:
case 3291:
case 1448:
case 2615:
case 3507:
case 1211:
case 227:
case 970:
case 2533:
case 2638:
case 3612:
case 3606:
case 1326:
case 907:
case 60:
case 2158:
case 3264:
case 364:
case 1284:
case 247:
case 1411:
case 3381:
case 1114:
case 51:
case 3126:
case 2417:
case 1764:
case 430:
case 695:
case 1248:
case 2367:
case 4058:
case 1288:
case 3700:
case 3268:
case 2980:
case 718:
case 2172:
case 3070:
case 2451:
case 4072:
case 3788:
case 1200:
case 500:
case 368:
case 779:
case 41:
case 1419:
case 3041:
case 1330:
case 295:
case 4053:
case 1243:
case 878:
case 480:
case 819:
case 2153:
case 3499:
case 2366:
case 647:
case 3370:
case 3743:
case 1113:
case 3783:
case 2903:
case 156:
case 423:
case 399:
case 358:
case 2067:
case 874:
case 2971:
case 3263:
case 3349:
case 2459:
case 210:
case 3081:
case 913:
case 1483:
case 2534:
case 3920:
case 3835:
case 965:
case 2146:
case 1026:
case 1256:
case 652:
case 3818:
case 443:
case 2029:
case 1149:
case 831:
case 94:
case 3169:
case 3130:
case 3018:
case 627:
case 1075:
case 2032:
case 2724:
case 2186:
case 1098:
case 1826:
case 3205:
case 1592:
case 1327:
case 2515:
case 1982:
case 2325:
case 201:
case 1071:
case 979:
case 3733:
case 1701:
case 353:
case 3696:
case 3273:
case 921:
case 428:
case 157:
case 2511:
case 1616:
case 1304:
case 3624:
case 1233:
case 3597:
case 1602:
case 918:
case 1773:
case 1551:
case 19:
case 2877:
case 873:
case 3339:
case 3410:
case 122:
case 424:
case 3628:
case 2557:
case 1659:
case 1490:
case 281:
case 2683:
case 2588:
case 3972:
case 444:
case 4036:
case 770:
case 2842:
case 1160:
case 2082:
case 3180:
case 1710:
case 3085:
case 626:
case 2136:
case 1065:
case 142:
case 2975:
case 2544:
case 619:
case 3179:
case 1433:
case 755:
case 1865:
case 3401:
case 3140:
case 589:
case 674:
case 2926:
case 2750:
case 787:
case 3473:
case 3104:
case 2600:
case 1131:
case 906:
case 80:
case 226:
case 3103:
case 2583:
case 278:
case 3345:
case 74:
case 3385:
case 810:
case 548:
case 2543:
case 3478:
case 1415:
case 2492:
case 737:
case 3495:
case 88:
case 3953:
case 3295:
case 1008:
case 3524:
case 1238:
case 1516:
case 2611:
case 167:
case 3165:
case 511:
case 1185:
case 4062:
case 2825:
case 576:
case 1840:
case 1080:
case 1795:
case 3060:
case 2292:
case 601:
case 3209:
case 3596:
case 3278:
case 1966:
case 363:
case 1303:
case 1234:
case 3528:
case 1004:
case 3623:
case 1559:
case 524:
case 681:
case 3022:
case 1774:
case 3331:
case 1651:
case 2025:
case 4020:
case 3252:
case 1371:
case 1808:
case 3274:
case 246:
case 1879:
case 2517:
case 3605:
case 1961:
case 2701:
case 2003:
case 1511:
case 257:
case 2616:
case 490:
case 2340:
case 635:
case 2967:
case 2602:
case 3699:
case 1656:
case 902:
case 2380:
case 415:
case 1877:
case 29:
case 1557:
case 2659:
case 2871:
case 181:
case 1998:
case 3568:
case 2290:
case 1683:
case 2710:
case 3820:
case 3176:
case 945:
case 1500:
case 2065:
case 751:
case 3918:
case 1975:
case 242:
case 1584:
case 96:
case 2433:
case 3125:
case 866:
case 4022:
case 572:
case 2122:
case 1882:
case 3862:
case 3020:
case 1643:
case 3914:
case 1926:
case 761:
case 1342:
case 3320:
case 328:
case 563:
case 997:
case 453:
case 3913:
case 3177:
case 2434:
case 3563:
case 3668:
case 1993:
case 1492:
case 1648:
case 95:
case 1684:
case 3362:
case 1927:
case 344:
case 2238:
case 3212:
case 2079:
case 2502:
case 3599:
case 3036:
case 1712:
case 3505:
case 2795:
case 1519:
case 1076:
case 685:
case 4085:
case 3691:
case 2804:
case 2215:
case 1292:
case 2234:
case 2752:
case 605:
case 1120:
case 2774:
case 1255:
case 4045:
case 1876:
case 3142:
case 131:
case 3949:
case 622:
case 2651:
case 2145:
case 515:
case 146:
case 3337:
case 2808:
case 348:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751346009/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,];
var gg_b = "1751346009/";

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
