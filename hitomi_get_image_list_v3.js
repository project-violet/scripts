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
var o = 0;
switch (g) {
case 818:
case 753:
case 2516:
case 854:
case 508:
case 1796:
case 3164:
case 2829:
case 1872:
case 2340:
case 2572:
case 2894:
case 1367:
case 2753:
case 2725:
case 821:
case 1593:
case 3284:
case 3785:
case 1036:
case 714:
case 4075:
case 1543:
case 2243:
case 3271:
case 2052:
case 3436:
case 3853:
case 730:
case 1828:
case 2873:
case 2563:
case 476:
case 2649:
case 930:
case 1335:
case 3830:
case 3487:
case 2254:
case 967:
case 1732:
case 3804:
case 2143:
case 2389:
case 709:
case 3494:
case 3388:
case 2121:
case 539:
case 1918:
case 3732:
case 980:
case 2257:
case 1687:
case 1764:
case 1241:
case 311:
case 3170:
case 4065:
case 3177:
case 1104:
case 1427:
case 3773:
case 1358:
case 3235:
case 685:
case 582:
case 2511:
case 2409:
case 531:
case 2673:
case 2940:
case 979:
case 1336:
case 2142:
case 2316:
case 1945:
case 857:
case 3998:
case 255:
case 2084:
case 204:
case 2429:
case 3055:
case 84:
case 677:
case 1577:
case 681:
case 444:
case 1141:
case 2810:
case 1911:
case 1923:
case 943:
case 2578:
case 2534:
case 2413:
case 783:
case 3877:
case 3186:
case 1539:
case 1705:
case 58:
case 1881:
case 127:
case 348:
case 108:
case 3582:
case 1226:
case 2273:
case 379:
case 724:
case 3092:
case 2367:
case 2594:
case 1035:
case 442:
case 1946:
case 2258:
case 1635:
case 124:
case 2171:
case 567:
case 3617:
case 1312:
case 1136:
case 2987:
case 1986:
case 786:
case 1869:
case 3313:
case 1886:
case 1322:
case 1689:
case 2952:
case 1030:
case 2695:
case 1291:
case 1297:
case 882:
case 3179:
case 728:
case 536:
case 774:
case 830:
case 2003:
case 2618:
case 1478:
case 3460:
case 853:
case 3497:
case 3852:
case 3874:
case 187:
case 384:
case 407:
case 4027:
case 662:
case 171:
case 1285:
case 114:
case 1792:
case 300:
case 2463:
case 4079:
case 822:
case 3762:
case 723:
case 2514:
case 3639:
case 572:
case 1048:
case 671:
case 577:
case 2136:
case 3743:
case 504:
case 2484:
case 2454:
case 3126:
case 1307:
case 2339:
case 3987:
case 415:
case 1198:
case 1688:
case 3143:
case 949:
case 3298:
case 3806:
case 801:
case 1574:
case 2728:
case 213:
case 3545:
case 2482:
case 2936:
case 164:
case 3206:
case 1500:
case 1829:
case 977:
case 1471:
case 2749:
case 1521:
case 2851:
case 2071:
case 3538:
case 89:
case 1277:
case 2633:
case 3372:
case 2218:
case 4057:
case 992:
case 2043:
case 1979:
case 2827:
case 40:
case 2512:
case 806:
case 766:
case 2248:
case 652:
case 21:
case 1649:
case 386:
case 952:
case 3199:
case 3166:
case 1454:
case 832:
case 4080:
case 1912:
case 3506:
case 3452:
case 1250:
case 1938:
case 961:
case 3737:
case 4042:
case 1908:
case 994:
case 312:
case 265:
case 3399:
case 2714:
case 3464:
case 2520:
case 1610:
case 520:
case 188:
case 1186:
case 364:
case 2187:
case 3117:
case 3111:
case 1466:
case 2385:
case 2672:
case 1369:
case 1496:
case 1813:
case 396:
case 1819:
case 3931:
case 3889:
case 4084:
case 647:
case 73:
case 3013:
case 1211:
case 2928:
case 3529:
case 2275:
case 1371:
case 2621:
case 1069:
case 4053:
case 224:
case 2291:
case 3018:
case 3796:
case 3253:
case 3951:
case 795:
case 780:
case 3954:
case 3291:
case 3808:
case 1581:
case 2117:
case 2757:
case 3861:
case 2330:
case 1710:
case 3454:
case 2732:
case 3571:
case 2314:
case 3424:
case 2874:
case 1754:
case 2246:
case 2235:
case 2021:
case 1847:
case 3246:
case 4047:
case 1430:
case 382:
case 2942:
case 1111:
case 2031:
case 2644:
case 3860:
case 3817:
case 165:
case 4016:
case 2526:
case 3205:
case 2132:
case 3169:
case 2871:
case 1785:
case 2141:
case 1006:
case 1412:
case 2869:
case 1282:
case 2279:
case 870:
case 2762:
case 2068:
case 1025:
case 2565:
case 2541:
case 3317:
case 3443:
case 4041:
case 3768:
case 2705:
case 1338:
case 3364:
case 3913:
case 608:
case 2319:
case 3070:
case 3717:
case 2349:
case 3040:
case 2921:
case 542:
case 1620:
case 718:
case 1106:
case 1472:
case 488:
case 2895:
case 376:
case 4033:
case 1871:
case 1201:
case 3060:
case 1528:
case 3873:
case 1922:
case 3309:
case 1616:
case 2436:
case 891:
case 2848:
case 768:
case 2240:
case 3783:
case 207:
case 2687:
case 3302:
case 243:
case 1213:
case 894:
case 2110:
case 1590:
case 3486:
case 3670:
case 2809:
case 3353:
case 527:
case 2008:
case 3012:
case 939:
case 3654:
case 2026:
case 3374:
case 1866:
case 758:
case 3327:
case 136:
case 1064:
case 401:
case 2050:
case 4086:
case 2992:
case 3628:
case 2646:
case 3937:
case 3403:
case 2957:
case 1759:
case 3266:
case 2359:
case 1701:
case 3601:
case 2828:
case 2019:
case 1498:
case 2457:
case 1897:
case 3446:
case 4007:
case 1964:
case 907:
case 3530:
case 390:
case 3430:
case 2766:
case 1051:
case 3489:
case 2478:
case 2834:
case 1903:
case 1915:
case 2560:
case 3642:
case 3103:
case 3382:
case 1666:
case 1037:
case 3707:
case 770:
case 1128:
case 356:
case 3596:
case 3989:
case 537:
case 2419:
case 3015:
case 1256:
case 2653:
case 2002:
case 3517:
case 1467:
case 3441:
case 2661:
case 374:
case 249:
case 1484:
case 607:
case 2107:
case 1149:
case 1659:
case 1667:
case 642:
case 3782:
case 2313:
case 1328:
case 2211:
case 2405:
case 102:
case 3994:
case 3371:
case 710:
case 3191:
case 817:
case 1814:
case 272:
case 4068:
case 2231:
case 3939:
case 3020:
case 3459:
case 3919:
case 210:
case 970:
case 2308:
case 3168:
case 741:
case 929:
case 3109:
case 3606:
case 1433:
case 1748:
case 0:
case 2496:
case 3821:
case 625:
case 233:
case 2317:
case 1810:
case 2941:
case 1909:
case 2910:
case 80:
case 1243:
case 168:
case 2718:
case 369:
case 4067:
case 449:
case 1902:
case 3609:
case 2945:
case 267:
case 245:
case 3129:
case 1766:
case 405:
case 3032:
case 1173:
case 3328:
case 2897:
case 3835:
case 489:
case 1860:
case 2698:
case 2166:
case 1845:
case 2270:
case 898:
case 2853:
case 3172:
case 2363:
case 2393:
case 3355:
case 3816:
case 2932:
case 1606:
case 2662:
case 2575:
case 3444:
case 945:
case 1058:
case 902:
case 1756:
case 3632:
case 1877:
case 2887:
case 2807:
case 3684:
case 3837:
case 2095:
case 1928:
case 2770:
case 3006:
case 3713:
case 924:
case 884:
case 3791:
case 2424:
case 695:
case 1217:
case 1765:
case 282:
case 1023:
case 2955:
case 2760:
case 3466:
case 1970:
case 3605:
case 3074:
case 3087:
case 2838:
case 800:
case 2306:
case 3787:
case 3122:
case 2939:
case 419:
case 3866:
case 990:
case 1456:
case 2346:
case 1287:
case 1144:
case 1278:
case 1818:
case 12:
case 2383:
case 303:
case 2802:
case 61:
case 3218:
case 2357:
case 2911:
case 494:
case 4000:
case 767:
case 1261:
case 2298:
case 1497:
case 1614:
case 4022:
case 1645:
case 1515:
case 2788:
case 3636:
case 1033:
case 2566:
case 844:
case 1266:
case 1942:
case 815:
case 1221:
case 1113:
case 3758:
case 720:
case 3350:
case 2479:
case 354:
case 1749:
case 2648:
case 1465:
case 1414:
case 3709:
case 975:
case 252:
case 3065:
case 2835:
case 2532:
case 3637:
case 1607:
case 1387:
case 4015:
case 953:
case 397:
case 2969:
case 1095:
case 106:
case 2923:
case 20:
case 1122:
case 141:
case 3798:
case 3598:
case 1900:
case 1850:
case 1930:
case 2458:
case 2038:
case 2620:
case 2849:
case 1955:
case 1398:
case 3159:
case 3559:
case 925:
case 1390:
case 2300:
case 1570:
case 3936:
case 807:
case 3997:
case 1562:
case 1670:
case 2830:
case 3960:
case 2404:
case 319:
case 1789:
case 2401:
case 3072:
case 3673:
case 154:
case 3418:
case 909:
case 636:
case 3221:
case 885:
case 2671:
case 3500:
case 144:
case 1351:
case 604:
case 1045:
case 2293:
case 7:
case 2213:
case 543:
case 2531:
case 2544:
case 4050:
case 2175:
case 3560:
case 3046:
case 1190:
case 3325:
case 829:
case 2305:
case 1372:
case 391:
case 1617:
case 142:
case 119:
case 1975:
case 1728:
case 467:
case 293:
case 1508:
case 2271:
case 748:
case 522:
case 2965:
case 4071:
case 910:
case 2494:
case 1665:
case 451:
case 3959:
case 628:
case 2299:
case 1231:
case 3039:
case 667:
case 3066:
case 1267:
case 3093:
case 2543:
case 4037:
case 3144:
case 2375:
case 3525:
case 246:
case 1663:
case 1919:
case 976:
case 2744:
case 500:
case 3985:
case 983:
case 1017:
case 3829:
case 2287:
case 545:
case 174:
case 541:
case 1257:
case 3872:
case 288:
case 2591:
case 3625:
case 3691:
case 3021:
case 2736:
case 2170:
case 3720:
case 942:
case 775:
case 1309:
case 402:
case 2296:
case 3062:
case 4056:
case 3971:
case 1293:
case 2767:
case 3009:
case 4087:
case 1028:
case 2277:
case 1060:
case 1379:
case 2321:
case 3319:
case 1514:
case 2441:
case 1694:
case 3259:
case 3176:
case 755:
case 2605:
case 3629:
case 2872:
case 601:
case 3681:
case 3677:
case 359:
case 1774:
case 1977:
case 1093:
case 2785:
case 371:
case 1794:
case 1990:
case 2062:
case 3147:
case 3826:
case 2343:
case 1693:
case 3084:
case 664:
case 3373:
case 880:
case 2114:
case 1458:
case 713:
case 3524:
case 4012:
case 1408:
case 2540:
case 2122:
case 103:
case 1629:
case 1333:
case 2706:
case 1:
case 2209:
case 4034:
case 2268:
case 3929:
case 3666:
case 1565:
case 1281:
case 1974:
case 2280:
case 3081:
case 711:
case 3658:
case 1752:
case 248:
case 2480:
case 1331:
case 2098:
case 363:
case 496:
case 4008:
case 3189:
case 2918:
case 1859:
case 3823:
case 1720:
case 3471:
case 2099:
case 2261:
case 3359:
case 65:
case 3128:
case 1013:
case 2048:
case 324:
case 101:
case 1091:
case 906:
case 1971:
case 1852:
case 3029:
case 502:
case 4055:
case 851:
case 955:
case 2755:
case 2628:
case 1240:
case 453:
case 1807:
case 2362:
case 2178:
case 794:
case 3745:
case 2683:
case 4002:
case 2179:
case 3220:
case 1941:
case 1286:
case 3434:
case 3438:
case 3805:
case 3198:
case 605:
case 3649:
case 2283:
case 1518:
case 3184:
case 3953:
case 1736:
case 3321:
case 1637:
case 2574:
case 856:
case 2538:
case 195:
case 1315:
case 1706:
case 1550:
case 286:
case 3019:
case 2115:
case 1083:
case 1252:
case 2645:
case 137:
case 2015:
case 4014:
case 1943:
case 3215:
case 2091:
case 147:
case 1174:
case 3025:
case 4019:
case 2740:
case 3922:
case 3173:
case 3365:
case 3386:
case 2796:
case 3052:
case 3663:
case 1273:
case 703:
case 465:
case 2641:
case 3050:
case 209:
case 1067:
case 863:
case 1442:
case 1949:
case 2816:
case 1323:
case 1207:
case 1205:
case 1057:
case 788:
case 1462:
case 555:
case 1191:
case 438:
case 139:
case 1739:
case 2660:
case 2103:
case 1259:
case 387:
case 1196:
case 2562:
case 2207:
case 1788:
case 254:
case 1600:
case 23:
case 3865:
case 1857:
case 228:
case 3807:
case 622:
case 698:
case 1089:
case 2406:
case 2365:
case 1744:
case 659:
case 1874:
case 549:
case 3028:
case 1535:
case 2854:
case 203:
case 122:
case 1464:
case 2462:
case 111:
case 1594:
case 39:
case 1880:
case 2251:
case 294:
case 3011:
case 2902:
case 761:
case 3378:
case 2173:
case 161:
case 3699:
case 3442:
case 160:
case 839:
case 2152:
case 785:
case 1459:
case 1825:
case 2253:
case 3904:
case 3610:
case 1873:
case 3426:
case 3324:
case 2474:
case 343:
case 182:
case 323:
case 470:
case 2289:
case 1639:
case 644:
case 4039:
case 3781:
case 2567:
case 1940:
case 3810:
case 138:
case 239:
case 1162:
case 1346:
case 3888:
case 3558:
case 116:
case 1566:
case 809:
case 922:
case 3503:
case 32:
case 1096:
case 1740:
case 623:
case 1350:
case 2374:
case 1849:
case 1476:
case 3895:
case 3638:
case 2656:
case 3925:
case 2183:
case 3966:
case 3611:
case 3232:
case 1295:
case 3358:
case 987:
case 648:
case 2963:
case 682:
case 841:
case 2204:
case 3792:
case 750:
case 2332:
case 2149:
case 638:
case 135:
case 1320:
case 3333:
case 2790:
case 670:
case 3631:
case 2352:
case 2675:
case 589:
case 4073:
case 2573:
case 1804:
case 1709:
case 2664:
case 1365:
case 3991:
case 4049:
case 22:
case 3774:
case 62:
case 3113:
case 2443:
case 3120:
case 3308:
case 3363:
case 3254:
case 2536:
case 896:
case 1582:
case 1618:
case 746:
case 820:
case 3406:
case 521:
case 2604:
case 1572:
case 3947:
case 3326:
case 3225:
case 1987:
case 897:
case 1598:
case 1438:
case 3469:
case 1172:
case 1544:
case 3934:
case 3618:
case 325:
case 3349:
case 2410:
case 1695:
case 958:
case 678:
case 1479:
case 3838:
case 2972:
case 426:
case 686:
case 2840:
case 2320:
case 2097:
case 4024:
case 3514:
case 773:
case 202:
case 372:
case 2803:
case 351:
case 988:
case 378:
case 2146:
case 2786:
case 2290:
case 825:
case 64:
case 51:
case 1324:
case 2547:
case 3701:
case 3870:
case 3550:
case 2236:
case 2057:
case 3599:
case 2863:
case 743:
case 1597:
case 4085:
case 959:
case 954:
case 3392:
case 944:
case 3561:
case 1382:
case 2858:
case 3203:
case 776:
case 2373:
case 68:
case 3296:
case 3210:
case 2066:
case 3132:
case 3981:
case 4013:
case 1861:
case 1437:
case 1851:
case 3037:
case 3488:
case 406:
case 2237:
case 247:
case 1143:
case 2311:
case 3329:
case 3650:
case 2074:
case 1925:
case 3005:
case 756:
case 1999:
case 3095:
case 3000:
case 3518:
case 217:
case 334:
case 2631:
case 3734:
case 1671:
case 3896:
case 1299:
case 3119:
case 82:
case 735:
case 2079:
case 2017:
case 2839:
case 2808:
case 2719:
case 1215:
case 3851:
case 3150:
case 3708:
case 3739:
case 1118:
case 738:
case 2919:
case 85:
case 1770:
case 2368:
case 490:
case 513:
case 726:
case 1220:
case 2326:
case 2485:
case 3704:
case 1158:
case 558:
case 24:
case 2438:
case 2857:
case 3780:
case 460:
case 1193:
case 3731:
case 3738:
case 3208:
case 2599:
case 866:
case 4025:
case 3131:
case 1745:
case 1495:
case 313:
case 3292:
case 2333:
case 1289:
case 1420:
case 216:
case 3242:
case 1368:
case 2999:
case 2535:
case 4031:
case 849:
case 3008:
case 2652:
case 2612:
case 3723:
case 3597:
case 2199:
case 47:
case 1135:
case 2907:
case 3348:
case 3106:
case 2989:
case 2190:
case 1894:
case 2263:
case 3724:
case 2260:
case 4061:
case 259:
case 1907:
case 2376:
case 2778:
case 1022:
case 2812:
case 2617:
case 2674:
case 1043:
case 3341:
case 1007:
case 941:
case 2529:
case 2914:
case 3800:
case 2784:
case 3280:
case 3079:
case 1329:
case 2922:
case 928:
case 2880:
case 1558:
case 2219:
case 2338:
case 268:
case 2990:
case 2076:
case 1185:
case 3391:
case 3893:
case 3897:
case 2906:
case 3016:
case 299:
case 1364:
case 1808:
case 3421:
case 2001:
case 3547:
case 2658:
case 2233:
case 4003:
case 3278:
case 394:
case 70:
case 3165:
case 918:
case 3899:
case 3190:
case 1969:
case 1393:
case 1160:
case 2730:
case 2954:
case 823:
case 320:
case 3273:
case 1169:
case 3207:
case 2188:
case 3332:
case 1316:
case 1380:
case 1734:
case 2331:
case 3908:
case 3233:
case 2088:
case 3692:
case 2402:
case 597:
case 1302:
case 60:
case 3265:
case 769:
case 566:
case 10:
case 2037:
case 1102:
case 1396:
case 428:
case 1587:
case 2659:
case 1180:
case 3588:
case 950:
case 1628:
case 1142:
case 3453:
case 2046:
case 1989:
case 3697:
case 2891:
case 2180:
case 2217:
case 2747:
case 1712:
case 2490:
case 772:
case 3366:
case 3160:
case 3541:
case 2773:
case 3229:
case 3311:
case 1407:
case 3152:
case 3361:
case 3059:
case 3501:
case 220:
case 1589:
case 2444:
case 3644:
case 2792:
case 1026:
case 3784:
case 3049:
case 2696:
case 4032:
case 3440:
case 3035:
case 2799:
case 592:
case 3182:
case 2006:
case 3862:
case 109:
case 1776:
case 2439:
case 475:
case 544:
case 4077:
case 2044:
case 2530:
case 2303:
case 280:
case 878:
case 575:
case 273:
case 499:
case 45:
case 3950:
case 845:
case 2431:
case 2055:
case 1843:
case 1138:
case 1522:
case 2128:
case 965:
case 3645:
case 3461:
case 2602:
case 1274:
case 2116:
case 388:
case 2885:
case 1875:
case 3102:
case 1356:
case 3174:
case 1961:
case 3927:
case 468:
case 3722:
case 3419:
case 1669:
case 3516:
case 2423:
case 425:
case 3546:
case 2056:
case 3314:
case 3:
case 1195:
case 3396:
case 1762:
case 4048:
case 1296:
case 3980:
case 3653:
case 1763:
case 564:
case 2384:
case 792:
case 477:
case 1839:
case 3834:
case 3543:
case 1219:
case 3667:
case 1327:
case 3754:
case 1133:
case 946:
case 1702:
case 337:
case 2294:
case 487:
case 2721:
case 2726:
case 1148:
case 3030:
case 1400:
case 2493:
case 3930:
case 128:
case 3477:
case 2133:
case 2169:
case 2804:
case 3490:
case 2063:
case 2647:
case 2086:
case 2859:
case 1318:
case 1662:
case 1040:
case 227:
case 1988:
case 1269:
case 3967:
case 1222:
case 3401:
case 1145:
case 1713:
case 3515:
case 3370:
case 1856:
case 38:
case 892:
case 2977:
case 2249:
case 1822:
case 655:
case 574:
case 3097:
case 3069:
case 235:
case 2893:
case 2589:
case 1021:
case 225:
case 3668:
case 2174:
case 895:
case 2500:
case 3476:
case 1878:
case 586:
case 2265:
case 1781:
case 308:
case 3703:
case 2927:
case 3736:
case 2506:
case 3570:
case 2113:
case 1227:
case 2024:
case 2676:
case 2418:
case 2445:
case 2390:
case 3748:
case 2984:
case 602:
case 1743:
case 805:
case 1553:
case 3194:
case 1061:
case 2978:
case 448:
case 3906:
case 1426:
case 2139:
case 2814:
case 2886:
case 3905:
case 1359:
case 436:
case 1677:
case 295:
case 793:
case 661:
case 2432:
case 3656:
case 2067:
case 3755:
case 1729:
case 3492:
case 1865:
case 1704:
case 3290:
case 3146:
case 3383:
case 1853:
case 1799:
case 3112:
case 2553:
case 1771:
case 3577:
case 2355:
case 2347:
case 745:
case 996:
case 510:
case 2668:
case 1656:
case 960:
case 1978:
case 3828:
case 2075:
case 2325:
case 899:
case 1842:
case 41:
case 2426:
case 993:
case 1123:
case 3765:
case 2865:
case 2606:
case 2899:
case 380:
case 1954:
case 3248:
case 1366:
case 2200:
case 88:
case 2440:
case 133:
case 1863:
case 1049:
case 1727:
case 4094:
case 459:
case 3532:
case 1655:
case 2087:
case 2489:
case 1944:
case 3251:
case 1046:
case 4081:
case 3917:
case 1305:
case 53:
case 889:
case 2596:
case 3034:
case 3771:
case 250:
case 3462:
case 552:
case 2197:
case 3945:
case 269:
case 264:
case 2274:
case 1098:
case 1758:
case 1797:
case 3318:
case 498:
case 1418:
case 3958:
case 2501:
case 2160:
case 2203:
case 1009:
case 1832:
case 3277:
case 3688:
case 630:
case 614:
case 3357:
case 2636:
case 1247:
case 3962:
case 1519:
case 2162:
case 688:
case 1650:
case 2682:
case 231:
case 2252:
case 935:
case 1263:
case 437:
case 2049:
case 501:
case 431:
case 1268:
case 3879:
case 4035:
case 1567:
case 1583:
case 3955:
case 580:
case 3569:
case 1531:
case 3721:
case 1855:
case 836:
case 1341:
case 96:
case 1314:
case 1397:
case 657:
case 1343:
case 3409:
case 842:
case 2334:
case 802:
case 290:
case 2959:
case 1893:
case 1483:
case 1031:
case 3484:
case 2650:
case 1146:
case 3096:
case 2956:
case 2985:
case 1357:
case 1927:
case 2866:
case 1707:
case 1348:
case 2047:
case 1156:
case 2085:
case 1816:
case 1155:
case 3932:
case 1962:
case 3710:
case 3057:
case 275:
case 2938:
case 3033:
case 1499:
case 3969:
case 1657:
case 1730:
case 716:
case 3803:
case 872:
case 461:
case 3990:
case 3268:
case 1951:
case 1545:
case 3790:
case 4018:
case 561:
case 810:
case 3602:
case 1795:
case 3395:
case 424:
case 2549:
case 162:
case 1280:
case 1317:
case 3750:
case 1080:
case 3121:
case 1182:
case 3274:
case 2758:
case 1395:
case 2020:
case 46:
case 2398:
case 3509:
case 3038:
case 1441:
case 3633:
case 1453:
case 52:
case 2793:
case 35:
case 676:
case 3162:
case 2684:
case 2089:
case 3402:
case 978:
case 532:
case 1613:
case 1406:
case 2708:
case 2704:
case 2774:
case 971:
case 3695:
case 3982:
case 3347:
case 2403:
case 3067:
case 3786:
case 2864:
case 3123:
case 846:
case 1899:
case 412:
case 2836:
case 2522:
case 2469:
case 2345:
case 2688:
case 2920:
case 1997:
case 3655:
case 1388:
case 2557:
case 3320:
case 3700:
case 3770:
case 2407:
case 1354:
case 2123:
case 1055:
case 3760:
case 305:
case 2579:
case 322:
case 2023:
case 361:
case 491:
case 603:
case 1632:
case 1699:
case 2639:
case 3715:
case 2973:
case 875:
case 3965:
case 1125:
case 583:
case 3961:
case 284:
case 1983:
case 317:
case 2855:
case 2:
case 626:
case 445:
case 77:
case 4038:
case 2032:
case 2435:
case 1115:
case 2717:
case 596:
case 2158:
case 1541:
case 546:
case 2900:
case 538:
case 2581:
case 1817:
case 1868:
case 344:
case 3886:
case 69:
case 1018:
case 3276:
case 1114:
case 214:
case 3992:
case 3822:
case 847:
case 2224:
case 834:
case 208:
case 2127:
case 782:
case 1731:
case 1673:
case 3240:
case 1831:
case 3354:
case 281:
case 2327:
case 3508:
case 923:
case 2805:
case 352:
case 3228:
case 1652:
case 1099:
case 1517:
case 1399:
case 2386:
case 2476:
case 3115:
case 2080:
case 1403:
case 3712:
case 430:
case 2058:
case 3935:
case 3591:
case 1086:
case 151:
case 951:
case 3665:
case 2348:
case 3915:
case 3553:
case 911:
case 635:
case 1294:
case 740:
case 3249:
case 3827:
case 3664:
case 2505:
case 218:
case 2422:
case 1524:
case 271:
case 1473:
case 2931:
case 1554:
case 3148:
case 163:
case 2926:
case 997:
case 3375:
case 3188:
case 3244:
case 1167:
case 565:
case 1214:
case 1823:
case 639:
case 1084:
case 1546:
case 556:
case 3856:
case 3175:
case 1446:
case 3594:
case 2369:
case 611:
case 3448:
case 3041:
case 696:
case 900:
case 105:
case 3310:
case 553:
case 4040:
case 2269:
case 584:
case 848:
case 1973:
case 3680:
case 2323:
case 2961:
case 479:
case 3238:
case 2615:
case 1530:
case 1290:
case 1947:
case 434:
case 1621:
case 2882:
case 1520:
case 649:
case 1383:
case 291:
case 55:
case 1152:
case 3551:
case 674:
case 1777:
case 2889:
case 3193:
case 3839:
case 1726:
case 1340:
case 3622:
case 3432:
case 2980:
case 1004:
case 1237:
case 1008:
case 159:
case 2947:
case 1337:
case 3431:
case 1200:
case 1164:
case 309:
case 3212:
case 404:
case 986:
case 4062:
case 33:
case 1070:
case 803:
case 3572:
case 533:
case 1529:
case 49:
case 2622:
case 2608:
case 2593:
case 514:
case 2898:
case 1270:
case 1171:
case 1682:
case 2392:
case 3685:
case 1549:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1655136001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,];
var gg_b = "1655136001/";

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
