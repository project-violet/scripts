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
case 1623:
case 501:
case 1709:
case 1730:
case 1235:
case 353:
case 2043:
case 1414:
case 3522:
case 455:
case 482:
case 907:
case 1542:
case 1685:
case 634:
case 4004:
case 1341:
case 1562:
case 1013:
case 3359:
case 1508:
case 314:
case 983:
case 3253:
case 1918:
case 1673:
case 2754:
case 4042:
case 3256:
case 3234:
case 2119:
case 2091:
case 925:
case 568:
case 2947:
case 109:
case 3362:
case 2132:
case 169:
case 1519:
case 2456:
case 3053:
case 2114:
case 2316:
case 560:
case 2122:
case 3246:
case 3072:
case 1236:
case 1285:
case 759:
case 3074:
case 2679:
case 2796:
case 1126:
case 2373:
case 1113:
case 2231:
case 2853:
case 1125:
case 2705:
case 2192:
case 4029:
case 1831:
case 3702:
case 158:
case 4068:
case 19:
case 55:
case 1080:
case 811:
case 3218:
case 967:
case 2356:
case 1569:
case 175:
case 810:
case 592:
case 1664:
case 3322:
case 1905:
case 4010:
case 88:
case 1856:
case 301:
case 723:
case 2810:
case 2245:
case 1177:
case 2804:
case 3206:
case 2927:
case 2101:
case 395:
case 1597:
case 2263:
case 1605:
case 3288:
case 824:
case 3417:
case 1902:
case 2768:
case 1156:
case 1314:
case 2017:
case 1445:
case 1661:
case 2319:
case 1718:
case 928:
case 1221:
case 1046:
case 3117:
case 2161:
case 2222:
case 3405:
case 3737:
case 1132:
case 3948:
case 3298:
case 1168:
case 1731:
case 3305:
case 533:
case 2941:
case 3573:
case 564:
case 1862:
case 1148:
case 1785:
case 132:
case 2769:
case 890:
case 2786:
case 875:
case 1614:
case 2054:
case 3338:
case 3250:
case 3646:
case 554:
case 288:
case 1846:
case 2650:
case 340:
case 830:
case 1029:
case 526:
case 1539:
case 2554:
case 2678:
case 2304:
case 2620:
case 1768:
case 494:
case 1276:
case 3180:
case 3496:
case 2232:
case 1370:
case 1081:
case 1782:
case 980:
case 3640:
case 65:
case 2215:
case 439:
case 708:
case 33:
case 2008:
case 3906:
case 1159:
case 1838:
case 1273:
case 3137:
case 2289:
case 3026:
case 2826:
case 2419:
case 1951:
case 1091:
case 1787:
case 3889:
case 2602:
case 1631:
case 1804:
case 3136:
case 1618:
case 3304:
case 254:
case 1296:
case 2745:
case 3954:
case 2710:
case 385:
case 2950:
case 370:
case 2254:
case 3960:
case 4050:
case 1452:
case 1084:
case 2209:
case 1305:
case 297:
case 2406:
case 1270:
case 2019:
case 213:
case 3262:
case 3482:
case 2011:
case 505:
case 3441:
case 2369:
case 2195:
case 2337:
case 2203:
case 933:
case 3445:
case 358:
case 1587:
case 1375:
case 4037:
case 272:
case 2788:
case 3838:
case 246:
case 3623:
case 3276:
case 738:
case 148:
case 1358:
case 2323:
case 3664:
case 1371:
case 2472:
case 2485:
case 2475:
case 1780:
case 3438:
case 80:
case 2761:
case 3235:
case 1928:
case 1009:
case 2487:
case 2303:
case 3029:
case 229:
case 3873:
case 2329:
case 1324:
case 3178:
case 2883:
case 2961:
case 1869:
case 3187:
case 1254:
case 2985:
case 306:
case 3537:
case 2335:
case 3416:
case 2535:
case 3962:
case 3105:
case 2262:
case 3905:
case 558:
case 2078:
case 64:
case 676:
case 2058:
case 1523:
case 2649:
case 2312:
case 1294:
case 1411:
case 862:
case 3727:
case 2848:
case 2646:
case 3780:
case 1646:
case 1207:
case 2839:
case 2728:
case 1807:
case 3094:
case 3959:
case 864:
case 3502:
case 3087:
case 3833:
case 2131:
case 2597:
case 2515:
case 3801:
case 1879:
case 3287:
case 2907:
case 1005:
case 1682:
case 2454:
case 663:
case 1518:
case 586:
case 1114:
case 3587:
case 1193:
case 3562:
case 1041:
case 1609:
case 2096:
case 3296:
case 271:
case 2599:
case 1253:
case 3373:
case 867:
case 48:
case 1024:
case 1230:
case 953:
case 2981:
case 942:
case 2238:
case 3277:
case 2305:
case 3124:
case 2812:
case 1874:
case 129:
case 1350:
case 3173:
case 3141:
case 2658:
case 4052:
case 182:
case 870:
case 3529:
case 2908:
case 932:
case 3823:
case 994:
case 3001:
case 3109:
case 670:
case 2565:
case 3068:
case 1723:
case 1428:
case 3655:
case 2401:
case 3446:
case 3098:
case 577:
case 2022:
case 222:
case 2187:
case 2342:
case 2236:
case 1810:
case 1988:
case 140:
case 1433:
case 3680:
case 919:
case 2632:
case 347:
case 1138:
case 1683:
case 60:
case 2341:
case 1572:
case 1896:
case 3033:
case 442:
case 981:
case 751:
case 1224:
case 3434:
case 1259:
case 3812:
case 59:
case 241:
case 3330:
case 878:
case 2308:
case 1541:
case 784:
case 2857:
case 3125:
case 3660:
case 2050:
case 1284:
case 3605:
case 2396:
case 2836:
case 1289:
case 3134:
case 1109:
case 492:
case 3531:
case 2868:
case 938:
case 426:
case 2627:
case 2979:
case 1760:
case 2385:
case 4078:
case 3032:
case 1843:
case 433:
case 2886:
case 2253:
case 2610:
case 3662:
case 2604:
case 3694:
case 1378:
case 1651:
case 3712:
case 3665:
case 1522:
case 2896:
case 2146:
case 3466:
case 3513:
case 1558:
case 191:
case 2837:
case 160:
case 2324:
case 3292:
case 2403:
case 2630:
case 3346:
case 3701:
case 656:
case 1039:
case 2085:
case 2208:
case 3754:
case 3800:
case 776:
case 962:
case 2530:
case 2036:
case 2992:
case 2162:
case 2714:
case 2939:
case 725:
case 2718:
case 2495:
case 1069:
case 1619:
case 2095:
case 3663:
case 3845:
case 2794:
case 2525:
case 2845:
case 1757:
case 1250:
case 2148:
case 1748:
case 2489:
case 361:
case 2847:
case 2384:
case 3000:
case 2657:
case 3219:
case 677:
case 1561:
case 3870:
case 2513:
case 273:
case 267:
case 530:
case 1632:
case 2995:
case 1101:
case 868:
case 77:
case 1550:
case 1486:
case 3037:
case 999:
case 187:
case 2894:
case 1552:
case 3475:
case 3771:
case 2013:
case 631:
case 797:
case 2214:
case 3299:
case 3611:
case 3777:
case 2079:
case 2815:
case 3806:
case 2060:
case 2884:
case 1484:
case 1464:
case 3172:
case 704:
case 92:
case 325:
case 2361:
case 4055:
case 2598:
case 2713:
case 3316:
case 3574:
case 1783:
case 1407:
case 1149:
case 1243:
case 4088:
case 2149:
case 1006:
case 2151:
case 2594:
case 2928:
case 2517:
case 1164:
case 2143:
case 1799:
case 3650:
case 935:
case 2806:
case 3538:
case 218:
case 3604:
case 4083:
case 3816:
case 1197:
case 8:
case 1468:
case 159:
case 202:
case 2118:
case 2273:
case 4058:
case 2291:
case 255:
case 3639:
case 2158:
case 3130:
case 3279:
case 1968:
case 3419:
case 25:
case 849:
case 2851:
case 1442:
case 519:
case 2752:
case 1107:
case 3154:
case 2166:
case 1960:
case 2135:
case 2105:
case 3765:
case 1323:
case 1726:
case 73:
case 4005:
case 1574:
case 42:
case 4090:
case 1675:
case 4076:
case 51:
case 1897:
case 2299:
case 3872:
case 2394:
case 1837:
case 1747:
case 1067:
case 2007:
case 1336:
case 3336:
case 812:
case 3264:
case 1894:
case 3238:
case 392:
case 3097:
case 3730:
case 3689:
case 697:
case 2514:
case 133:
case 2653:
case 3039:
case 1795:
case 3915:
case 957:
case 1912:
case 706:
case 2414:
case 3920:
case 7:
case 1385:
case 2906:
case 2292:
case 767:
case 2932:
case 2481:
case 1829:
case 666:
case 1639:
case 332:
case 1352:
case 302:
case 507:
case 3073:
case 399:
case 220:
case 2959:
case 2550:
case 1771:
case 1485:
case 2520:
case 2829:
case 2892:
case 2929:
case 2314:
case 4025:
case 503:
case 2782:
case 3045:
case 3440:
case 1906:
case 1499:
case 3160:
case 1851:
case 3790:
case 1911:
case 1976:
case 2986:
case 630:
case 1169:
case 2633:
case 2443:
case 798:
case 3917:
case 2980:
case 3360:
case 602:
case 883:
case 681:
case 3314:
case 249:
case 1141:
case 3123:
case 788:
case 2622:
case 2723:
case 3762:
case 3464:
case 381:
case 648:
case 1466:
case 3859:
case 3608:
case 3535:
case 3436:
case 2293:
case 400:
case 3215:
case 2952:
case 2820:
case 1797:
case 1971:
case 1830:
case 3715:
case 2429:
case 1394:
case 2213:
case 662:
case 2574:
case 831:
case 1035:
case 6:
case 3728:
case 3190:
case 746:
case 2029:
case 224:
case 2921:
case 955:
case 1650:
case 763:
case 3549:
case 3213:
case 308:
case 3076:
case 975:
case 2512:
case 2656:
case 787:
case 1936:
case 837:
case 2502:
case 511:
case 2548:
case 2112:
case 1941:
case 1854:
case 3463:
case 3919:
case 3333:
case 1063:
case 2962:
case 1163:
case 544:
case 412:
case 66:
case 2589:
case 2577:
case 1691:
case 1251:
case 1526:
case 2770:
case 3976:
case 3118:
case 3909:
case 1391:
case 833:
case 1476:
case 2665:
case 1853:
case 3875:
case 2864:
case 1123:
case 2343:
case 2738:
case 1356:
case 1560:
case 2909:
case 1404:
case 1329:
case 3367:
case 1347:
case 1777:
case 3719:
case 3841:
case 1077:
case 2333:
case 529:
case 38:
case 345:
case 1904:
case 1909:
case 604:
case 2073:
case 754:
case 481:
case 1320:
case 2286:
case 3995:
case 516:
case 3592:
case 2593:
case 354:
case 567:
case 3176:
case 3887:
case 3510:
case 783:
case 2759:
case 357:
case 2306:
case 3912:
case 2180:
case 624:
case 68:
case 2207:
case 1510:
case 3031:
case 1599:
case 3473:
case 2780:
case 1809:
case 3532:
case 2607:
case 98:
case 1713:
case 605:
case 609:
case 237:
case 2255:
case 3108:
case 3375:
case 4049:
case 228:
case 730:
case 2930:
case 3312:
case 998:
case 3052:
case 3761:
case 2967:
case 541:
case 1219:
case 1678:
case 2297:
case 2334:
case 1455:
case 3335:
case 497:
case 2257:
case 3456:
case 3543:
case 3062:
case 174:
case 127:
case 625:
case 1026:
case 447:
case 1440:
case 2775:
case 1292:
case 1827:
case 2023:
case 1534:
case 2634:
case 2560:
case 1892:
case 2264:
case 317:
case 2773:
case 699:
case 2652:
case 2760:
case 539:
case 104:
case 2654:
case 330:
case 3078:
case 580:
case 1507:
case 2434:
case 2590:
case 394:
case 1179:
case 217:
case 2108:
case 230:
case 3943:
case 1878:
case 4077:
case 4059:
case 1030:
case 247:
case 3807:
case 3398:
case 508:
case 598:
case 3547:
case 4020:
case 724:
case 1506:
case 2071:
case 2533:
case 884:
case 1866:
case 3598:
case 2243:
case 2662:
case 4044:
case 2579:
case 1062:
case 3007:
case 3988:
case 103:
case 3345:
case 3487:
case 1603:
case 287:
case 1588:
case 4056:
case 1087:
case 310:
case 820:
case 2107:
case 2474:
case 2917:
case 1820:
case 1516:
case 3793:
case 3992:
case 3524:
case 3668:
case 3439:
case 3699:
case 3008:
case 3188:
case 1743:
case 1633:
case 1716:
case 1277:
case 3485:
case 1952:
case 684:
case 1098:
case 1003:
case 1127:
case 327:
case 108:
case 334:
case 4047:
case 1043:
case 2327:
case 1648:
case 3377:
case 473:
case 1792:
case 4072:
case 717:
case 3119:
case 205:
case 2842:
case 120:
case 106:
case 2193:
case 1710:
case 2459:
case 176:
case 1471:
case 2671:
case 753:
case 1427:
case 3454:
case 1955:
case 1763:
case 1226:
case 3934:
case 2716:
case 2:
case 290:
case 1252:
case 2608:
case 1863:
case 1423:
case 2120:
case 372:
case 3895:
case 909:
case 744:
case 1989:
case 1823:
case 1900:
case 3849:
case 2852:
case 2266:
case 1241:
case 477:
case 1456:
case 1183:
case 1228:
case 151:
case 4093:
case 2028:
case 2113:
case 1668:
case 28:
case 3952:
case 2494:
case 3151:
case 1222:
case 3602:
case 198:
case 138:
case 1477:
case 2973:
case 404:
case 2944:
case 1269:
case 2224:
case 3735:
case 387:
case 2230:
case 2612:
case 2074:
case 841:
case 986:
case 653:
case 3494:
case 1546:
case 2275:
case 1798:
case 1401:
case 3157:
case 1692:
case 2241:
case 3964:
case 3198:
case 642:
case 3223:
case 1868:
case 2683:
case 35:
case 313:
case 1291:
case 2507:
case 2684:
case 1559:
case 1488:
case 963:
case 2923:
case 2347:
case 4053:
case 3520:
case 504:
case 1926:
case 3972:
case 1907:
case 1162:
case 2117:
case 1996:
case 3019:
case 3850:
case 2493:
case 2958:
case 2557:
case 3499:
case 2284:
case 2018:
case 1489:
case 2793:
case 484:
case 1274:
case 1553:
case 2328:
case 1105:
case 2814:
case 1525:
case 2625:
case 2863:
case 4015:
case 2006:
case 939:
case 2586:
case 3356:
case 3596:
case 532:
case 1504:
case 101:
case 2128:
case 3340:
case 2048:
case 1524:
case 14:
case 1180:
case 2803:
case 3969:
case 889:
case 3528:
case 2427:
case 2746:
case 2774:
case 2432:
case 1318:
case 2412:
case 378:
case 97:
case 742:
case 3395:
case 352:
case 3647:
case 1187:
case 2876:
case 2747:
case 3533:
case 1028:
case 2453:
case 2221:
case 2572:
case 819:
case 2408:
case 3527:
case 1338:
case 411:
case 3311:
case 806:
case 2164:
case 2234:
case 1470:
case 1281:
case 3012:
case 1090:
case 1429:
case 695:
case 2643:
case 62:
case 1462:
case 2953:
case 2204:
case 489:
case 1167:
case 1422:
case 277:
case 199:
case 3363:
case 741:
case 380:
case 3339:
case 4084:
case 1426:
case 1821:
case 1676:
case 3757:
case 1540:
case 2500:
case 3057:
case 268:
case 1214:
case 3128:
case 2473:
case 4085:
case 398:
case 3542:
case 2972:
case 1321:
case 971:
case 1079:
case 3282:
case 3871:
case 209:
case 3922:
case 2402:
case 3554:
case 335:
case 3863:
case 616:
case 3251:
case 2792:
case 3147:
case 56:
case 2482:
case 2567:
case 916:
case 1053:
case 1212:
case 4045:
case 1910:
case 483:
case 192:
case 2991:
case 2041:
case 2676:
case 1208:
case 3652:
case 2097:
case 1301:
case 3145:
case 1844:
case 990:
case 376:
case 1703:
case 1774:
case 965:
case 1826:
case 3270:
case 3347:
case 1436:
case 1071:
case 1376:
case 2052:
case 2298:
case 2360:
case 3472:
case 1263:
case 731:
case 2103:
case 2339:
case 163:
case 2447:
case 528:
case 4017:
case 3789:
case 233:
case 1995:
case 1146:
case 3294:
case 3743:
case 3341:
case 716:
case 260:
case 549:
case 664:
case 154:
case 4081:
case 2946:
case 3999:
case 2190:
case 3025:
case 1172:
case 1613:
case 296:
case 1973:
case 3949:
case 979:
case 2428:
case 284:
case 2974:
case 1430:
case 1706:
case 3619:
case 2425:
case 1258:
case 1983:
case 722:
case 2031:
case 2537:
case 215:
case 2072:
case 356:
case 2484:
case 921:
case 3551:
case 3559:
case 3578:
case 4066:
case 3177:
case 2218:
case 1240:
case 3278:
case 2545:
case 2697:
case 1293:
case 3752:
case 373:
case 2032:
case 3071:
case 2212:
case 2391:
case 2173:
case 3842:
case 1997:
case 22:
case 2205:
case 1299:
case 898:
case 796:
case 428:
case 575:
case 3651:
case 2247:
case 1384:
case 3830:
case 3325:
case 2818:
case 3904:
case 177:
case 1480:
case 3448:
case 989:
case 1962:
case 422:
case 2388:
case 471:
case 2491:
case 2601:
case 379:
case 1237:
case 27:
case 1999:
case 966:
case 2276:
case 3878:
case 2141:
case 3225:
case 1367:
case 694:
case 2544:
case 3220:
case 1711:
case 1589:
case 20:
case 1313:
case 2016:
case 316:
case 974:
case 3612:
case 1242:
case 3069:
case 9:
case 542:
case 3717:
case 1612:
case 1492:
case 2540:
case 2150:
case 50:
case 2709:
case 2613:
case 3493:
case 1044:
case 698:
case 1814:
case 1031:
case 2320:
case 836:
case 83:
case 3058:
case 3659:
case 2476:
case 2871:
case 11:
case 1535:
case 180:
case 1472:
case 3400:
case 2201:
case 125:
case 1286:
case 463:
case 4073:
case 4082:
case 912:
case 1099:
case 1745:
case 2430:
case 1065:
case 3831:
case 2087:
case 2965:
case 2614:
case 269:
case 84:
case 3209:
case 3318:
case 904:
case 152:
case 1700:
case 309:
case 2185:
case 1075:
case 3144:
case 3428:
case 3946:
case 506:
case 3822:
case 1124:
case 1520:
case 3553:
case 3275:
case 3891:
case 2142:
case 1317:
case 469:
case 3004:
case 3857:
case 2724:
case 2248:
case 3075:
case 3152:
case 2629:
case 3091:
case 927:
case 756:
case 1756:
case 3324:
case 1765:
case 250:
case 2956:
case 3825:
case 2592:
case 2581:
case 1839:
case 3197:
case 3811:
case 3226:
case 2082:
case 1308:
case 762:
case 3366:
case 2374:
case 3755:
case 2217:
case 3050:
case 3337:
case 85:
case 587:
case 3224:
case 3407:
case 462:
case 488:
case 655:
case 322:
case 3874:
case 690:
case 2160:
case 857:
case 3158:
case 3254:
case 946:
case 2086:
case 2733:
case 835:
case 3027:
case 2483:
case 1140:
case 69:
case 3271:
case 650:
case 2675:
case 3684:
case 449:
case 1927:
case 401:
case 3955:
case 4030:
case 252:
case 1986:
case 304:
case 818:
case 1036:
case 4002:
case 383:
case 1302:
case 1500:
case 969:
case 2744:
case 299:
case 3227:
case 922:
case 1991:
case 3658:
case 678:
case 3760:
case 918:
case 1681:
case 2978:
case 1435:
case 3148:
case 157:
case 800:
case 3114:
case 118:
case 3205:
case 2960:
case 1825:
case 4071:
case 427:
case 452:
case 102:
case 3146:
case 672:
case 2976:
case 2919:
case 3588:
case 3447:
case 3881:
case 1093:
case 3492:
case 1052:
case 1850:
case 1537:
case 3107:
case 700:
case 1545:
case 2367:
case 3563:
case 110:
case 219:
case 2080:
case 2357:
case 1720:
case 766:
case 3792:
case 2889:
case 3624:
case 703:
case 1776:
case 1383:
case 3064:
case 3474:
case 95:
case 3921:
case 3772:
case 522:
case 3511:
case 278:
case 3204:
case 2831:
case 2399:
case 162:
case 2471:
case 3189:
case 639:
case 1454:
case 612:
case 3945:
case 2595:
case 1181:
case 408:
case 2890:
case 3402:
case 647:
case 1268:
case 3606:
case 1119:
case 1796:
case 2066:
case 2139:
case 431:
case 3579:
case 940:
case 2157:
case 1637:
case 1211:
case 337:
case 514:
case 3930:
case 2377:
case 4039:
case 2470:
case 39:
case 1355:
case 1744:
case 3741:
case 768:
case 121:
case 1117:
case 1327:
case 1400:
case 474:
case 2364:
case 2480:
case 2310:
case 1592:
case 367:
case 3034:
case 435:
case 1083:
case 2914:
case 2467:
case 3302:
case 1584:
case 825:
case 3361:
case 2737:
case 1670:
case 1297:
case 520:
case 99:
case 72:
case 1154:
case 2832:
case 144:
case 3231:
case 774:
case 2229:
case 1007:
case 2611:
case 3779:
case 3195:
case 3775:
case 3182:
case 2478:
case 3504:
case 265:
case 2940:
case 3824:
case 339:
case 2251:
case 905:
case 3514:
case 388:
case 917:
case 902:
case 375:
case 3082:
case 1840:
case 3734:
case 1306:
case 3181:
case 3174:
case 2426:
case 1223:
case 1887:
case 2169:
case 3808:
case 194:
case 3476:
case 1964:
case 2573:
case 360:
case 3937:
case 1606:
case 3090:
case 1018:
case 992:
case 3740:
case 2860:
case 2267:
case 2413:
case 3471:
case 3978:
case 1931:
case 3769:
case 3491:
case 565:
case 1958:
case 1652:
case 1950:
case 3192:
case 1166:
case 2660:
case 2442:
case 257:
case 1662:
case 1505:
case 446:
case 712:
case 1444:
case 1567:
case 1441:
case 3868:
case 2982:
case 2879:
case 1129:
case 3488:
case 1949:
case 2651:
case 1158:
case 1502:
case 1085:
case 2819:
case 2381:
case 371:
case 689:
case 2059:
case 52:
case 2546:
case 626:
case 2528:
case 3009:
case 1068:
case 3958:
case 391:
case 2797:
case 3687:
case 3692:
case 2237:
case 2235:
case 2795:
case 3489:
case 479:
case 2580:
case 396:
case 3368:
case 183:
case 584:
case 486:
case 1116:
case 190:
case 3725:
case 3382:
case 451:
case 1563:
case 3601:
case 1871:
case 1393:
case 2383:
case 1461:
case 3166:
case 3364:
case 3913:
case 2920:
case 3381:
case 908:
case 1201:
case 1145:
case 2631:
case 3449:
case 2729:
case 635:
case 1752:
case 1316:
case 245:
case 2153:
case 3751:
case 437:
case 3858:
case 2004:
case 1644:
case 3480:
case 4028:
case 1503:
case 3709:
case 3010:
case 3669:
case 61:
case 2988:
case 3882:
case 3481:
case 2862:
case 2668:
case 90:
case 1876:
case 600:
case 1377:
case 1773:
case 801:
case 3122:
case 150:
case 403:
case 3452:
case 2510:
case 355:
case 3791:
case 2181:
case 821:
case 2346:
case 274:
case 2781:
case 2704:
case 1532:
case 2968:
case 3968:
case 1501:
case 3193:
case 225:
case 1590:
case 3016:
case 3756:
case 2931:
case 251:
case 2021:
case 1893:
case 2001:
case 2469:
case 3517:
case 3207:
case 3426:
case 1346:
case 3914:
case 239:
case 2355:
case 1865:
case 2294:
case 1061:
case 3706:
case 1957:
case 1564:
case 3711:
case 2817:
case 2621:
case 2415:
case 2693:
case 757:
case 3171:
case 1627:
case 1992:
case 2539:
case 1102:
case 1770:
case 2418:
case 1946:
case 2522:
case 1857:
case 3865:
case 1089:
case 3710:
case 1373:
case 3258:
case 2524:
case 2219:
case 713:
case 3674:
case 827:
case 1248:
case 3649:
case 3486:
case 1447:
case 1348:
case 3349:
case 3877:
case 701:
case 4000:
case 2661:
case 3348:
case 49:
case 200:
case 3291:
case 603:
case 2126:
case 2854:
case 961:
case 748:
case 1881:
case 2047:
case 417:
case 234:
case 1990:
case 2441:
case 2062:
case 2970:
case 3116:
case 1402:
case 1645:
case 3778:
case 167:
case 4079:
case 3478:
case 2177:
case 1372:
case 3139:
case 1473:
case 1915:
case 472:
case 3342:
case 1345:
case 3265:
case 244:
case 1933:
case 480:
case 305:
case 1100:
case 2438:
case 789:
case 1202:
case 1615:
case 1568:
case 2762:
case 3260:
case 1495:
case 2971:
case 2366:
case 651:
case 2994:
case 2552:
case 1361:
case 1890:
case 323:
case 1634:
case 1898:
case 390:
case 581:
case 2055:
case 547:
case 3240:
case 3212:
case 3245:
case 3628:
case 3997:
case 623:
case 324:
case 3671:
case 1182:
case 21:
case 805:
case 3319:
case 3826:
case 3966:
case 3453:
case 3217:
case 1724:
case 2596:
case 2170:
case 3329:
case 804:
case 3222:
case 1340:
case 644:
case 286:
case 1517:
case 1131:
case 3643:
case 3403:
case 1185:
case 2869:
case 702:
case 817:
case 1977:
case 1674:
case 3973:
case 1571:
case 1729:
case 3818:
case 822:
case 929:
case 1104:
case 3898:
case 1750:
case 3011:
case 2024:
case 1465:
case 3788:
case 2849:
case 156:
case 2116:
case 2655:
case 3061:
case 3065:
case 906:
case 3784:
case 3894:
case 2700:
case 1593:
case 502:
case 3228:
case 1993:
case 4011:
case 610:
case 1880:
case 1640:
case 611:
case 16:
case 1509:
case 2591:
case 521:
case 1255:
case 3852:
case 441:
case 3120:
case 892:
case 556:
case 1511:
case 1459:
case 2689:
case 1975:
case 583:
case 2975:
case 3044:
case 3916:
case 3067:
case 3331:
case 2433:
case 3042:
case 873:
case 3273:
case 692:
case 235:
case 1097:
case 2317:
case 2198:
case 450:
case 1979:
case 3576:
case 2640:
case 675:
case 3167:
case 1803:
case 3252:
case 100:
case 1366:
case 2900:
case 1239:
case 3414:
case 1656:
case 3698:
case 2735:
case 1659:
case 2258:
case 253:
case 4014:
case 1192:
case 1817:
case 1848:
case 2582:
case 1647:
case 3927:
case 2395:
case 420:
case 2903:
case 1721:
case 2318:
case 956:
case 3301:
case 2948:
case 3544:
case 3708:
case 2226:
case 688:
case 2827:
case 1882:
case 3675:
case 3455:
case 1382:
case 893:
case 2506:
case 1578:
case 1736:
case 3932:
case 2551:
case 3556:
case 3656:
case 3099:
case 3035:
case 3951:
case 2271:
case 2771:
case 3355:
case 782:
case 3169:
case 3994:
case 613:
case 1421:
case 1249:
case 555:
case 227:
case 485:
case 3483:
case 1143:
case 1369:
case 3748:
case 3942:
case 1151:
case 321:
case 1521:
case 761:
case 2439:
case 832:
case 2165:
case 146:
case 1364:
case 573:
case 74:
case 3635:
case 1629:
case 1533:
case 1170:
case 18:
case 3796:
case 319:
case 3636:
case 1261:
case 3421:
case 1565:
case 266:
case 652:
case 657:
case 4040:
case 2197:
case 425:
case 261:
case 328:
case 1362:
case 3392:
case 848:
case 3770:
case 576:
case 4019:
case 3572:
case 2035:
case 3933:
case 2477:
case 546:
case 2138:
case 4091:
case 3104:
case 3112:
case 2905:
case 2666:
case 279:
case 2354:
case 1144:
case 78:
case 2696:
case 115:
case 846:
case 3503:
case 443:
case 4046:
case 1872:
case 752:
case 1203:
case 1017:
case 1333:
case 3631:
case 2421:
case 3308:
case 1877:
case 2555:
case 112:
case 636:
case 1012:
case 534:
case 1419:
case 4035:
case 2639:
case 853:
case 2901:
case 3046:
case 923:
case 141:
case 781:
case 1257:
case 1040:
case 1453:
case 3861:
case 3376:
case 1188:
case 1475:
case 410:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1689652802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,];
var gg_b = "1689652802/";

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
